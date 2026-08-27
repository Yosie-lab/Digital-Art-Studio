import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const DEPTH = 0.11;
const EXTRUDE_OPTS = { depth: DEPTH, bevelEnabled: false, curveSegments: 16 };
const HEAD_RX = 0.132;
const HEAD_RY = 0.094;
const HEAD_TILT = -0.4;
const STEM_W = 0.036;
const STEM_LEN = 0.94;

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
    const fallback = new THREE.BoxGeometry(0.2, 0.2, DEPTH);
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
  return new THREE.ExtrudeGeometry(shape, EXTRUDE_OPTS);
}

function strokeTube(points, radius = 0.042, tubular = 40) {
  const pts = points.map(([x, y]) => new THREE.Vector3(x, y, 0));
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), tubular, radius, 8, false);
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
  hole.absellipse(cx, cy, HEAD_RX * 0.62, HEAD_RY * 0.62, 0, Math.PI * 2, true, HEAD_TILT);
  s.holes.push(hole);
  return extrudeShape(s);
}

function noteStemUp(hx = -0.04, hy = -0.34) {
  const stemX = hx + 0.108;
  const stemBase = hy + 0.05;
  const stemTop = stemBase + STEM_LEN;
  return {
    stemX,
    stemTop,
    parts: [
      noteHeadFilled(hx, hy),
      bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
    ],
  };
}

function flagCurve(stemX, stemTop, drop = 0) {
  const y = stemTop - drop;
  return strokeTube([
    [stemX + STEM_W * 0.45, y],
    [stemX + 0.09, y - 0.05],
    [stemX + 0.19, y - 0.18],
    [stemX + 0.24, y - 0.31],
    [stemX + 0.17, y - 0.40],
    [stemX + 0.08, y - 0.36],
  ], STEM_W * 0.92, 28);
}

function noteWithFlags(flagCount) {
  const n = noteStemUp();
  const parts = [...n.parts];
  for (let i = 0; i < flagCount; i++) parts.push(flagCurve(n.stemX, n.stemTop, i * 0.14));
  return finalizeGeometry(parts);
}

function letterP(xOff = 0) {
  return [
    bar(0.044, 0.88, DEPTH, -0.135 + xOff, 0, 0, -0.05),
    strokeTube([
      [-0.095 + xOff, 0.02], [0.02 + xOff, -0.30], [0.20 + xOff, -0.24],
      [0.18 + xOff, -0.06], [0.02 + xOff, 0.04], [-0.095 + xOff, 0.02],
    ], 0.038, 32),
  ];
}

function letterF(xOff = 0) {
  return [
    bar(0.044, 0.92, DEPTH, 0.105 + xOff, 0, 0, -0.06),
    bar(0.48, 0.046, DEPTH, -0.08 + xOff, 0.42, 0, -0.04),
    bar(0.32, 0.042, DEPTH, -0.02 + xOff, 0.08, 0, -0.04),
  ];
}

function letterM(xOff = 0) {
  return [
    bar(0.042, 0.82, DEPTH, -0.16 + xOff, 0.02, 0, -0.04),
    bar(0.042, 0.82, DEPTH, 0.16 + xOff, 0.02, 0, 0.04),
    bar(0.18, 0.042, DEPTH, xOff, 0.38, 0, 0.35),
  ];
}

function dynPair(left, right, spacing = 0.26) {
  return finalizeGeometry([...left(-spacing * 0.5), ...right(spacing * 0.5)]);
}

/* ——— シンプルな記号のみ（クレフ・付点・連符・装飾系は除外） ——— */

function buildWholeGeometry() {
  return finalizeGeometry([noteHeadOpen(-0.04, -0.02)]);
}

function buildQuarterGeometry() {
  return finalizeGeometry(noteStemUp().parts);
}

function buildHalfGeometry() {
  const hx = -0.04;
  const hy = -0.34;
  const stemX = hx + 0.108;
  const stemBase = hy + 0.05;
  return finalizeGeometry([
    noteHeadOpen(hx, hy),
    bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
  ]);
}

function buildEighthGeometry() {
  return noteWithFlags(1);
}

function buildSixteenthGeometry() {
  return noteWithFlags(2);
}

function buildWholeRestGeometry() {
  return finalizeGeometry([
    bar(0.36, 0.12, DEPTH, 0, 0.32, 0),
    bar(0.52, 0.028, DEPTH, 0, 0.38, 0),
  ]);
}

