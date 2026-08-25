/**
 * Spacey Bloom Fluid スキン準拠のカラーパレット
 */

/** パレット定義: 名前 → HEXカラー配列（fluidA/B, crystalA/B, glow） */
export const PALETTES = {
  // 🤍 白銀 × 銀世界
  silver:     ['#f0f5fa', '#b8cbd8', '#e2e8f0', '#cbd5e1', '#e0ebf5'],
  // 🌍 ブルー × 大気圏
  atmosphere: ['#5ebbff', '#0044ff', '#80c8ff', '#ffffff', '#8cd9ff'],
  // 🌸 桜 × 翡翠
  sakura:     ['#ffd5e0', '#fff0f3', '#50fa7b', '#a8ffb8', '#ffd5e0'],
  // 🌌 星雲 × 深宇宙
  nebula:     ['#bd80ff', '#6d28d9', '#ffe066', '#ffffff', '#d8b4fe'],
  // 💧 水 × クリスタル
  crystal:    ['#00f5ff', '#0080ff', '#e0f8ff', '#a8e6ff', '#00d4ff'],
  // ✨ 黄金 × 琥珀
  amber:      ['#fff700', '#ffd700', '#ffb85c', '#ff6f00', '#ffd700'],
  // 🌸 シャイニーピンク
  shiny:      ['#ff40d0', '#b000ff', '#ffcde6', '#ffffff', '#ff40d0'],
};

export function getPaletteColors(name) {
  return PALETTES[name] || PALETTES.atmosphere;
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
