import { createLetterXBloom } from '../presets/letterXBloom.js';
import { createJellyfishBloom } from '../presets/jellyfishBloom.js';
import { createButterflyBloom } from '../presets/butterflyBloom.js';
import { createTadpoleBloom } from '../presets/tadpoleBloom.js';
import { createMusicNoteBloom } from '../presets/musicNoteBloom.js';
import { createAngelBloom } from '../presets/angelBloom.js';

/**
 * 変容シークエンス定義
 * 花びら → クラゲ → 文字 → オタマ → 蝶 → 音楽記号 → 天使 →（ループ）
 */
export const SEQUENCE = [
  { id: 'petal', label: '花びら', hold: 30, morph: 2.4, style: 'swarm' },
  { id: 'jellyfish', label: 'クラゲ', hold: 30, morph: 2.4, style: 'trail' },
  { id: 'letter', label: 'A B C · X Y Z', hold: 30, morph: 2.4, style: 'swarm' },
  { id: 'tadpole', label: 'オタマ', hold: 30, morph: 2.4, style: 'trail' },
  { id: 'butterfly', label: '蝶', hold: 30, morph: 2.2, style: 'swarm' },
  { id: 'music', label: '♪ 音楽記号', hold: 30, morph: 2.6, style: 'burst' },
  { id: 'angel', label: '天使', hold: 30, morph: 2.8, style: 'burst' },
];

export const MANUAL_HINT = '30秒で自動切替 · ダブルクリックでも次へ';
export const MORPH_VIEWPORT_MIN = 200;
export const DOUBLE_TAP_MS = 520;

export const BLOOM_FACTORIES = {
  letter: createLetterXBloom,
  jellyfish: createJellyfishBloom,
  butterfly: createButterflyBloom,
  tadpole: createTadpoleBloom,
  music: createMusicNoteBloom,
  angel: createAngelBloom,
};
