import { getPaletteColors, hexToRgb } from '../palettes.js';

export function saturateRgb(rgb, amount = 0.07) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const mid = (max + min) * 0.5;
  return {
    r: Math.min(255, Math.max(0, Math.round(mid + (rgb.r - mid) * (1 + amount)))),
    g: Math.min(255, Math.max(0, Math.round(mid + (rgb.g - mid) * (1 + amount)))),
    b: Math.min(255, Math.max(0, Math.round(mid + (rgb.b - mid) * (1 + amount)))),
  };
}

/** 花 / form / クラゲ向け */
export function flowerCoolToneRgb(rgb) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat > 0.35 && max > 80) {
    const isBlueDominant = rgb.b > rgb.r && rgb.b > rgb.g;
    if (isBlueDominant) {
      return {
        r: Math.min(255, Math.round(rgb.r * 0.95)),
        g: Math.min(255, Math.round(rgb.g * 0.72)),
        b: Math.min(255, Math.round(rgb.b * 1.08 + 8)),
      };
    }
    return saturateRgb(rgb, 0.05);
  }
  const b = Math.min(255, Math.round(rgb.b * 1.08 + 16));
  return {
    r: Math.min(Math.round(rgb.r * 0.7), Math.round(b * 0.55)),
    g: Math.min(Math.round(rgb.g * 0.55), Math.round(b * 0.4)),
    b,
  };
}

/** 文字 / 音楽記号向け */
export function letterCoolToneRgb(rgb) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat > 0.35 && max > 80) {
    const isBlueDominant = rgb.b > rgb.r && rgb.b > rgb.g;
    if (isBlueDominant) {
      return {
        r: Math.min(255, Math.round(rgb.r * 0.92)),
        g: Math.min(255, Math.round(rgb.g * 0.78)),
        b: Math.min(255, Math.round(rgb.b * 1.12 + 10)),
      };
    }
    return saturateRgb(rgb, 0.04);
  }
  return saturateRgb(rgb, 0.06);
}

export function flowerVividPetalRgb(rgb) {
  const cool = flowerCoolToneRgb(rgb);
  const vivid = saturateRgb(cool, 0.05);
  return {
    r: Math.min(255, Math.round(vivid.r * 1.06 + 5)),
    g: Math.min(255, Math.round(vivid.g * 1.05 + 3)),
    b: Math.min(255, Math.round(vivid.b * 1.06 + 5)),
  };
}

export function letterVividPetalRgb(rgb) {
  return saturateRgb(letterCoolToneRgb(rgb), 0.14);
}

export function flowerBrightenRgb(rgb) {
  const base = flowerCoolToneRgb(rgb);
  return {
    r: Math.min(255, base.r + 18),
    g: Math.min(255, base.g + 14),
    b: Math.min(255, base.b + 18),
  };
}

export function letterBrightenRgb(rgb) {
  const base = letterVividPetalRgb(rgb);
  return {
    r: Math.min(255, base.r + 18),
    g: Math.min(255, base.g + 14),
    b: Math.min(255, base.b + 18),
  };
}

export function boostVividRgb(rgb, gain = 1.12) {
  const cool = saturateRgb(flowerCoolToneRgb(rgb), 0.04);
  return {
    r: Math.min(255, Math.round(cool.r * gain)),
    g: Math.min(255, Math.round(cool.g * gain)),
    b: Math.min(255, Math.round(cool.b * gain)),
  };
}

export function petalParticleRgb(rgb, lift = 1.15) {
  return {
    r: Math.min(255, Math.round(rgb.r * lift)),
    g: Math.min(255, Math.round(rgb.g * lift)),
    b: Math.min(255, Math.round(rgb.b * lift)),
  };
}

export function flowerDisplayColor(rgb, scale = 1) {
  const cool = saturateRgb(flowerCoolToneRgb(rgb), 0.03);
  return {
    r: Math.min(1, (cool.r / 255) * scale),
    g: Math.min(1, (cool.g / 255) * scale),
    b: Math.min(1, (cool.b / 255) * scale),
  };
}

export function letterDisplayColor(rgb, scale = 1) {
  const vivid = saturateRgb(rgb, 0.08);
  return {
    r: Math.min(1, (vivid.r / 255) * scale),
    g: Math.min(1, (vivid.g / 255) * scale),
    b: Math.min(1, (vivid.b / 255) * scale),
  };
}

export function randomFlowerPetalColor(paletteName) {
  const colors = getPaletteColors(paletteName).filter((hex) => {
    const { r, g, b } = hexToRgb(hex);
    const isWhitish = r > 230 && g > 230 && b > 230;
    const isYellowWhite = r > 220 && g > 210 && b > 180 && Math.min(r, g, b) > 170;
    return !isWhitish && !isYellowWhite;
  });
  const pool = colors.length ? colors : getPaletteColors(paletteName);
  const weighted = [];
  for (const hex of pool) {
    const { r, g, b } = hexToRgb(hex);
    const isYellow = r > 150 && g > 110 && b < 150 && r + g > b * 2.4;
    const isElectricBlue = b > 200 && g < 140 && r < 120 && b > g * 1.5;
    const isViolet = b > 160 && r > 40 && r < 140 && g < r * 0.9 && b > r;
    const isCyanish = b > 150 && g > b * 0.7 && g > r;
    const copies = (isElectricBlue || isViolet) ? 6 : isCyanish || isYellow ? 1 : 2;
    for (let i = 0; i < copies; i++) weighted.push(hex);
  }
  const pick = weighted.length ? weighted : pool;
  return pick[Math.floor(Math.random() * pick.length)];
}

export function paletteAccentRgb(paletteName, vividFn = flowerVividPetalRgb) {
  const colors = getPaletteColors(paletteName);
  return vividFn(hexToRgb(colors[Math.floor(Math.random() * colors.length)]));
}

export function flowerVividFromHex(hex) {
  return flowerVividPetalRgb(hexToRgb(hex));
}

export function letterVividFromHex(hex) {
  return letterVividPetalRgb(hexToRgb(hex));
}

export function pickMarkSizeDefault() {
  const r = Math.random();
  if (r < 0.1) return 58 + Math.random() * 42;
  if (r < 0.28) return 40 + Math.random() * 22;
  return 20 + Math.random() * 24;
}

export function pickMarkSizeJelly() {
  const r = Math.random();
  if (r < 0.1) return 58 + Math.random() * 42;
  if (r < 0.28) return 40 + Math.random() * 22;
  return 22 + Math.random() * 26;
}

export function pickMarkSizeLetter() {
  const r = Math.random();
  if (r < 0.1) return 58 + Math.random() * 42;
  if (r < 0.28) return 40 + Math.random() * 22;
  return 20 + Math.random() * 24;
}

export function pickMarkSizeMusic() {
  const r = Math.random();
  if (r < 0.12) return 68 + Math.random() * 30;
  if (r < 0.35) return 44 + Math.random() * 20;
  return 30 + Math.random() * 16;
}

export function pickMarkSizeButterfly() {
  const r = Math.random();
  if (r < 0.28) return 32 + Math.random() * 16;
  return 19 + Math.random() * 20;
}

export function pickTadpoleSize() {
  return pickMarkSizeDefault() * 0.58;
}
