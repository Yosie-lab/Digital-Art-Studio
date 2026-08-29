import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit, stratifiedSpawnPoints, primeGrowingMarks, sampleMarksWorld, spreadScreenCloud } from '../space3d.js';

/* ——— Letter / Flower Bloom と同一の色・サイズ・出現 ——— */
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
    return saturateRgb(rgb, 0.05);
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
  const vivid = saturateRgb(cool, 0.05);
  return {
    r: Math.min(255, Math.round(vivid.r * 1.06 + 5)),
    g: Math.min(255, Math.round(vivid.g * 1.05 + 3)),
    b: Math.min(255, Math.round(vivid.b * 1.06 + 5)),
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
  const cool = saturateRgb(coolToneRgb(rgb), 0.03);
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

function pickMarkSize() {
  const r = Math.random();
  if (r < 0.1) return 58 + Math.random() * 42;
  if (r < 0.28) return 40 + Math.random() * 22;
  return 20 + Math.random() * 24;
}

/** オタマ専用: 高彩度サイバーネオン（黄・橙・緑成分の強い色なし） */
const TADPOLE_CYBER_NEON = [
  '#00b7ff', '#0090ff', '#0066ff', '#3d5afe', // ブルー（シアン緑を弱める）
  '#5b8cff', '#4d7cff', '#2f6bff',
  '#7c4dff', '#9d4edd', '#b026ff', '#d500f9', // パープル
  '#ff00e5', '#ff2bd6', '#e040fb', '#c026d3', // マゼンタ
];

function randomTadpoleCyberHex() {
  return TADPOLE_CYBER_NEON[Math.floor(Math.random() * TADPOLE_CYBER_NEON.length)];
}

/** 青/紫/マゼンタを優先してネオン化し、緑チャンネルを抑えて黄ばみ防止 */
function cyberHexToRgb(hex) {
  const rgb = hexToRgb(hex);
  const max = Math.max(rgb.r, rgb.g, rgb.b, 1);
  let r = Math.round((rgb.r / max) * 255);
  let g = Math.round((rgb.g / max) * 255);
  let b = Math.round((rgb.b / max) * 255);
  // R+G が高いと黄に見えるので G を抑える
  g = Math.min(g, Math.round(Math.max(r, b) * 0.35));
  return { r, g, b };
}

function cyberShowColor(rgb, boost = 1.4) {
  let r = Math.min(1, (rgb.r / 255) * boost);
  let g = Math.min(1, (rgb.g / 255) * boost);
  let b = Math.min(1, (rgb.b / 255) * boost);
  g = Math.min(g, Math.max(r, b) * 0.4);
  return { r, g, b };
}

/** morph 粒子用: サイバーネオンのみ */
export function neonRainbowUnitColors(_paletteName, count) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const c = cyberShowColor(cyberHexToRgb(TADPOLE_CYBER_NEON[i % TADPOLE_CYBER_NEON.length]), 1.45);
    out[i * 3] = c.r;
    out[i * 3 + 1] = c.g;
    out[i * 3 + 2] = c.b;
  }
  return out;
}

export function cyberTadpoleUnitColors(count) {
  return neonRainbowUnitColors('rainbow', count);
}

/** オタマ用: 花びらより小さめ（少し大きく調整） */
function pickTadpoleSize() {
  return pickMarkSize() * 0.58;
}

/** 単位球上のランダム方向（画面座標: x右 / y下 / z奥） */
function randomUnitDir3() {
  const z = Math.random() * 2 - 1;
  const t = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  return { x: r * Math.cos(t), y: r * Math.sin(t), z };
}

function bar(w, h, d, x = 0, y = 0, z = 0, rotZ = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotZ) g.rotateZ(rotZ);
  g.translate(x, y, z);
  return g;
}

export function buildHourglassGeometry() {
  const top = new THREE.ConeGeometry(0.36, 0.52, 16);
  top.translate(0, 0.28, 0);
  const bot = new THREE.ConeGeometry(0.36, 0.52, 16);
  bot.rotateX(Math.PI);
  bot.translate(0, -0.28, 0);
  const neck = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 10);
  const ringT = new THREE.TorusGeometry(0.34, 0.035, 8, 20);
  ringT.rotateX(Math.PI / 2);
  ringT.translate(0, 0.52, 0);
  const ringB = ringT.clone();
  ringB.translate(0, -1.04, 0);
  return mergeGeometries([top, bot, neck, ringT, ringB], false);
}

function prepareTadpoleGeo(geometry) {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  geo.computeVertexNormals();
  const count = geo.attributes.position.count;
  if (!geo.attributes.uv) {
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(count * 2), 2));
  }
  return geo;
}

function mergeTadpoleParts(parts) {
  const prepared = parts.map(prepareTadpoleGeo);
  const merged = mergeGeometries(prepared, false);
  if (merged) {
    merged.computeVertexNormals();
    return merged;
  }
  return prepared[0];
}

/** クラゲ風の半透明ゼリー胴（目は別メッシュ） */
export function buildTadpoleBodyGeometry() {
  const body = new THREE.SphereGeometry(0.3, 28, 22);
  body.scale(1.42, 1.08, 1.16);
  body.translate(0.4, 0.04, 0);

  const belly = new THREE.SphereGeometry(0.2, 16, 14);
  belly.scale(1.15, 0.82, 1.02);
  belly.translate(0.34, -0.06, 0.02);

  return mergeTadpoleParts([body, belly]);
}

/** 頭まわりの細いネオンリム（クラゲ縁のイメージ） */
export function buildTadpoleRimGeometry() {
  const rim = new THREE.TorusGeometry(0.34, 0.01, 6, 36);
  rim.rotateY(Math.PI / 2);
  rim.scale(1.15, 1.0, 1.08);
  rim.translate(0.4, 0.04, 0);
  return prepareTadpoleGeo(rim);
}

/** 胴内のソフトコア */
export function buildTadpoleCoreGeometry() {
  const core = new THREE.SphereGeometry(0.1, 12, 10);
  core.scale(1.35, 0.9, 1.15);
  core.translate(0.4, 0.04, 0);
  return prepareTadpoleGeo(core);
}

