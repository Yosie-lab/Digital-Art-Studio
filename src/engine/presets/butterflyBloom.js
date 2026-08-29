import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import {
  toWorld,
  makePoints,
  rgbToUnit,
  stratifiedSpawnPoints,
  primeGrowingMarks,
  sampleMarksWorld,
  spreadScreenCloud,
} from '../space3d.js';

/** レインボー + 青系ウェイト */
const BUTTERFLY_RAINBOW = getPaletteColors('clockRainbow');

function isRainbowBlueHex(hex) {
  const { r, g, b } = hexToRgb(hex);
  const isCyan = b > 170 && g > 90 && r < 120;
  const isBlue = b > 150 && b >= r * 0.82 && b > g;
  const isViolet = b > 130 && r > 40 && g < r;
  return isCyan || isBlue || isViolet;
}

function buildButterflyRainbowPool() {
  const seen = new Set();
  const weighted = [];
  for (const hex of [...BUTTERFLY_RAINBOW, ...getPaletteColors('rainbow')]) {
    if (seen.has(hex)) continue;
    seen.add(hex);
    const { r, g, b } = hexToRgb(hex);
    const isDeepBlue = b > 200 && b > r * 1.1 && g < b * 0.8;
    const copies = isDeepBlue ? 7 : isRainbowBlueHex(hex) ? 5 : 1;
    for (let i = 0; i < copies; i++) weighted.push(hex);
  }
  return weighted.length ? weighted : BUTTERFLY_RAINBOW;
}

const BUTTERFLY_RAINBOW_POOL = buildButterflyRainbowPool();
const BUTTERFLY_RAINBOW_BLUE = BUTTERFLY_RAINBOW_POOL.filter((hex) => isRainbowBlueHex(hex));

function pickRainbowHex(index) {
  return BUTTERFLY_RAINBOW_POOL[Math.abs(index) % BUTTERFLY_RAINBOW_POOL.length];
}

function pickRainbowBlueHex(index) {
  const pool = BUTTERFLY_RAINBOW_BLUE.length ? BUTTERFLY_RAINBOW_BLUE : BUTTERFLY_RAINBOW;
  return pool[Math.abs(index) % pool.length];
}

function pickRainbowPair(index) {
  const wing = index % 3 !== 2
    ? pickRainbowBlueHex(index * 2)
    : pickRainbowHex(index * 2);
  return {
    wing,
    pattern: pickRainbowHex(index * 2 + 3),
  };
}

function saturateRgb(rgb, amount = 1.14) {
  const gray = (rgb.r + rgb.g + rgb.b) / 3;
  return {
    r: Math.min(255, Math.max(0, Math.round(gray + (rgb.r - gray) * amount))),
    g: Math.min(255, Math.max(0, Math.round(gray + (rgb.g - gray) * amount))),
    b: Math.min(255, Math.max(0, Math.round(gray + (rgb.b - gray) * amount))),
  };
}

function paletteRgb(hex) {
  let rgb = hexToRgb(hex);
  if (isRainbowBlueHex(hex)) {
    rgb = {
      r: Math.min(255, Math.round(rgb.r * 1.02 + 2)),
      g: Math.min(255, Math.round(rgb.g * 1.04 + 4)),
      b: Math.min(255, Math.round(rgb.b * 1.1 + 10)),
    };
  }
  return saturateRgb(rgb, 1.15);
}

function darkerRgb(rgb, amount = 0.55) {
  const dark = {
    r: Math.min(255, Math.round(rgb.r * amount + 12)),
    g: Math.min(255, Math.round(rgb.g * amount + 12)),
    b: Math.min(255, Math.round(rgb.b * amount + 12)),
  };
  return saturateRgb(dark, 1.1);
}

function unitRgb(rgb, scale = 1) {
  return {
    r: Math.min(1, (rgb.r / 255) * scale),
    g: Math.min(1, (rgb.g / 255) * scale),
    b: Math.min(1, (rgb.b / 255) * scale),
  };
}

/** ヒラヒラ羽ばたき: 滑らかなストローク */
function flutteryFlapKinematics(phase, flapSpeed, wingMul) {
  const s = Math.sin(phase);
  const c = Math.cos(phase);
  const s2 = Math.sin(phase * 2 + 0.35);
  const wf = wingMul * BUTTERFLY_WING_AMP;
  const wing = s * 0.78 * wf + s2 * 0.03 * wf;
  const down = Math.max(0, -s);
  const stroke = down * (0.38 + 0.62 * Math.max(0, -c));
  const thrust = stroke * 14 * wf * 0.9;
  const lift = stroke * 10 * wf * 0.9;
  const flapVel = c * flapSpeed * 0.54 * wf;
  const sway = s * 0.15 * wf + s2 * 0.02 * wf;
  return { wing, stroke, thrust, lift, flapVel, sway };
}

const BUTTERFLY_MAX_TILT = 0.17;
const BUTTERFLY_MAX_TILT_DOWN = 0.1;
const BUTTERFLY_GRAVITY = 1.6;
const BUTTERFLY_DRAG = 0.32;
const BUTTERFLY_VEL_SMOOTH = 2.4;
const BUTTERFLY_VEL_SMOOTH_DEPART = 7.8;
const BUTTERFLY_FLUTTER_SMOOTH = 3.6;
const BUTTERFLY_FLAP_VIS_SMOOTH = 8.2;
const BUTTERFLY_FLAP_SLOW = [2.0, 4.2];
const BUTTERFLY_FLAP_FAST = [5.0, 9.5];
const BUTTERFLY_WING_AMP = 1.58;
const BUTTERFLY_WING_MUL_MIN = 0.44;
const BUTTERFLY_MOVE_REF = [3, 24];
const BUTTERFLY_MOVE_REF_DEPART = [12, 58];
const BUTTERFLY_PARTICLE_GLOW = 1.42;

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function lerpAngle(current, target, t) {
  let d = target - current;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return current + d * t;
}

