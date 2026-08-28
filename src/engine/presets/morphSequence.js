import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { makePoints, clearGroup, spreadModelCloudToWorld, spreadScreenCloud } from '../space3d.js';
import { morphPositions } from '../morph/morphEngine.js';
import { createFlowerBloom } from './flowerBloom.js';
import { createLetterXBloom } from './letterXBloom.js';
import { createJellyfishBloom } from './jellyfishBloom.js';
import { createMusicNoteBloom } from './musicNoteBloom.js';
import {
  createTadpoleBloom,
  createAngelBloom,
  neonRainbowUnitColors,
} from './formBloom.js';
import { createClockBloom } from './clockBloom.js';
import { samplePetalCloud } from '../morph/sampleShapes.js';
import { createSolidForm } from '../morph/solidForms.js';

/**
 * 変容シークエンス
 * 花びら → クラゲ → 文字 → オタマ → 時計 → 音楽記号 → 天使
 * hold: Infinity = 自動進行なし（ダブルクリックのみ）
 * 花びら以外はすべて同じ出現ロジック（色・サイズ・カーソル追従）
 */
const SEQUENCE = [
  { id: 'petal', label: '花びら', hold: Infinity, morph: 2.4, style: 'swarm' },
  { id: 'jellyfish', label: 'クラゲ', hold: Infinity, morph: 2.4, style: 'trail' },
  { id: 'letter', label: 'A B C · X Y Z', hold: Infinity, morph: 2.4, style: 'swarm' },
  { id: 'tadpole', label: 'オタマ', hold: Infinity, morph: 2.4, style: 'trail' },
  { id: 'clock', label: '時計', hold: Infinity, morph: 2.2, style: 'swarm' },
  { id: 'music', label: '♪ 音楽記号', hold: Infinity, morph: 2.6, style: 'burst' },
  { id: 'angel', label: '天使', hold: Infinity, morph: 2.8, style: 'burst' },
];

const MANUAL_HINT = 'じっくり操作可 · 次へはダブルクリックのみ';

const BLOOM_FACTORIES = {
  letter: createLetterXBloom,
  jellyfish: createJellyfishBloom,
  clock: createClockBloom,
  tadpole: createTadpoleBloom,
  music: createMusicNoteBloom,
  angel: createAngelBloom,
};

