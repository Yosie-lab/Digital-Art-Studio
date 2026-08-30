import { remapScreenMarks, sampleMarksWorld, spreadScreenCloud, safeViewport } from '../space3d.js';
import { createParticleFields, runBloomSpawns, trimMarkBuffer, trimShardBuffer } from './bloomRuntime.js';

/** bloom プリセット共通: marks のリサイズ追従 */
export function resizeBloomMarks(marks, prevW, prevH, w, h) {
  remapScreenMarks(marks, prevW, prevH, w, h);
  return { width: w, height: h };
}

/** bloom プリセット共通: marks からモーフ用点群サンプル */
export function sampleBloomMarks(marks, count, vw, vh, storedW, storedH) {
  const { w, h } = safeViewport(vw, vh, storedW, storedH);
  return sampleMarksWorld(marks, count, w, h, spreadScreenCloud);
}

export {
  createParticleFields,
  runBloomSpawns,
  trimMarkBuffer,
  trimShardBuffer,
};