function expSmooth(current, target, dt, rate) {
  return current + (target - current) * (1 - Math.exp(-rate * dt));
}

function flapTempo01(flapSpeed) {
  const lo = BUTTERFLY_FLAP_SLOW[0];
  const hi = BUTTERFLY_FLAP_FAST[1];
  return clamp((flapSpeed - lo) / (hi - lo), 0, 1);
}

function moveTempo01(speed, departing = false) {
  const [lo, hi] = departing ? BUTTERFLY_MOVE_REF_DEPART : BUTTERFLY_MOVE_REF;
  return clamp((speed - lo) / (hi - lo), 0, 1);
}

function pickMarkSize() {
  const r = Math.random();
  if (r < 0.28) return 32 + Math.random() * 16;
  return 19 + Math.random() * 20;
}

function prepareGeo(geometry) {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  geo.computeVertexNormals();
  return geo;
}

function mergeParts(parts) {
  const merged = mergeGeometries(parts.map(prepareGeo), false);
  if (merged) {
    merged.computeVertexNormals();
    return merged;
  }
  return prepareGeo(parts[0]);
}

function randomUnitVector3() {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const z = 2 * v - 1;
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  return new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), z);
}

function buildButterflyWingShape() {
  const s = new THREE.Shape();
  s.moveTo(0.04, 0.05);
  s.bezierCurveTo(0.16, 0.44, 0.52, 0.5, 0.84, 0.34);
  s.bezierCurveTo(1.05, 0.18, 1.0, -0.04, 0.78, -0.12);
  s.bezierCurveTo(0.52, -0.2, 0.24, -0.02, 0.1, 0.06);
  s.bezierCurveTo(0.02, -0.02, -0.02, -0.22, 0.14, -0.38);
  s.bezierCurveTo(0.34, -0.54, 0.62, -0.46, 0.66, -0.24);
  s.bezierCurveTo(0.7, -0.04, 0.46, 0.1, 0.04, 0.05);
  s.closePath();
  return s;
}

/** 羽本体 — 厚みのある立体エクストルード */
export function buildButterflyWingGeometry() {
  const wing = new THREE.ExtrudeGeometry(buildButterflyWingShape(), {
    depth: 0.14,
    bevelEnabled: true,
    bevelThickness: 0.028,
    bevelSize: 0.022,
    bevelSegments: 3,
    curveSegments: 28,
  });
  wing.translate(0.02, 0.02, -0.07);
  return prepareGeo(wing);
}

/** 羽の模様（立体斑点・脈） */
export function buildButterflyPatternGeometry() {
  const parts = [];
  const spots = [
    [0.42, 0.28, 0.1],
    [0.62, 0.18, 0.08],
    [0.28, 0.08, 0.07],
    [0.48, -0.08, 0.09],
    [0.68, -0.18, 0.06],
    [0.22, -0.22, 0.07],
    [0.38, -0.32, 0.055],
  ];
  for (const [x, y, r] of spots) {
    const dot = new THREE.SphereGeometry(r, 12, 10);
    dot.translate(x, y, 0.04);
    parts.push(dot);
  }
  for (let i = 0; i < 4; i++) {
    const ang = 0.35 + i * 0.28;
    const vein = new THREE.CapsuleGeometry(0.012, 0.42 + i * 0.08, 4, 6);
    vein.rotateZ(ang);
    vein.translate(0.22 + i * 0.14, 0.06 - i * 0.1, 0.03);
    parts.push(vein);
  }
  const edge = new THREE.TorusGeometry(0.52, 0.018, 8, 32, Math.PI * 0.85);
  edge.rotateZ(0.55);
  edge.translate(0.42, 0.02, 0.02);
  parts.push(edge);
  return mergeParts(parts);
}

export function buildButterflyBodyGeometry() {
  const thorax = new THREE.CapsuleGeometry(0.06, 0.2, 5, 10);
  thorax.rotateZ(Math.PI / 2);
  thorax.translate(0.02, 0.02, 0);
  const abdomen = new THREE.CapsuleGeometry(0.045, 0.24, 5, 10);
  abdomen.rotateZ(Math.PI / 2);
  abdomen.translate(-0.2, 0.01, 0);
  const head = new THREE.SphereGeometry(0.052, 12, 10);
  head.translate(0.12, 0.03, 0);
  return mergeParts([thorax, abdomen, head]);
}

export function buildButterflyAntennaGeometry() {
  const parts = [];
  for (const side of [-1, 1]) {
    const ant = new THREE.CapsuleGeometry(0.008, 0.2, 4, 6);
    ant.rotateZ(side * 0.65);
    ant.translate(0.12, 0.05 + side * 0.02, side * 0.04);
    parts.push(ant);
    const tip = new THREE.SphereGeometry(0.018, 8, 6);
    tip.translate(0.2, 0.11 * side + 0.03, side * 0.08);
    parts.push(tip);
  }
  return mergeParts(parts);
}

/**
 * 立体蝶: 自然物理フライト + レインボー羽
 */
