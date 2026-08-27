import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** 薄い押し出し＝楽譜アイコン風 */
export const DEPTH = 0.055;
const EXTRUDE_OPTS = { depth: DEPTH, bevelEnabled: false, curveSegments: 18 };
const HEAD_RX = 0.145;
const HEAD_RY = 0.105;
const HEAD_TILT = -0.45;
const STEM_W = 0.032;
const STEM_LEN = 0.98;

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

function strokeTube(points, radius = 0.034, tubular = 36) {
  const pts = points.map(([x, y]) => new THREE.Vector3(x, y, 0));
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), tubular, radius, 8, false);
}

/** 付点は符頭の右（符干側の外） */
function augDot(hx, hy) {
  const s = new THREE.Shape();
  s.absellipse(hx + HEAD_RX + 0.09, hy, 0.038, 0.038, 0, Math.PI * 2, false, 0);
  return extrudeShape(s);
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
  hole.absellipse(cx, cy, HEAD_RX * 0.58, HEAD_RY * 0.58, 0, Math.PI * 2, true, HEAD_TILT);
  s.holes.push(hole);
  return extrudeShape(s);
}

function noteStemUp(hx = -0.02, hy = -0.36) {
  const stemX = hx + HEAD_RX * 0.72;
  const stemBase = hy + HEAD_RY * 0.35;
  const stemTop = stemBase + STEM_LEN;
  return {
    stemX,
    stemTop,
    hx,
    hy,
    parts: [
      noteHeadFilled(hx, hy),
      bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
    ],
  };
}

/** 8分・16分の旗（楽譜の旗シルエット） */
function flagShape(stemX, stemTop, drop = 0) {
  const y = stemTop - drop;
  const s = new THREE.Shape();
  s.moveTo(stemX + STEM_W * 0.5, y);
  s.quadraticCurveTo(stemX + 0.16, y - 0.02, stemX + 0.26, y - 0.14);
  s.quadraticCurveTo(stemX + 0.30, y - 0.26, stemX + 0.22, y - 0.38);
  s.quadraticCurveTo(stemX + 0.16, y - 0.42, stemX + 0.12, y - 0.34);
  s.quadraticCurveTo(stemX + 0.18, y - 0.22, stemX + 0.12, y - 0.10);
  s.lineTo(stemX + STEM_W * 0.5, y - 0.08);
  s.closePath();
  return extrudeShape(s);
}

function noteWithFlags(flagCount, dotted = false) {
  const n = noteStemUp();
  const parts = [...n.parts];
  for (let i = 0; i < flagCount; i++) parts.push(flagShape(n.stemX, n.stemTop, i * 0.16));
  if (dotted) parts.push(augDot(n.hx, n.hy));
  return finalizeGeometry(parts);
}

function letterP(xOff = 0) {
  const stem = bar(0.048, 0.9, DEPTH, -0.12 + xOff, 0, 0, -0.08);
  const bowl = new THREE.Shape();
  bowl.moveTo(-0.12 + xOff, 0.12);
  bowl.quadraticCurveTo(0.18 + xOff, 0.18, 0.2 + xOff, -0.08);
  bowl.quadraticCurveTo(0.18 + xOff, -0.32, -0.12 + xOff, -0.28);
  bowl.lineTo(-0.12 + xOff, -0.18);
  bowl.quadraticCurveTo(0.08 + xOff, -0.2, 0.1 + xOff, -0.08);
  bowl.quadraticCurveTo(0.08 + xOff, 0.08, -0.12 + xOff, 0.04);
  bowl.closePath();
  return [stem, extrudeShape(bowl)];
}

function letterF(xOff = 0) {
  return [
    bar(0.048, 0.96, DEPTH, 0.1 + xOff, 0, 0, -0.08),
    bar(0.5, 0.05, DEPTH, -0.08 + xOff, 0.42, 0, -0.06),
    bar(0.34, 0.046, DEPTH, -0.02 + xOff, 0.08, 0, -0.06),
    strokeTube([[0.12 + xOff, 0.46], [0.2 + xOff, 0.54], [0.14 + xOff, 0.58]], 0.032, 12),
  ];
}

function letterM(xOff = 0) {
  return [
    bar(0.046, 0.78, DEPTH, -0.16 + xOff, 0.02, 0, -0.05),
    bar(0.046, 0.78, DEPTH, 0.16 + xOff, 0.02, 0, 0.05),
    bar(0.2, 0.046, DEPTH, xOff, 0.36, 0, 0.4),
  ];
}

