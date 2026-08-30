import { viewportReady, safeViewport } from '../space3d.js';
import { MORPH_VIEWPORT_MIN } from './morphSequenceConfig.js';

/** morph 用 viewport 寸法の追跡・フォールバック */
export function createMorphViewport() {
  let width = 0;
  let height = 0;
  let stableWidth = 0;
  let stableHeight = 0;

  return {
    setSize(w, h) {
      width = w;
      height = h;
      this.rememberStable(w, h);
    },

    get width() { return width; },
    get height() { return height; },

    rememberStable(w, h) {
      if (viewportReady(w, h)) {
        stableWidth = w;
        stableHeight = h;
        return true;
      }
      return false;
    },

    sampleDims() {
      if (viewportReady(width, height)) return { w: width, h: height };
      if (viewportReady(stableWidth, stableHeight)) return { w: stableWidth, h: stableHeight };
      return safeViewport(width, height, stableWidth, stableHeight);
    },

    isReady() {
      const { w, h } = this.sampleDims();
      return viewportReady(w, h);
    },

    morphReady() {
      const { w, h } = this.sampleDims();
      return w >= MORPH_VIEWPORT_MIN && h >= MORPH_VIEWPORT_MIN;
    },

    realDimsArrived(prevW, prevH) {
      return viewportReady(width, height) && !viewportReady(prevW, prevH);
    },
  };
}
