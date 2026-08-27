import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';

/* ——— Flower Bloom と同一の色処理 ——— */
function saturateRgb(rgb, amount = 0.07) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const mid = (max + min) * 0.5;
  return {
    r: Math.min(255, Math.max(0, Math.round(mid + (rgb.r - mid) * (1 + amount)))),
    g: Math.min(255, Math.max(0, Math.round(mid + (rgb.g - mid) * (1 + amount)))),
    b: Math.min(255, Math.max(0, Math.round(mid + (rgb.b - mid) * (1 + amount)))),
  };
}

function coolToneRgb(rgb) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat > 0.35 && max > 80) {
    const isBlueDominant = rgb.b > rgb.r && rgb.b > rgb.g;
    if (isBlueDominant) {
      return {
        r: Math.min(255, Math.round(rgb.r * 0.95)),
        g: Math.min(255, Math.round(rgb.g * 0.72)),
        b: Math.min(255, Math.round(rgb.b * 1.08 + 8)),
      };
    }
    return saturateRgb(rgb, -0.12);
  }
  const b = Math.min(255, Math.round(rgb.b * 1.08 + 16));
  return {
    r: Math.min(Math.round(rgb.r * 0.7), Math.round(b * 0.55)),
    g: Math.min(Math.round(rgb.g * 0.55), Math.round(b * 0.4)),
    b,
  };
}

function vividPetalRgb(rgb) {
  const cool = coolToneRgb(rgb);
  // 少し落とす（前回より彩度をやや戻す）
  const muted = saturateRgb(cool, -0.28);
  return {
    r: Math.min(255, Math.round(muted.r * 0.9 + 10)),
    g: Math.min(255, Math.round(muted.g * 0.9 + 10)),
    b: Math.min(255, Math.round(muted.b * 0.9 + 14)),
  };
}

function brightenRgb(rgb) {
  const base = coolToneRgb(rgb);
  return {
    r: Math.min(255, base.r + 18),
    g: Math.min(255, base.g + 14),
    b: Math.min(255, base.b + 18),
  };
}

function petalParticleRgb(rgb, lift = 1.15) {
  return {
    r: Math.min(255, Math.round(rgb.r * lift)),
    g: Math.min(255, Math.round(rgb.g * lift)),
    b: Math.min(255, Math.round(rgb.b * lift)),
  };
}

function displayColor(rgb, scale = 1) {
  const cool = saturateRgb(coolToneRgb(rgb), -0.18);
  return {
    r: Math.min(1, (cool.r / 255) * scale),
    g: Math.min(1, (cool.g / 255) * scale),
    b: Math.min(1, (cool.b / 255) * scale),
  };
}

function randomFlowerPetalColor(paletteName) {
  const colors = getPaletteColors(paletteName).filter((hex) => {
    const { r, g, b } = hexToRgb(hex);
    const isWhitish = r > 230 && g > 230 && b > 230;
    const isYellowWhite = r > 220 && g > 210 && b > 180 && Math.min(r, g, b) > 170;
    return !isWhitish && !isYellowWhite;
  });
  const pool = colors.length ? colors : getPaletteColors(paletteName);

  const weighted = [];
  for (const hex of pool) {
    const { r, g, b } = hexToRgb(hex);
    const isYellow = r > 150 && g > 110 && b < 150 && r + g > b * 2.4;
    const isElectricBlue = b > 200 && g < 140 && r < 120 && b > g * 1.5;
    const isViolet = b > 160 && r > 40 && r < 140 && g < r * 0.9 && b > r;
    const isCyanish = b > 150 && g > b * 0.7 && g > r;
    const copies = (isElectricBlue || isViolet) ? 6 : isCyanish || isYellow ? 1 : 2;
    for (let i = 0; i < copies; i++) weighted.push(hex);
  }
  const pick = weighted.length ? weighted : pool;
  return pick[Math.floor(Math.random() * pick.length)];
}

function paletteAccentRgb(paletteName) {
  const colors = getPaletteColors(paletteName);
  return vividPetalRgb(hexToRgb(colors[Math.floor(Math.random() * colors.length)]));
}

/** 立体アルファベット（奥行きを厚く） */
const LETTER_DEPTH = 0.36;

