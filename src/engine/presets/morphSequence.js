import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { makePoints } from '../space3d.js';
import { morphPositions, holdPositions } from '../morph/morphEngine.js';
import {
  samplePetalCloud,
  sampleLetterCloud,
  sampleJellyfishCloud,
  sampleHourglassCloud,
  sampleTadpoleCloud,
  sampleBrainCloud,
  sampleAngelCloud,
} from '../morph/sampleShapes.js';

/**
 * 変容シークエンス
 * 花びら → アルファベット → クラゲ → 砂時計 → オタマジャクシ → 脳 → 天使
 * 形態間はパーティクル分解→吸着で接続
 */
const SEQUENCE = [
  { id: 'petal', label: '花びら', hold: 2.8, morph: 2.2, style: 'swarm', letter: null },
  { id: 'letter', label: 'A', hold: 2.6, morph: 2.4, style: 'swarm', letter: 'A' },
  { id: 'jellyfish', label: 'クラゲ', hold: 2.8, morph: 2.4, style: 'trail', letter: null },
  { id: 'hourglass', label: '砂時計', hold: 2.6, morph: 2.2, style: 'swarm', letter: null },
  { id: 'tadpole', label: 'オタマ', hold: 2.6, morph: 2.4, style: 'trail', letter: null },
  { id: 'brain', label: '脳', hold: 2.8, morph: 2.6, style: 'burst', letter: null },
  { id: 'angel', label: '天使', hold: 3.2, morph: 2.8, style: 'burst', letter: null },
];

function buildCloud(step, count) {
  switch (step.id) {
    case 'petal': return samplePetalCloud(count, 95);
    case 'letter': return sampleLetterCloud(step.letter || 'A', count, 150);
    case 'jellyfish': return sampleJellyfishCloud(count, 105);
    case 'hourglass': return sampleHourglassCloud(count, 115);
    case 'tadpole': return sampleTadpoleCloud(count, 115);
    case 'brain': return sampleBrainCloud(count, 105);
    case 'angel': return sampleAngelCloud(count, 140);
    default: return samplePetalCloud(count, 95);
  }
}

function paletteUnitColors(name, count) {
  const colors = getPaletteColors(name);
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const hex = colors[i % colors.length];
    const { r, g, b } = hexToRgb(hex);
    // 電光青寄りを優先しつつパレット色を使用
    out[i * 3] = r / 255;
    out[i * 3 + 1] = g / 255;
    out[i * 3 + 2] = b / 255;
  }
  return out;
}