/** ヘアピン（細い線の < / >） */
function hairpin(crescendo) {
  const thick = 0.028;
  if (crescendo) {
    return [
      bar(0.52, thick, DEPTH, 0, 0.05, 0, 0.22),
      bar(0.52, thick, DEPTH, 0, -0.05, 0, -0.22),
    ];
  }
  return [
    bar(0.52, thick, DEPTH, 0, 0.05, 0, -0.22),
    bar(0.52, thick, DEPTH, 0, -0.05, 0, 0.22),
  ];
}

function buildWholeGeometry() {
  return finalizeGeometry([noteHeadOpen(0, 0)]);
}

function buildDottedHalfGeometry() {
  const hx = -0.04;
  const hy = -0.36;
  const stemX = hx + HEAD_RX * 0.72;
  const stemBase = hy + HEAD_RY * 0.35;
  return finalizeGeometry([
    noteHeadOpen(hx, hy),
    bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
    augDot(hx, hy),
  ]);
}

function buildHalfGeometry() {
  const hx = -0.04;
  const hy = -0.36;
  const stemX = hx + HEAD_RX * 0.72;
  const stemBase = hy + HEAD_RY * 0.35;
  return finalizeGeometry([
    noteHeadOpen(hx, hy),
    bar(STEM_W, STEM_LEN, DEPTH, stemX, stemBase + STEM_LEN * 0.5, 0),
  ]);
}

function buildDottedQuarterGeometry() {
  const n = noteStemUp();
  return finalizeGeometry([...n.parts, augDot(n.hx, n.hy)]);
}

function buildQuarterGeometry() {
  return finalizeGeometry(noteStemUp().parts);
}

function buildDottedEighthGeometry() {
  return noteWithFlags(1, true);
}

function buildEighthGeometry() {
  return noteWithFlags(1);
}

function buildSixteenthGeometry() {
  return noteWithFlags(2);
}

/** 4分休符（稲妻型の塗りつぶし） */
function buildQuarterRestGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0.02, 0.42);
  s.lineTo(0.1, 0.28);
  s.lineTo(-0.02, 0.12);
  s.lineTo(0.1, -0.02);
  s.lineTo(-0.02, -0.18);
  s.lineTo(0.06, -0.42);
  s.lineTo(-0.04, -0.36);
  s.lineTo(-0.1, -0.14);
  s.lineTo(0.02, 0.02);
  s.lineTo(-0.1, 0.16);
  s.lineTo(0.02, 0.32);
  s.closePath();
  return finalizeGeometry([extrudeShape(s)]);
}

/** 8分休符（旗付き7） */
function buildEighthRestGeometry() {
  const body = strokeTube([
    [0.06, 0.28], [0.02, 0.08], [-0.04, -0.12], [-0.08, -0.34],
  ], 0.034, 24);
  const flag = new THREE.Shape();
  flag.moveTo(0.06, 0.3);
  flag.quadraticCurveTo(-0.02, 0.42, -0.12, 0.34);
  flag.quadraticCurveTo(-0.06, 0.28, 0.02, 0.26);
  flag.closePath();
  return finalizeGeometry([body, extrudeShape(flag)]);
}

function buildBarLineGeometry() {
  return finalizeGeometry([bar(0.04, 0.95, DEPTH, 0, 0, 0)]);
}

function buildDoubleBarLineGeometry() {
  return finalizeGeometry([
    bar(0.03, 0.95, DEPTH, -0.06, 0, 0),
    bar(0.06, 0.95, DEPTH, 0.08, 0, 0),
  ]);
}

function buildSharpGeometry() {
  const slant = 0.2;
  const vw = 0.04;
  return finalizeGeometry([
    bar(vw, 1.05, DEPTH, -0.16, 0, 0),
    bar(vw, 1.05, DEPTH, 0.16, 0, 0),
    bar(0.48, vw, DEPTH, 0, 0.17, 0, slant),
    bar(0.48, vw, DEPTH, 0, -0.17, 0, slant),
  ]);
}

function buildFlatGeometry() {
  const stem = bar(0.04, 1.02, DEPTH, -0.14, 0.02, 0);
  const bowl = new THREE.Shape();
  bowl.moveTo(-0.14, 0.05);
  bowl.quadraticCurveTo(0.12, 0.28, 0.12, -0.05);
  bowl.quadraticCurveTo(0.1, -0.32, -0.14, -0.42);
  bowl.lineTo(-0.14, -0.28);
  bowl.quadraticCurveTo(0.02, -0.22, 0.02, -0.06);
  bowl.quadraticCurveTo(0.02, 0.12, -0.14, 0.0);
  bowl.closePath();
  return finalizeGeometry([stem, extrudeShape(bowl)]);
}

