import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { makePoints, clearGroup, spreadModelCloudToWorld, spreadScreenCloud, viewportReady, safeViewport, cloudWellSpread, cloudIsDegenerate, minCloudSpread, ensureCloudSpread } from '../space3d.js';
import { ANGEL_SATURATION } from '../bloom/cyberNeon.js';
import { morphPositions } from '../morph/morphEngine.js';
import { createFlowerBloom } from './flowerBloom.js';
import { createLetterXBloom } from './letterXBloom.js';
import { createJellyfishBloom } from './jellyfishBloom.js';
import { createMusicNoteBloom } from './musicNoteBloom.js';
import { createTadpoleBloom } from './tadpoleBloom.js';
import { createAngelBloom } from './angelBloom.js';
import {
  neonRainbowUnitColors,
  neonAngelUnitColors,
} from '../bloom/morphColors.js';
import { createButterflyBloom } from './butterflyBloom.js';
import { samplePetalCloud, sampleAngelCloud } from '../morph/sampleShapes.js';
import { createSolidForm } from '../morph/solidForms.js';

/**
 * 変容シークエンス
 * 花びら → クラゲ → 文字 → オタマ → 蝶 → 音楽記号 → 天使
 * hold: Infinity = 自動進行なし（ダブルクリックのみ）
 * 花びら以外はすべて同じ出現ロジック（色・サイズ・カーソル追従）
 */
const SEQUENCE = [
  { id: 'petal', label: '花びら', hold: Infinity, morph: 2.4, style: 'swarm' },
  { id: 'jellyfish', label: 'クラゲ', hold: Infinity, morph: 2.4, style: 'trail' },
  { id: 'letter', label: 'A B C · X Y Z', hold: Infinity, morph: 2.4, style: 'swarm' },
  { id: 'tadpole', label: 'オタマ', hold: Infinity, morph: 2.4, style: 'trail' },
  { id: 'butterfly', label: '蝶', hold: Infinity, morph: 2.2, style: 'swarm' },
  { id: 'music', label: '♪ 音楽記号', hold: Infinity, morph: 2.6, style: 'burst' },
  { id: 'angel', label: '天使', hold: Infinity, morph: 2.8, style: 'burst' },
];

const MANUAL_HINT = 'じっくり操作可 · 次へはダブルクリックのみ';
const MORPH_VIEWPORT_MIN = 200;
const DOUBLE_TAP_MS = 450;

