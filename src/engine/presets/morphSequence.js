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
import { smootherstep, dampToward } from '../morph/morphEasing.js';
import {
  setGroupOpacity,
  restoreGroupOpacity,
  applyAngelIntroDim,
  clearAngelIntroDim,
} from '../morph/morphOpacity.js';
import { computeDissolveTargets, paintDissolveGlow } from '../morph/morphDissolve.js';
import {
  SEQUENCE,
  MANUAL_HINT,
  DOUBLE_TAP_MS,
  DISSOLVE_DURATION,
  DISSOLVE_HANDOFF_AT,
  BLOOM_FACTORIES,
} from '../morph/morphSequenceConfig.js';
import { neutralHoldPointer } from '../pointer.js';
import { createFlowerBloom } from './flowerBloom.js';

/**
 * 変容シークエンス
 * hold 秒で自動進行、ダブルクリックでも次ステージへ（天使の次は花びら）
 * 切替時はモデルが輝く粒子に変化して消え、粒子が薄れる頃に次ステージが重なる
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
  /** @type {Float32Array | null} */
  let dissolveVel = null;
  let dissolveFromIndex = 0;
  let dissolveHandoffDone = false;
  let dissolveModelsCleared = false;
  /** @type {import('three').Object3D[]} */
  let dissolveFadeGroups = [];
  /** @type {import('three').Object3D | null} */
  let dissolveIncomingGroup = null;
  // フレーム間スムージング用（急な不透明度変化を抑える）
  let dissolveModelOpSmooth = 1;
  let dissolveParticleOpSmooth = 0;
  let dissolveNextOpSmooth = 0;
  let dissolveSizeSmooth = 0.7;
  /** 天使登場直後の露出オーバーシュート抑え（1=通常） */
  let angelIntroMul = 1;

  function angelGroup() {
    return bloomSlots.angel?.group || null;
  }

  function resetDissolveState({
    vel,
    fadeGroups = [],
    sizeSmooth = 0.7,
    resetAngelIntro = true,
  } = {}) {
    if (vel !== undefined) dissolveVel = vel;
    dissolveHandoffDone = false;
    dissolveModelsCleared = false;
    dissolveFadeGroups = fadeGroups;
    dissolveIncomingGroup = null;
    dissolveModelOpSmooth = 1;
    dissolveParticleOpSmooth = 0;
    dissolveNextOpSmooth = 0;
    dissolveSizeSmooth = sizeSmooth;
    if (resetAngelIntro) {
      angelIntroMul = 1;
      clearAngelIntroDim(angelGroup());
    }
  }

  function currentId() {
    return SEQUENCE[stageIndex]?.id;
  }

  function isPetalHold() {
    return currentId() === 'petal' && (
      phase === 'hold' || (phase === 'dissolve' && dissolveHandoffDone)
    );
  }

  function isFormBloomHold() {
    return !!BLOOM_FACTORIES[currentId()] && (
      phase === 'hold' || (phase === 'dissolve' && dissolveHandoffDone)
    );
  }

  function activeBloom() {
    return bloomSlots[currentId()]?.bloom || null;
  }

  function bloomForStageId(id) {
    if (id === 'petal') return flowerBloom;
    return bloomSlots[id]?.bloom || null;
  }

  /** 溶け込み中も退場／登場モデルを動かし続ける */
  function updateDissolveBlooms(dt, pointer, audioData, params) {
    if (phase !== 'dissolve') return;
    const ptr = neutralHoldPointer(pointer);
    const fromId = SEQUENCE[dissolveFromIndex]?.id;
    const toId = dissolveHandoffDone ? currentId() : null;
    const updated = new Set();

    const run = (id) => {
      if (!id || updated.has(id)) return;
      const bloom = bloomForStageId(id);
      if (!bloom?.update) return;
      bloom.update(dt, ptr, audioData, params);
      updated.add(id);
    };

    if (!dissolveModelsCleared) run(fromId);
    if (dissolveHandoffDone) run(toId);
  }

  function applyDissolveOpacities() {
    if (phase !== 'dissolve') return;
    if (!dissolveModelsCleared) {
      for (const g of dissolveFadeGroups) setGroupOpacity(g, dissolveModelOpSmooth);
    }
    if (dissolveHandoffDone && dissolveIncomingGroup) {
      const incomingId = currentId();
      let op = dissolveNextOpSmooth;
      if (incomingId === 'angel') {
        // 立ち上がりをさらに遅らせ、最初の数フレームの閃きを潰す
        op = op * op * angelIntroMul;
        dissolveIncomingGroup.visible = op > 0.05;
      }
      setGroupOpacity(dissolveIncomingGroup, op);
    }
  }

  function updateAngelIntro(dt) {
    if (angelIntroMul >= 0.999) {
      if (angelIntroMul !== 1) {
        clearAngelIntroDim(angelGroup());
        angelIntroMul = 1;
      }
      return;
    }
    if (currentId() !== 'angel' || phase !== 'hold') return;
    angelIntroMul = dampToward(angelIntroMul, 1, dt, 2.4);
    applyAngelIntroDim(angelGroup(), angelIntroMul);
    if (angelIntroMul > 0.995) {
      clearAngelIntroDim(angelGroup());
      angelIntroMul = 1;
    }
  }

  function tryAdvanceByDoubleTap(now = performance.now()) {
    if (now - lastAdvanceTap < DOUBLE_TAP_MS) {
      beginDissolve();
      lastAdvanceTap = 0;
      return true;
    }
    lastAdvanceTap = now;
    return false;
  }

  function sampleLiveStageCloud() {
    const { w, h } = viewport.sampleDims();
    const fallback = (n, cw, ch) => morphStartSpreadCloud(n, cw, ch);
    if (currentId() === 'petal' && flowerBloom?.samplePoints) {
      syncBloomViewports();
      return ensureSpreadCloud(flowerBloom.samplePoints(count, w, h), count, w, h, fallback);
    }
    const bloom = activeBloom();
    if (bloom?.samplePoints) {
      syncBloomViewports();
      return ensureSpreadCloud(bloom.samplePoints(count, w, h), count, w, h, fallback);
    }
    return ensureSpreadCloud(
      sampleStageCloudNeutral(stageIndex, count, w, h, currentPalette),
      count,
      w,
      h,
      fallback,
    );
  }

  function collectActiveBloomGroups() {
    const groups = [];
    if (flowerBloom && flowerGroup) groups.push(flowerGroup);
    for (const slot of Object.values(bloomSlots)) {
      if (slot.bloom && slot.group) groups.push(slot.group);
    }
    return groups;
  }

  function beginDissolve() {
    if (phase === 'dissolve' || phase === 'morph') return;
    if (!viewport.morphReady()) {
      pendingMorph = true;
      return;
    }
    pendingMorph = false;
    morphCompletePending = false;
    dissolveFromIndex = stageIndex;
    resetDissolveState({ fadeGroups: collectActiveBloomGroups(), sizeSmooth: 0.65 });

    const step = SEQUENCE[stageIndex];
    const cloud = sampleLiveStageCloud();
    dissolveVel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ang = Math.random() * Math.PI * 2;
      const elev = (Math.random() - 0.15) * 0.32;
      const sp = 2.2 + Math.random() * 11;
      dissolveVel[i3] = Math.cos(ang) * sp * Math.cos(elev);
      dissolveVel[i3 + 1] = Math.sin(elev) * sp * 0.4 + 1.2;
      dissolveVel[i3 + 2] = Math.sin(ang) * sp * Math.cos(elev);
    }

    colorA = colorsForStage(dissolveFromIndex, count, currentPalette);
    colorB = colorA;
    field.positions.set(cloud);
    paintDissolveGlow(field, { count, time, dissolveFromIndex, colorA, fade: 0.04, progress: 0 });
    field.geo.setDrawRange(0, count);
    field.geo.attributes.position.needsUpdate = true;
    field.geo.attributes.color.needsUpdate = true;
    field.mat.opacity = 0;
    field.mat.size = Math.max(4, Math.min(13, (latestParams?.particleSize || 15) * 0.55));
    field.points.renderOrder = 30;
    setFieldVisible(true);
    if (fieldLarge) {
      fieldLarge.points.visible = false;
      fieldLarge.geo.setDrawRange(0, 0);
    }

    phase = 'dissolve';
    phaseT = 0;
    fromCloud = null;
    toCloud = null;
    label.set(step.label, '光の粒子へ…');
  }

  function clearOutgoingDissolveModels() {
    // 次ステージ開始後に全破棄すると新モデルも消えるため、退場側だけ片付ける
    const outgoing = new Set(dissolveFadeGroups);
    const keep = dissolveIncomingGroup;

    if (outgoing.has(flowerGroup) && keep !== flowerGroup) {
      stopFlowerBloom();
    }

    for (const id of Object.keys(bloomSlots)) {
      const slot = bloomSlots[id];
      if (!slot?.group || !outgoing.has(slot.group)) continue;
      if (slot.group === keep) continue;
      slot.bloom?.destroy?.();
      clearGroup(slot.group);
      slot.bloom = null;
    }

    dissolveFadeGroups = [];
    dissolveModelsCleared = true;
  }

  function startNextStageUnderDissolve(nextIndex) {
    if (!viewport.isReady()) return false;
    const step = SEQUENCE[nextIndex];
    stageIndex = nextIndex;
    if (step.id === 'petal') {
      // 旧 flower が残っていれば先に破棄（skipStop でも安全に差し替え）
      if (flowerBloom) {
        flowerBloom.destroy();
        flowerBloom = null;
        if (flowerGroup) clearGroup(flowerGroup);
      }
      startFlowerBloom(latestParams, { skipStop: true, keepFieldVisible: true });
      dissolveIncomingGroup = flowerGroup;
    } else if (BLOOM_FACTORIES[step.id]) {
      const slot = bloomSlots[step.id];
      if (slot?.bloom) {
        slot.bloom.destroy?.();
        slot.bloom = null;
        if (slot.group) clearGroup(slot.group);
      }
      startFormBloom(step.id, step.label, { skipStop: true, keepFieldVisible: true });
      dissolveIncomingGroup = bloomSlots[step.id]?.group || null;
    } else {
      dissolveIncomingGroup = null;
    }
    setGroupOpacity(dissolveIncomingGroup, 0);
    if (dissolveIncomingGroup) {
      dissolveIncomingGroup.renderOrder = 5;
      if (step.id === 'angel') {
        dissolveIncomingGroup.visible = false;
        angelIntroMul = 0.78;
      }
    }
    label.set(step.label, '現れています…');
    return true;
  }

  function finishDissolve() {
    dissolveVel = null;
    pendingMorph = false;
    phase = 'hold';
    phaseT = 0;
    setFieldVisible(false);
    if (fieldLarge) {
      fieldLarge.points.visible = false;
      fieldLarge.geo.setDrawRange(0, 0);
    }
    if (!dissolveModelsCleared) clearOutgoingDissolveModels();
    if (!dissolveHandoffDone) {
      const nextIndex = (dissolveFromIndex + 1) % SEQUENCE.length;
      startNextStageUnderDissolve(nextIndex);
    }
    // フェード用に下げた不透明度を元に戻す
    restoreGroupOpacity(dissolveIncomingGroup);
    if (dissolveIncomingGroup) dissolveIncomingGroup.visible = true;
    const arrivedAngel = SEQUENCE[stageIndex]?.id === 'angel';
    if (arrivedAngel) {
      // 完了時のスナップで一瞬明るく見えるのを抑える
      angelIntroMul = Math.min(angelIntroMul, 0.72);
      applyAngelIntroDim(angelGroup(), angelIntroMul);
    }
    resetDissolveState({ vel: null, resetAngelIntro: !arrivedAngel });
    const step = SEQUENCE[stageIndex];
    label.set(step.label, MANUAL_HINT);
  }

  function updateDissolve(dt, params) {
    if (!field || !dissolveVel) return;
    phaseT += dt;
    const progress = Math.min(1, phaseT / DISSOLVE_DURATION);
    const incomingId = SEQUENCE[(dissolveFromIndex + 1) % SEQUENCE.length]?.id;
    const { modelTarget, particleTarget, nextTarget, sizeTarget } = computeDissolveTargets(progress, incomingId);

    dissolveModelOpSmooth = dampToward(dissolveModelOpSmooth, modelTarget, dt, 4.2);
    dissolveParticleOpSmooth = dampToward(dissolveParticleOpSmooth, particleTarget, dt, incomingId === 'angel' ? 3.2 : 3.8);
    dissolveNextOpSmooth = dampToward(dissolveNextOpSmooth, nextTarget, dt, incomingId === 'angel' ? 1.7 : 2.6);
    dissolveSizeSmooth = dampToward(dissolveSizeSmooth, sizeTarget, dt, 3.4);

    const damp = Math.exp(-dt * 1.05);
    const motionGate = 0.28 + 0.72 * smootherstep(Math.min(1, progress / 0.55));
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      field.positions[i3] += dissolveVel[i3] * dt * motionGate;
      field.positions[i3 + 1] += dissolveVel[i3 + 1] * dt * motionGate;
      field.positions[i3 + 2] += dissolveVel[i3 + 2] * dt * motionGate;
      dissolveVel[i3] *= damp;
      dissolveVel[i3 + 1] = dissolveVel[i3 + 1] * damp - 1.6 * dt;
      dissolveVel[i3 + 2] *= damp;
    }

    if (!dissolveModelsCleared) {
      // 十分溶けてから退場側だけ破棄（次ステージは残す）
      if (dissolveModelOpSmooth <= 0.02 && progress >= 0.78) {
        clearOutgoingDissolveModels();
      }
    }

    applyDissolveOpacities();

    paintDissolveGlow(field, {
      count,
      time,
      dissolveFromIndex,
      colorA,
      fade: Math.max(0.03, dissolveParticleOpSmooth),
      progress,
    });
    field.mat.opacity = Math.max(0, Math.min(1, dissolveParticleOpSmooth));
    const baseSize = Math.max(4, Math.min(13, (params.particleSize || 15) * 0.56));
    field.mat.size = baseSize * dissolveSizeSmooth;
    field.geo.attributes.position.needsUpdate = true;
    field.geo.attributes.color.needsUpdate = true;
    setFieldVisible(true);

    if (!dissolveHandoffDone && progress >= DISSOLVE_HANDOFF_AT) {
      const nextIndex = (dissolveFromIndex + 1) % SEQUENCE.length;
      if (startNextStageUnderDissolve(nextIndex)) {
        dissolveHandoffDone = true;
        dissolveNextOpSmooth = 0;
        applyDissolveOpacities();
      }
    }

    if (progress >= 1) {
      if (!viewport.isReady()) {
        pendingMorph = true;
        return;
      }
      finishDissolve();
    }
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

  function startFlowerBloom(params, opts = {}) {
    if (!opts.skipStop) stopEverything();
    if (!flowerGroup || !layer || !viewport.isReady()) return;
    const { w, h } = viewport.sampleDims();
    flowerBloom = createFlowerBloom();
    flowerBloom.init(w, h, params || latestParams || { palette: currentPalette }, flowerGroup);
    if (!opts.keepFieldVisible) setFieldVisible(false);
    label.set('花びら', MANUAL_HINT);
  }

  function startFormBloom(stepId, stepLabel, opts = {}) {
    if (!opts.skipStop) stopEverything();
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
    if (!opts.keepFieldVisible) setFieldVisible(false);
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
    field.mat.opacity = angelMorph ? 0.66 : 0.95;

    label.set(`${step.label} → ${next.label}`, '変容中');
  }

  function beginMorph() {
    if (phase === 'morph' || phase === 'dissolve') return;
    beginDissolve();
  }

  function enterHoldStage(index = stageIndex) {
    if (!viewport.isReady()) {
      holdDeferred = true;
      return false;
    }
    holdDeferred = false;
    morphCompletePending = false;
    pendingMorph = false;
    resetDissolveState({ vel: null });
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

    if (phase === 'hold') {
      // 実時間でホールド（速度スライダーの影響を受けない）
      if (Number.isFinite(step.hold) && step.hold > 0) {
        phaseT += dt;
        if (phaseT >= step.hold) beginDissolve();
      }
      return;
    }

    if (phase === 'dissolve') {
      updateDissolve(dt, params);
      return;
    }

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
      resetDissolveState({ vel: null });
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
      if (pendingMorph && viewport.morphReady()) {
        if (phase === 'dissolve') finishDissolve();
        else if (phase === 'hold') beginDissolve();
      }
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      latestParams = params;
      currentPalette = params.palette || currentPalette;

      if (viewport.isReady()) {
        if (holdDeferred && phase === 'hold') enterHoldStage(stageIndex);
        if (morphCompletePending) tryCompleteMorph();
      }
      if (viewport.morphReady() && pendingMorph) {
        if (phase === 'dissolve') finishDissolve();
        else if (phase === 'hold') beginDissolve();
      }

      const want = Math.min(1800, Math.max(600, Math.floor((params.particleCount || 1030) * 1.1)));
      if (want !== count && field && phase === 'hold') {
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

      if (phase === 'dissolve') {
        updateDissolveBlooms(dt, pointer, audioData, params);
      } else {
        if (isPetalHold() && flowerBloom) {
          flowerBloom.update(dt, neutralHoldPointer(pointer), audioData, params);
        }
        const bloom = activeBloom();
        if (isFormBloomHold() && bloom) {
          bloom.update(dt, neutralHoldPointer(pointer), audioData, params);
        }
      }

      const boost = pointer?.velocity > 8 && phase === 'morph' ? 1.35 : 1;
      syncStage(dt * boost, params);
      updateAngelIntro(dt);
    },

    render() {
      if (phase === 'dissolve') {
        const fromId = SEQUENCE[dissolveFromIndex]?.id;
        const toId = dissolveHandoffDone ? currentId() : null;
        const rendered = new Set();
        const run = (id) => {
          if (!id || rendered.has(id)) return;
          bloomForStageId(id)?.render?.();
          rendered.add(id);
        };
        if (!dissolveModelsCleared) run(fromId);
        if (dissolveHandoffDone) run(toId);
        // bloom.render が opacity を戻すため、フェードを最後に再適用
        applyDissolveOpacities();
        return;
      }
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
