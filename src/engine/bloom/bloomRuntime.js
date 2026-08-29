import * as THREE from 'three';
import { makePoints } from '../space3d.js';

/** sparkle + fall 粒子フィールドを初期化 */
export function createParticleFields({
  sparkleCount,
  fallMax,
  sparkleSize,
  fallSize,
  sparkleOpacity = 0.78,
  fallOpacity = 0.72,
}) {
  const sparkleField = makePoints(sparkleCount, sparkleSize);
  const fallField = makePoints(fallMax, fallSize);
  for (const field of [sparkleField, fallField]) {
    field.mat.blending = THREE.AdditiveBlending;
    field.mat.toneMapped = false;
  }
  sparkleField.mat.opacity = sparkleOpacity;
  fallField.mat.opacity = fallOpacity;
  return { sparkleField, fallField };
}

/** 共通 spawn ロジック（pointer / audio / random） */
export function runBloomSpawns({
  dt,
  pointer,
  audioData,
  params,
  spawn,
  pointerThreshold = 3,
  pointerMax = 2,
  pointerDivisor = 16,
  randomRate = 1.8,
  randomSpawn,
  bassThreshold = 0.3,
  bassMultiplier = 4,
  bassSpawn,
}) {
  if (pointer?.velocity > pointerThreshold) {
    const n = Math.min(pointerMax, Math.floor(pointer.velocity / pointerDivisor) + 1);
    for (let i = 0; i < n; i++) spawn(pointer);
  }
  if (Math.random() < dt * randomRate * (params.speed || 1)) {
    randomSpawn?.();
  }
  if (audioData?.isActive && audioData.bass > bassThreshold) {
    const n = Math.floor(audioData.bass * bassMultiplier);
    for (let i = 0; i < n; i++) bassSpawn?.();
  }
}

export function trimShardBuffer(shards, max) {
  if (shards.length > max) shards.splice(0, shards.length - max);
}

export function trimMarkBuffer(marks, max) {
  if (marks.length > max) marks.splice(0, marks.length - max);
}
