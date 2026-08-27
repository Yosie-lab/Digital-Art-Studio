import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * 参照画像の 12 種のみ（曖昧な記号は作らない）
 * 1 ト音記号  2 シャープ  3 フラット  4 ナチュラル
 * 5 四分音符  6 二分音符  7 フォルテ  8 ピアノ
 * 9 八分音符  10 十六分音符  11 連桁八分  12 連桁十六分
 */

export const DEPTH = 0.16;
const EXTRUDE = {
  depth: DEPTH,
  bevelEnabled: true,
  bevelThickness: 0.018,
  bevelSize: 0.012,
  bevelSegments: 2,
  curveSegments: 20,
};
const HEAD_RX = 0.16;
const HEAD_RY = 0.115;
const HEAD_TILT = -0.42;
const STEM_W = 0.038;
const STEM_LEN = 1.05;

function bar(w, h, d = DEPTH, x = 0, y = 0, z = 0, rotZ = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotZ) g.rotateZ(rotZ);
  g.translate(x, y, z);
  return g;
}

function prepareForMerge(geometry) {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  geo.computeVertexNormals();
  const count = geo.attributes.position.count;
  if (!geo.attributes.uv) {
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(count * 2), 2));
  }
  return geo;
}

export function finalizeGeometry(parts) {
  const prepared = parts.filter(Boolean).map(prepareForMerge);
  if (prepared.length === 0) {
    const fallback = new THREE.BoxGeometry(0.25, 0.25, DEPTH);
    fallback.center();
    return fallback;
  }
  if (prepared.length === 1) {
    prepared[0].center();
    prepared[0].computeVertexNormals();
    return prepared[0];
  }
  const g = mergeGeometries(prepared, false);
  if (!g) {
    prepared[0].center();
    return prepared[0];
  }
  g.center();
  g.computeVertexNormals();
  return g;
}

function extrudeShape(shape) {
  return new THREE.ExtrudeGeometry(shape, EXTRUDE);
}

function strokeTube(points, radius = 0.04, tubular = 48) {
  const pts = points.map(([x, y]) => new THREE.Vector3(x, y, 0));
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5), tubular, radius, 8, false);
}

function noteHeadFilled(cx, cy) {
  const s = new THREE.Shape();
  s.absellipse(cx, cy, HEAD_RX, HEAD_RY, 0, Math.PI * 2, false, HEAD_TILT);
  return extrudeShape(s);
}

function noteHeadOpen(cx, cy) {
  const s = new THREE.Shape();
  s.absellipse(cx, cy, HEAD_RX, HEAD_RY, 0, Math.PI * 2, false, HEAD_TILT);
  const hole = new THREE.Path();
  hole.absellipse(cx, cy, HEAD_RX * 0.55, HEAD_RY * 0.55, 0, Math.PI * 2, true, HEAD_TILT);
  s.holes.push(hole);
  return extrudeShape(s);
}

/** 符頭右から上へ伸びる符干 */
function stemUpParts(hx, hy) {
  const stemX = hx + HEAD_RX * 0.7;
  const stemBase = hy + HEAD_RY * 0.25;
  const stemTop = stemBase + STEM_LEN;
  return {
    stemX,
    stemTop,
    stemBase,
    parts: [
      noteHeadFilled(hx, hy),
      bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
    ],
  };
}

/** 八分・十六分の旗（はっきりしたフック） */
function flagShape(stemX, stemTop, drop = 0) {
  const y = stemTop - drop;
  const s = new THREE.Shape();
  s.moveTo(stemX + STEM_W * 0.45, y);
  s.quadraticCurveTo(stemX + 0.22, y - 0.02, stemX + 0.34, y - 0.18);
  s.quadraticCurveTo(stemX + 0.38, y - 0.34, stemX + 0.28, y - 0.48);
  s.quadraticCurveTo(stemX + 0.2, y - 0.52, stemX + 0.16, y - 0.4);
  s.quadraticCurveTo(stemX + 0.24, y - 0.28, stemX + 0.18, y - 0.14);
  s.lineTo(stemX + STEM_W * 0.45, y - 0.1);
  s.closePath();
  return extrudeShape(s);
}