function bar(w, h, d = LETTER_DEPTH, x = 0, y = 0, z = 0, rotZ = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotZ) g.rotateZ(rotZ);
  g.translate(x, y, z);
  return g;
}

function buildXGeometry() {
  const beamA = bar(0.12, 1.12, LETTER_DEPTH, 0, 0, 0, Math.PI / 4);
  const beamB = bar(0.12, 1.12, LETTER_DEPTH, 0, 0, 0, -Math.PI / 4);
  const hub = bar(0.16, 0.16, LETTER_DEPTH * 1.08);
  return mergeGeometries([beamA, beamB, hub], false);
}

function buildYGeometry() {
  const stem = bar(0.12, 0.58, LETTER_DEPTH, 0, -0.27, 0);
  const armL = bar(0.12, 0.62, LETTER_DEPTH, -0.2, 0.28, 0, Math.PI / 5.2);
  const armR = bar(0.12, 0.62, LETTER_DEPTH, 0.2, 0.28, 0, -Math.PI / 5.2);
  const hub = bar(0.14, 0.14, LETTER_DEPTH * 1.05, 0, 0.02, 0);
  return mergeGeometries([stem, armL, armR, hub], false);
}

function buildZGeometry() {
  const top = bar(0.78, 0.12, LETTER_DEPTH, 0, 0.48, 0);
  const bot = bar(0.78, 0.12, LETTER_DEPTH, 0, -0.48, 0);
  const diag = bar(0.12, 1.05, LETTER_DEPTH, 0, 0, 0, -Math.PI / 4.6);
  return mergeGeometries([top, bot, diag], false);
}

function buildAGeometry() {
  const left = bar(0.12, 1.05, LETTER_DEPTH, -0.22, 0, 0, Math.PI / 9);
  const right = bar(0.12, 1.05, LETTER_DEPTH, 0.22, 0, 0, -Math.PI / 9);
  const cross = bar(0.42, 0.11, LETTER_DEPTH, 0, -0.05, 0);
  return mergeGeometries([left, right, cross], false);
}

function buildBGeometry() {
  const stem = bar(0.12, 1.05, LETTER_DEPTH, -0.28, 0, 0);
  const top = bar(0.42, 0.11, LETTER_DEPTH, -0.02, 0.42, 0);
  const mid = bar(0.4, 0.11, LETTER_DEPTH, -0.02, 0.02, 0);
  const bot = bar(0.42, 0.11, LETTER_DEPTH, -0.02, -0.42, 0);
  const bowlT = bar(0.11, 0.38, LETTER_DEPTH, 0.22, 0.22, 0);
  const bowlB = bar(0.11, 0.38, LETTER_DEPTH, 0.22, -0.2, 0);
  return mergeGeometries([stem, top, mid, bot, bowlT, bowlB], false);
}

function buildCGeometry() {
  const top = bar(0.55, 0.11, LETTER_DEPTH, 0.06, 0.42, 0);
  const bot = bar(0.55, 0.11, LETTER_DEPTH, 0.06, -0.42, 0);
  const left = bar(0.12, 0.84, LETTER_DEPTH, -0.24, 0, 0);
  const tipT = bar(0.18, 0.11, LETTER_DEPTH, 0.28, 0.42, 0);
  const tipB = bar(0.18, 0.11, LETTER_DEPTH, 0.28, -0.42, 0);
  return mergeGeometries([top, bot, left, tipT, tipB], false);
}

const LETTER_IDS = ['a', 'b', 'c', 'x', 'y', 'z'];
const LETTER_BUILDERS = {
  a: buildAGeometry,
  b: buildBGeometry,
  c: buildCGeometry,
  x: buildXGeometry,
  y: buildYGeometry,
  z: buildZGeometry,
};

function pickLetter() {
  return LETTER_IDS[Math.floor(Math.random() * LETTER_IDS.length)];
}

function pickMarkSize() {
  const r = Math.random();
  if (r < 0.1) return 58 + Math.random() * 42;
  if (r < 0.28) return 40 + Math.random() * 22;
  return 20 + Math.random() * 24;
}

/**
 * Flower Bloom の出現ロジック + 立体 X / Y / Z
 */
