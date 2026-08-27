/**
 * Spacey Bloom Fluid 準拠のカラーパレット
 * rainbow / midnight は BLOOM_PALETTES (sat/lit/hueRange) から抽出した代表色
 */

/** パレット定義: 名前 → HEXカラー配列（派手め・高彩度） */
export const PALETTES = {
  // 🌈 レインボー — 赤〜マゼンタの均等スペクトル
  rainbow:    [
    '#ff2a4a', '#ff6a00', '#ffd400', '#2ee86a',
    '#00d8ff', '#3d6aff', '#8b4dff', '#ff2bd6',
  ],
  // ⚡ サイバーネオン — 旧レインボー（電光ブルー＋バイオレット）
  cyberNeon:  [
    '#f850ec', '#2a5cff', '#26f4b0', '#3d6aff', '#7a48e8', '#f820b8',
    '#30ec70', '#f83058',
    '#1a48ff', '#2458ff', '#2e68ff', '#3868ff', '#4a78ff', '#1e40f0',
    '#3060ff', '#4870ff', '#5878ff', '#6888ff',
    '#3a28c0', '#4a38d0', '#5a40e0', '#6a48e8', '#2a20a8', '#4830c8',
  ],
  // 🌙 ミッドナイト — 同系統の電光青
  midnight:   ['#2a5cff', '#1a48ff', '#3d6aff', '#4a38d0', '#3060ff', '#5a40e0'],
  // 🤍 白銀 × 銀世界
  silver:     ['#c8d0f8', '#a0a8e8', '#b8c0f0', '#989fe0', '#d0d8ff'],
  // 🌍 ブルー × 大気圏
  atmosphere: ['#2a5cff', '#1a48ff', '#3d6aff', '#4870ff', '#3060ff'],
  // 🌸 桜 × 翡翠
  sakura:     ['#f870b8', '#f888c8', '#28ec80', '#68f4ac', '#f850ac'],
  // 🌌 星雲 × 深宇宙
  nebula:     ['#6a48e8', '#4a38d0', '#3a28c0', '#8a60f0', '#5a40e0'],
  // 💧 水 × クリスタル
  crystal:    ['#2a5cff', '#1a48ff', '#3d6aff', '#4870ff', '#6888ff'],
  // ✨ 黄金 × 琥珀
  amber:      ['#f0b818', '#f0a400', '#f08018', '#f06010', '#f0c830'],
  // 🌸 シャイニーピンク
  shiny:      ['#f838ec', '#b808f8', '#ec80e0', '#f860f0', '#f828cc'],
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
