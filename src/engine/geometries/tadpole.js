import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mergeParts, prepareGeo } from '../geometryUtils.js';

const mergeTadpoleParts = mergeParts;
const prepareTadpoleGeo = prepareGeo;

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

export function buildTadpoleRimGeometry() {
  const rim = new THREE.TorusGeometry(0.34, 0.01, 6, 36);
  rim.rotateY(Math.PI / 2);
  rim.scale(1.15, 1.0, 1.08);
  rim.translate(0.4, 0.04, 0);
  return prepareTadpoleGeo(rim);
}

export function buildTadpoleCoreGeometry() {
  const core = new THREE.SphereGeometry(0.1, 12, 10);
  core.scale(1.35, 0.9, 1.15);
  core.translate(0.4, 0.04, 0);
  return prepareTadpoleGeo(core);
}

export function buildTadpoleEyeGeometry() {
  const eyeL = new THREE.SphereGeometry(0.042, 12, 10);
  eyeL.translate(0.58, 0.1, 0.2);
  const eyeR = new THREE.SphereGeometry(0.042, 12, 10);
  eyeR.translate(0.58, 0.1, -0.2);
  return mergeTadpoleParts([eyeL, eyeR]);
}

export function buildTadpolePupilGeometry() {
  const pL = new THREE.SphereGeometry(0.02, 10, 8);
  pL.translate(0.605, 0.1, 0.215);
  const pR = new THREE.SphereGeometry(0.02, 10, 8);
  pR.translate(0.605, 0.1, -0.215);
  return mergeTadpoleParts([pL, pR]);
}

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