function paletteUnitColors(name, count) {
  const colors = getPaletteColors(name);
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const hex = colors[i % colors.length];
    const { r, g, b } = hexToRgb(hex);
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
  let flowerGroup = null;
  let flowerBloom = null;
  /** @type {Record<string, { group: import('three').Group, bloom: any }>} */
  let bloomSlots = {};
  let field = null;
  let currentPalette = 'rainbow';
  let latestParams = null;
  let count = 1200;

  let stageIndex = 0;
  let phase = 'hold';
  let phaseT = 0;
  let fromCloud = null;
  let toCloud = null;
  let colorA = null;
  let colorB = null;
  let labelEl = null;
  let lastPointerDown = 0;

  function currentId() {
    return SEQUENCE[stageIndex]?.id;
  }

  function isPetalHold() {
    return currentId() === 'petal' && phase === 'hold';
  }

  function isFormBloomHold() {
    return phase === 'hold' && !!BLOOM_FACTORIES[currentId()];
  }

  function activeBloom() {
    return bloomSlots[currentId()]?.bloom || null;
  }

  function tryAdvanceByDoubleClick() {
    const now = performance.now();
    if (now - lastPointerDown < 380) {
      beginMorph();
      lastPointerDown = 0;
      return true;
    }
    lastPointerDown = now;
    return false;
  }

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
      'text-align:center',
      'line-height:1.5',
    ].join(';');
    document.body.appendChild(labelEl);
  }

  function setLabel(text, hint = '') {
    ensureLabel();
    labelEl.innerHTML = hint
      ? `${text}<br><span style="font-size:11px;opacity:0.55;letter-spacing:0.06em">${hint}</span>`
      : text;
  }

  function setFieldVisible(visible) {
    if (!field) return;
    field.points.visible = visible;
    if (!visible) field.geo.setDrawRange(0, 0);
  }

  function stopFlowerBloom() {
    if (flowerBloom) {
      flowerBloom.destroy();
      flowerBloom = null;
    }
    if (flowerGroup) clearGroup(flowerGroup);
  }

  function stopAllFormBlooms() {
    for (const id of Object.keys(bloomSlots)) {
      const slot = bloomSlots[id];
      slot.bloom?.destroy?.();
      if (slot.group) clearGroup(slot.group);
      slot.bloom = null;
    }
  }

  function stopEverything() {
    stopFlowerBloom();
    stopAllFormBlooms();
  }

  function startFlowerBloom(params) {
    stopEverything();
    if (!flowerGroup || !layer) return;
    flowerBloom = createFlowerBloom();
    flowerBloom.init(width, height, params || latestParams || { palette: currentPalette }, flowerGroup);
    setFieldVisible(false);
    setLabel('花びら', MANUAL_HINT);
  }

  function startFormBloom(stepId, label) {
    stopEverything();
    const slot = bloomSlots[stepId];
    const factory = BLOOM_FACTORIES[stepId];
    if (!slot || !factory) return;
    try {
      slot.bloom = factory();
      slot.bloom.init(width, height, latestParams || { palette: currentPalette }, slot.group);
    } catch (err) {
      console.error('[MorphSequence] bloom init failed:', stepId, err);
      slot.bloom = null;
      return;
    }
    setFieldVisible(false);
    setLabel(label, MANUAL_HINT);
  }

  function sampleStageCloud(stepIndex) {
    const step = SEQUENCE[stepIndex];
    if (step.id === 'petal') {
      const model = samplePetalCloud(count, 95);
      return spreadModelCloudToWorld(model, count, width, height, 0.12);
    }

    const live = bloomSlots[step.id]?.bloom;
    if (live?.samplePoints) return live.samplePoints(count);

    const tempId = step.id === 'letter' ? 'letter' : step.id;
    const temp = createSolidForm(tempId, currentPalette);
    if (!temp) return spreadScreenCloud(count, width, height);
    const model = temp.samplePoints(count);
    temp.dispose?.();
    return spreadModelCloudToWorld(model, count, width, height, 0.14);
  }

  function rebuildColors(n) {
    count = n;
    colorA = paletteUnitColors(currentPalette, count);
    colorB = paletteUnitColors(currentPalette, count);
    for (let i = 0; i < count; i++) {
      const j = ((i * 7) + 3) % count;
      colorB[i * 3] = colorA[j * 3];
      colorB[i * 3 + 1] = colorA[j * 3 + 1];
      colorB[i * 3 + 2] = colorA[j * 3 + 2];
    }
  }

  function colorsForStage(stepIndex) {
    const id = SEQUENCE[stepIndex]?.id;
    if (id === 'tadpole') return neonRainbowUnitColors(currentPalette, count);
    if (id === 'clock') return paletteUnitColors('clockRainbow', count);
    return paletteUnitColors(currentPalette, count);
  }

  function beginMorph() {
    const step = SEQUENCE[stageIndex];
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    const next = SEQUENCE[nextIndex];
    phase = 'morph';
    phaseT = 0;

    fromCloud = sampleStageCloud(stageIndex);
    toCloud = sampleStageCloud(nextIndex);
    colorA = colorsForStage(stageIndex);
    colorB = colorsForStage(nextIndex);

    stopEverything();
    setFieldVisible(true);
    field.positions.set(fromCloud);
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;

    setLabel(`${step.label} → ${next.label}`, '変容中');
  }

  function enterHoldStage() {
    phase = 'hold';
    phaseT = 0;
    const step = SEQUENCE[stageIndex];
    setFieldVisible(false);

    if (step.id === 'petal') {
      startFlowerBloom(latestParams);
    } else if (BLOOM_FACTORIES[step.id]) {
      startFormBloom(step.id, step.label);
    }
  }

  function paintColors(mix) {
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
  }

  function syncStage(dt, params) {
    if (!field) return;
    const step = SEQUENCE[stageIndex];
    phaseT += dt * (params.speed || 1);

    if (phase === 'hold') return;

    setFieldVisible(true);
    const progress = Math.min(1, phaseT / step.morph);
    morphPositions(field.positions, fromCloud, toCloud, progress, time, step.style);
    paintColors(progress);
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;
    field.geo.attributes.color.needsUpdate = true;
    field.mat.size = Math.max(4, Math.min(14, (params.particleSize || 15) * 0.55));

    if (progress >= 1) {
      stageIndex = (stageIndex + 1) % SEQUENCE.length;
      enterHoldStage();
    }
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
      latestParams = { ...params };

      flowerGroup = new THREE.Group();
      flowerGroup.name = 'morphFlowerBloom';
      layer.add(flowerGroup);

      bloomSlots = {};
      for (const id of Object.keys(BLOOM_FACTORIES)) {
        const g = new THREE.Group();
        g.name = `morphBloom_${id}`;
        layer.add(g);
        bloomSlots[id] = { group: g, bloom: null };
      }

      const n = Math.min(1800, Math.max(600, Math.floor((params.particleCount || 1030) * 1.1)));
      rebuildColors(n);

      field = makePoints(n, 8);
      field.mat.sizeAttenuation = true;
      field.mat.opacity = 0.95;
      layer.add(field.points);

      enterHoldStage();
    },

    resize(w, h) {
      width = w;
      height = h;
      flowerBloom?.resize?.(w, h);
      for (const slot of Object.values(bloomSlots)) slot.bloom?.resize?.(w, h);
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      latestParams = params;
      currentPalette = params.palette || currentPalette;

      const want = Math.min(1800, Math.max(600, Math.floor((params.particleCount || 1030) * 1.1)));
      if (want !== count && field) {
        layer.remove(field.points);
        field.geo.dispose();
        field.mat.map?.dispose();
        field.mat.dispose();
        rebuildColors(want);
        field = makePoints(count, 8);
        layer.add(field.points);
        if (phase === 'hold') setFieldVisible(false);
      }

      if (isPetalHold() && flowerBloom) {
        flowerBloom.update(dt, pointer, audioData, params);
      }
      const bloom = activeBloom();
      if (isFormBloomHold() && bloom) {
        bloom.update(dt, pointer, audioData, params);
      }

      const boost = pointer?.velocity > 8 && phase === 'morph' ? 1.35 : 1;
      syncStage(dt * boost, params);
    },

    render() {
      if (isPetalHold() && flowerBloom) flowerBloom.render();
      const bloom = activeBloom();
      if (isFormBloomHold() && bloom) bloom.render();
    },

    onPointerDown(x, y, pointer) {
      if (isPetalHold()) {
        if (tryAdvanceByDoubleClick()) return;
        flowerBloom?.onPointerDown?.(x, y, pointer);
        return;
      }

      if (isFormBloomHold()) {
        if (tryAdvanceByDoubleClick()) return;
        activeBloom()?.onPointerDown?.(x, y, pointer);
      }
    },

    onPointerMove(x, y, pointer) {
      if (isPetalHold()) flowerBloom?.onPointerMove?.(x, y, pointer);
      if (isFormBloomHold()) activeBloom()?.onPointerMove?.(x, y, pointer);
    },

    onPointerUp(pointer) {
      if (isPetalHold()) flowerBloom?.onPointerUp?.(pointer);
      if (isFormBloomHold()) activeBloom()?.onPointerUp?.(pointer);
    },

    setParams(p) {
      currentPalette = p.palette || currentPalette;
      latestParams = { ...(latestParams || {}), ...p };
      if (count > 0) {
        colorA = paletteUnitColors(currentPalette, count);
        colorB = paletteUnitColors(currentPalette, count);
      }
      flowerBloom?.setParams?.(p);
      for (const slot of Object.values(bloomSlots)) slot.bloom?.setParams?.(p);
    },

    destroy() {
      stopEverything();
      field = null;
      flowerGroup = null;
      bloomSlots = {};
      layer = null;
      if (labelEl) {
        labelEl.remove();
        labelEl = null;
      }
    },
  };
}
