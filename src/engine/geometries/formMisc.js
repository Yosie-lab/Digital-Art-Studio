import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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