/** ——— 1. ト音記号 ——— */
function buildTrebleClefGeometry() {
  // 縦の主線 + 上部ループ + 下部スパイラル（読めるシルエット優先）
  const spine = strokeTube([
    [0.02, 0.72],
    [0.0, 0.35],
    [-0.02, 0.0],
    [0.0, -0.35],
    [0.04, -0.55],
  ], 0.045, 40);

  const upperLoop = strokeTube([
    [0.02, 0.55],
    [0.18, 0.62],
    [0.22, 0.48],
    [0.1, 0.38],
    [-0.02, 0.42],
    [0.0, 0.55],
  ], 0.042, 36);

  const midCurl = strokeTube([
    [0.0, 0.2],
    [0.16, 0.12],
    [0.2, -0.05],
    [0.08, -0.18],
    [-0.08, -0.1],
    [-0.12, 0.08],
    [-0.02, 0.18],
  ], 0.042, 44);

  const bottomSpiral = strokeTube([
    [0.04, -0.4],
    [0.16, -0.48],
    [0.1, -0.62],
    [-0.04, -0.58],
    [-0.08, -0.42],
    [0.02, -0.38],
  ], 0.04, 36);

  // 中央の「G」巻き込みを太く見せる塗り
  const belly = new THREE.Shape();
  belly.absellipse(0.04, -0.02, 0.11, 0.14, 0, Math.PI * 2, false, 0.2);
  const bellyHole = new THREE.Path();
  bellyHole.absellipse(0.04, -0.02, 0.045, 0.06, 0, Math.PI * 2, true, 0.2);
  belly.holes.push(bellyHole);

  return finalizeGeometry([spine, upperLoop, midCurl, bottomSpiral, extrudeShape(belly)]);
}

/** ——— 2. シャープ ——— */
function buildSharpGeometry() {
  const vw = 0.048;
  const hw = 0.052;
  return finalizeGeometry([
    bar(vw, 1.12, DEPTH, -0.17, 0, 0, 0.06),
    bar(vw, 1.12, DEPTH, 0.17, 0, 0, 0.06),
    bar(0.56, hw, DEPTH, 0, 0.2, 0, 0.28),
    bar(0.56, hw, DEPTH, 0, -0.2, 0, 0.28),
  ]);
}

/** ——— 3. フラット ——— */
function buildFlatGeometry() {
  const stem = bar(0.048, 1.15, DEPTH, -0.16, 0.05, 0);
  const bowl = new THREE.Shape();
  bowl.moveTo(-0.16, 0.12);
  bowl.quadraticCurveTo(0.18, 0.38, 0.2, 0.02);
  bowl.quadraticCurveTo(0.18, -0.32, -0.16, -0.48);
  bowl.lineTo(-0.16, -0.3);
  bowl.quadraticCurveTo(0.04, -0.2, 0.06, 0.0);
  bowl.quadraticCurveTo(0.04, 0.18, -0.16, 0.0);
  bowl.closePath();
  return finalizeGeometry([stem, extrudeShape(bowl)]);
}

/** ——— 4. ナチュラル ——— */
function buildNaturalGeometry() {
  const w = 0.048;
  return finalizeGeometry([
    bar(w, 0.62, DEPTH, -0.14, 0.28, 0),
    bar(w, 0.62, DEPTH, 0.14, -0.28, 0),
    bar(0.36, w, DEPTH, 0, 0.18, 0, 0.12),
    bar(0.36, w, DEPTH, 0, -0.18, 0, 0.12),
  ]);
}

/** ——— 5. 四分音符 ——— */
function buildQuarterGeometry() {
  return finalizeGeometry(stemUpParts(-0.04, -0.38).parts);
}

/** ——— 6. 二分音符 ——— */
function buildHalfGeometry() {
  const hx = -0.04;
  const hy = -0.38;
  const stemX = hx + HEAD_RX * 0.7;
  const stemBase = hy + HEAD_RY * 0.25;
  return finalizeGeometry([
    noteHeadOpen(hx, hy),
    bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
  ]);
}

