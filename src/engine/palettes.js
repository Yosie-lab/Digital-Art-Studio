/**
 * Spacey Bloom Fluid 準拠のカラーパレット
 * rainbow / midnight は BLOOM_PALETTES (sat/lit/hueRange) から抽出した代表色
 */

/** パレット定義: 名前 → HEXカラー配列（派手め・高彩度） */
export const PALETTES = {
  // 🌈 レインボー — 黄色を抑え、シアン／マゼンタ寄り
  rainbow:    ['#ff5cf0', '#3db8ff', '#2affb0', '#70a0ff', '#c070ff', '#ff2ab8'],
  // 🌙 ミッドナイト — デフォルト。深い青紫を明るく鮮やかに
  midnight:   ['#6a9bff', '#3d7aff', '#2050ff', '#5a40ff', '#8a50ff', '#4060ff'],
  // 🤍 白銀 × 銀世界
  silver:     ['#c8dcff', '#90b8e8', '#b0c8f0', '#a0b8e0', '#b8d0f0'],
  // 🌍 ブルー × 大気圏
  atmosphere: ['#50b8ff', '#0066ff', '#60c8ff', '#80d8ff', '#30c0ff'],
  // 🌸 桜 × 翡翠
  sakura:     ['#ff80c0', '#ff90d0', '#30e888', '#70f0b0', '#ff60b0'],
  // 🌌 星雲 × 深宇宙
  nebula:     ['#d070ff', '#8030ff', '#a080ff', '#e0b0ff', '#e890ff'],
  // 💧 水 × クリスタル
  crystal:    ['#00e8f0', '#0088ff', '#80d8f0', '#50e0ff', '#00d8f0'],
  // ✨ 黄金 × 琥珀
  amber:      ['#ffc020', '#ffb000', '#ff9020', '#ff7000', '#ffd040'],
  // 🌸 シャイニーピンク
  shiny:      ['#ff40e8', '#c000ff', '#e890d8', '#ff70f0', '#ff30c8'],
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
