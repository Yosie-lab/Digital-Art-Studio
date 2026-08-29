import { hexToRgb } from '../palettes.js';

/** オタマ / 天使向けサイバーネオン */
export const TADPOLE_CYBER_NEON = [
  '#00b7ff', '#0090ff', '#0066ff', '#3d5afe',
  '#5b8cff', '#4d7cff', '#2f6bff',
  '#7c4dff', '#9d4edd', '#b026ff', '#d500f9',
  '#ff00e5', '#ff2bd6', '#e040fb', '#c026d3',
];

export const ANGEL_CYBER_NEON = [
  ...TADPOLE_CYBER_NEON,
  '#00e5ff', '#18ffff', '#536dfe', '#651fff', '#ea80fc', '#f50057',
];

/** クラゲ向けサイバーネオン */
export const JELLY_CYBER_NEON = [
  '#00e8ff', '#00b7ff', '#2f6bff', '#1a48ff', '#4d7cff',
  '#7c4dff', '#ff2bd6', '#b026ff',
];

export const JELLY_CYBER_WEIGHTED = [
  '#00e8ff', '#00e8ff', '#00e8ff',
  '#00b7ff', '#00b7ff', '#00b7ff',
  '#2f6bff', '#2f6bff', '#2f6bff', '#2f6bff',
  '#1a48ff', '#1a48ff', '#1a48ff',
  '#4d7cff', '#4d7cff',
  '#7c4dff',
  '#ff2bd6',
  '#b026ff',
];

export const JELLY_PARTICLE_CYAN_BLUE = [
  '#00ffff', '#00ffff', '#00ffff', '#00ffff',
  '#00e8ff', '#00e8ff', '#00e8ff', '#00e8ff', '#00e8ff',
  '#00b7ff', '#00b7ff', '#00b7ff', '#00b7ff',
  '#2f6bff', '#2f6bff', '#2f6bff',
  '#1a48ff', '#1a48ff',
  '#4d7cff',
  '#7c4dff',
  '#ff2bd6',
];

export function randomFromPool(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

export function randomTadpoleCyberHex() {
  return randomFromPool(TADPOLE_CYBER_NEON);
}

export function randomAngelCyberHex() {
  return randomFromPool(ANGEL_CYBER_NEON);
}

export function randomJellyCyberHex() {
  return randomFromPool(JELLY_CYBER_WEIGHTED);
}

export function randomJellyParticleHex() {
  return randomFromPool(JELLY_PARTICLE_CYAN_BLUE);
}

export function pickJellyAccentHex(mainHex) {
  const pool = JELLY_CYBER_WEIGHTED.filter((h) => h !== mainHex);
  return randomFromPool(pool.length ? pool : JELLY_CYBER_WEIGHTED);
}

/** @param {{ greenCap?: number }} [opts] */
export function cyberHexToRgb(hex, opts = {}) {
  const greenCap = opts.greenCap ?? 0.35;
  const rgb = hexToRgb(hex);
  const max = Math.max(rgb.r, rgb.g, rgb.b, 1);
  let r = Math.round((rgb.r / max) * 255);
  let g = Math.round((rgb.g / max) * 255);
  let b = Math.round((rgb.b / max) * 255);
  g = Math.min(g, Math.round(Math.max(r, b) * greenCap));
  return { r, g, b };
}

/** @param {{ greenCap?: number }} [opts] */
export function cyberShowColor(rgb, boost = 1.4, opts = {}) {
  const greenCap = opts.greenCap ?? 0.4;
  let r = Math.min(1, (rgb.r / 255) * boost);
  let g = Math.min(1, (rgb.g / 255) * boost);
  let b = Math.min(1, (rgb.b / 255) * boost);
  g = Math.min(g, Math.max(r, b) * greenCap);
  return { r, g, b };
}

export function moonJellyRgbFromNeon(neonRgb) {
  return {
    r: Math.round(neonRgb.r * 0.28 + 12),
    g: Math.round(Math.min(neonRgb.g, Math.max(neonRgb.r, neonRgb.b) * 0.22) * 0.4 + 8),
    b: Math.round(neonRgb.b * 0.65 + 100),
  };
}

export function angelColorAt(hueIndex) {
  const n = ANGEL_CYBER_NEON.length;
  const idx = ((Math.floor(hueIndex) % n) + n) % n;
  return ANGEL_CYBER_NEON[idx];
}

export function angelFillColor(hex, scale = 0.9) {
  return cyberShowColor(cyberHexToRgb(hex), 1.46 * scale);
}

export function angelParticleFill(hex, scale = 0.9, whiteMix = 0.42) {
  const fill = angelFillColor(hex, scale);
  const w = Math.min(1, Math.max(0, whiteMix));
  const r = fill.r * (1 - w) + w;
  const g = fill.g * (1 - w) + w;
  const b = fill.b * (1 - w) + w;
  const shine = 0.14;
  return {
    r: Math.min(1, r * (1 - shine) + shine),
    g: Math.min(1, g * (1 - shine) + shine),
    b: Math.min(1, b * (1 - shine) + shine),
  };
}

export function angelShardRgb(hex) {
  const c = angelParticleFill(hex, 1.14, 0.4);
  return {
    r: Math.round(c.r * 255),
    g: Math.round(c.g * 255),
    b: Math.round(c.b * 255),
  };
}