/** ——— 7. フォルテ f ——— */
function buildForteGeometry() {
  const x = 0.06;
  return finalizeGeometry([
    bar(0.055, 1.05, DEPTH, x, 0, 0, -0.12),
    bar(0.55, 0.058, DEPTH, -0.1, 0.38, 0, -0.1),
    bar(0.38, 0.052, DEPTH, -0.02, 0.05, 0, -0.1),
    strokeTube([[x + 0.02, 0.48], [x + 0.12, 0.58], [x + 0.04, 0.64]], 0.036, 14),
  ]);
}

/** ——— 8. ピアノ p ——— */
function buildPianoGeometry() {
  const x = -0.1;
  const stem = bar(0.055, 1.0, DEPTH, x, -0.02, 0, -0.1);
  const bowl = new THREE.Shape();
  bowl.moveTo(x, 0.18);
  bowl.quadraticCurveTo(x + 0.38, 0.28, x + 0.4, -0.02);
  bowl.quadraticCurveTo(x + 0.38, -0.32, x, -0.28);
  bowl.lineTo(x, -0.14);
  bowl.quadraticCurveTo(x + 0.22, -0.16, x + 0.24, -0.02);
  bowl.quadraticCurveTo(x + 0.22, 0.12, x, 0.08);
  bowl.closePath();
  return finalizeGeometry([stem, extrudeShape(bowl)]);
}

/** ——— 9. 八分音符 ——— */
function buildEighthGeometry() {
  const n = stemUpParts(-0.04, -0.38);
  return finalizeGeometry([...n.parts, flagShape(n.stemX, n.stemTop, 0)]);
}

/** ——— 10. 十六分音符 ——— */
function buildSixteenthGeometry() {
  const n = stemUpParts(-0.04, -0.38);
  return finalizeGeometry([
    ...n.parts,
    flagShape(n.stemX, n.stemTop, 0),
    flagShape(n.stemX, n.stemTop, 0.18),
  ]);
}

/** 連桁用: 2 音 + ビーム */
function beamedPair(beamCount) {
  const gap = 0.48;
  const hy = -0.38;
  const hx1 = -gap * 0.5;
  const hx2 = gap * 0.5;
  const a = stemUpParts(hx1, hy);
  const b = stemUpParts(hx2, hy);
  const beamH = 0.07;
  const beamY0 = Math.min(a.stemTop, b.stemTop) - 0.04;
  const parts = [...a.parts, ...b.parts];
  for (let i = 0; i < beamCount; i++) {
    const y = beamY0 - i * 0.14;
    parts.push(bar(gap + STEM_W, beamH, DEPTH, 0, y, 0, 0.04));
  }
  return finalizeGeometry(parts);
}

/** ——— 11. 連桁の八分音符 ——— */
function buildBeamedEighthGeometry() {
  return beamedPair(1);
}

/** ——— 12. 連桁の十六分音符 ——— */
function buildBeamedSixteenthGeometry() {
  return beamedPair(2);
}

export const NOTE_IDS = [
  'trebleClef',
  'sharp',
  'flat',
  'natural',
  'quarter',
  'half',
  'forte',
  'piano',
  'eighth',
  'sixteenth',
  'beamedEighth',
  'beamedSixteenth',
];

export const NOTE_BUILDERS = {
  trebleClef: buildTrebleClefGeometry,
  sharp: buildSharpGeometry,
  flat: buildFlatGeometry,
  natural: buildNaturalGeometry,
  quarter: buildQuarterGeometry,
  half: buildHalfGeometry,
  forte: buildForteGeometry,
  piano: buildPianoGeometry,
  eighth: buildEighthGeometry,
  sixteenth: buildSixteenthGeometry,
  beamedEighth: buildBeamedEighthGeometry,
  beamedSixteenth: buildBeamedSixteenthGeometry,
};

export function pickNoteSymbol() {
  return NOTE_IDS[Math.floor(Math.random() * NOTE_IDS.length)];
}
