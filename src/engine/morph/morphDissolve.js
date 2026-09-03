import { paintMorphColors } from './morphPalette.js';
import { SEQUENCE, DISSOLVE_HANDOFF_AT, DISSOLVE_MODEL_FADE_END } from './morphSequenceConfig.js';
import { smootherstep } from './morphEasing.js';

export function computeDissolveTargets(progress, incomingId) {
  const modelT = Math.min(1, progress / DISSOLVE_MODEL_FADE_END);
  const modelTarget = 1 - smootherstep(modelT);
  const birth = smootherstep(Math.min(1, progress / (DISSOLVE_MODEL_FADE_END * 0.55)));
  const life = 1 - smootherstep(Math.max(0, (progress - 0.22) / 0.78));
  let particleTarget = birth * life;

  let nextTarget = 0;
  if (progress >= DISSOLVE_HANDOFF_AT) {
    const raw = (progress - DISSOLVE_HANDOFF_AT) / Math.max(0.001, 1 - DISSOLVE_HANDOFF_AT);
    const s = smootherstep(raw);
    nextTarget = s * s;
  }

  if (incomingId === 'angel') {
    particleTarget *= 0.42 + 0.58 * smootherstep(progress / 0.5);
    if (progress >= DISSOLVE_HANDOFF_AT) {
      particleTarget *= Math.max(0.08, 1 - nextTarget * 0.95);
      nextTarget = nextTarget * nextTarget * 0.82;
    }
  }

  const sizeTarget = 0.62 + 0.5 * birth * life;
  return { modelTarget, particleTarget, nextTarget, sizeTarget };
}

export function paintDissolveGlow(field, { count, time, dissolveFromIndex, colorA, fade, progress }) {
  paintMorphColors(field, count, time, dissolveFromIndex, colorA, colorA, 0, { boostNextAngel: false });
  const rise = smootherstep(Math.min(1, progress / 0.28));
  const fall = 1 - smootherstep(Math.max(0, (progress - 0.38) / 0.62));
  const spark = 0.68 + 0.48 * rise * fall;
  const nextId = SEQUENCE[(dissolveFromIndex + 1) % SEQUENCE.length]?.id;
  const intoAngel = nextId === 'angel' ? 0.58 : 1;
  const intensity = Math.max(0, fade) * spark * intoAngel;
  const whiteMix = Math.max(0, 0.32 * rise * fall) * (nextId === 'angel' ? 0.45 : 1);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    let r = field.colors[i3];
    let g = field.colors[i3 + 1];
    let b = field.colors[i3 + 2];
    r = r * (1 - whiteMix) + whiteMix;
    g = g * (1 - whiteMix) + whiteMix;
    b = b * (1 - whiteMix) + whiteMix;
    field.colors[i3] = Math.min(1, r * intensity * 1.08);
    field.colors[i3 + 1] = Math.min(1, g * intensity * 1.08);
    field.colors[i3 + 2] = Math.min(1, b * intensity * 1.08);
  }
}