export function createButterflyBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let layer = null;
  let bodyMesh = null;
  let wingLMesh = null;
  let wingRMesh = null;
  let wingOutlineLMesh = null;
  let wingOutlineRMesh = null;
  let patternLMesh = null;
  let patternRMesh = null;
  let antennaMesh = null;
  let sparkleField = null;
  let fallField = null;
  let bodyGeo = null;
  let wingGeo = null;
  let patternGeo = null;
  let antennaGeo = null;
  const root = new THREE.Object3D();
  const wingHoldL = new THREE.Object3D();
  const wingHoldR = new THREE.Object3D();
  root.add(wingHoldL, wingHoldR);
  wingHoldL.position.set(0.02, 0.02, -0.01);
  wingHoldR.position.set(0.02, 0.02, -0.01);
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const _vel = new THREE.Vector3();
  const MAX = 72;
  let markSerial = 0;

  const FLIGHT_STYLES = ['arc', 'spiral', 'waltz', 'drift', 'dance'];
  const pickFlightStyle = () => FLIGHT_STYLES[Math.floor(Math.random() * FLIGHT_STYLES.length)];

  class Mark {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 360;
      this.maxSize = pickMarkSize() * 0.8;
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.34 + Math.random() * 0.38;
      this.flapPhase = Math.random() * Math.PI * 2;
      this.flapTempoTrait = Math.random();
      this.flapSpeed = BUTTERFLY_FLAP_SLOW[0]
        + this.flapTempoTrait * (BUTTERFLY_FLAP_FAST[1] - BUTTERFLY_FLAP_SLOW[0]) * 0.55;
      this.flapSpeedTarget = this.flapSpeed;
      this.flapRhythmTarget = this.flapSpeed;
      this.wingRhythmMul = 0.38 + this.flapTempoTrait * 0.26;
      this.flapRhythm = this.flapTempoTrait > 0.52 ? 'fast' : 'slow';
      this.flapRhythmTimer = 0.5 + Math.random() * 1.4;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.18 + Math.random() * 0.16;
      this.windPhase = Math.random() * Math.PI * 2;
      this.driftPhase = Math.random() * Math.PI * 2;
      this.glidePhase = Math.random() * Math.PI * 2;
      this.floatPhase = Math.random() * Math.PI * 2;
      this.floatSpeed = 0.28 + Math.random() * 0.38;
      this.driftRadius = 0.4 + this.flapTempoTrait * 1.2;
      this.flowAngle = Math.random() * Math.PI * 2;
      this.pitchAngle = (Math.random() - 0.5) * 0.6;
      this.flowTurn = (Math.random() < 0.5 ? -1 : 1) * (0.06 + Math.random() * 0.16);
      this.style = pickFlightStyle();
      this.flutterAmp = 0.62 + Math.random() * 0.48;
      this.glideAmp = 0.88 + Math.random() * 0.62;
      this.wingFlapMul = this.wingRhythmMul;
      this.smoothRate = 0.72 + Math.random() * 0.55;
      this.orbitR = 0.45 + Math.random() * 0.75;
      this.orbitPhase = Math.random() * Math.PI * 2;
      this.maxSpeed = 16 + Math.random() * 9;
      this.tiltAmp = 0.03 + Math.random() * 0.04;
      this.rollAmp = 0.03 + Math.random() * 0.05;

      const idx = markSerial++;
      this.flowAngle = Math.random() * Math.PI * 2;
      this.pitchAngle = (Math.random() - 0.5) * 0.75;
      this.targetFlowAngle = this.flowAngle;
      this.targetPitchAngle = this.pitchAngle;
      this.heading = this.flowAngle;

      const flySpeed = 3.5 + this.flapTempoTrait * 10;
      this.vx = Math.sin(this.heading) * Math.cos(this.pitchAngle) * flySpeed;
      this.vy = -Math.cos(this.heading) * Math.cos(this.pitchAngle) * flySpeed;
      this.vz = Math.sin(this.pitchAngle) * flySpeed * 0.85;
      this.smoothMoveSpeed = flySpeed;

      this.rotX = 0;
      this.rotY = Math.atan2(this.vx, -this.vy + 0.001);
      this.rotZ = 0;

      const { wing, pattern } = pickRainbowPair(idx);
      this.color = wing;
      this.rgb = paletteRgb(wing);
      this.pattern = darkerRgb(paletteRgb(pattern), 0.62);
      this.outline = darkerRgb(this.rgb, 0.44);
      this.accent = paletteRgb(
        idx % 2 === 0 ? pickRainbowBlueHex(idx + 7) : pickRainbowHex(idx + 7),
      );

      this.lifetime = 0;
      this.maxLifetime = 14 + Math.random() * 10;
      this.phase = 'growing';
      this.opacity = 1;
      this.flap = 0;
      this.flapVel = 0;
      this.smoothFlap = 0;
      this.smoothFlapVel = 0;
      this.sway = 0;
      this.departing = false;
      this.departTimer = 0.2 + (1 - this.flapTempoTrait) * 0.85;
      this.departDuration = 0;
      this.departScale = 1;
      this.departSpeed = 0;
      this.departTempo = 0;
      this.departDir = randomUnitVector3();
      this.departDir.y *= 0.72;
      this.departDir.normalize();
      this.bob = 0;
      this.flutterX = 0;
      this.flutterY = 0;
      this.flutterZ = 0;
      this.smoothFlutterX = 0;
      this.smoothFlutterY = 0;
      this.smoothFlutterZ = 0;
      this.smoothSway = 0;
      this.roamTimer = 0.6 + Math.random() * 1.4;
      this.bankX = 0;
      this.bankY = 0;
    }

    _flapTempo() {
      return flapTempo01(this.flapSpeed);
    }

    _beginDepart() {
      this.departing = true;
      this.departDuration = 0;
      this.departScale = 1;
      this.departTempo = Math.max(
        moveTempo01(this.smoothMoveSpeed, true),
        this._flapTempo() * 0.45 + this.flapTempoTrait * 0.35,
      );

      const dir = randomUnitVector3();
      dir.y *= 0.55 + Math.random() * 0.35;
      dir.normalize();
      this.departDir = dir;
      this.departSpeed = 28 + this.departTempo * 38;
      this.maxSpeed = Math.max(this.maxSpeed, this.departSpeed + 14);
      this.targetFlowAngle = Math.atan2(dir.x, -dir.y);
      this.targetPitchAngle = clamp(Math.asin(dir.z), -0.78, 0.78);
      this.flowAngle = lerpAngle(this.flowAngle, this.targetFlowAngle, 0.62);
      this.pitchAngle = expSmooth(this.pitchAngle, this.targetPitchAngle, 0.05, 5.5);
      this.heading = this.flowAngle;

      const dash = this.departSpeed * (0.88 + this.departTempo * 0.1);
      const dashK = 6 + this.departTempo * 5;
      this.vx = expSmooth(this.vx, dir.x * dash, 0.05, dashK);
      this.vy = expSmooth(this.vy, dir.y * dash, 0.05, dashK);
      this.vz = expSmooth(this.vz, dir.z * dash, 0.05, dashK);
    }

    _updateDepart(dt) {
      this.departDuration += dt;
      const tempo = this.departTempo;
      const fade = 0.2 + tempo * 0.16;
      const shrink = 0.14 + tempo * 0.1;
      this.departScale = Math.max(0.05, 1 - this.departDuration * shrink);
      this.opacity = Math.max(0, 1 - this.departDuration * fade);

      const steerK = 2.8 + tempo * 2.4;
      this.flowAngle = lerpAngle(this.flowAngle, Math.atan2(this.departDir.x, -this.departDir.y), 1 - Math.exp(-steerK * dt));
      this.pitchAngle = expSmooth(this.pitchAngle, clamp(Math.asin(this.departDir.z), -0.78, 0.78), dt, 2.8 + tempo * 1.6);
      this.heading = lerpAngle(this.heading, this.flowAngle, 1 - Math.exp(-(3.2 + tempo * 2) * dt));

      const offScreen = this.x < -60 || this.x > width + 60
        || this.y < -60 || this.y > height + 60;
      const minDepart = 0.32 + (1 - tempo) * 0.38;
      if (this.opacity < 0.04 || this.z < -520 || this.departDuration > 7) return false;
      if (offScreen && this.departDuration > minDepart) return false;
      return true;
    }

    _pickRoamIntent() {
      this.targetFlowAngle = this.flowAngle + (Math.random() - 0.5) * Math.PI * 1.35;
      this.targetPitchAngle = clamp(this.pitchAngle + (Math.random() - 0.5) * 0.72, -0.72, 0.72);
      this.flowTurn = (Math.random() < 0.5 ? -1 : 1) * (0.12 + Math.random() * 0.22);
      this.roamTimer = 0.55 + Math.random() * 1.35;
    }

    _updateFlapRhythm(dt) {
      this.flapRhythmTimer -= dt;
      if (this.flapRhythmTimer <= 0) {
        const fastBias = 0.28 + this.flapTempoTrait * 0.42;
        if (this.flapRhythm === 'slow') {
          this.flapRhythm = Math.random() < fastBias ? 'fast' : 'slow';
        } else {
          this.flapRhythm = Math.random() < 0.38 ? 'slow' : 'fast';
        }
        this.flapRhythmTimer = this.flapRhythm === 'slow'
          ? 0.75 + Math.random() * 1.8
          : 0.35 + Math.random() * 0.95;

        if (this.flapRhythm === 'slow') {
          const span = BUTTERFLY_FLAP_SLOW[1] - BUTTERFLY_FLAP_SLOW[0];
          this.flapRhythmTarget = BUTTERFLY_FLAP_SLOW[0]
            + this.flapTempoTrait * span * 0.55
            + Math.random() * span * 0.35;
          this.wingRhythmMul = 0.4 + this.flapTempoTrait * 0.16;
        } else {
          const span = BUTTERFLY_FLAP_FAST[1] - BUTTERFLY_FLAP_FAST[0];
          this.flapRhythmTarget = BUTTERFLY_FLAP_FAST[0]
            + this.flapTempoTrait * span * 0.75
            + Math.random() * span * 0.35;
          this.wingRhythmMul = 0.58 + this.flapTempoTrait * 0.28;
        }
      }
    }

    _syncFlapToMotion(dt) {
      const moveT = moveTempo01(this.smoothMoveSpeed, this.departing);
      const moveK = moveT * moveT;
      const span = BUTTERFLY_FLAP_FAST[1] - BUTTERFLY_FLAP_SLOW[0];
      const motionBoost = this.departing ? 1.18 : 1;
      const motionFlap = BUTTERFLY_FLAP_SLOW[0] + moveK * span * motionBoost;
      const blend = 0.15 + moveK * 0.85;
      this.flapSpeedTarget = this.flapRhythmTarget * (1 - blend) + motionFlap * blend;
      this.wingFlapMul = this.wingRhythmMul * (1 - blend * 0.55)
        + (0.4 + moveK * 0.54) * (blend * 0.55 + 0.45);
      this.wingFlapMul = Math.max(this.wingFlapMul, BUTTERFLY_WING_MUL_MIN);
      this.flapSpeed = expSmooth(this.flapSpeed, this.flapSpeedTarget, dt, 3 + moveK * 3.2);
    }

    _smoothFlapVisual(dt) {
      this.smoothFlap = expSmooth(this.smoothFlap, this.flap, dt, BUTTERFLY_FLAP_VIS_SMOOTH);
      this.smoothFlapVel = expSmooth(this.smoothFlapVel, this.flapVel, dt, BUTTERFLY_FLAP_VIS_SMOOTH * 0.85);
    }

    _cruiseVelocity() {
      if (this.departing) {
        const tempo = this.departTempo;
        const speed = this.departSpeed + Math.min(this.departDuration * (8 + tempo * 10), 16);
        return {
          vx: this.departDir.x * speed,
          vy: this.departDir.y * speed,
          vz: this.departDir.z * speed,
        };
      }
      const cp = Math.cos(this.pitchAngle);
      const sp = Math.sin(this.pitchAngle);
      const speed = 8.5 + this.driftRadius * 2.2;
      return {
        vx: Math.sin(this.heading) * cp * speed,
        vy: -Math.cos(this.heading) * cp * speed,
        vz: sp * speed * 0.88,
      };
    }

    _steerIntent(dt, t) {
      if (this.departing) return;
      this.roamTimer -= dt;
      if (this.roamTimer <= 0) this._pickRoamIntent();

      const wander = Math.sin(t * 0.16 + this.glidePhase) * 0.22
        + Math.sin(t * 0.08 + this.driftPhase * 1.7) * 0.14;
      const vWander = Math.sin(t * 0.12 + this.bobPhase * 1.3) * 0.18;
      const angleK = 1 - Math.exp(-0.28 * dt);
      const pitchK = 1 - Math.exp(-0.32 * dt);

      switch (this.style) {
        case 'spiral': {
          this.orbitPhase += dt * (0.1 + this.orbitR * 0.08);
          this.targetFlowAngle += (this.flowTurn + wander * 0.08) * dt * 0.14;
          this.targetPitchAngle = clamp(this.targetPitchAngle + Math.sin(this.orbitPhase) * 0.1 * dt, -0.65, 0.65);
          break;
        }
        case 'waltz': {
          this.targetFlowAngle += (this.flowTurn + wander * 0.1) * dt * 0.12;
          this.targetPitchAngle = clamp(this.targetPitchAngle + vWander * 0.08 * dt, -0.65, 0.65);
          break;
        }
        case 'drift': {
          this.targetFlowAngle += (this.flowTurn + wander * 0.06) * dt * 0.09;
          this.targetPitchAngle = clamp(this.targetPitchAngle + vWander * 0.06 * dt, -0.65, 0.65);
          break;
        }
        case 'dance': {
          this.targetFlowAngle += (this.flowTurn + wander * 0.1) * dt * (0.16 + Math.sin(t * 0.22 + this.driftPhase) * 0.08);
          this.targetPitchAngle = clamp(this.targetPitchAngle + Math.sin(t * 0.24 + this.flapPhase) * 0.1 * dt, -0.65, 0.65);
          break;
        }
        default: {
          this.targetFlowAngle += (this.flowTurn + wander * 0.07) * dt * (0.14 + 0.08 * Math.sin(t * 0.12 + this.driftPhase));
          this.targetPitchAngle = clamp(this.targetPitchAngle + vWander * 0.07 * dt, -0.65, 0.65);
        }
      }

      this.flowAngle = lerpAngle(this.flowAngle, this.targetFlowAngle, angleK);
      this.pitchAngle = expSmooth(this.pitchAngle, this.targetPitchAngle, dt, 2.2);
      this.pitchAngle = clamp(this.pitchAngle, -0.65, 0.65);
      this.heading = lerpAngle(this.heading, this.flowAngle, 1 - Math.exp(-0.32 * dt));
    }

    _applyFloatDrift(dt, t) {
      const r = this.driftRadius * (this.departing ? 0.28 : 0.62);
      const fs = this.floatSpeed * (this.departing ? 1.1 : 0.82);
      const fp = this.floatPhase;
      const cruise = this._cruiseVelocity();
      const velK = this.departing
        ? BUTTERFLY_VEL_SMOOTH_DEPART + this.departTempo * 3.5
        : BUTTERFLY_VEL_SMOOTH;
      this.vx = expSmooth(this.vx, cruise.vx + Math.sin(t * fs + fp) * 0.65 * r, dt, velK);
      this.vy = expSmooth(this.vy, cruise.vy + Math.cos(t * fs * 0.78 + fp * 1.4) * 0.55 * r, dt, velK);
      this.vz = expSmooth(this.vz, cruise.vz + Math.sin(t * fs * 0.58 + fp * 0.85) * 0.48 * r, dt, velK);
    }

    _updateFlutter(t) {
      const a = this.flutterAmp;
      const s = 0.42;
      switch (this.style) {
        case 'spiral':
          this.flutterX = Math.cos(t * 0.26 + this.orbitPhase) * 22 * a * s
            + Math.sin(t * 0.52 + this.flapPhase) * 8 * a * s;
          this.flutterY = Math.sin(t * 0.22 + this.bobPhase) * 18 * a * s;
          this.flutterZ = Math.sin(t * 0.24 + this.orbitPhase) * 16 * a * s;
          break;
        case 'waltz':
          this.flutterX = Math.sin(t * 0.24 + this.flapPhase) * 24 * a * s
            + Math.cos(t * 0.48 + this.driftPhase) * 9 * a * s;
          this.flutterY = Math.sin(t * 0.14 + this.bobPhase) * 20 * a * s;
          this.flutterZ = Math.cos(t * 0.26 + this.windPhase) * 14 * a * s;
          break;
        case 'drift':
          this.flutterX = Math.sin(t * 0.2 + this.flapPhase) * 16 * a * s;
          this.flutterY = Math.cos(t * 0.17 + this.bobPhase) * 19 * a * s;
          this.flutterZ = Math.sin(t * 0.15 + this.windPhase) * 11 * a * s;
          break;
        case 'dance':
          this.flutterX = Math.sin(t * 0.32 + this.flapPhase) * 22 * a * s
            + Math.sin(t * 0.62 + this.driftPhase) * 10 * a * s;
          this.flutterY = Math.cos(t * 0.26 + this.bobPhase) * 17 * a * s
            + Math.sin(t * 0.52 + this.flapPhase) * 7 * a * s;
          this.flutterZ = Math.sin(t * 0.3 + this.windPhase) * 15 * a * s;
          break;
        default:
          this.flutterX = Math.sin(t * 0.28 + this.flapPhase) * 20 * a * s
            + Math.sin(t * 0.55 + this.driftPhase) * 9 * a * s;
          this.flutterY = Math.cos(t * 0.24 + this.bobPhase) * 18 * a * s
            + Math.sin(t * 0.46 + this.flapPhase) * 7 * a * s;
          this.flutterZ = Math.sin(t * 0.2 + this.windPhase) * 14 * a * s
            + Math.cos(t * 0.38 + this.driftPhase) * 6 * a * s;
      }
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * (12 + this.flutterAmp * 5);
      if (this.departing) {
        this.bob += Math.sin(t * 0.28 + this.flapPhase) * 6;
      }
    }

    _smoothFlutter(dt) {
      const k = 1 - Math.exp(-BUTTERFLY_FLUTTER_SMOOTH * dt);
      this.smoothFlutterX += (this.flutterX - this.smoothFlutterX) * k;
      this.smoothFlutterY += (this.flutterY - this.smoothFlutterY) * k;
      this.smoothFlutterZ += (this.flutterZ - this.smoothFlutterZ) * k;
      this.smoothSway = expSmooth(this.smoothSway, this.sway, dt, 5.5);
    }

    update(dt, t) {
      this.lifetime += dt;
      this._updateFlapRhythm(dt);
      this._syncFlapToMotion(dt);
      this._steerIntent(dt, t);

      this.flapPhase += this.flapSpeed * dt;
      const flap = flutteryFlapKinematics(this.flapPhase, this.flapSpeed, this.wingFlapMul);
      this.flap = flap.wing;
      this.flapVel = flap.flapVel;
      this.sway = flap.sway;
      this._smoothFlapVisual(dt);

      const cp = Math.cos(this.pitchAngle);
      const sp = Math.sin(this.pitchAngle);
      const tx = Math.sin(this.heading) * cp;
      const ty = -Math.cos(this.heading) * cp;
      const tz = sp * 0.88;
      this.vx += tx * flap.thrust * dt;
      this.vy += ty * flap.thrust * dt;
      this.vz += tz * flap.thrust * dt;
      this.vy -= flap.lift * cp * dt * 0.85;
      this.vy += BUTTERFLY_GRAVITY * dt;

      const drag = Math.exp(-(this.departing ? BUTTERFLY_DRAG * 0.55 : BUTTERFLY_DRAG) * dt);
      this.vx *= drag;
      this.vy *= drag;
      this.vz *= drag;
      this._applyFloatDrift(dt, t);

      _vel.set(this.vx, this.vy, this.vz);
      const speed = _vel.length();
      if (speed > this.maxSpeed) {
        _vel.multiplyScalar(this.maxSpeed / speed);
        this.vx = _vel.x;
        this.vy = _vel.y;
        this.vz = _vel.z;
      }
      this.smoothMoveSpeed = expSmooth(this.smoothMoveSpeed, speed, dt, 5.5);

      this._updateFlutter(t);
      this._smoothFlutter(dt);

      const turb = 0.18;
      this.x += this.vx * dt + this.smoothFlutterX * dt * turb;
      this.y += this.vy * dt + this.smoothFlutterY * dt * turb;
      this.z += this.vz * dt + this.smoothFlutterZ * dt * turb * 0.75;

      const smooth = 1 - Math.exp(-this.smoothRate * dt);
      const mvx = this.vx + this.smoothFlutterX * turb;
      const mvy = this.vy + this.smoothFlutterY * turb;
      const mvz = this.vz + this.smoothFlutterZ * turb * 0.75;
      const hPlanar = Math.hypot(mvx, mvy);
      const mSpeed = Math.hypot(mvx, mvy, mvz);

      if (mSpeed > 0.8) {
        this.rotY = lerpAngle(this.rotY, Math.atan2(mvx, -mvy + 0.001) + this.smoothSway * 0.1, smooth * 0.52);
      }

      const pitchRaw = Math.atan2(-mvz, hPlanar + 12) * 0.1 + this.smoothFlapVel * 0.007 + this.smoothSway * 0.03;
      const pitchTarget = clamp(pitchRaw, -BUTTERFLY_MAX_TILT_DOWN, BUTTERFLY_MAX_TILT);
      this.rotX += (pitchTarget - this.rotX) * smooth * 0.55;

      const rollRaw = hPlanar > 1.2
        ? Math.atan2(mvx, Math.abs(mvy) + 28) * this.rollAmp * 0.18
        : 0;
      const rollTarget = clamp(rollRaw + this.smoothSway * 0.08, -BUTTERFLY_MAX_TILT, BUTTERFLY_MAX_TILT);
      this.rotZ += (rollTarget - this.rotZ) * smooth * 0.5;

      this.rotX = clamp(this.rotX, -BUTTERFLY_MAX_TILT_DOWN, BUTTERFLY_MAX_TILT);
      this.rotZ = clamp(this.rotZ, -BUTTERFLY_MAX_TILT, BUTTERFLY_MAX_TILT);

      this._softBounds(dt);

      switch (this.phase) {
        case 'growing': {
          this.growth = Math.min(1, this.growth + this.growthRate * dt);
          const c1 = 1.70158;
          const c3 = c1 + 1;
          const u = this.growth;
          this.size = this.maxSize * (1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2));
          if (this.growth >= 1) this.phase = 'bloomed';
          break;
        }
        case 'bloomed':
          if (Math.random() < dt * 4) this._dust();
          this.departTimer -= dt;
          if (this.departTimer <= 0 || this.roamTimer <= 0) {
            this._beginDepart();
            this.phase = 'departing';
          }
          break;
        case 'departing':
          if (this._updateDepart(dt) === false) return false;
          if (Math.random() < dt * 7) this._dust();
          break;
        case 'wilting':
          this.opacity -= dt * 0.14;
          if (Math.random() < dt * 5) this._dust();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _softBounds(dt) {
      if (this.departing) return;

      const pad = 120;
      if (this.x < -pad || this.x > width + pad
        || this.y < -pad || this.y > height + pad) {
        if (this.phase === 'bloomed') {
          this._beginDepart();
          this.phase = 'departing';
        }
      }
      if (this.z < -380) this.z = 340;
      if (this.z > 380) this.z = -340;
    }

    _dust() {
      shards.push({
        x: this.x + (Math.random() - 0.5) * this.size,
        y: this.y + (Math.random() - 0.5) * this.size,
        z: this.z + (Math.random() - 0.5) * this.size,
        vx: (Math.random() - 0.5) * 50,
        vy: (Math.random() - 0.5) * 50,
        vz: (Math.random() - 0.5) * 50,
        rgb: saturateRgb(this.accent, 1.22),
        opacity: 1,
        glow: (1.85 + Math.random() * 0.85) * BUTTERFLY_PARTICLE_GLOW,
        twinkle: Math.random() * Math.PI * 2,
      });
    }
  }

  function hide(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  function poseRoot(mark) {
    const pos = toWorld(
      mark.x + mark.smoothFlutterX * 0.38,
      mark.y + mark.smoothFlutterY * 0.34 + mark.bob * 0.28,
      mark.z + mark.bob * 0.5 + mark.smoothFlutterZ * 0.35,
      width,
      height,
    );
    root.position.copy(pos);

    const flap = mark.smoothFlap ?? mark.flap;
    const flapVel = mark.smoothFlapVel ?? mark.flapVel;
    const sway = mark.smoothSway ?? 0;
    const wf = mark.wingFlapMul ?? 1;
    const wingRoll = Math.sin(mark.flapPhase * 2 + 0.4) * 0.045 * wf;
    root.rotation.set(
      clamp(mark.rotX + flapVel * 0.013 + sway * 0.05, -BUTTERFLY_MAX_TILT_DOWN, BUTTERFLY_MAX_TILT),
      mark.rotY + sway * 0.14,
      clamp(mark.rotZ + flap * 0.048 + sway * 0.22, -BUTTERFLY_MAX_TILT, BUTTERFLY_MAX_TILT),
    );

    const s = mark.size * (mark.departScale ?? 1);
    root.scale.set(s, s, s);

    wingHoldL.rotation.set(
      0.08 + flap * 0.22 + sway * 0.09,
      0.56 + flap * 1.14 * wf,
      0.06 + flap * 0.2 + wingRoll,
    );
    wingHoldR.rotation.set(
      0.08 + flap * 0.22 + sway * 0.09,
      -0.56 - flap * 1.14 * wf,
      -0.06 - flap * 0.2 - wingRoll,
    );
    wingHoldL.scale.set(-1, 1, 1);
    wingHoldR.scale.set(1, 1, 1);
    root.updateMatrixWorld(true);
  }

  function syncMeshes() {
    if (!bodyMesh || !wingLMesh || !wingRMesh) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        for (const m of [bodyMesh, wingLMesh, wingRMesh, wingOutlineLMesh, wingOutlineRMesh, patternLMesh, patternRMesh, antennaMesh]) {
          hide(m, i);
        }
        continue;
      }
      poseRoot(mark);
      const wingC = unitRgb(mark.rgb, 0.98 + mark.opacity * 0.27);
      const patC = unitRgb(mark.pattern, 1.08 + mark.opacity * 0.22);
      const outC = unitRgb(mark.outline, 0.78 + mark.opacity * 0.16);
      const bodyC = unitRgb(mark.rgb, 0.72 + mark.opacity * 0.22);
      const accC = unitRgb(mark.accent, 1.03 + mark.opacity * 0.17);

      dummy.matrix.copy(root.matrixWorld);
      bodyMesh.setMatrixAt(i, dummy.matrix);
      bodyMesh.setColorAt(i, _color.setRGB(bodyC.r, bodyC.g, bodyC.b));

      dummy.matrix.copy(wingHoldL.matrixWorld);
      wingLMesh.setMatrixAt(i, dummy.matrix);
      wingLMesh.setColorAt(i, _color.setRGB(wingC.r, wingC.g, wingC.b));
      wingOutlineLMesh.setMatrixAt(i, dummy.matrix);
      wingOutlineLMesh.setColorAt(i, _color.setRGB(outC.r, outC.g, outC.b));
      patternLMesh.setMatrixAt(i, dummy.matrix);
      patternLMesh.setColorAt(i, _color.setRGB(patC.r, patC.g, patC.b));

      dummy.matrix.copy(wingHoldR.matrixWorld);
      wingRMesh.setMatrixAt(i, dummy.matrix);
      wingRMesh.setColorAt(i, _color.setRGB(wingC.r * 0.97, wingC.g * 0.99, wingC.b));
      wingOutlineRMesh.setMatrixAt(i, dummy.matrix);
      wingOutlineRMesh.setColorAt(i, _color.setRGB(outC.r * 0.96, outC.g * 0.98, outC.b));
      patternRMesh.setMatrixAt(i, dummy.matrix);
      patternRMesh.setColorAt(i, _color.setRGB(patC.r * 0.95, patC.g * 0.97, patC.b));

      dummy.matrix.copy(root.matrixWorld);
      antennaMesh.setMatrixAt(i, dummy.matrix);
      antennaMesh.setColorAt(i, _color.setRGB(accC.r, accC.g, accC.b));
    }

    for (const m of [bodyMesh, wingLMesh, wingRMesh, wingOutlineLMesh, wingOutlineRMesh, patternLMesh, patternRMesh, antennaMesh]) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.76 + 0.48 * Math.abs(Math.sin(time * 2.8 + s.phase));
        const c = unitRgb(s.rgb, pulse * BUTTERFLY_PARTICLE_GLOW * 1.08);
        sparkleField.colors[i * 3] = Math.min(1, c.r);
        sparkleField.colors[i * 3 + 1] = Math.min(1, c.g);
        sparkleField.colors[i * 3 + 2] = Math.min(1, c.b);
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, 500);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r, g, b] = rgbToUnit(p.rgb);
        const twinkle = 0.82 + 0.34 * Math.abs(Math.sin(time * 8.5 + (p.twinkle || 0)));
        const glow = (p.glow || 1.72) * (0.64 + p.opacity * 0.66) * twinkle * BUTTERFLY_PARTICLE_GLOW;
        const w = 0.12;
        fallField.colors[i * 3] = Math.min(1, r * glow * (1 - w) + w);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow * (1 - w) + w);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow * (1 - w) + w);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawnAtLarge(x, y) {
    const m = new Mark(x, y);
    m.x = x + (Math.random() - 0.5) * width * 0.55;
    m.y = y + (Math.random() - 0.5) * height * 0.45;
    m.z = (Math.random() - 0.5) * 340;
    marks.push(m);
  }

  function spawn(x, y) {
    spawnAtLarge(x, y);
  }

  function makeMat(opacity, outline = false) {
    return new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity,
      side: outline ? THREE.BackSide : THREE.DoubleSide,
      depthWrite: !outline,
      blending: THREE.NormalBlending,
      toneMapped: false,
    });
  }

  function setupInstancedMesh(geo, opacity, outline = false) {
    const mesh = new THREE.InstancedMesh(geo, makeMat(opacity, outline), MAX);
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
    mesh.frustumCulled = false;
    return mesh;
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      marks = [];
      shards = [];
      sparkles = [];
      time = 0;
      markSerial = 0;
      layer = group;

      bodyGeo = buildButterflyBodyGeometry();
      wingGeo = buildButterflyWingGeometry();
      patternGeo = buildButterflyPatternGeometry();
      antennaGeo = buildButterflyAntennaGeometry();

      bodyMesh = setupInstancedMesh(bodyGeo, 0.88);
      wingLMesh = setupInstancedMesh(wingGeo, 0.82);
      wingRMesh = setupInstancedMesh(wingGeo, 0.82);
      wingOutlineLMesh = setupInstancedMesh(wingGeo, 0.35, true);
      wingOutlineRMesh = setupInstancedMesh(wingGeo, 0.35, true);
      patternLMesh = setupInstancedMesh(patternGeo, 0.92);
      patternRMesh = setupInstancedMesh(patternGeo, 0.92);
      antennaMesh = setupInstancedMesh(antennaGeo, 0.9);

      for (const m of [bodyMesh, wingLMesh, wingRMesh, wingOutlineLMesh, wingOutlineRMesh, patternLMesh, patternRMesh, antennaMesh]) {
        layer.add(m);
      }

      sparkleField = makePoints(100, 4);
      fallField = makePoints(600, 8);
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = 0.78;
      fallField.mat.opacity = 0.72;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(30, w, h, 0.06, [h * 0.1, h * 0.95])) {
        spawn(x, y);
      }
      primeGrowingMarks(marks);
      syncMeshes();

      for (let i = 0; i < 80; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 320,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          speedZ: (Math.random() - 0.5) * 0.15,
          phase: Math.random() * Math.PI * 2,
          rgb: paletteRgb(
            i % 3 !== 2 ? pickRainbowBlueHex(i) : pickRainbowHex(i),
          ),
        });
      }
    },

    resize(w, h) {
      width = w;
      height = h;
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      marks = marks.filter((m) => m.update(dt, time));

      if (pointer?.velocity > 3) {
        const n = Math.min(5, Math.floor(pointer.velocity / 14) + 1);
        for (let i = 0; i < n; i++) {
          spawn(pointer.x + (Math.random() - 0.5) * 60, pointer.y + (Math.random() - 0.5) * 50);
        }
      }
      if (Math.random() < dt * 2.1 * (params.speed || 1)) {
        spawn(Math.random() * width, Math.random() * height * 0.85);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 3);
        for (let i = 0; i < n; i++) {
          spawn(Math.random() * width, Math.random() * height * 0.85);
        }
      }

      shards = shards.filter((p) => {
        p.x += (p.vx || 0) * dt;
        p.y += (p.vy || 0) * dt;
        p.z += (p.vz || 0) * dt;
        p.opacity -= dt * 0.14;
        return p.opacity > 0.02;
      });

      sparkles.forEach((s) => {
        s.x += (s.speedX || 0) * (params.speed || 1) * 45 * dt;
        s.y += (s.speedY || 0) * (params.speed || 1) * 45 * dt;
        s.z += (s.speedZ || 0) * (params.speed || 1) * 45 * dt;
        if (s.x < -20) s.x = width + 20;
        if (s.x > width + 20) s.x = -20;
        if (s.y < -20) s.y = height + 20;
        if (s.y > height + 20) s.y = -20;
      });

      const maxMarks = Math.min(MAX, Math.max(24, Math.floor((params.particleCount || 1030) / 4)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 8; i++) {
        spawn(x + (Math.random() - 0.5) * 80, y + (Math.random() - 0.5) * 60);
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams() {},
    setPalette() {},

    samplePoints(count) {
      return sampleMarksWorld(marks, count, width, height, spreadScreenCloud);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      bodyGeo?.dispose();
      wingGeo?.dispose();
      patternGeo?.dispose();
      antennaGeo?.dispose();
      bodyMesh = null;
      wingLMesh = null;
      wingRMesh = null;
      wingOutlineLMesh = null;
      wingOutlineRMesh = null;
      patternLMesh = null;
      patternRMesh = null;
      antennaMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
