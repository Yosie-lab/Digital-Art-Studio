/**
 * カラーパレット定義
 * 各プリセットで共通使用するカラーテーマ
 */

/** パレット定義: 名前 → HEXカラー配列 */
export const PALETTES = {
  cyberpunk: ['#ff00ff', '#00ffff', '#ff0088', '#8800ff', '#00ff88'],
  sakura:    ['#ffb7c5', '#ff69b4', '#ff1493', '#ffc0cb', '#ffafd0'],
  aurora:    ['#00e5ff', '#00b0ff', '#2979ff', '#651fff', '#b388ff'],
  gold:      ['#ffd700', '#ffab00', '#ff6d00', '#ff3d00', '#ffca28'],
  neon:      ['#39ff14', '#00ff41', '#00e676', '#76ff03', '#b2ff59'],
  lavender:  ['#e040fb', '#7c4dff', '#536dfe', '#448aff', '#ea80fc'],
};

/**
 * パレット名からカラー配列を取得
 * @param {string} name - パレット名
 * @returns {string[]} HEXカラー配列
 */
export function getPaletteColors(name) {
  return PALETTES[name] || PALETTES.cyberpunk;
}

/**
 * HEXカラー文字列をRGBオブジェクトに変換
 * @param {string} hex - '#RRGGBB' 形式
 * @returns {{r:number, g:number, b:number}}
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 255, g: 0, b: 255 };
}

/**
 * パレットからランダムに1色選択
 * @param {string} paletteName - パレット名
 * @returns {string} HEXカラー
 */
export function randomFromPalette(paletteName) {
  const colors = getPaletteColors(paletteName);
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * パレットからインデックスで色を取得 (循環)
 * @param {string} paletteName - パレット名
 * @param {number} index - インデックス
 * @returns {string} HEXカラー
 */
export function colorAtIndex(paletteName, index) {
  const colors = getPaletteColors(paletteName);
  return colors[Math.abs(index) % colors.length];
}