/** 小さい丸い目（白目） */
export function buildTadpoleEyeGeometry() {
  const eyeL = new THREE.SphereGeometry(0.042, 12, 10);
  eyeL.translate(0.58, 0.1, 0.2);
  const eyeR = new THREE.SphereGeometry(0.042, 12, 10);
  eyeR.translate(0.58, 0.1, -0.2);
  return mergeTadpoleParts([eyeL, eyeR]);
}

/** 瞳（さらに小さい黒丸） */
export function buildTadpolePupilGeometry() {
  const pL = new THREE.SphereGeometry(0.02, 10, 8);
  pL.translate(0.605, 0.1, 0.215);
  const pR = new THREE.SphereGeometry(0.02, 10, 8);
  pR.translate(0.605, 0.1, -0.215);
  return mergeTadpoleParts([pL, pR]);
}

/** 尾・半透明フィン（クラゲ触手っぽい薄さ） */
export function buildTadpoleTailGeometry() {
  const fin = new THREE.Shape();
  fin.moveTo(0.02, 0.02);
  fin.quadraticCurveTo(-0.2, 0.16, -0.5, 0.11);
  fin.quadraticCurveTo(-0.85, 0.08, -1.15, 0.05);
  fin.quadraticCurveTo(-1.25, 0.025, -1.3, 0.008);
  fin.lineTo(-1.3, -0.008);
  fin.quadraticCurveTo(-1.25, -0.025, -1.15, -0.045);
  fin.quadraticCurveTo(-0.85, -0.06, -0.5, -0.07);
  fin.quadraticCurveTo(-0.2, -0.06, -0.02, -0.012);
  fin.lineTo(0.02, -0.008);
  fin.closePath();
  const tail = new THREE.ExtrudeGeometry(fin, { depth: 0.045, bevelEnabled: false, curveSegments: 14 });
  tail.translate(0, 0.02, -0.022);

  const spine = new THREE.CylinderGeometry(0.028, 0.008, 1.15, 8);
  spine.rotateZ(Math.PI / 2);
  spine.translate(-0.62, 0.02, 0);

  const speckles = [];
  for (let i = 0; i < 12; i++) {
    const t = Math.random();
    const sx = -0.08 - t * 1.15;
    const sy = (Math.random() - 0.5) * 0.1 * (1 - t * 0.55) + 0.02;
    const r = 0.01 + Math.random() * 0.014;
    const sp = new THREE.SphereGeometry(r, 6, 5);
    sp.translate(sx, sy, (Math.random() - 0.5) * 0.04);
    speckles.push(sp);
  }

  return mergeTadpoleParts([tail, spine, ...speckles]);
}

/** 互換: 静止シルエット（変容サンプル等） */
export function buildTadpoleGeometry() {
  const body = buildTadpoleBodyGeometry();
  const eyes = buildTadpoleEyeGeometry();
  const pupils = buildTadpolePupilGeometry();
  const tail = buildTadpoleTailGeometry();
  const merged = mergeGeometries([
    prepareTadpoleGeo(body),
    prepareTadpoleGeo(eyes),
    prepareTadpoleGeo(pupils),
    prepareTadpoleGeo(tail),
  ], false);
  if (merged) {
    merged.center();
    merged.computeVertexNormals();
    return merged;
  }
  return body;
}

export function buildBrainGeometry() {
  const dome = new THREE.SphereGeometry(0.48, 22, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
  dome.scale(1.12, 0.9, 1.08);
  const folds = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const tube = new THREE.TorusGeometry(0.28, 0.035, 6, 16, Math.PI * 0.9);
    tube.rotateY(a);
    tube.rotateX(0.55);
    tube.translate(0, 0.12, 0);
    folds.push(tube);
  }
  return mergeGeometries([dome, ...folds], false);
}

function makeStarShape(outer = 0.14, inner = 0.055) {
  const s = new THREE.Shape();
  for (let i = 0; i < 5; i++) {
    const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const b = a + Math.PI / 5;
    const ox = Math.cos(a) * outer;
    const oy = Math.sin(a) * outer;
    const ix = Math.cos(b) * inner;
    const iy = Math.sin(b) * inner;
    if (i === 0) s.moveTo(ox, oy);
    else s.lineTo(ox, oy);
    s.lineTo(ix, iy);
  }
  s.closePath();
  return s;
}

function makeAngelWingShape() {
  const s = new THREE.Shape();
  s.moveTo(0.02, 0.12);
  s.quadraticCurveTo(0.28, 0.38, 0.52, 0.22);
  s.quadraticCurveTo(0.62, 0.08, 0.58, -0.06);
  s.quadraticCurveTo(0.5, -0.16, 0.42, -0.1);
  s.quadraticCurveTo(0.34, -0.2, 0.26, -0.1);
  s.quadraticCurveTo(0.18, -0.2, 0.1, -0.08);
  s.quadraticCurveTo(0.04, -0.02, 0.02, 0.08);
  s.closePath();
  return s;
}

const ANGEL_EXTRUDE = {
  depth: 0.16,
  bevelEnabled: true,
  bevelThickness: 0.025,
  bevelSize: 0.018,
  bevelSegments: 2,
  curveSegments: 18,
};

/** 胴体（頭・髪・ドレス・星）— 顔・羽・光輪は別ジオメトリ */
export function buildAngelBodyGeometry() {
  const parts = [];
  const head = new THREE.SphereGeometry(0.18, 18, 14);
  head.translate(0, 0.42, 0.06);
  parts.push(head);

  const hair = new THREE.SphereGeometry(0.11, 12, 10);
  hair.scale(1.45, 0.6, 0.9);
  hair.translate(0.09, 0.55, 0.02);
  parts.push(hair);

  // 少し細い台形ドレス
  const dress = new THREE.Shape();
  dress.moveTo(-0.11, 0.22);
  dress.lineTo(0.11, 0.22);
  dress.lineTo(0.22, -0.48);
  dress.lineTo(-0.22, -0.48);
  dress.closePath();
  const dressGeo = new THREE.ExtrudeGeometry(dress, ANGEL_EXTRUDE);
  dressGeo.translate(0, 0, -ANGEL_EXTRUDE.depth * 0.5);
  parts.push(dressGeo);

  const starGeo = new THREE.ExtrudeGeometry(makeStarShape(0.1, 0.04), {
    depth: 0.08,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.01,
    bevelSegments: 1,
    curveSegments: 2,
  });
  starGeo.translate(0, 0.02, 0.14);
  parts.push(starGeo);

  return mergeTadpoleParts(parts);
}


