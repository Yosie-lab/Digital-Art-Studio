import { createFlowerBloom } from './flowerBloom.js';
import { createMorphSequence } from './morphSequence.js';
import { createFluidAurora } from './fluidAurora.js';
import { createCrystalDust } from './crystalDust.js';
import { createKaleidoPrism } from './kaleidoPrism.js';
import { createInteractiveRipples } from './interactiveRipples.js';
import { createLetterXBloom } from './letterXBloom.js';
import { createJellyfishBloom } from './jellyfishBloom.js';
import { createButterflyBloom } from './butterflyBloom.js';
import { createMusicNoteBloom } from './musicNoteBloom.js';
import { createTadpoleBloom } from './tadpoleBloom.js';
import { createAngelBloom } from './angelBloom.js';
import {
  createFormBloom,
  createBrainBloom,
  createHourglassBloom,
} from './formBloom.js';
import {
  neonRainbowUnitColors,
  neonAngelUnitColors,
  cyberTadpoleUnitColors,
} from '../bloom/morphColors.js';

/** UI から直接選択可能なプリセット */
export const UI_PRESET_FACTORIES = {
  morphSequence: createMorphSequence,
  fluidAurora: createFluidAurora,
  crystalDust: createCrystalDust,
  kaleidoPrism: createKaleidoPrism,
  interactiveRipples: createInteractiveRipples,
};

/** morph 内部・デバッグ用 bloom ファクトリ */
export const INTERNAL_PRESET_FACTORIES = {
  flowerBloom: createFlowerBloom,
  letterXBloom: createLetterXBloom,
  jellyfishBloom: createJellyfishBloom,
  butterflyBloom: createButterflyBloom,
  musicNoteBloom: createMusicNoteBloom,
  tadpoleBloom: createTadpoleBloom,
  angelBloom: createAngelBloom,
  formBloom: createFormBloom,
  brainBloom: createBrainBloom,
  hourglassBloom: createHourglassBloom,
};

export {
  createFlowerBloom,
  createMorphSequence,
  createFluidAurora,
  createCrystalDust,
  createKaleidoPrism,
  createInteractiveRipples,
  createLetterXBloom,
  createJellyfishBloom,
  createButterflyBloom,
  createMusicNoteBloom,
  createFormBloom,
  createTadpoleBloom,
  createAngelBloom,
  createBrainBloom,
  createHourglassBloom,
  neonRainbowUnitColors,
  neonAngelUnitColors,
  cyberTadpoleUnitColors,
};
