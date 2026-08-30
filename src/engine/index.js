/**
 * Digital Art Studio — engine barrel exports
 * UI 選択可能プリセットと内部モジュールを分離
 */
export { ArtEngine } from './artEngine.js';
export { createPointerState, bindCanvasPointer, neutralHoldPointer } from './pointer.js';

export {
  UI_PRESET_FACTORIES,
  INTERNAL_PRESET_FACTORIES,
} from './presets/index.js';

export {
  viewportReady,
  safeViewport,
  VIEWPORT_MIN,
  makePoints,
  clearGroup,
  spreadScreenCloud,
  spreadModelCloudToWorld,
  ensureCloudSpread,
  sampleMarksWorld,
  remapScreenMarks,
} from './space3d.js';

export { ANGEL_SATURATION } from './bloom/cyberNeon.js';
export { neonRainbowUnitColors, neonAngelUnitColors } from './bloom/morphColors.js';