export function createMorphSequence() {
  let width = 0;
  let height = 0;
  let time = 0;
  let layer = null;
  let field = null;
  let currentPalette = 'rainbow';
  let count = 1200;

  let stageIndex = 0;
  let phase = 'hold'; // hold | morph
  let phaseT = 0;
  let clouds = [];
  let fromCloud = null;
  let toCloud = null;
  let colorA = null;
  let colorB = null;
  let labelEl = null;

  function ensureLabel() {
    if (labelEl) return;
    labelEl = document.createElement('div');
    labelEl.id = 'morphStageLabel';
    labelEl.style.cssText = [
      'position:fixed',
      'left:50%',
      'bottom:92px',
      'transform:translateX(-50%)',
      'z-index:20',
      'pointer-events:none',
      'font-family:Outfit,Noto Sans JP,sans-serif',
      'font-size:13px',
      'letter-spacing:0.12em',
      'color:rgba(180,200,255,0.75)',
      'text-shadow:0 0 12px rgba(42,92,255,0.45)',
      'transition:opacity 0.4s',
    ].join(';');
    document.body.appendChild(labelEl);
  }

  function setLabel(text) {
    ensureLabel();
    labelEl.textContent = text;
  }

  function rebuildClouds(n) {
    count = n;
    clouds = SEQUENCE.map((step) => buildCloud(step, count));
    colorA = paletteUnitColors(currentPalette, count);
    colorB = paletteUnitColors(currentPalette, count);
    // 色を少しずらして変容中にクロスフェード
    for (let i = 0; i < count; i++) {
      const j = ((i * 7) + 3) % count;
      colorB[i * 3] = colorA[j * 3];
      colorB[i * 3 + 1] = colorA[j * 3 + 1];
      colorB[i * 3 + 2] = colorA[j * 3 + 2];
    }
    fromCloud = clouds[stageIndex];
    toCloud = clouds[(stageIndex + 1) % SEQUENCE.length];
  }

  function syncField(dt, params) {
    if (!field) return;
    const step = SEQUENCE[stageIndex];
    const next = SEQUENCE[(stageIndex + 1) % SEQUENCE.length];
    phaseT += dt * (params.speed || 1);

    if (phase === 'hold') {
      holdPositions(field.positions, clouds[stageIndex], time, 1.2 + stageIndex * 0.05);
      if (phaseT >= step.hold) {
        phase = 'morph';
        phaseT = 0;
        fromCloud = clouds[stageIndex];
        toCloud = clouds[(stageIndex + 1) % SEQUENCE.length];
        setLabel(`${step.label} → ${next.label}`);
      }
    } else {
      const progress = Math.min(1, phaseT / step.morph);
      morphPositions(field.positions, fromCloud, toCloud, progress, time, step.style);
      if (progress >= 1) {
        stageIndex = (stageIndex + 1) % SEQUENCE.length;
        phase = 'hold';
        phaseT = 0;
        setLabel(SEQUENCE[stageIndex].label);
      }
    }

    // 色: hold は固定、morph 中はクロスフェード
    const mix = phase === 'morph' ? Math.min(1, phaseT / step.morph) : 0;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const pulse = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(time * 2.5 + i * 0.02));
      const r = colorA[i3] * (1 - mix) + colorB[i3] * mix;
      const g = colorA[i3 + 1] * (1 - mix) + colorB[i3 + 1] * mix;
      const b = colorA[i3 + 2] * (1 - mix) + colorB[i3 + 2] * mix;
      field.colors[i3] = r * pulse;
      field.colors[i3 + 1] = g * pulse;
      field.colors[i3 + 2] = b * pulse;
    }

    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;
    field.geo.attributes.color.needsUpdate = true;
    field.mat.size = Math.max(4, Math.min(14, (params.particleSize || 15) * 0.55));
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      layer = group;
      time = 0;
      stageIndex = 0;
      phase = 'hold';
      phaseT = 0;
      currentPalette = params.palette || 'rainbow';

      const n = Math.min(1800, Math.max(600, Math.floor((params.particleCount || 1030) * 1.1)));
      rebuildClouds(n);

      field = makePoints(n, 8);
      field.mat.sizeAttenuation = true;
      field.mat.opacity = 0.95;
      layer.add(field.points);

      // 初期位置
      field.positions.set(clouds[0]);
      field.geo.setDrawRange(0, count);
      field.geo.attributes.position.needsUpdate = true;

      setLabel(SEQUENCE[0].label);
    },

    resize(w, h) {
      width = w;
      height = h;
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette || currentPalette;

      const want = Math.min(1800, Math.max(600, Math.floor((params.particleCount || 1030) * 1.1)));
      if (want !== count && field) {
        layer.remove(field.points);
        field.geo.dispose();
        field.mat.map?.dispose();
        field.mat.dispose();
        rebuildClouds(want);
        field = makePoints(count, 8);
        layer.add(field.points);
      }

      // ポインタ速度で変容を少し加速
      const boost = pointer?.velocity > 8 ? 1.35 : 1;
      syncField(dt * boost, params);

      if (audioData?.isActive && audioData.bass > 0.45 && phase === 'hold' && phaseT > 0.4) {
        // 低音で次の変容を早めに開始
        phaseT = Math.max(phaseT, SEQUENCE[stageIndex].hold - 0.15);
      }
    },

    render() {},

    onPointerDown() {
      // タップで次の変容へ
      if (phase === 'hold') {
        phase = 'morph';
        phaseT = 0;
        fromCloud = clouds[stageIndex];
        toCloud = clouds[(stageIndex + 1) % SEQUENCE.length];
        const step = SEQUENCE[stageIndex];
        const next = SEQUENCE[(stageIndex + 1) % SEQUENCE.length];
        setLabel(`${step.label} → ${next.label}`);
      }
    },
    onPointerMove() {},
    onPointerUp() {},

    setParams(p) {
      currentPalette = p.palette || currentPalette;
      if (count > 0) {
        colorA = paletteUnitColors(currentPalette, count);
        colorB = paletteUnitColors(currentPalette, count);
      }
    },

    destroy() {
      field = null;
      clouds = [];
      layer = null;
      if (labelEl) {
        labelEl.remove();
        labelEl = null;
      }
    },
  };
}
