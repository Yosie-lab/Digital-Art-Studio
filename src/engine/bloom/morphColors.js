import {
  TADPOLE_CYBER_NEON,
  ANGEL_CYBER_NEON,
  angelParticleFill,
  cyberHexToRgb,
  cyberShowColor,
} from './cyberNeon.js';

/** morph 粒子用: サイバーネオン（天使） */
export function neonAngelUnitColors(count) {
  const out = new Float32Array(count * 3);
  const n = ANGEL_CYBER_NEON.length;
  for (let i = 0; i < count; i++) {
    const c = angelParticleFill(ANGEL_CYBER_NEON[i % n], 1.62, 0.06);
    out[i * 3] = c.r;
    out[i * 3 + 1] = c.g;
    out[i * 3 + 2] = c.b;
  }
  return out;
}

/** morph 粒子用: サイバーネオン（オタマ） */
export function neonRainbowUnitColors(_paletteName, count) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const c = cyberShowColor(cyberHexToRgb(TADPOLE_CYBER_NEON[i % TADPOLE_CYBER_NEON.length]), 1.45);
    out[i * 3] = c.r;
    out[i * 3 + 1] = c.g;
    out[i * 3 + 2] = c.b;
  }
  return out;
}

export function cyberTadpoleUnitColors(count) {
  return neonRainbowUnitColors('rainbow', count);
}