/** かわいい顔 — 参照どおり閉じた弧の目＋小さな口（頭表面に密着） */
export function buildAngelFaceGeometry() {
  const parts = [];
  // 頭: center (0,0.42,0.06) r=0.18 — 表面より少し内側＋Z扁平で密着
  const headC = { x: 0, y: 0.42, z: 0.06 };
  const faceR = 0.168;
  function onFace(lx, ly) {
    const xy = Math.hypot(lx, ly);
    const zRel = Math.sqrt(Math.max(0.0001, faceR * faceR - xy * xy));
    return [headC.x + lx, headC.y + ly, headC.z + zRel];
  }
  // 細い下向き弧の目（⌒ ⌒）
  for (const sx of [-1, 1]) {
    const eye = new THREE.TorusGeometry(0.046, 0.0075, 6, 18, Math.PI * 0.95);
    eye.scale(1, 1, 0.28);
    const [ex, ey, ez] = onFace(sx * 0.072, 0.022);
    eye.translate(ex, ey, ez);
    parts.push(eye);
  }
  // ごく小さな笑顔
  const mouth = new THREE.TorusGeometry(0.026, 0.006, 5, 12, Math.PI * 0.7);
  mouth.rotateZ(Math.PI);
  mouth.scale(1, 1, 0.28);
  const [mx, my, mz] = onFace(0, -0.055);
  mouth.translate(mx, my, mz);
  parts.push(mouth);
  return mergeTadpoleParts(parts);
}

/** ハイライトなし（弧目スタイル）— 空ジオメトリ相当 */
export function buildAngelFaceHiGeometry() {
  const hi = new THREE.SphereGeometry(0.001, 4, 4);
  hi.translate(0, -10, 0);
  return prepareTadpoleGeo(hi);
}

/** ほほ紅 */
export function buildAngelBlushGeometry() {
  const parts = [];
  for (const sx of [-1, 1]) {
    const blush = new THREE.SphereGeometry(0.03, 10, 8);
    blush.scale(1.35, 0.7, 0.45);
    blush.translate(sx * 0.115, 0.39, 0.2);
    parts.push(blush);
  }
  return mergeTadpoleParts(parts);
}

/** 右羽（左はインスタンスで反転） */
export function buildAngelWingGeometry() {
  const wing = new THREE.ExtrudeGeometry(makeAngelWingShape(), {
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.015,
    bevelSegments: 2,
    curveSegments: 18,
  });
  wing.scale(0.88, 0.92, 1);
  wing.translate(0, 0, -0.05);
  const lines = [];
  for (let i = 0; i < 3; i++) {
    lines.push(bar(0.24 - i * 0.035, 0.018, 0.035, 0.2 + i * 0.035, 0.11 - i * 0.055, 0.02, 0.2));
  }
  return mergeTadpoleParts([wing, ...lines]);
}

export function buildAngelHaloGeometry() {
  const halo = new THREE.TorusGeometry(0.2, 0.028, 10, 32);
  halo.rotateX(Math.PI / 2);
  halo.translate(0, 0.72, 0);
  return prepareTadpoleGeo(halo);
}

/** 互換: 一体型シルエット */
export function buildAngelGeometry() {
  const body = buildAngelBodyGeometry();
  const wingR = buildAngelWingGeometry();
  const wingL = buildAngelWingGeometry().clone();
  wingL.scale(-1, 1, 1);
  wingL.translate(-0.04, 0.08, -0.1);
  wingR.translate(0.04, 0.08, -0.1);
  const halo = buildAngelHaloGeometry();
  return mergeTadpoleParts([body, wingL, wingR, halo]);
}

/**
 * @param {{
 *   buildGeometry: () => THREE.BufferGeometry,
 *   motion?: 'sway'|'spin'|'bob',
 *   pickColor?: (palette: string) => string,
 *   faceCamera?: boolean,
 * }} opts
 */