function buildHalfRestGeometry() {
  return finalizeGeometry([
    bar(0.36, 0.12, DEPTH, 0, -0.32, 0),
    bar(0.52, 0.028, DEPTH, 0, -0.38, 0),
  ]);
}

function buildQuarterRestGeometry() {
  return finalizeGeometry([
    strokeTube([
      [0.04, 0.42], [-0.02, 0.28], [0.06, 0.12], [-0.04, -0.04], [0.04, -0.22], [-0.02, -0.38],
    ], 0.036, 28),
  ]);
}

function buildEighthRestGeometry() {
  return finalizeGeometry([
    strokeTube([
      [-0.06, 0.38], [0.02, 0.42], [0.10, 0.28], [0.06, 0.08], [-0.02, -0.02], [-0.08, -0.28],
    ], 0.038, 28),
  ]);
}

function buildSharpGeometry() {
  const slant = 0.18;
  const vw = 0.038;
  return finalizeGeometry([
    bar(vw, 1.02, DEPTH, -0.155, 0, 0),
    bar(vw, 1.02, DEPTH, 0.155, 0, 0),
    bar(0.44, vw, DEPTH, 0, 0.165, 0, slant),
    bar(0.44, vw, DEPTH, 0, -0.165, 0, slant),
  ]);
}

function buildFlatGeometry() {
  const stem = bar(0.038, 1.0, DEPTH, -0.145, 0, 0);
  const bowl = new THREE.Shape();
  bowl.absellipse(-0.02, -0.365, 0.115, 0.105, 0, Math.PI * 2, false, 0.05);
  const loop = strokeTube([
    [-0.145, 0.22], [-0.06, 0.34], [0.06, 0.28], [-0.145, 0.22],
  ], 0.038, 24);
  return finalizeGeometry([stem, extrudeShape(bowl), loop]);
}

function buildNaturalGeometry() {
  const w = 0.038;
  return finalizeGeometry([
    bar(w, 0.50, DEPTH, -0.115, 0.22, 0),
    bar(w, 0.50, DEPTH, 0.115, -0.22, 0),
    bar(0.27, w, DEPTH, 0, 0.455, 0),
    bar(0.27, w, DEPTH, 0, -0.455, 0),
  ]);
}

function buildPianoGeometry() {
  return finalizeGeometry(letterP(0));
}

function buildForteGeometry() {
  return finalizeGeometry(letterF(0));
}

function buildMezzoPianoGeometry() {
  return finalizeGeometry([...letterM(-0.14), ...letterP(0.14)]);
}

function buildMezzoForteGeometry() {
  return finalizeGeometry([...letterM(-0.14), ...letterF(0.14)]);
}

function buildPianissimoGeometry() {
  return dynPair(letterP, letterP);
}

function buildFortissimoGeometry() {
  return dynPair(letterF, letterF);
}

/** 読みやすく安定した18種 */
export const NOTE_IDS = [
  'whole', 'quarter', 'half', 'eighth', 'sixteenth',
  'wholeRest', 'halfRest', 'quarterRest', 'eighthRest',
  'sharp', 'flat', 'natural',
  'piano', 'forte', 'mezzoPiano', 'mezzoForte', 'pianissimo', 'fortissimo',
];

export const NOTE_BUILDERS = {
  whole: buildWholeGeometry,
  quarter: buildQuarterGeometry,
  half: buildHalfGeometry,
  eighth: buildEighthGeometry,
  sixteenth: buildSixteenthGeometry,
  wholeRest: buildWholeRestGeometry,
  halfRest: buildHalfRestGeometry,
  quarterRest: buildQuarterRestGeometry,
  eighthRest: buildEighthRestGeometry,
  sharp: buildSharpGeometry,
  flat: buildFlatGeometry,
  natural: buildNaturalGeometry,
  piano: buildPianoGeometry,
  forte: buildForteGeometry,
  mezzoPiano: buildMezzoPianoGeometry,
  mezzoForte: buildMezzoForteGeometry,
  pianissimo: buildPianissimoGeometry,
  fortissimo: buildFortissimoGeometry,
};

export function pickNoteSymbol() {
  return NOTE_IDS[Math.floor(Math.random() * NOTE_IDS.length)];
}