const BLOOM_FACTORIES = {
  letter: createLetterXBloom,
  jellyfish: createJellyfishBloom,
  butterfly: createButterflyBloom,
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
  let fieldLarge = null;
  let largeCount = 0;
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
  let lastAdvanceTap = 0;
  let stableWidth = 0;
  let stableHeight = 0;
  let pendingMorph = false;
  let holdDeferred = false;
  let morphCompletePending = false;

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

  function tryAdvanceByDoubleTap(now = performance.now()) {
    if (now - lastAdvanceTap < DOUBLE_TAP_MS) {
      beginMorph();
      lastAdvanceTap = 0;
      return true;
    }
    lastAdvanceTap = now;
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
    if (fieldLarge) {
      fieldLarge.points.visible = visible;
      if (!visible) fieldLarge.geo.setDrawRange(0, 0);
    }
  }

  function syncAngelLargeField(angelMorph, baseSize, opacity) {
    if (!fieldLarge || !angelMorph) {
      if (fieldLarge) {
        fieldLarge.points.visible = false;
        fieldLarge.geo.setDrawRange(0, 0);
      }
      return;
    }
    fieldLarge.points.visible = true;
    fieldLarge.mat.size = Math.min(18, baseSize * 1.72);
    fieldLarge.mat.opacity = opacity * 0.9;
    let li = 0;
    for (let i = 0; i < count && li < largeCount; i += 4) {
      const i3 = i * 3;
      const li3 = li * 3;
      fieldLarge.positions[li3] = field.positions[i3];
      fieldLarge.positions[li3 + 1] = field.positions[i3 + 1];
      fieldLarge.positions[li3 + 2] = field.positions[i3 + 2];
      fieldLarge.colors[li3] = field.colors[i3];
      fieldLarge.colors[li3 + 1] = field.colors[i3 + 1];
      fieldLarge.colors[li3 + 2] = field.colors[i3 + 2];
      li++;
    }
    fieldLarge.geo.setDrawRange(0, li);
    fieldLarge.geo.attributes.position.needsUpdate = true;
    fieldLarge.geo.attributes.color.needsUpdate = true;
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
    if (!flowerGroup || !layer || !viewportIsReady()) return;
    const { w, h } = sampleDims();
    flowerBloom = createFlowerBloom();
    flowerBloom.init(w, h, params || latestParams || { palette: currentPalette }, flowerGroup);
    setFieldVisible(false);
    setLabel('花びら', MANUAL_HINT);
  }

  function startFormBloom(stepId, label) {
    stopEverything();
    const slot = bloomSlots[stepId];
    const factory = BLOOM_FACTORIES[stepId];
    if (!slot || !factory || !viewportIsReady()) return;
    const { w, h } = sampleDims();
    try {
      slot.bloom = factory();
      slot.bloom.init(w, h, latestParams || { palette: currentPalette }, slot.group);
    } catch (err) {
      console.error('[MorphSequence] bloom init failed:', stepId, err);
      slot.bloom = null;
      return;
    }
    setFieldVisible(false);
    setLabel(label, MANUAL_HINT);
  }

  function rememberStableViewport(w, h) {
    if (viewportReady(w, h)) {
      stableWidth = w;
      stableHeight = h;
      return true;
    }
    return false;
  }

  function sampleDims() {
    if (viewportReady(width, height)) return { w: width, h: height };
    if (viewportReady(stableWidth, stableHeight)) return { w: stableWidth, h: stableHeight };
    return safeViewport(width, height, stableWidth, stableHeight);
  }

  function viewportIsReady() {
    return viewportReady(width, height) || viewportReady(stableWidth, stableHeight);
  }

  /** morph 開始・完了に必要な実寸（64px フォールバック不可） */
  function morphViewportReady() {
    const { w, h } = sampleDims();
    return w >= MORPH_VIEWPORT_MIN && h >= MORPH_VIEWPORT_MIN;
  }

  function forceMorphCloud(cloud, w, h, fallback = null) {
    const min = minCloudSpread(w, h);
    if (!cloud || cloud.length !== count * 3 || cloudIsDegenerate(cloud, min)) {
      if (fallback) return ensureSpreadCloud(fallback(count, w, h), count, w, h);
      return spreadScreenCloud(count, w, h);
    }
    return ensureSpreadCloud(cloud, count, w, h, fallback ? (n, cw, ch) => fallback(n, cw, ch) : null);
  }

  function angelMorphFallback(n, w, h) {
    return spreadModelCloudToWorld(sampleAngelCloud(n, 130), n, w, h, 0.14);
  }

  function ensureSpreadCloud(cloud, w, h) {
    return ensureCloudSpread(cloud, count, w, h, spreadScreenCloud);
  }

  function cloudValid(cloud, w, h) {
    if (!cloud || cloud.length !== count * 3) return false;
    for (let i = 0; i < cloud.length; i++) {
      if (!Number.isFinite(cloud[i])) return false;
    }
    const min = minCloudSpread(w, h);
    return cloudWellSpread(cloud, min) && !cloudIsDegenerate(cloud, min);
  }

  function syncBloomViewports() {
    if (!viewportIsReady()) return;
    const { w, h } = sampleDims();
    flowerBloom?.resize?.(w, h);
    for (const slot of Object.values(bloomSlots)) slot.bloom?.resize?.(w, h);
  }

  function sampleAngelStageCloud(w, h) {
    const { w: vw, h: vh } = safeViewport(w, h, stableWidth, stableHeight);
    const fallback = (n, cw, ch) => angelMorphFallback(n, cw, ch);

    const live = bloomSlots.angel?.bloom;
    if (live?.samplePoints) {
      live.resize?.(vw, vh);
      return ensureSpreadCloud(live.samplePoints(count, vw, vh), vw, vh, fallback);
    }

    const slot = bloomSlots.angel;
    const factory = BLOOM_FACTORIES.angel;
    if (factory && slot?.group) {
      try {
        const temp = factory();
        temp.init(vw, vh, latestParams || { palette: currentPalette }, slot.group);
        const cloud = ensureSpreadCloud(temp.samplePoints(count, vw, vh), vw, vh, fallback);
        temp.destroy();
        clearGroup(slot.group);
        return cloud;
      } catch (err) {
        console.error('[MorphSequence] angel prewarm failed:', err);
        clearGroup(slot.group);
      }
    }

    return ensureSpreadCloud(angelMorphFallback(count, vw, vh), vw, vh);
  }

  function sampleStageCloud(stepIndex) {
    const step = SEQUENCE[stepIndex];
    const { w, h } = sampleDims();

    if (step.id === 'petal') {
      if (flowerBloom?.samplePoints) return ensureSpreadCloud(flowerBloom.samplePoints(count, w, h), w, h);
      const model = samplePetalCloud(count, 95);
      return spreadModelCloudToWorld(model, count, w, h, 0.12);
    }

    if (step.id === 'angel') return sampleAngelStageCloud(w, h);

    const live = bloomSlots[step.id]?.bloom;
    if (live?.samplePoints) return ensureSpreadCloud(live.samplePoints(count, w, h), w, h);

    const tempId = step.id === 'letter' ? 'letter' : step.id;
    const temp = createSolidForm(tempId, currentPalette);
    if (!temp) return spreadScreenCloud(count, w, h);
    const model = temp.samplePoints(count);
    temp.dispose?.();
    return spreadModelCloudToWorld(model, count, w, h, 0.14);
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
    if (id === 'angel') return neonAngelUnitColors(count);
    if (id === 'butterfly') return paletteUnitColors('clockRainbow', count);
    return paletteUnitColors(currentPalette, count);
  }

  function runMorph() {
    if (!morphViewportReady()) {
      pendingMorph = true;
      return;
    }
    pendingMorph = false;
    morphCompletePending = false;

    const step = SEQUENCE[stageIndex];
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    const next = SEQUENCE[nextIndex];
    const { w: cw, h: ch } = sampleDims();
    const min = minCloudSpread(cw, ch);

    syncBloomViewports();
    const angelMorph = step.id === 'angel' || next.id === 'angel';
    if (angelMorph) {
      bloomSlots.angel?.bloom?.resize?.(cw, ch);
    }

    fromCloud = forceMorphCloud(sampleStageCloud(stageIndex), cw, ch, angelMorph ? angelMorphFallback : null);
    toCloud = forceMorphCloud(sampleStageCloud(nextIndex), cw, ch, angelMorph ? angelMorphFallback : null);
    if (!cloudValid(fromCloud, cw, ch)) fromCloud = spreadScreenCloud(count, cw, ch);
    if (!cloudValid(toCloud, cw, ch)) toCloud = spreadScreenCloud(count, cw, ch);

    if (cloudIsDegenerate(fromCloud, min) || cloudIsDegenerate(toCloud, min)) {
      morphCompletePending = true;
      phase = 'morph';
      phaseT = step.morph;
      stopEverything();
      setFieldVisible(false);
      tryCompleteMorph();
      return;
    }

    phase = 'morph';
    phaseT = 0;
    colorA = colorsForStage(stageIndex);
    colorB = colorsForStage(nextIndex);

    stopEverything();
    setFieldVisible(true);
    field.positions.set(fromCloud);
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;

    setLabel(`${step.label} → ${next.label}`, '変容中');
  }

  function beginMorph() {
    if (phase === 'morph') return;
    if (!morphViewportReady()) {
      pendingMorph = true;
      return;
    }
    pendingMorph = false;
    runMorph();
  }

  function enterHoldStage(index = stageIndex) {
    if (!viewportIsReady()) {
      holdDeferred = true;
      return false;
    }
    holdDeferred = false;
    morphCompletePending = false;
    pendingMorph = false;
    phase = 'hold';
    phaseT = 0;
    fromCloud = null;
    toCloud = null;
    const step = SEQUENCE[index];
    setFieldVisible(false);

    if (step.id === 'petal') {
      startFlowerBloom(latestParams);
    } else if (BLOOM_FACTORIES[step.id]) {
      startFormBloom(step.id, step.label);
    }
    return true;
  }

  function tryCompleteMorph() {
    if (!morphCompletePending || phase !== 'morph') return;
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    if (enterHoldStage(nextIndex)) {
      stageIndex = nextIndex;
    }
  }

  function paintColors(mix) {
    const stepId = SEQUENCE[stageIndex]?.id;
    const nextId = SEQUENCE[(stageIndex + 1) % SEQUENCE.length]?.id;
    const angelMix = stepId === 'angel' || nextId === 'angel';
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const pulse = (stepId === 'angel' || nextId === 'angel')
        ? 0.92 + 0.48 * (0.5 + 0.5 * Math.sin(time * 2.5 + i * 0.02))
        : 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(time * 2.5 + i * 0.02));
      let r = colorA[i3] * (1 - mix) + colorB[i3] * mix;
      let g = colorA[i3 + 1] * (1 - mix) + colorB[i3 + 1] * mix;
      let b = colorA[i3 + 2] * (1 - mix) + colorB[i3 + 2] * mix;
      if (angelMix) {
        const w = 0.06;
        r = r * (1 - w) + w;
        g = g * (1 - w) + w;
        b = b * (1 - w) + w;
        const gray = (r + g + b) / 3;
        const sat = ANGEL_SATURATION;
        r = Math.min(1, Math.max(0, gray + (r - gray) * sat));
        g = Math.min(1, Math.max(0, gray + (g - gray) * sat));
        b = Math.min(1, Math.max(0, gray + (b - gray) * sat));
      }
      field.colors[i3] = r * pulse;
      field.colors[i3 + 1] = g * pulse;
      field.colors[i3 + 2] = b * pulse;
    }
  }

  function syncStage(dt, params) {
    if (!field) return;
    const step = SEQUENCE[stageIndex];

    if (phase === 'hold') return;

    if (morphCompletePending) {
      phaseT = step.morph;
    } else {
      phaseT += dt * (params.speed || 1);
    }

    setFieldVisible(true);
    const progress = Math.min(1, phaseT / step.morph);
    if (fromCloud && toCloud && fromCloud.length === field.positions.length && toCloud.length === field.positions.length) {
      morphPositions(field.positions, fromCloud, toCloud, progress, time, step.style);
    }
    paintColors(progress);
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;
    field.geo.attributes.color.needsUpdate = true;
    const nextId = SEQUENCE[(stageIndex + 1) % SEQUENCE.length]?.id;
    const angelMorph = step.id === 'angel' || nextId === 'angel';
    const sizeMul = angelMorph ? 0.36 : 0.55;
    const baseSize = Math.max(4, Math.min(14, (params.particleSize || 15) * sizeMul));
    field.mat.size = baseSize;
    field.mat.opacity = angelMorph ? 0.66 : 0.95;
    syncAngelLargeField(angelMorph, baseSize, field.mat.opacity);

    if (progress >= 1 && !morphCompletePending) {
      morphCompletePending = true;
      phaseT = step.morph;
      tryCompleteMorph();
    } else if (morphCompletePending) {
      tryCompleteMorph();
    }
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      rememberStableViewport(w, h);
      layer = group;
      time = 0;
      stageIndex = 0;
      phase = 'hold';
      phaseT = 0;
      morphCompletePending = false;
      pendingMorph = false;
      holdDeferred = false;
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
      largeCount = Math.max(1, Math.floor(n * 0.24));

      field = makePoints(n, 8);
      field.mat.sizeAttenuation = true;
      field.mat.opacity = 0.95;
      layer.add(field.points);

      fieldLarge = makePoints(largeCount, 12);
      fieldLarge.mat.sizeAttenuation = true;
      fieldLarge.mat.opacity = 0.78;
      fieldLarge.points.visible = false;
      layer.add(fieldLarge.points);

      if (viewportIsReady()) enterHoldStage();
      else holdDeferred = true;
    },

    resize(w, h) {
      const prevW = width;
      const prevH = height;
      width = w;
      height = h;
      rememberStableViewport(w, h);
      flowerBloom?.resize?.(w, h);
      for (const slot of Object.values(bloomSlots)) slot.bloom?.resize?.(w, h);

      const realDimsArrived = viewportReady(w, h) && !viewportReady(prevW, prevH);
      if (phase === 'hold' && viewportIsReady() && (holdDeferred || realDimsArrived)) {
        enterHoldStage(stageIndex);
      }
      if (morphCompletePending && viewportIsReady()) {
        tryCompleteMorph();
      }
      if (pendingMorph && morphViewportReady()) beginMorph();
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      latestParams = params;
      currentPalette = params.palette || currentPalette;

      if (viewportIsReady()) {
        if (holdDeferred && phase === 'hold') enterHoldStage(stageIndex);
        if (morphCompletePending) tryCompleteMorph();
      }
      if (morphViewportReady() && pendingMorph && phase !== 'morph') beginMorph();

      const want = Math.min(1800, Math.max(600, Math.floor((params.particleCount || 1030) * 1.1)));
      if (want !== count && field && phase !== 'morph') {
        layer.remove(field.points);
        field.geo.dispose();
        field.mat.map?.dispose();
        field.mat.dispose();
        if (fieldLarge) {
          layer.remove(fieldLarge.points);
          fieldLarge.geo.dispose();
          fieldLarge.mat.map?.dispose();
          fieldLarge.mat.dispose();
          fieldLarge = null;
        }
        rebuildColors(want);
        largeCount = Math.max(1, Math.floor(count * 0.24));
        field = makePoints(count, 8);
        fieldLarge = makePoints(largeCount, 12);
        fieldLarge.mat.sizeAttenuation = true;
        fieldLarge.mat.opacity = 0.78;
        fieldLarge.points.visible = false;
        layer.add(field.points, fieldLarge.points);
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
        flowerBloom?.onPointerDown?.(x, y, pointer);
        return;
      }

      if (isFormBloomHold()) {
        activeBloom()?.onPointerDown?.(x, y, pointer);
      }
    },

    onPointerMove(x, y, pointer) {
      if (isPetalHold()) flowerBloom?.onPointerMove?.(x, y, pointer);
      if (isFormBloomHold()) activeBloom()?.onPointerMove?.(x, y, pointer);
    },

    onPointerUp(pointer) {
      if (phase === 'hold' && (isPetalHold() || isFormBloomHold())) {
        if (tryAdvanceByDoubleTap()) return;
      }
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
      fieldLarge = null;
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