export function createLetterXBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  /** @type {Record<string, { mesh: THREE.InstancedMesh, outline: THREE.InstancedMesh, geo: THREE.BufferGeometry }>} */
  let letterSets = {};
  let glossMesh = null;
  let sparkleField = null;
  let fallField = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 64;
  const MAX_PER = MAX;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 300;
      this.letter = pickLetter();
      this.maxSize = pickMarkSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.35 + Math.random() * 0.5;
      this.baseRot = (Math.random() - 0.5) * 0.7;
      this.tilt = (Math.random() - 0.5) * 0.65;
      this.yaw = (Math.random() - 0.5) * 0.8;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.65 + Math.random() * 0.45;
      this.windAmp = 0.08 + Math.random() * 0.07;
      this.spinX = 0.45 + Math.random() * 0.35;
      this.spinY = 0.55 + Math.random() * 0.45;
      this.spinZ = 0.28 + Math.random() * 0.25;
      this.phaseX = Math.random() * Math.PI * 2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.phaseZ = Math.random() * Math.PI * 2;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.75 + Math.random() * 0.55;
      this.driftZ = (Math.random() - 0.5) * 28;
      this.color = randomFlowerPetalColor(palette);
      this.rgb = vividPetalRgb(hexToRgb(this.color));
      this.innerRgb = brightenRgb(this.rgb);
      this.lifetime = 0;
      this.maxLifetime = 4 + Math.random() * 4.5;
      this.phase = 'growing';
      this.opacity = 1;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.tumbleX = Math.sin(t * this.spinX + this.phaseX) * 0.48;
      this.tumbleY = Math.sin(t * this.spinY + this.phaseY) * 0.72;
      this.tumbleZ = Math.sin(t * this.spinZ + this.phaseZ) * 0.28;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 28;
      switch (this.phase) {
        case 'growing':
          this.growth = Math.min(1, this.growth + this.growthRate * dt);
          this.size = this.maxSize * this._easeOutBack(this.growth);
          if (this.growth >= 1) this.phase = 'bloomed';
          break;
        case 'bloomed':
          if (this.lifetime > this.maxLifetime * 0.55) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.28;
          if (Math.random() < dt * 4.2) this._shedShard();
          if (Math.random() < dt * 5.5) this._shedDust();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _easeOutBack(u) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
    }

    _shedShard() {
      const burst = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < burst; i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 1.2,
          y: this.y + (Math.random() - 0.5) * this.size * 1.2,
          z: this.z + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 70,
          vy: -20 - Math.random() * 45,
          vz: (Math.random() - 0.5) * 45,
          size: this.size * 0.14 + Math.random() * 7,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 6,
          rgb: petalParticleRgb(this.rgb, 0.85),
          opacity: 1,
          glow: 1.45 + Math.random() * 0.3,
          kind: 'shard',
        });
      }
    }

    _shedDust() {
      const dust = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < dust; i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 0.6,
          y: this.y + (Math.random() - 0.5) * this.size * 0.6,
          z: this.z + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 90,
          vy: (Math.random() - 0.5) * 90 - 10,
          vz: (Math.random() - 0.5) * 60,
          size: 2 + Math.random() * 5,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 8,
          rgb: petalParticleRgb(this.innerRgb, 0.9),
          opacity: 1,
          glow: 1.55 + Math.random() * 0.35,
          kind: 'dust',
        });
      }
    }
  }

  function placeMark(mark, scaleMul = 1) {
    const wind = Math.sin(time * mark.windSpeed + mark.windPhase);
    const wind2 = Math.sin(time * mark.windSpeed * 1.37 + mark.windPhase * 1.2);
    const swayX = wind * mark.windAmp;
    const swayZ = wind2 * mark.windAmp * 0.85;
    const pos = toWorld(
      mark.x,
      mark.y,
      mark.z + (mark.bob || 0) + wind2 * (mark.driftZ || 0),
      width,
      height,
    );
    dummy.position.copy(pos);
    dummy.position.x += swayX * mark.size * 0.28;
    dummy.position.y += Math.sin(time * mark.bobSpeed * 0.65 + mark.bobPhase) * mark.size * 0.05;
    dummy.position.z += swayZ * mark.size * 0.22;
    dummy.rotation.set(
      mark.tilt + swayX * 1.6 + mark.tumbleX,
      (mark.yaw || 0) + swayZ * 0.9 + mark.tumbleY,
      mark.baseRot + mark.tumbleZ + wind2 * mark.windAmp * 0.75,
    );
    const s = mark.size * scaleMul;
    // Z 方向を伸ばして厚みの立体感を強調
    dummy.scale.set(s, s, s * 1.85);
    dummy.updateMatrix();
    return pos;
  }

  function hideInstance(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  function syncMeshes() {
    if (!LETTER_IDS.every((id) => letterSets[id])) return;

    /** @type {Record<string, typeof marks>} */
    const buckets = { a: [], b: [], c: [], x: [], y: [], z: [] };
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < shown; i++) {
      const m = marks[i];
      if (m && m.size >= 0.5) buckets[m.letter].push(m);
    }

    for (const id of LETTER_IDS) {
      const set = letterSets[id];
      const list = buckets[id];
      for (let i = 0; i < MAX_PER; i++) {
        const mark = list[i];
        if (!mark) {
          hideInstance(set.mesh, i);
          hideInstance(set.outline, i);
          continue;
        }
        placeMark(mark, 1);
        set.mesh.setMatrixAt(i, dummy.matrix);
        const c = displayColor(mark.rgb, 0.5 + mark.opacity * 0.22);
        set.mesh.setColorAt(i, _color.setRGB(c.r, c.g, c.b));

        placeMark(mark, 1.03);
        set.outline.setMatrixAt(i, dummy.matrix);
        const outline = displayColor(mark.rgb, 0.2);
        set.outline.setColorAt(i, _color.setRGB(outline.r * 0.55, outline.g * 0.5, outline.b * 0.75));
      }
      set.mesh.instanceMatrix.needsUpdate = true;
      set.outline.instanceMatrix.needsUpdate = true;
      if (set.mesh.instanceColor) set.mesh.instanceColor.needsUpdate = true;
      if (set.outline.instanceColor) set.outline.instanceColor.needsUpdate = true;
    }

    if (glossMesh) {
      for (let i = 0; i < MAX; i++) {
        const mark = i < shown ? marks[i] : null;
        if (!mark || mark.size < 0.5) {
          hideInstance(glossMesh, i);
        } else {
          placeMark(mark, 1);
          dummy.scale.set(mark.size * 0.07, mark.size * 0.07, mark.size * 0.07);
          dummy.updateMatrix();
          glossMesh.setMatrixAt(i, dummy.matrix);
          const core = displayColor(mark.rgb, 0.28);
          glossMesh.setColorAt(i, _color.setRGB(core.r, core.g, core.b));
        }
      }
      glossMesh.instanceMatrix.needsUpdate = true;
      if (glossMesh.instanceColor) glossMesh.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.14 + 0.16 * Math.abs(Math.sin(time * 2.8 + s.phase));
        const c = displayColor(s.rgb, pulse);
        sparkleField.colors[i * 3] = c.r;
        sparkleField.colors[i * 3 + 1] = c.g;
        sparkleField.colors[i * 3 + 2] = c.b;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, 700);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r, g, b] = rgbToUnit(p.rgb);
        const glow = (p.glow || 1.4) * (0.5 + p.opacity * 0.55);
        const twinkle = p.kind === 'dust'
          ? 0.9 + 0.1 * Math.sin(time * 8 + p.rot * 3)
          : 1;
        fallField.colors[i * 3] = Math.min(1, r * glow * twinkle);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow * twinkle);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow * twinkle);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  function makeLetterMaterial(opacity = 0.72) {
    return new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
      toneMapped: false,
    });
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params.palette || 'rainbow';
      marks = [];
      shards = [];
      sparkles = [];
      time = 0;
      layer = group;
      letterSets = {};

      for (const id of LETTER_IDS) {
        const geo = LETTER_BUILDERS[id]();
        geo.computeVertexNormals();
        const mesh = new THREE.InstancedMesh(geo, makeLetterMaterial(0.72), MAX_PER);
        mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_PER * 3), 3);
        mesh.frustumCulled = false;
        layer.add(mesh);

        const outline = new THREE.InstancedMesh(
          geo,
          new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.BackSide,
            transparent: true,
            opacity: 0.16,
            depthWrite: false,
            blending: THREE.NormalBlending,
            toneMapped: false,
          }),
          MAX_PER,
        );
        outline.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_PER * 3), 3);
        outline.frustumCulled = false;
        layer.add(outline);

        letterSets[id] = { mesh, outline, geo };
      }

      const glossGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const glossMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
        blending: THREE.NormalBlending,
        toneMapped: false,
      });
      glossMesh = new THREE.InstancedMesh(glossGeo, glossMat, MAX);
      glossMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
      glossMesh.frustumCulled = false;
      layer.add(glossMesh);

      sparkleField = makePoints(80, 5);
      fallField = makePoints(700, 14);
      fallField.mat.opacity = 0.55;
      layer.add(sparkleField.points, fallField.points);

      for (let i = 0; i < 12; i++) {
        spawn(Math.random() * w, Math.random() * h);
      }
      for (let i = 0; i < 70; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.08 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
          rgb: paletteAccentRgb(currentPalette),
        });
      }
    },

    resize(w, h) {
      width = w;
      height = h;
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette || currentPalette;
      marks = marks.filter((m) => m.update(dt, time));

      if (pointer?.velocity > 3) {
        const n = Math.min(2, Math.floor(pointer.velocity / 16) + 1);
        for (let i = 0; i < n; i++) {
          spawn(
            pointer.x + (Math.random() - 0.5) * 50,
            pointer.y + (Math.random() - 0.5) * 50,
          );
        }
      }

      if (Math.random() < dt * 1.8 * (params.speed || 1)) {
        spawn(Math.random() * width, Math.random() * height);
      }

      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) {
          spawn(Math.random() * width, Math.random() * height);
        }
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.vx += Math.sin(time * 2.5 + p.x * 0.008) * 18 * dt;
        p.vz += Math.cos(time * 2.2 + p.y * 0.01) * 12 * dt;
        p.rot += p.rotSpeed * dt;
        const fade = p.kind === 'dust' ? 0.14 : 0.1;
        p.opacity -= dt * fade;
        p.glow = Math.max(1.2, (p.glow || 1.4) - dt * 0.08);
        return p.opacity > 0.02 && p.y < height + 80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 60 * dt;
        s.x += Math.sin(time * 1.5 + s.phase) * 0.25;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(20, Math.floor((params.particleCount || 1030) / 4)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
      if (shards.length > 700) shards.splice(0, shards.length - 700);
    },

    render() {
      syncMeshes();
      for (const id of LETTER_IDS) {
        if (letterSets[id]) letterSets[id].mesh.material.opacity = 0.78;
      }
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 6; i++) {
        spawn(x + (Math.random() - 0.5) * 90, y + (Math.random() - 0.5) * 90);
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },

    samplePoints(count) {
      const out = new Float32Array(count * 3);
      const n = marks.length;
      if (n === 0) {
        for (let i = 0; i < count; i++) {
          const t = Math.random();
          const ang = (Math.random() < 0.5 ? Math.PI / 4 : -Math.PI / 4) + (Math.random() - 0.5) * 0.2;
          const along = (Math.random() - 0.5) * 1.0;
          const taper = 0.2 + Math.abs(along) * 0.8;
          out[i * 3] = Math.sin(ang) * along * taper * 50;
          out[i * 3 + 1] = Math.cos(ang) * along * 50;
          out[i * 3 + 2] = (Math.random() - 0.5) * 18;
        }
        return out;
      }
      for (let i = 0; i < count; i++) {
        const m = marks[i % n];
        const wpos = toWorld(
          m.x + (Math.random() - 0.5) * m.size,
          m.y + (Math.random() - 0.5) * m.size,
          m.z + (Math.random() - 0.5) * 24,
          width,
          height,
        );
        out[i * 3] = wpos.x;
        out[i * 3 + 1] = wpos.y;
        out[i * 3 + 2] = wpos.z;
      }
      return out;
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      for (const id of LETTER_IDS) {
        letterSets[id]?.geo?.dispose();
      }
      letterSets = {};
      glossMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
