import {
  spreadModelCloudToWorld,
  spreadScreenCloud,
  safeViewport,
  cloudWellSpread,
  cloudIsDegenerate,
  cloudStacked,
  minCloudSpread,
  ensureCloudSpread,
} from '../space3d.js';
import { samplePetalCloud, sampleAngelCloud } from './sampleShapes.js';
import { createSolidForm } from './solidForms.js';
import { BLOOM_FACTORIES, SEQUENCE } from './morphSequenceConfig.js';

export function cloudValid(cloud, count, w, h) {
  if (!cloud || cloud.length !== count * 3) return false;
  for (let i = 0; i < cloud.length; i++) {
    if (!Number.isFinite(cloud[i])) return false;
  }
  const min = minCloudSpread(w, h);
  const minUnique = Math.min(count, Math.max(48, Math.floor(count * 0.18)));
  return cloudWellSpread(cloud, min) && !cloudIsDegenerate(cloud, min) && !cloudStacked(cloud, minUnique);
}

export function angelMorphFallback(count, w, h) {
  return spreadModelCloudToWorld(sampleAngelCloud(count, 130), count, w, h, 0.14);
}

export function ensureSpreadCloud(cloud, count, w, h, fallback = null) {
  const fb = fallback || spreadScreenCloud;
  return ensureCloudSpread(cloud, count, w, h, fb);
}

export function morphStartSpreadCloud(count, w, h, fallback = null) {
  const fb = fallback || spreadScreenCloud;
  return ensureSpreadCloud(fb(count, w, h), count, w, h, fb);
}

export function guaranteeMorphClouds(fromCloud, toCloud, count, cw, ch, fallback = null) {
  const fb = fallback || spreadScreenCloud;
  let from = fromCloud;
  let to = toCloud;
  if (!cloudValid(from, count, cw, ch)) from = ensureSpreadCloud(fb(count, cw, ch), count, cw, ch, fb);
  if (!cloudValid(to, count, cw, ch)) to = ensureSpreadCloud(fb(count, cw, ch), count, cw, ch, fb);
  return { fromCloud: from, toCloud: to };
}

/** live bloom / pointer 汚染なし — solid form のみ */
export function sampleStageCloudNeutral(stepIndex, count, w, h, currentPalette) {
  const step = SEQUENCE[stepIndex];

  if (step.id === 'petal') {
    const model = samplePetalCloud(count, 95);
    return spreadModelCloudToWorld(model, count, w, h, 0.12);
  }

  if (step.id === 'angel') {
    return ensureSpreadCloud(angelMorphFallback(count, w, h), count, w, h);
  }

  const tempId = step.id === 'letter' ? 'letter' : step.id;
  const temp = createSolidForm(tempId, currentPalette);
  if (!temp) return spreadScreenCloud(count, w, h);
  const model = temp.samplePoints(count);
  temp.dispose?.();
  return spreadModelCloudToWorld(model, count, w, h, 0.14);
}

export function sampleAngelStageCloud({
  count,
  w,
  h,
  stableWidth,
  stableHeight,
  bloomSlots,
  latestParams,
  currentPalette,
}) {
  const { w: vw, h: vh } = safeViewport(w, h, stableWidth, stableHeight);
  const fallback = (n, cw, ch) => angelMorphFallback(n, cw, ch);

  const live = bloomSlots.angel?.bloom;
  if (live?.samplePoints) {
    live.resize?.(vw, vh);
    return ensureSpreadCloud(live.samplePoints(count, vw, vh), count, vw, vh, fallback);
  }

  const slot = bloomSlots.angel;
  const factory = BLOOM_FACTORIES.angel;
  if (factory && slot?.group) {
    try {
      const temp = factory();
      temp.init(vw, vh, latestParams || { palette: currentPalette }, slot.group);
      const cloud = ensureSpreadCloud(temp.samplePoints(count, vw, vh), count, vw, vh, fallback);
      temp.destroy();
      return { cloud, clearGroup: true };
    } catch (err) {
      console.error('[MorphSequence] angel prewarm failed:', err);
      return { cloud: ensureSpreadCloud(angelMorphFallback(count, vw, vh), count, vw, vh), clearGroup: true };
    }
  }

  return { cloud: ensureSpreadCloud(angelMorphFallback(count, vw, vh), count, vw, vh) };
}