function buildNaturalGeometry() {
  const w = 0.04;
  return finalizeGeometry([
    bar(w, 0.52, DEPTH, -0.12, 0.22, 0),
    bar(w, 0.52, DEPTH, 0.12, -0.22, 0),
    bar(0.3, w, DEPTH, 0, 0.46, 0),
    bar(0.3, w, DEPTH, 0, -0.46, 0),
  ]);
}

function buildForteGeometry() {
  return finalizeGeometry(letterF(0));
}

function buildMezzoForteGeometry() {
  return finalizeGeometry([...letterM(-0.16), ...letterF(0.16)]);
}

function buildPianoGeometry() {
  return finalizeGeometry(letterP(0));
}

function buildMezzoPianoGeometry() {
  return finalizeGeometry([...letterM(-0.16), ...letterP(0.16)]);
}

function buildCrescendoGeometry() {
  return finalizeGeometry(hairpin(true));
}

function buildDiminuendoGeometry() {
  return finalizeGeometry(hairpin(false));
}

function buildAccentGeometry() {
  const s = new THREE.Shape();
  s.moveTo(-0.22, 0.12);
  s.lineTo(0.22, 0);
  s.lineTo(-0.22, -0.12);
  s.lineTo(-0.22, -0.04);
  s.lineTo(0.08, 0);
  s.lineTo(-0.22, 0.04);
  s.closePath();
  return finalizeGeometry([extrudeShape(s)]);
}

function buildStaccatoGeometry() {
  const mark = new THREE.Shape();
  mark.absellipse(-0.02, 0.28, 0.04, 0.04, 0, Math.PI * 2, false, 0);
  return finalizeGeometry([
    noteHeadFilled(-0.02, -0.2),
    bar(STEM_W, STEM_LEN * 0.72, DEPTH, 0.08, 0.18, 0),
    extrudeShape(mark),
  ]);
}

function buildTieGeometry() {
  return finalizeGeometry([
    noteHeadFilled(-0.22, -0.2),
    noteHeadFilled(0.18, -0.2),
    strokeTube([[-0.1, -0.02], [0, 0.12], [0.1, -0.02]], 0.028, 20),
  ]);
}

function buildSlurGeometry() {
  return finalizeGeometry([
    noteHeadFilled(-0.22, -0.24),
    noteHeadFilled(0.18, -0.16),
    strokeTube([[-0.12, 0.02], [0, 0.22], [0.12, 0.08]], 0.028, 22),
  ]);
}

/** 参考表から確実に読める25種 */
export const NOTE_IDS = [
  'whole', 'dottedHalf', 'half', 'dottedQuarter', 'quarter',
  'dottedEighth', 'eighth', 'sixteenth', 'quarterRest', 'eighthRest',
  'barLine', 'doubleBarLine',
  'sharp', 'flat', 'natural',
  'forte', 'mezzoForte', 'piano', 'mezzoPiano', 'crescendo', 'diminuendo',
  'accent', 'staccato', 'tie', 'slur',
];

export const NOTE_BUILDERS = {
  whole: buildWholeGeometry,
  dottedHalf: buildDottedHalfGeometry,
  half: buildHalfGeometry,
  dottedQuarter: buildDottedQuarterGeometry,
  quarter: buildQuarterGeometry,
  dottedEighth: buildDottedEighthGeometry,
  eighth: buildEighthGeometry,
  sixteenth: buildSixteenthGeometry,
  quarterRest: buildQuarterRestGeometry,
  eighthRest: buildEighthRestGeometry,
  barLine: buildBarLineGeometry,
  doubleBarLine: buildDoubleBarLineGeometry,
  sharp: buildSharpGeometry,
  flat: buildFlatGeometry,
  natural: buildNaturalGeometry,
  forte: buildForteGeometry,
  mezzoForte: buildMezzoForteGeometry,
  piano: buildPianoGeometry,
  mezzoPiano: buildMezzoPianoGeometry,
  crescendo: buildCrescendoGeometry,
  diminuendo: buildDiminuendoGeometry,
  accent: buildAccentGeometry,
  staccato: buildStaccatoGeometry,
  tie: buildTieGeometry,
  slur: buildSlurGeometry,
};

export function pickNoteSymbol() {
  return NOTE_IDS[Math.floor(Math.random() * NOTE_IDS.length)];
}