export function createFormBloom(opts) {
  const motion = opts.motion || 'sway';
  const pickColor = opts.pickColor || randomFlowerPetalColor;
  const faceCamera = !!opts.faceCamera;
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let mesh = null;
  let outlineMesh = null;
  let sparkleField = null;
  let fallField = null;
  let geo = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 64;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 140;
      this.maxSize = pickMarkSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.35 + Math.random() * 0.5;
      this.baseRot = faceCamera ? (Math.random() - 0.5) * 0.12 : (Math.random() - 0.5) * 0.45;
      this.tilt = faceCamera ? (Math.random() - 0.5) * 0.08 : (Math.random() - 0.5) * 0.3;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.55 + Math.random() * 0.45;
      this.windAmp = faceCamera ? 0.04 + Math.random() * 0.04 : 0.07 + Math.random() * 0.07;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.65 + Math.random() * 0.5;
      this.spinY = faceCamera ? 0.08 + Math.random() * 0.08 : 0.2 + Math.random() * 0.28;
      this.phaseY = Math.random() * Math.PI * 2;
      this.color = pickColor(palette);
      this.rgb = vividPetalRgb(hexToRgb(this.color));
      this.innerRgb = brightenRgb(this.rgb);
      this.lifetime = 0;
      this.maxLifetime = 4 + Math.random() * 4.5;
      this.phase = 'growing';
      this.opacity = 1;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * (faceCamera ? 0.06 : 0.1);
      this.sway = Math.sin(t * this.windSpeed + this.windPhase) * this.windAmp;
      this.spin = Math.sin(t * this.spinY + this.phaseY) * (motion === 'spin' ? 0.9 : faceCamera ? 0.08 : 0.35);
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
          if (Math.random() < dt * 3.5) this._shedShard();
          if (Math.random() < dt * 5) this._shedDust();
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
      for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size,
          y: this.y + (Math.random() - 0.5) * this.size,
          z: this.z + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 60,
          vy: -15 - Math.random() * 40,
          vz: (Math.random() - 0.5) * 40,
          size: this.size * 0.12 + Math.random() * 6,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 5,
          rgb: petalParticleRgb(this.rgb, 1.2),
          opacity: 1,
          glow: 1.4 + Math.random() * 0.3,
          kind: 'shard',
        });
      }
    }

    _shedDust() {
      for (let i = 0; i < 3 + Math.floor(Math.random() * 4); i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 0.5,
          y: this.y + (Math.random() - 0.5) * this.size * 0.5,
          z: this.z + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 80,
          vy: (Math.random() - 0.5) * 80 - 8,
          vz: (Math.random() - 0.5) * 50,
          size: 2 + Math.random() * 5,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 8,
          rgb: petalParticleRgb(this.innerRgb, 1.25),
          opacity: 1,
          glow: 1.5 + Math.random() * 0.3,
          kind: 'dust',
        });
      }
    }
  }

  function placeMark(mark, scaleMul = 1) {
    const pos = toWorld(mark.x, mark.y, mark.z, width, height);
    dummy.position.copy(pos);
    dummy.position.y += mark.bob * mark.size * (motion === 'bob' ? 1.4 : 1);
    dummy.position.x += mark.sway * mark.size * 0.3;
    dummy.rotation.set(
      mark.tilt + mark.sway * 0.7,
      mark.baseRot + mark.spin,
      mark.sway * 0.45,
    );
    const s = mark.size * scaleMul;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
  }

  function syncMeshes() {
    if (!mesh) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        dummy.position.set(0, 0, -4000);
        dummy.scale.set(0.001, 0.001, 0.001);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        outlineMesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, _color.setRGB(0, 0, 0));
      } else {
        placeMark(mark, 1);
        mesh.setMatrixAt(i, dummy.matrix);
        const c = displayColor(mark.rgb, 0.62 + mark.opacity * 0.28);
        mesh.setColorAt(i, _color.setRGB(c.r, c.g, c.b));
        placeMark(mark, 1.035);
        outlineMesh.setMatrixAt(i, dummy.matrix);
        const outline = displayColor(mark.rgb, 0.26);
        outlineMesh.setColorAt(i, _color.setRGB(outline.r * 0.55, outline.g * 0.5, outline.b * 0.75));
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    outlineMesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    if (outlineMesh.instanceColor) outlineMesh.instanceColor.needsUpdate = true;

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
        const twinkle = p.kind === 'dust' ? 0.9 + 0.1 * Math.sin(time * 8 + p.rot * 3) : 1;
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

      geo = opts.buildGeometry();
      geo.computeVertexNormals();

      mesh = new THREE.InstancedMesh(
        geo,
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.78,
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
        MAX,
      );
      mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
      mesh.frustumCulled = false;
      layer.add(mesh);

      outlineMesh = new THREE.InstancedMesh(
        geo,
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.BackSide,
          transparent: true,
          opacity: 0.2,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
        MAX,
      );
      outlineMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
      outlineMesh.frustumCulled = false;
      layer.add(outlineMesh);

      sparkleField = makePoints(80, 5);
      fallField = makePoints(700, 14);
      fallField.mat.opacity = 0.85;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(20, w, h)) spawn(x, y);
      primeGrowingMarks(marks);
      syncMeshes();
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
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 50);
        }
      }
      if (Math.random() < dt * 1.8 * (params.speed || 1)) {
        spawn(Math.random() * width, Math.random() * height);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) spawn(Math.random() * width, Math.random() * height);
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.vx += Math.sin(time * 2.5 + p.x * 0.008) * 18 * dt;
        p.vz += Math.cos(time * 2.2 + p.y * 0.01) * 12 * dt;
        p.rot += p.rotSpeed * dt;
        p.opacity -= dt * (p.kind === 'dust' ? 0.14 : 0.1);
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
      if (mesh) mesh.material.opacity = 0.76;
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
      return sampleMarksWorld(marks, count, width, height, spreadScreenCloud);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      geo?.dispose();
      mesh = null;
      outlineMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}

export function createHourglassBloom() {
  // 互換: 砂時計はネオン時計に置換（clockBloom）
  return createFormBloom({ buildGeometry: buildHourglassGeometry, motion: 'spin' });
}

/**
 * オタマ専用: 胴と尾を分離し、尾をプルプル揺らす
 */
