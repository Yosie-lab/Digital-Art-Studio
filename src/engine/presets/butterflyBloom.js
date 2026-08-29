import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getPaletteColors, hexToRgb, colorAtIndex } from '../palettes.js';
import {
  toWorld,
  makePoints,
  rgbToUnit,
  stratifiedSpawnPoints,
  primeGrowingMarks,
  sampleMarksWorld,
  spreadScreenCloud,
} from '../space3d.js';

/** 全色相を均等に割り当て（黄ばみ防止） */
const BUTTERFLY_SPECTRUM = [
  ...getPaletteColors('clockRainbow'),
  ...getPaletteColors('rainbow'),
];
let spectrumCursor = 0;

function nextSpectrumHex() {
  const hex = BUTTERFLY_SPECTRUM[spectrumCursor % BUTTERFLY_SPECTRUM.length];
  spectrumCursor += 1;
  return hex;
}

function pickRainbowPair(index) {
  const wing = colorAtIndex('rainbow', index * 2);
  const pattern = colorAtIndex('rainbow', index * 2 + 5);
  return { wing, pattern };
}

function vividRgb(hex) {
  const { r, g, b } = hexToRgb(hex);
  return {
    r: Math.min(255, Math.round(r * 1.08 + 8)),
    g: Math.min(255, Math.round(g * 1.06 + 6)),
    b: Math.min(255, Math.round(b * 1.1 + 10)),
  };
}

function darkerRgb(rgb, amount = 0.55) {
  return {
    r: Math.min(255, Math.round(rgb.r * amount + 20)),
    g: Math.min(255, Math.round(rgb.g * amount + 14)),
    b: Math.min(255, Math.round(rgb.b * amount + 24)),
  };
}

