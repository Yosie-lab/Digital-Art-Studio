import * as THREE from 'three';
import { makePoints, clearGroup } from '../space3d.js';
import { morphPositions } from '../morph/morphEngine.js';
import { createMorphStageLabel } from '../morph/morphStageLabel.js';
import { createMorphViewport } from '../morph/morphViewport.js';
import {
  cloudValid,
  angelMorphFallback,
  ensureSpreadCloud,
  morphStartSpreadCloud,
  guaranteeMorphClouds,
  sampleStageCloudNeutral,
} from '../morph/morphCloudSampling.js';
import {
  paletteUnitColors,
  rebuildMorphColors,
  colorsForStage,
  paintMorphColors,
} from '../morph/morphPalette.js';
import {
  SEQUENCE,
  MANUAL_HINT,
  DOUBLE_TAP_MS,
  BLOOM_FACTORIES,
} from '../morph/morphSequenceConfig.js';
import { neutralHoldPointer } from '../pointer.js';
import { createFlowerBloom } from './flowerBloom.js';

/**
 * 変容シークエンス
 * hold: Infinity = 自動進行なし（ダブルクリックのみ）
 */
export function createMorphSequence() {
  const viewport = createMorphViewport();
  const label = createMorphStageLabel();

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
  let lastAdvanceTap = 0;
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
    if (!flowerGroup || !layer || !viewport.isReady()) return;
    const { w, h } = viewport.sampleDims();
    flowerBloom = createFlowerBloom();
    flowerBloom.init(w, h, params || latestParams || { palette: currentPalette }, flowerGroup);
    setFieldVisible(false);
    label.set('花びら', MANUAL_HINT);
  }

  function startFormBloom(stepId, stepLabel) {
    stopEverything();
    const slot = bloomSlots[stepId];
    const factory = BLOOM_FACTORIES[stepId];
    if (!slot || !factory || !viewport.isReady()) return;
    const { w, h } = viewport.sampleDims();
    try {
      slot.bloom = factory();
      slot.bloom.init(w, h, latestParams || { palette: currentPalette }, slot.group);
    } catch (err) {
      console.error('[MorphSequence] bloom init failed:', stepId, err);
      slot.bloom = null;
      return;
    }
    setFieldVisible(false);
    label.set(stepLabel, MANUAL_HINT);
  }

  function applyMorphStartSpreads(cw, ch, fallback = null, nextIndex = null) {
    fromCloud = morphStartSpreadCloud(count, cw, ch, fallback);
    if (nextIndex != null) {
      toCloud = ensureSpreadCloud(
        sampleStageCloudNeutral(nextIndex, count, cw, ch, currentPalette),
        count,
        cw,
        ch,
        fallback,
      );
    } else {
      toCloud = morphStartSpreadCloud(count, cw, ch, fallback);
    }
    ({ fromCloud, toCloud } = guaranteeMorphClouds(fromCloud, toCloud, count, cw, ch, fallback));
  }

  function syncBloomViewports() {
    if (!viewport.isReady()) return;
    const { w, h } = viewport.sampleDims();
    flowerBloom?.resize?.(w, h);
    for (const slot of Object.values(bloomSlots)) slot.bloom?.resize?.(w, h);
  }

  function rebuildColors(n) {
    count = n;
    ({ colorA, colorB } = rebuildMorphColors(count, currentPalette));
  }

  function runMorph() {
    if (!viewport.morphReady()) {
      pendingMorph = true;
      return;
    }
    pendingMorph = false;
    morphCompletePending = false;

    const step = SEQUENCE[stageIndex];
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    const next = SEQUENCE[nextIndex];
    const { w: cw, h: ch } = viewport.sampleDims();

    syncBloomViewports();
    const angelMorph = step.id === 'angel' || next.id === 'angel';
    if (angelMorph) {
      bloomSlots.angel?.bloom?.resize?.(cw, ch);
    }

    applyMorphStartSpreads(cw, ch, angelMorph ? angelMorphFallback : null, nextIndex);

    phase = 'morph';
    phaseT = 0;
    colorA = colorsForStage(stageIndex, count, currentPalette);
    colorB = colorsForStage(nextIndex, count, currentPalette);

    stopEverything();
    setFieldVisible(true);
    field.positions.set(fromCloud);
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;

    label.set(`${step.label} → ${next.label}`, '変容中');
  }

  function beginMorph() {
    if (phase === 'morph') return;
    if (!viewport.morphReady()) {
      pendingMorph = true;
      return;
    }
    pendingMorph = false;
    runMorph();
  }

  function enterHoldStage(index = stageIndex) {
    if (!viewport.isReady()) {
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
    if (!viewport.isReady()) return;
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    if (enterHoldStage(nextIndex)) {
      stageIndex = nextIndex;
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
    const { w: cw, h: ch } = viewport.sampleDims();
    const nextId = SEQUENCE[(stageIndex + 1) % SEQUENCE.length]?.id;
    const angelMorph = step.id === 'angel' || nextId === 'angel';
    const morphFallback = angelMorph ? angelMorphFallback : null;
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    if (!fromCloud || !toCloud
      || fromCloud.length !== field.positions.length
      || toCloud.length !== field.positions.length
      || !cloudValid(fromCloud, count, cw, ch)
      || !cloudValid(toCloud, count, cw, ch)) {
      applyMorphStartSpreads(cw, ch, morphFallback, nextIndex);
      if (fromCloud) field.positions.set(fromCloud);
    }
    const progress = Math.min(1, phaseT / step.morph);
    if (fromCloud && toCloud && fromCloud.length === field.positions.length && toCloud.length === field.positions.length) {
      morphPositions(field.positions, fromCloud, toCloud, progress, time, step.style);
    }
    paintMorphColors(field, count, time, stageIndex, colorA, colorB, progress);
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;
    field.geo.attributes.color.needsUpdate = true;
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
      viewport.setSize(w, h);
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

      if (viewport.isReady()) enterHoldStage();
      else holdDeferred = true;
    },

    resize(w, h) {
      const prevW = viewport.width;
      const prevH = viewport.height;
      viewport.setSize(w, h);
      flowerBloom?.resize?.(w, h);
      for (const slot of Object.values(bloomSlots)) slot.bloom?.resize?.(w, h);

      if (phase === 'hold' && viewport.isReady() && (holdDeferred || viewport.realDimsArrived(prevW, prevH))) {
        enterHoldStage(stageIndex);
      }
      if (morphCompletePending && viewport.isReady()) {
        tryCompleteMorph();
      }
      if (pendingMorph && viewport.morphReady()) beginMorph();
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      latestParams = params;
      currentPalette = params.palette || currentPalette;

      if (viewport.isReady()) {
        if (holdDeferred && phase === 'hold') enterHoldStage(stageIndex);
        if (morphCompletePending) tryCompleteMorph();
      }
      if (viewport.morphReady() && pendingMorph && phase !== 'morph') beginMorph();

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
        flowerBloom.update(dt, neutralHoldPointer(pointer), audioData, params);
      }
      const bloom = activeBloom();
      if (isFormBloomHold() && bloom) {
        bloom.update(dt, neutralHoldPointer(pointer), audioData, params);
      }

      const boost = pointer?.velocity > 8 && phase === 'morph' ? 1.35 : 1;
      syncStage(dt * boost, params);
    },

    render() {
      if (isPetalHold() && flowerBloom) flowerBloom.render();
      const bloom = activeBloom();
      if (isFormBloomHold() && bloom) bloom.render();
    },

    onPointerDown() {},

    onPointerMove() {},

    onPointerUp() {
      if (phase === 'hold' && (isPetalHold() || isFormBloomHold())) {
        tryAdvanceByDoubleTap();
      }
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
      label.destroy();
    },
  };
}