export function createTadpoleBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let bodyMesh = null;
  let rimMesh = null;
  let coreMesh = null;
  let eyeMesh = null;
  let pupilMesh = null;
  let tailMesh = null;
  let sparkleField = null;
  let fallField = null;
  let bodyGeo = null;
  let rimGeo = null;
  let coreGeo = null;
  let eyeGeo = null;
  let pupilGeo = null;
  let tailGeo = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const _fwd = new THREE.Vector3();
  const _modelFwd = new THREE.Vector3(1, 0, 0);
  const _baseQuat = new THREE.Quaternion();
  const _wagQuat = new THREE.Quaternion();
  const _wagAxis = new THREE.Vector3(0, 0, 1);
  const _flipAxis = new THREE.Vector3(0, 1, 0);
  const Z_SPAN = 260;
  const MAX = 128;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * Z_SPAN;
      this.maxSize = pickTadpoleSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.4 + Math.random() * 0.45;
      // 進行方向: 3D 球面上の 360° ランダム
      const dir = randomUnitDir3();
      this.dirX = dir.x;
      this.dirY = dir.y;
      this.dirZ = dir.z;
      this.speed = 70 + Math.random() * 70;
      this.wagPhase = Math.random() * Math.PI * 2;
      this.wagSpeed = 28 + Math.random() * 12;
      this.tremblePhase = Math.random() * Math.PI * 2;
      this.trembleSpeed = 42 + Math.random() * 18;
      // 振り幅: 現在基準の 1/2・1/3・1/4 を個体ごとにランダム
      const wagScale = [0.5, 1 / 3, 0.25][Math.floor(Math.random() * 3)];
      this.wagAmp = (0.75 + Math.random() * 0.35) * wagScale;
      this.trembleAmp = (0.22 + Math.random() * 0.14) * wagScale;
      this.color = randomTadpoleCyberHex();
      this.rgb = cyberHexToRgb(this.color);
      this.innerRgb = {
        r: Math.min(255, this.rgb.r + 50),
        g: Math.min(255, this.rgb.g + 40),
        b: Math.min(255, this.rgb.b + 55),
      };
      this.lifetime = 0;
      this.maxLifetime = 8 + Math.random() * 5;
      this.phase = 'growing';
      this.opacity = 1;
      this.wag = 0;
    }

    update(dt, t) {
      this.lifetime += dt;
      // 上下ぷるぷる（体軸に対して尾を振る）
      const swim = Math.sin(t * this.wagSpeed + this.wagPhase) * this.wagAmp;
      const tremble =
        Math.sin(t * this.trembleSpeed + this.tremblePhase) * this.trembleAmp +
        Math.sin(t * this.trembleSpeed * 2.1 + this.tremblePhase * 1.4) * this.trembleAmp * 0.65 +
        Math.sin(t * this.trembleSpeed * 3.4 + this.tremblePhase * 0.6) * this.trembleAmp * 0.35;
      this.wag = swim + tremble;

      // 尾の振りに合わせて 3D 前進
      const thrust = 0.65 + Math.abs(this.wag) * 0.95;
      const step = this.speed * thrust * dt;
      this.x += this.dirX * step;
      this.y += this.dirY * step;
      this.z += this.dirZ * step;

      // 画面外・奥行き外で反対側へ
      const margin = 80;
      if (this.x < -margin) this.x = width + margin;
      if (this.x > width + margin) this.x = -margin;
      if (this.y < -margin) this.y = height + margin;
      if (this.y > height + margin) this.y = -margin;
      if (this.z < -Z_SPAN * 0.5) this.z = Z_SPAN * 0.5;
      if (this.z > Z_SPAN * 0.5) this.z = -Z_SPAN * 0.5;

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
          if (this.lifetime > this.maxLifetime * 0.6) this.phase = 'wilting';
          if (Math.random() < dt * 4.5) this._sparkTrail();
          break;
        case 'wilting':
          this.opacity -= dt * 0.25;
          if (Math.random() < dt * 5) this._shed();
          if (Math.random() < dt * 6) this._sparkTrail();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _shed() {
      for (let i = 0; i < 4 + Math.floor(Math.random() * 4); i++) {
        const neon = cyberHexToRgb(randomTadpoleCyberHex());
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size,
          y: this.y + (Math.random() - 0.5) * this.size,
          z: this.z + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 90,
          vy: -10 - Math.random() * 50,
          vz: (Math.random() - 0.5) * 55,
          rgb: {
            r: Math.round(neon.r + (255 - neon.r) * 0.72),
            g: Math.round(neon.g + (255 - neon.g) * 0.72),
            b: Math.round(neon.b + (255 - neon.b) * 0.72),
          },
          opacity: 1,
          glow: 1.55 + Math.random() * 0.7,
          kind: 'shard',
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }

    /** 泳ぎながらきらめきを撒く */
    _sparkTrail() {
      const neon = cyberHexToRgb(this.color);
      shards.push({
        x: this.x - this.dirX * this.size * 0.35 + (Math.random() - 0.5) * this.size * 0.4,
        y: this.y - this.dirY * this.size * 0.35 + (Math.random() - 0.5) * this.size * 0.4,
        z: this.z - this.dirZ * 12 + (Math.random() - 0.5) * 30,
        vx: -this.dirX * 20 + (Math.random() - 0.5) * 40,
        vy: -this.dirY * 20 + (Math.random() - 0.5) * 40,
        vz: -this.dirZ * 20 + (Math.random() - 0.5) * 30,
        rgb: {
          r: Math.round(neon.r + (255 - neon.r) * 0.78),
          g: Math.round(neon.g + (255 - neon.g) * 0.78),
          b: Math.round(neon.b + (255 - neon.b) * 0.78),
        },
        opacity: 1,
        glow: 1.7 + Math.random() * 0.7,
        kind: 'dust',
        twinkle: Math.random() * Math.PI * 2,
      });
    }
  }

  function hide(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.quaternion.identity();
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  /** モデル +X を進行方向（ワールド）に合わせ、局所 Z で尾を振る */
  function orientMark(mark, wagMul) {
    // 画面 y↓ → ワールド y↑
    _fwd.set(mark.dirX, -mark.dirY, mark.dirZ);
    if (_fwd.lengthSq() < 1e-8) _fwd.set(1, 0, 0);
    else _fwd.normalize();
    if (Math.abs(_fwd.x) > 0.999) {
      _baseQuat.identity();
      if (_fwd.x < 0) _baseQuat.setFromAxisAngle(_flipAxis, Math.PI);
    } else {
      _baseQuat.setFromUnitVectors(_modelFwd, _fwd);
    }
    _wagQuat.setFromAxisAngle(_wagAxis, mark.wag * wagMul);
    dummy.quaternion.copy(_baseQuat).multiply(_wagQuat);
  }

  function placeBody(mark, scaleMul = 1) {
    const pos = toWorld(mark.x, mark.y, mark.z, width, height);
    dummy.position.copy(pos);
    orientMark(mark, 0.12);
    const s = mark.size * scaleMul;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
  }

  function placeTail(mark, scaleMul = 1) {
    const pos = toWorld(mark.x, mark.y, mark.z, width, height);
    dummy.position.copy(pos);
    orientMark(mark, 1.35);
    const s = mark.size * scaleMul;
    const squash = 1 + Math.sin(time * mark.trembleSpeed + mark.tremblePhase) * 0.16
      + Math.sin(time * mark.trembleSpeed * 2.4 + mark.tremblePhase) * 0.08;
    dummy.scale.set(s * squash, s / Math.sqrt(Math.max(0.55, squash)), s);
    dummy.updateMatrix();
  }

  function syncMeshes() {
    if (!bodyMesh || !tailMesh || !eyeMesh || !pupilMesh) return;
    const shown = Math.min(marks.length, MAX);
    const allMeshes = [bodyMesh, rimMesh, coreMesh, eyeMesh, pupilMesh, tailMesh];
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        for (const m of allMeshes) hide(m, i);
        continue;
      }
      const c = cyberShowColor(mark.rgb, 0.95);
      const rimC = cyberShowColor(mark.innerRgb, 1.25);
      const coreC = cyberShowColor(mark.innerRgb, 1.1);
      const tailC = cyberShowColor(mark.rgb, 0.75);

      placeBody(mark, 1);
      bodyMesh.setMatrixAt(i, dummy.matrix);
      bodyMesh.setColorAt(i, _color.setRGB(c.r * 0.55, c.g * 0.7, Math.min(1, c.b * 0.95)));

      placeBody(mark, 1);
      rimMesh.setMatrixAt(i, dummy.matrix);
      rimMesh.setColorAt(i, _color.setRGB(rimC.r, rimC.g, rimC.b));

      placeBody(mark, 0.92);
      coreMesh.setMatrixAt(i, dummy.matrix);
      coreMesh.setColorAt(i, _color.setRGB(
        Math.min(1, coreC.r * 0.7 + 0.25),
        Math.min(1, coreC.g * 0.75 + 0.3),
        Math.min(1, coreC.b * 0.7 + 0.35),
      ));

      placeBody(mark, 1);
      eyeMesh.setMatrixAt(i, dummy.matrix);
      eyeMesh.setColorAt(i, _color.setRGB(0.82, 0.94, 1.0));

      placeBody(mark, 1);
      pupilMesh.setMatrixAt(i, dummy.matrix);
      pupilMesh.setColorAt(i, _color.setRGB(0.04, 0.06, 0.12));

      placeTail(mark, 1);
      tailMesh.setMatrixAt(i, dummy.matrix);
      tailMesh.setColorAt(i, _color.setRGB(tailC.r * 0.5, tailC.g * 0.65, Math.min(1, tailC.b * 0.9)));
    }
    for (const m of allMeshes) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.55 + 0.35 * Math.abs(Math.sin(time * 3.4 + s.phase));
        // ネオンを白寄りに（少し色味は残す）
        const wr = (s.rgb.r / 255) * 0.28 + 0.72;
        const wg = (s.rgb.g / 255) * 0.28 + 0.72;
        const wb = (s.rgb.b / 255) * 0.28 + 0.72;
        sparkleField.colors[i * 3] = wr * pulse;
        sparkleField.colors[i * 3 + 1] = wg * pulse;
        sparkleField.colors[i * 3 + 2] = wb * pulse;
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
        const [r0, g0, b0] = rgbToUnit(p.rgb);
        const r = r0 * 0.3 + 0.7;
        const g = g0 * 0.3 + 0.7;
        const b = b0 * 0.3 + 0.7;
        const twinkle = 0.7 + 0.3 * Math.abs(Math.sin(time * 9 + (p.twinkle || 0)));
        const glow = (p.glow || 1.6) * (0.55 + p.opacity * 0.45) * twinkle;
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
    marks.push(new Mark(x, y, currentPalette));
  }

  function spawnPair(x, y) {
    spawn(x, y);
    spawn(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 80);
  }

  function makeMat(opacity, additive = false) {
    return new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
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

      bodyGeo = buildTadpoleBodyGeometry();
      rimGeo = buildTadpoleRimGeometry();
      coreGeo = buildTadpoleCoreGeometry();
      eyeGeo = buildTadpoleEyeGeometry();
      pupilGeo = buildTadpolePupilGeometry();
      tailGeo = buildTadpoleTailGeometry();

      bodyMesh = new THREE.InstancedMesh(bodyGeo, makeMat(0.28, true), MAX);
      rimMesh = new THREE.InstancedMesh(rimGeo, makeMat(0.85, true), MAX);
      coreMesh = new THREE.InstancedMesh(coreGeo, makeMat(0.45, true), MAX);
      eyeMesh = new THREE.InstancedMesh(eyeGeo, makeMat(0.95, false), MAX);
      pupilMesh = new THREE.InstancedMesh(pupilGeo, makeMat(1, false), MAX);
      tailMesh = new THREE.InstancedMesh(tailGeo, makeMat(0.22, true), MAX);

      for (const m of [bodyMesh, rimMesh, coreMesh, eyeMesh, pupilMesh, tailMesh]) {
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
        m.frustumCulled = false;
        layer.add(m);
      }

      sparkleField = makePoints(80, 5);
      fallField = makePoints(700, 14);
      // パーティクルだけ加算で輝かせる（本体は通常合成のまま）
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = 0.7;
      fallField.mat.opacity = 0.65;
      sparkleField.mat.toneMapped = false;
      fallField.mat.toneMapped = false;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(40, w, h)) spawnPair(x, y);
      primeGrowingMarks(marks);
      syncMeshes();
      for (let i = 0; i < 70; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.08 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
          rgb: (() => {
            const n = cyberHexToRgb(randomTadpoleCyberHex());
            return {
              r: Math.round(n.r + (255 - n.r) * 0.75),
              g: Math.round(n.g + (255 - n.g) * 0.75),
              b: Math.round(n.b + (255 - n.b) * 0.75),
            };
          })(),
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
        const n = Math.min(4, Math.floor(pointer.velocity / 16) + 1);
        for (let i = 0; i < n; i++) {
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 50);
        }
      }
      if (Math.random() < dt * 3.6 * (params.speed || 1)) {
        spawnPair(Math.random() * width, Math.random() * height);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 8);
        for (let i = 0; i < n; i++) spawnPair(Math.random() * width, Math.random() * height);
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.opacity -= dt * 0.12;
        return p.opacity > 0.02 && p.y < height + 80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 60 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(40, Math.floor((params.particleCount || 1030) / 2)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 12; i++) {
        spawnPair(x + (Math.random() - 0.5) * 90, y + (Math.random() - 0.5) * 90);
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },

    samplePoints(count) {
      return sampleMarksWorld(marks, count, width, height, spreadScreenCloud);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      bodyGeo?.dispose();
      rimGeo?.dispose();
      coreGeo?.dispose();
      eyeGeo?.dispose();
      pupilGeo?.dispose();
      tailGeo?.dispose();
      bodyMesh = null;
      rimMesh = null;
      coreMesh = null;
      eyeMesh = null;
      pupilMesh = null;
      tailMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}

