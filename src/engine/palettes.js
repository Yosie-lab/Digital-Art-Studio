/**
 * Spacey Bloom Fluid 準拠のカラーパレット
 * rainbow / midnight は BLOOM_PALETTES (sat/lit/hueRange) から抽出した代表色
 */

/** パレット定義: 名前 → HEXカラー配列（派手め・高彩度） */
export const PALETTES = {
  // 🌈 レインボー — 黄さらに控えめ、青・紺を強化
  rainbow:    ['#f058e4', '#3cb0f0', '#2ef0a8', '#6890f0', '#b860f0', '#f028b0', '#38e068', '#f03858', '#c89a28', '#1e2e90', '#101c58', '#1a2c70', '#122468', '#1c38a0', '#2880f0', '#1868e8', '#4090ff'],
  // 🌙 ミッドナイト
  midnight:   ['#6896f0', '#3c74f0', '#2048f0', '#5440f0', '#8650f0', '#4060f0'],
  // 🤍 白銀 × 銀世界
  silver:     ['#c8d8f0', '#94b8e4', '#b4ccec', '#a0bce0', '#bcd0ec'],
  // 🌍 ブルー × 大気圏
  atmosphere: ['#50b4f0', '#1060f0', '#60c4f0', '#78d4f0', '#30c0f0'],
  // 🌸 桜 × 翡翠
  sakura:     ['#f070b4', '#f084c4', '#30e478', '#68f0a4', '#f050a4'],
  // 🌌 星雲 × 深宇宙
  nebula:     ['#c860f0', '#7828f0', '#9870ec', '#dc9cf0', '#e480f0'],
  // 💧 水 × クリスタル
  crystal:    ['#10e8f0', '#1078f0', '#78d8f0', '#48e4f0', '#10d8f0'],
  // ✨ 黄金 × 琥珀
  amber:      ['#f0c020', '#f0ac00', '#f08820', '#f06810', '#f0d038'],
  // 🌸 シャイニーピンク
  shiny:      ['#f038e4', '#b010f0', '#e880d8', '#f060e8', '#f028c4'],
};

export function getPaletteColors(name) {
  return PALETTES[name] || PALETTES.rainbow;
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 94, g: 187, b: 255 };
}

export function randomFromPalette(paletteName) {
  const colors = getPaletteColors(paletteName);
  return colors[Math.floor(Math.random() * colors.length)];
}

export function colorAtIndex(paletteName, index) {
  const colors = getPaletteColors(paletteName);
  return colors[Math.abs(index) % colors.length];
}
