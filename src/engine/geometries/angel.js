import * as THREE from 'three';
import { bar, mergeParts, prepareGeo } from '../geometryUtils.js';

const mergeTadpoleParts = mergeParts;
const prepareTadpoleGeo = prepareGeo;

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

export function buildAngelBodyGeometry() {
  const parts = [];
  const head = new THREE.SphereGeometry(0.18, 18, 14);
  head.translate(0, 0.42, 0.06);
  parts.push(head);

  const hair = new THREE.SphereGeometry(0.11, 12, 10);
  hair.scale(1.45, 0.6, 0.9);
  hair.translate(0.09, 0.55, 0.02);
  parts.push(hair);

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

function angelHeadFacePoint(lx, ly, zBump = 0.008) {
  const headC = { x: 0, y: 0.42, z: 0.06 };
  const faceR = 0.168;
  const xy = Math.hypot(lx, ly);
  const zRel = Math.sqrt(Math.max(0.0001, faceR * faceR - xy * xy));
  return [headC.x + lx, headC.y + ly, headC.z + zRel + zBump];
}

export function buildAngelEyesGeometry() {
  const parts = [];
  for (const sx of [-1, 1]) {
    const eye = new THREE.TorusGeometry(0.054, 0.013, 8, 22, Math.PI * 0.92);
    eye.scale(1, 1, 0.34);
    const [ex, ey, ez] = angelHeadFacePoint(sx * 0.072, 0.022, 0.012);
    eye.translate(ex, ey, ez);
    parts.push(eye);
  }
  return mergeTadpoleParts(parts);
}

export function buildAngelMouthGeometry() {
  const mouth = new THREE.TorusGeometry(0.036, 0.011, 6, 16, Math.PI * 0.72);
  mouth.rotateZ(Math.PI);
  mouth.scale(1, 1, 0.34);
  const [mx, my, mz] = angelHeadFacePoint(0, -0.055, 0.012);
  mouth.translate(mx, my, mz);
  return prepareTadpoleGeo(mouth);
}

export function buildAngelFaceGeometry() {
  const eyes = buildAngelEyesGeometry();
  const mouth = buildAngelMouthGeometry();
  return mergeTadpoleParts([eyes, mouth]);
}

export function buildAngelFaceHiGeometry() {
  const hi = new THREE.SphereGeometry(0.001, 4, 4);
  hi.translate(0, -10, 0);
  return prepareTadpoleGeo(hi);
}

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

export function buildAngelWingGeometry() {
  const wing = new THREE.ExtrudeGeometry(makeAngelWingShape(), {
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.015,
    bevelSegments: 2,
    curveSegments: 18,
  });
  wing.scale(0.98, 1.02, 1.08);
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