export function createBrainBloom() {
  return createFormBloom({ buildGeometry: buildBrainGeometry, motion: 'sway' });
}

/**
 * 天使専用: 羽ばたき + 浮上 + 立体配置
 */
export function createAngelBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let bodyMesh = null;
  let bodyOutline = null;
  let faceMesh = null;
  let faceHiMesh = null;
  let blushMesh = null;
  let wingLMesh = null;
  let wingRMesh = null;
  let haloMesh = null;
  let sparkleField = null;
  let fallField = null;
  let bodyGeo = null;
  let faceGeo = null;
  let faceHiGeo = null;
  let blushGeo = null;
  let wingGeo = null;
  let haloGeo = null;
  const root = new THREE.Object3D();
  const wingHoldL = new THREE.Object3D();
  const wingHoldR = new THREE.Object3D();
  const haloHold = new THREE.Object3D();
  root.add(wingHoldL, wingHoldR, haloHold);
  wingHoldL.position.set(-0.04, 0.1, -0.1);
  wingHoldR.position.set(0.04, 0.1, -0.1);
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 48;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 280;
      this.maxSize = pickMarkSize() * 0.92;
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.32 + Math.random() * 0.4;
      this.baseRot = (Math.random() - 0.5) * 0.35;
      this.tilt = (Math.random() - 0.5) * 0.4;
      this.yaw = (Math.random() - 0.5) * 0.5;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.7 + Math.random() * 0.5;
      this.windAmp = 0.06 + Math.random() * 0.05;
      this.flapPhase = Math.random() * Math.PI * 2;
      this.flapSpeed = 4.2 + Math.random() * 2.2;
      this.riseSpeed = 55 + Math.random() * 45;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 1.1 + Math.random() * 0.7;
      this.spinY = 0.25 + Math.random() * 0.2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.color = randomFlowerPetalColor(palette);
      this.rgb = vividPetalRgb(hexToRgb(this.color));
      this.innerRgb = brightenRgb(this.rgb);
      this.lifetime = 0;
      this.maxLifetime = 7 + Math.random() * 5;
      this.phase = 'growing';
      this.opacity = 1;
      this.flap = 0;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.flap = Math.sin(t * this.flapSpeed + this.flapPhase) * 0.55;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 18;
      this.sway = Math.sin(t * this.windSpeed + this.windPhase) * this.windAmp;
      this.spin = Math.sin(t * this.spinY + this.phaseY) * 0.35;

      // 画面上方向へ浮上（y は下向きなので減算）
      const lift = this.riseSpeed * (0.75 + Math.abs(this.flap) * 0.55);
      this.y -= lift * dt;
      this.x += Math.sin(t * 0.9 + this.flapPhase) * 18 * dt;
      this.z += Math.cos(t * 0.7 + this.bobPhase) * 12 * dt;

      if (this.y < -100) {
        this.y = height + 80;
        this.x = Math.random() * width;
        this.z = (Math.random() - 0.5) * 280;
      }

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
          if (Math.random() < dt * 5.5) this._sparkTrail();
          if (this.lifetime > this.maxLifetime * 0.65) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.22;
          if (Math.random() < dt * 6) this._shed();
          if (Math.random() < dt * 4) this._sparkTrail();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _sparkTrail() {
      // 顔（上部）を避け、胴〜羽まわりに放出
      const side = Math.random() < 0.5 ? -1 : 1;
      shards.push({
        x: this.x + side * this.size * (0.35 + Math.random() * 0.55),
        y: this.y + this.size * (0.2 + Math.random() * 0.55),
        z: this.z - 30 - Math.random() * 40,
        vx: side * (15 + Math.random() * 25) + (Math.random() - 0.5) * 20,
        vy: 10 + Math.random() * 30,
        vz: (Math.random() - 0.5) * 25,
        rgb: { r: 255, g: 255, b: 255 },
        opacity: 1,
        glow: 2.15 + Math.random() * 0.95,
        kind: 'dust',
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    _shed() {
      for (let i = 0; i < 5; i++) {
        const side = Math.random() < 0.5 ? -1 : 1;
        shards.push({
          x: this.x + side * this.size * (0.2 + Math.random() * 0.6),
          y: this.y + this.size * (0.25 + Math.random() * 0.5),
          z: this.z - 20 - Math.random() * 40,
          vx: (Math.random() - 0.5) * 55,
          vy: -45 - Math.random() * 45,
          vz: (Math.random() - 0.5) * 45,
          rgb: { r: 255, g: 255, b: 255 },
          opacity: 1,
          glow: 2.35 + Math.random() * 0.95,
          kind: 'shard',
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 4,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
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
    const pos = toWorld(mark.x, mark.y, mark.z + mark.bob, width, height);
    root.position.copy(pos);
    root.position.x += mark.sway * mark.size * 0.35;
    root.rotation.set(
      mark.tilt + mark.sway * 0.6,
      mark.yaw + mark.spin,
      mark.baseRot + mark.sway * 0.4,
    );
    const s = mark.size;
    root.scale.set(s, s, s * 1.75);
    const flap = mark.flap;
    wingHoldL.rotation.set(0.12 + flap * 0.15, 0.55 + flap, 0.1 + flap * 0.08);
    wingHoldR.rotation.set(0.12 + flap * 0.15, -0.55 - flap, -0.1 - flap * 0.08);
    wingHoldL.scale.set(-1, 1, 1);
    wingHoldR.scale.set(1, 1, 1);
    haloHold.rotation.z = time * 0.8 + mark.flapPhase;
    root.updateMatrixWorld(true);
  }

  function syncMeshes() {
    if (!bodyMesh || !faceMesh || !wingLMesh || !wingRMesh || !haloMesh) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        hide(bodyMesh, i);
        hide(bodyOutline, i);
        hide(faceMesh, i);
        hide(faceHiMesh, i);
        hide(blushMesh, i);
        hide(wingLMesh, i);
        hide(wingRMesh, i);
        hide(haloMesh, i);
        continue;
      }
      poseRoot(mark);
      const c = displayColor(mark.rgb, 0.85 + mark.opacity * 0.2);
      const bright = displayColor(mark.innerRgb, 1.05 + mark.opacity * 0.15);

      dummy.matrix.copy(root.matrixWorld);
      bodyMesh.setMatrixAt(i, dummy.matrix);
      bodyMesh.setColorAt(i, _color.setRGB(c.r, c.g, c.b));

      const sx = root.scale.x;
      const sy = root.scale.y;
      const sz = root.scale.z;
      root.scale.set(sx * 1.035, sy * 1.035, sz * 1.035);
      root.updateMatrixWorld(true);
      dummy.matrix.copy(root.matrixWorld);
      bodyOutline.setMatrixAt(i, dummy.matrix);
      bodyOutline.setColorAt(i, _color.setRGB(c.r * 0.25, c.g * 0.28, c.b * 0.4));
      root.scale.set(sx, sy, sz);
      root.updateMatrixWorld(true);

      dummy.matrix.copy(wingHoldL.matrixWorld);
      wingLMesh.setMatrixAt(i, dummy.matrix);
      wingLMesh.setColorAt(i, _color.setRGB(bright.r, bright.g, bright.b));

      dummy.matrix.copy(wingHoldR.matrixWorld);
      wingRMesh.setMatrixAt(i, dummy.matrix);
      wingRMesh.setColorAt(i, _color.setRGB(bright.r, bright.g, bright.b));

      dummy.matrix.copy(root.matrixWorld);
      haloMesh.setMatrixAt(i, dummy.matrix);
      haloMesh.setColorAt(i, _color.setRGB(
        Math.min(1, bright.r * 1.15),
        Math.min(1, bright.g * 1.1),
        Math.min(1, bright.b * 0.9),
      ));

      // 顔は体色と独立（弧の目・口のみ。ほほ紅は出さない）
      dummy.matrix.copy(root.matrixWorld);
      faceMesh.setMatrixAt(i, dummy.matrix);
      faceMesh.setColorAt(i, _color.setRGB(0.12, 0.1, 0.14));
      hide(faceHiMesh, i);
      hide(blushMesh, i);
    }
    for (const m of [bodyMesh, bodyOutline, faceMesh, faceHiMesh, blushMesh, wingLMesh, wingRMesh, haloMesh]) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.78 + 0.72 * Math.abs(Math.sin(time * 3.4 + s.phase));
        sparkleField.colors[i * 3] = pulse;
        sparkleField.colors[i * 3 + 1] = pulse;
        sparkleField.colors[i * 3 + 2] = pulse;
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
        const twinkle = 0.65 + 0.32 * Math.abs(Math.sin(time * 5 + (p.twinkle || 0)));
        const glow = (p.glow || 2.2) * (0.58 + p.opacity * 0.52) * twinkle;
        fallField.colors[i * 3] = glow;
        fallField.colors[i * 3 + 1] = glow;
        fallField.colors[i * 3 + 2] = glow;
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  function makeMat(opacity, back = false) {
    return new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity,
      side: back ? THREE.BackSide : THREE.DoubleSide,
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

      bodyGeo = buildAngelBodyGeometry();
      faceGeo = buildAngelFaceGeometry();
      faceHiGeo = buildAngelFaceHiGeometry();
      blushGeo = buildAngelBlushGeometry();
      wingGeo = buildAngelWingGeometry();
      haloGeo = buildAngelHaloGeometry();
      bodyMesh = new THREE.InstancedMesh(bodyGeo, makeMat(0.55), MAX);
      bodyOutline = new THREE.InstancedMesh(bodyGeo, makeMat(0.18, true), MAX);
      const faceMat = makeMat(0.82);
      faceMat.polygonOffset = true;
      faceMat.polygonOffsetFactor = -2;
      faceMat.polygonOffsetUnits = -2;
      faceMesh = new THREE.InstancedMesh(faceGeo, faceMat, MAX);
      faceHiMesh = new THREE.InstancedMesh(faceHiGeo, makeMat(0.7), MAX);
      blushMesh = new THREE.InstancedMesh(blushGeo, makeMat(0.35), MAX);
      wingLMesh = new THREE.InstancedMesh(wingGeo, makeMat(0.42), MAX);
      wingRMesh = new THREE.InstancedMesh(wingGeo, makeMat(0.42), MAX);
      haloMesh = new THREE.InstancedMesh(haloGeo, makeMat(0.7), MAX);
      for (const m of [bodyMesh, bodyOutline, faceMesh, faceHiMesh, blushMesh, wingLMesh, wingRMesh, haloMesh]) {
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
        m.frustumCulled = false;
        layer.add(m);
      }

      sparkleField = makePoints(120, 12);
      fallField = makePoints(700, 26);
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = 0.58;
      fallField.mat.opacity = 0.58;
      sparkleField.mat.toneMapped = false;
      fallField.mat.toneMapped = false;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(20, w, h, 0.06, [h * 0.25, h * 0.95])) spawn(x, y);
      primeGrowingMarks(marks);
      syncMeshes();
      for (let i = 0; i < 100; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.12 + Math.random() * 0.32),
          phase: Math.random() * Math.PI * 2,
          rgb: { r: 255, g: 255, b: 255 },
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
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 40);
        }
      }
      if (Math.random() < dt * 1.4 * (params.speed || 1)) {
        spawn(Math.random() * width, height + 40 + Math.random() * 80);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 3);
        for (let i = 0; i < n; i++) spawn(Math.random() * width, height + 20);
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy -= 25 * dt;
        p.opacity -= dt * 0.12;
        return p.opacity > 0.02 && p.y > -80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 70 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(16, Math.floor((params.particleCount || 1030) / 5)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 5; i++) spawn(x + (Math.random() - 0.5) * 70, y + (Math.random() - 0.5) * 50);
    },
    onPointerMove() {},
    onPointerUp() {},

    setPalette(name) {
      currentPalette = name;
    },

    samplePoints(count) {
      return sampleMarksWorld(marks, count, width, height, spreadScreenCloud);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      bodyGeo?.dispose();
      faceGeo?.dispose();
      faceHiGeo?.dispose();
      blushGeo?.dispose();
      wingGeo?.dispose();
      haloGeo?.dispose();
      bodyMesh = null;
      bodyOutline = null;
      faceMesh = null;
      faceHiMesh = null;
      blushMesh = null;
      wingLMesh = null;
      wingRMesh = null;
      haloMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