function unitRgb(rgb, scale = 1) {
  return {
    r: Math.min(1, (rgb.r / 255) * scale),
    g: Math.min(1, (rgb.g / 255) * scale),
    b: Math.min(1, (rgb.b / 255) * scale),
  };
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
 * 立体蝶: 360°3D飛行 + レインボー羽
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
      this.flapSpeed = 5.2 + Math.random() * 2.8;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.48 + Math.random() * 0.35;
      this.windPhase = Math.random() * Math.PI * 2;
      this.driftPhase = Math.random() * Math.PI * 2;
      this.glidePhase = Math.random() * Math.PI * 2;
      this.flowAngle = Math.random() * Math.PI * 2;
      this.flowTurn = 0.22 + Math.random() * 0.48;
      this.style = pickFlightStyle();
      this.flutterAmp = 0.78 + Math.random() * 0.62;
      this.glideAmp = 0.65 + Math.random() * 0.75;
      this.wingFlapMul = 0.72 + Math.random() * 0.5;
      this.smoothRate = 1.1 + Math.random() * 1.4;
      this.orbitR = 0.55 + Math.random() * 1.15;
      this.orbitPhase = Math.random() * Math.PI * 2;
      this.maxSpeed = 28 + Math.random() * 14;
      this.minSpeed = 4 + Math.random() * 4;
      this.tiltAmp = 0.08 + Math.random() * 0.14;
      this.rollAmp = 0.08 + Math.random() * 0.16;

      const dir = randomUnitVector3();
      dir.y *= 0.45;
      dir.normalize();
      const flySpeed = 10 + Math.random() * 14;
      this.vx = dir.x * flySpeed;
      this.vy = dir.y * flySpeed - 4;
      this.vz = dir.z * flySpeed * 0.7;
      this.targetVx = this.vx;
      this.targetVy = this.vy;
      this.targetVz = this.vz;

      this.rotX = Math.random() * Math.PI * 2;
      this.rotY = Math.random() * Math.PI * 2;
      this.rotZ = Math.random() * Math.PI * 2;

      const idx = markSerial++;
      const { wing, pattern } = pickRainbowPair(idx);
      this.color = wing;
      this.rgb = vividRgb(wing);
      this.pattern = darkerRgb(vividRgb(pattern), 0.62);
      this.outline = darkerRgb(this.rgb, 0.35);
      this.accent = vividRgb(nextSpectrumHex());

      this.lifetime = 0;
      this.maxLifetime = 14 + Math.random() * 10;
      this.phase = 'growing';
      this.opacity = 1;
      this.flap = 0;
      this.bob = 0;
      this.flutterX = 0;
      this.flutterY = 0;
      this.flutterZ = 0;
      this.bankX = 0;
      this.bankY = 0;
    }

    _updateTargets(dt, t) {
      const g = (9 + Math.sin(t * 0.38 + this.glidePhase) * 5) * this.glideAmp;
      switch (this.style) {
        case 'spiral': {
          this.orbitPhase += dt * (0.35 + this.orbitR * 0.25);
          this.flowAngle += this.flowTurn * dt * 0.45;
          const loop = 11 + Math.sin(t * 0.28 + this.bobPhase) * 5;
          this.targetVx = Math.cos(this.flowAngle) * loop
            + Math.cos(this.orbitPhase) * 15 * this.orbitR;
          this.targetVy = Math.sin(this.flowAngle) * loop * 0.35
            + Math.sin(t * 0.22 + this.bobPhase) * 9 - 2;
          this.targetVz = Math.sin(this.orbitPhase) * 17 * this.orbitR
            + Math.cos(t * 0.36 + this.windPhase) * 6;
          break;
        }
        case 'waltz': {
          this.flowAngle += this.flowTurn * dt * 0.18;
          this.targetVx = Math.sin(t * 0.4 + this.flapPhase) * 17 * this.glideAmp
            + Math.sin(t * 0.8 + this.driftPhase) * 9;
          this.targetVy = Math.sin(t * 0.2 + this.bobPhase) * 13 * this.glideAmp
            + Math.cos(t * 0.45 + this.glidePhase) * 5 - 1.5;
          this.targetVz = Math.cos(t * 0.4 + this.windPhase) * 15 * this.glideAmp
            + Math.sin(this.flowAngle) * 6;
          break;
        }
        case 'drift': {
          this.flowAngle += this.flowTurn * dt * 0.22;
          this.targetVx = Math.cos(this.flowAngle) * g;
          this.targetVy = Math.sin(t * 0.16 + this.bobPhase) * 11 - 2.5;
          this.targetVz = Math.sin(this.flowAngle) * g * 0.38
            + Math.sin(t * 0.3 + this.windPhase) * 5;
          break;
        }
        case 'dance': {
          this.flowAngle += this.flowTurn * dt * (0.85 + Math.sin(t * 0.55 + this.driftPhase) * 0.55);
          const pulse = Math.sin(t * 0.52 + this.flapPhase);
          this.targetVx = Math.cos(this.flowAngle) * (13 + pulse * 9)
            + Math.sin(t * 1.05 + this.driftPhase) * 10;
          this.targetVy = Math.sin(this.flowAngle) * (10 + pulse * 6) * 0.5
            + Math.cos(t * 0.62 + this.bobPhase) * 7 - 2;
          this.targetVz = Math.sin(t * 0.48 + this.windPhase) * (12 + pulse * 5)
            + Math.cos(this.flowAngle * 1.6) * 8;
          break;
        }
        default: {
          this.flowAngle += this.flowTurn * dt * (0.6 + 0.35 * Math.sin(t * 0.25 + this.driftPhase));
          this.targetVx = Math.cos(this.flowAngle) * g
            + Math.sin(t * 0.44 + this.flapPhase) * 10
            + Math.sin(t * 0.2 + this.driftPhase) * 6;
          this.targetVy = Math.sin(this.flowAngle) * g * 0.52
            + Math.cos(t * 0.34 + this.bobPhase) * 8 - 2;
          this.targetVz = Math.sin(t * 0.3 + this.windPhase) * g * 0.42
            + Math.cos(this.flowAngle * 1.35 + this.glidePhase) * 7;
        }
      }
    }

    _updateFlutter(t) {
      const a = this.flutterAmp;
      switch (this.style) {
        case 'spiral':
          this.flutterX = Math.cos(t * 0.58 + this.orbitPhase) * 30 * a
            + Math.sin(t * 1.15 + this.flapPhase) * 12 * a;
          this.flutterY = Math.sin(t * 0.48 + this.bobPhase) * 24 * a;
          this.flutterZ = Math.sin(t * 0.52 + this.orbitPhase) * 26 * a;
          break;
        case 'waltz':
          this.flutterX = Math.sin(t * 0.52 + this.flapPhase) * 36 * a
            + Math.cos(t * 1.04 + this.driftPhase) * 14 * a;
          this.flutterY = Math.sin(t * 0.26 + this.bobPhase) * 30 * a;
          this.flutterZ = Math.cos(t * 0.52 + this.windPhase) * 20 * a;
          break;
        case 'drift':
          this.flutterX = Math.sin(t * 0.42 + this.flapPhase) * 22 * a;
          this.flutterY = Math.cos(t * 0.34 + this.bobPhase) * 28 * a;
          this.flutterZ = Math.sin(t * 0.28 + this.windPhase) * 14 * a;
          break;
        case 'dance':
          this.flutterX = Math.sin(t * 0.75 + this.flapPhase) * 34 * a
            + Math.sin(t * 1.45 + this.driftPhase) * 16 * a;
          this.flutterY = Math.cos(t * 0.58 + this.bobPhase) * 22 * a
            + Math.sin(t * 1.2 + this.flapPhase) * 10 * a;
          this.flutterZ = Math.sin(t * 0.65 + this.windPhase) * 24 * a;
          break;
        default:
          this.flutterX = Math.sin(t * 0.65 + this.flapPhase) * 32 * a
            + Math.sin(t * 1.22 + this.driftPhase) * 14 * a;
          this.flutterY = Math.cos(t * 0.5 + this.bobPhase) * 26 * a
            + Math.sin(t * 1.0 + this.flapPhase) * 11 * a;
          this.flutterZ = Math.sin(t * 0.42 + this.windPhase) * 22 * a
            + Math.cos(t * 0.85 + this.driftPhase) * 10 * a;
      }
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * (26 + this.flutterAmp * 8);
    }

    update(dt, t) {
      this.lifetime += dt;
      this._updateTargets(dt, t);

      const smooth = 1 - Math.exp(-this.smoothRate * dt);
      this.vx += (this.targetVx - this.vx) * smooth;
      this.vy += (this.targetVy - this.vy) * smooth;
      this.vz += (this.targetVz - this.vz) * smooth;

      _vel.set(this.vx, this.vy, this.vz);
      const speed = _vel.length();
      if (speed > this.maxSpeed) _vel.multiplyScalar(this.maxSpeed / speed);
      if (speed < this.minSpeed && speed > 0.01) _vel.multiplyScalar(this.minSpeed / speed);
      this.vx = _vel.x;
      this.vy = _vel.y;
      this.vz = _vel.z;

      const flapBase = this.style === 'dance' ? 0.58 : this.style === 'drift' ? 0.42 : 0.5;
      this.flap = Math.sin(t * this.flapSpeed + this.flapPhase) * flapBase * this.wingFlapMul
        + Math.sin(t * this.flapSpeed * 2.05 + this.flapPhase * 1.3) * 0.09 * this.wingFlapMul;
      this._updateFlutter(t);

      const flutterMix = this.style === 'waltz' ? 0.68 : this.style === 'drift' ? 0.52 : 0.62;
      this.x += this.vx * dt + this.flutterX * dt * flutterMix;
      this.y += this.vy * dt + this.flutterY * dt * flutterMix;
      this.z += this.vz * dt + this.flutterZ * dt * (flutterMix * 0.82);

      this.bankY = Math.atan2(this.vx + this.flutterX * 0.45, this.vy + this.flutterY * 0.45 + 0.001) * this.rollAmp;
      this.bankX = Math.atan2(this.vz + this.flutterZ * 0.35, Math.hypot(this.vx, this.vy) + 0.001) * this.tiltAmp;
      this.rotX += Math.sin(t * 0.68 + this.flapPhase) * dt * (0.1 + this.tiltAmp);
      this.rotY += Math.sin(t * 0.44 + this.bobPhase) * dt * (0.08 + this.rollAmp);
      this.rotZ += this.flap * dt * (0.18 + this.wingFlapMul * 0.08);

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
          if (this.lifetime > this.maxLifetime * 0.7) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.18;
          if (Math.random() < dt * 5) this._dust();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _softBounds(dt) {
      const margin = 70;
      const steer = 28 * dt;
      if (this.x < margin) {
        this.vx += steer;
        this.flowAngle += dt * 0.4;
      }
      if (this.x > width - margin) {
        this.vx -= steer;
        this.flowAngle -= dt * 0.4;
      }
      if (this.y < margin) {
        this.vy += steer;
      }
      if (this.y > height - margin) {
        this.vy -= steer * 0.6;
      }
      if (this.z < -300) this.vz += steer;
      if (this.z > 300) this.vz -= steer;

      const pad = 100;
      if (this.x < -pad) this.x = width + pad * 0.5;
      if (this.x > width + pad) this.x = -pad * 0.5;
      if (this.y < -pad) this.y = height + pad * 0.5;
      if (this.y > height + pad) this.y = -pad * 0.5;
      if (this.z < -360) this.z = 320;
      if (this.z > 360) this.z = -320;
    }

    _dust() {
      shards.push({
        x: this.x + (Math.random() - 0.5) * this.size,
        y: this.y + (Math.random() - 0.5) * this.size,
        z: this.z + (Math.random() - 0.5) * this.size,
        vx: (Math.random() - 0.5) * 50,
        vy: (Math.random() - 0.5) * 50,
        vz: (Math.random() - 0.5) * 50,
        rgb: this.accent,
        opacity: 1,
        glow: 1.4 + Math.random() * 0.6,
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
      mark.x + mark.flutterX * 0.42,
      mark.y + mark.flutterY * 0.38,
      mark.z + mark.bob + mark.flutterZ * 0.52,
      width,
      height,
    );
    root.position.copy(pos);

    const bankY = (mark.bankY ?? 0);
    const bankX = (mark.bankX ?? 0);
    root.rotation.set(
      mark.rotX + bankX + mark.flap * (0.22 + mark.wingFlapMul * 0.08),
      mark.rotY + bankY,
      mark.rotZ + mark.flap * (0.2 + mark.wingFlapMul * 0.06),
    );

    const s = mark.size;
    root.scale.set(s, s, s);

    const flap = mark.flap;
    const wf = mark.wingFlapMul ?? 1;
    wingHoldL.rotation.set(0.08 + flap * 0.14, 0.56 + flap * 0.78 * wf, 0.06 + flap * 0.12);
    wingHoldR.rotation.set(0.08 + flap * 0.14, -0.56 - flap * 0.78 * wf, -0.06 - flap * 0.12);
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
      const wingC = unitRgb(mark.rgb, 0.95 + mark.opacity * 0.25);
      const patC = unitRgb(mark.pattern, 1.05 + mark.opacity * 0.2);
      const outC = unitRgb(mark.outline, 0.75 + mark.opacity * 0.15);
      const bodyC = unitRgb(mark.rgb, 0.7 + mark.opacity * 0.2);
      const accC = unitRgb(mark.accent, 1.0 + mark.opacity * 0.15);

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
        const pulse = 0.6 + 0.4 * Math.abs(Math.sin(time * 2.8 + s.phase));
        const c = unitRgb(s.rgb, pulse);
        sparkleField.colors[i * 3] = c.r;
        sparkleField.colors[i * 3 + 1] = c.g;
        sparkleField.colors[i * 3 + 2] = c.b;
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
        const glow = (p.glow || 1.4) * (0.5 + p.opacity * 0.5);
        fallField.colors[i * 3] = Math.min(1, r * glow);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y));
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
      sparkleField.mat.opacity = 0.55;
      fallField.mat.opacity = 0.5;
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
          rgb: vividRgb(colorAtIndex('rainbow', i)),
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
