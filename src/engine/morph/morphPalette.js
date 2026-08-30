import { getPaletteColors, hexToRgb } from '../palettes.js';
import { ANGEL_SATURATION } from '../bloom/cyberNeon.js';
import { neonRainbowUnitColors, neonAngelUnitColors } from '../bloom/morphColors.js';
import { SEQUENCE } from './morphSequenceConfig.js';

export function paletteUnitColors(name, count) {
  const colors = getPaletteColors(name);
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const hex = colors[i % colors.length];
    const { r, g, b } = hexToRgb(hex);
    out[i * 3] = r / 255;
    out[i * 3 + 1] = g / 255;
    out[i * 3 + 2] = b / 255;
  }
  return out;
}

export function rebuildMorphColors(count, currentPalette) {
  const colorA = paletteUnitColors(currentPalette, count);
  const colorB = paletteUnitColors(currentPalette, count);
  for (let i = 0; i < count; i++) {
    const j = ((i * 7) + 3) % count;
    colorB[i * 3] = colorA[j * 3];
    colorB[i * 3 + 1] = colorA[j * 3 + 1];
    colorB[i * 3 + 2] = colorA[j * 3 + 2];
  }
  return { colorA, colorB };
}

export function colorsForStage(stepIndex, count, currentPalette) {
  const id = SEQUENCE[stepIndex]?.id;
  if (id === 'tadpole') return neonRainbowUnitColors(currentPalette, count);
  if (id === 'angel') return neonAngelUnitColors(count);
  if (id === 'butterfly') return paletteUnitColors('clockRainbow', count);
  return paletteUnitColors(currentPalette, count);
}

export function paintMorphColors(field, count, time, stageIndex, colorA, colorB, mix) {
  const stepId = SEQUENCE[stageIndex]?.id;
  const nextId = SEQUENCE[(stageIndex + 1) % SEQUENCE.length]?.id;
  const angelMix = stepId === 'angel' || nextId === 'angel';
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const pulse = (stepId === 'angel' || nextId === 'angel')
      ? 0.92 + 0.48 * (0.5 + 0.5 * Math.sin(time * 2.5 + i * 0.02))
      : 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(time * 2.5 + i * 0.02));
    let r = colorA[i3] * (1 - mix) + colorB[i3] * mix;
    let g = colorA[i3 + 1] * (1 - mix) + colorB[i3 + 1] * mix;
    let b = colorA[i3 + 2] * (1 - mix) + colorB[i3 + 2] * mix;
    if (angelMix) {
      const w = 0.06;
      r = r * (1 - w) + w;
      g = g * (1 - w) + w;
      b = b * (1 - w) + w;
      const gray = (r + g + b) / 3;
      const sat = ANGEL_SATURATION;
      r = Math.min(1, Math.max(0, gray + (r - gray) * sat));
      g = Math.min(1, Math.max(0, gray + (g - gray) * sat));
      b = Math.min(1, Math.max(0, gray + (b - gray) * sat));
    }
    field.colors[i3] = r * pulse;
    field.colors[i3 + 1] = g * pulse;
    field.colors[i3 + 2] = b * pulse;
  }
}
