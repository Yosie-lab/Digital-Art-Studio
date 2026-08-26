import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { makePoints, clearGroup } from '../space3d.js';
import { morphPositions } from '../morph/morphEngine.js';
import { createFlowerBloom } from './flowerBloom.js';
import { samplePetalCloud } from '../morph/sampleShapes.js';
import { createSolidForm } from '../morph/solidForms.js';

/**
 * 変容シークエンス
 * 花びら（Flower Bloom 実体）→ X → クラゲ → 砂時計 → オタマ → 脳 → 天使
 * hold = はっきりした3D実体 / morph = パーティクル橋渡しのみ
 */
const SEQUENCE = [
  { id: 'petal', label: '花びら', hold: 10, morph: 2.4, style: 'swarm' },
  { id: 'letter', label: 'X', hold: 3.2, morph: 2.4, style: 'swarm' },
  { id: 'jellyfish', label: 'クラゲ', hold: 3.4, morph: 2.4, style: 'trail' },
  { id: 'hourglass', label: '砂時計', hold: 3.2, morph: 2.2, style: 'swarm' },
  { id: 'tadpole', label: 'オタマ', hold: 3.2, morph: 2.4, style: 'trail' },
  { id: 'brain', label: '脳', hold: 3.4, morph: 2.6, style: 'burst' },
  { id: 'angel', label: '天使', hold: 3.8, morph: 2.8, style: 'burst' },
];

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
  let formsGroup = null;
  let solidForm = null;
  let field = null;
  let currentPalette = 'rainbow';
  let latestParams = null;
  let count = 1200;

  let stageIndex = 0;
  let phase = 'hold'; // hold | morph
  let phaseT = 0;
  let fromCloud = null;
  let toCloud = null;
  let colorA = null;
  let colorB = null;
  let labelEl = null;
  let lastPointerDown = 0;

  function isPetalHold() {
    return stageIndex === 0 && phase === 'hold';
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

  function stopSolidForm() {
    if (solidForm) {
      if (formsGroup && solidForm.group.parent) formsGroup.remove(solidForm.group);
      solidForm.dispose();
      solidForm = null;
    }
    if (formsGroup) clearGroup(formsGroup);
  }

  function startFlowerBloom(params) {
    stopFlowerBloom();
    stopSolidForm();
    if (!flowerGroup || !layer) return;
    flowerBloom = createFlowerBloom();
    flowerBloom.init(width, height, params || latestParams || { palette: currentPalette }, flowerGroup);
    setFieldVisible(false);
    setLabel('花びら', 'Flower Bloom そのまま · ダブルクリックで変容');
  }

  function startSolidForm(stepId) {
    stopFlowerBloom();
    stopSolidForm();
    if (!formsGroup) return;
    solidForm = createSolidForm(stepId, currentPalette);
    if (!solidForm) return;
    formsGroup.add(solidForm.group);
    setFieldVisible(false);
  }

  function sampleStageCloud(stepIndex) {
    const step = SEQUENCE[stepIndex];
    if (step.id === 'petal') return samplePetalCloud(count, 95);
    // hold 中のソリッドからサンプリング（遷移直前に呼ぶ）
    if (solidForm && SEQUENCE[stageIndex].id === step.id) {
      return solidForm.samplePoints(count);
    }
    const temp = createSolidForm(step.id, currentPalette);
    if (!temp) return samplePetalCloud(count, 95);
    const cloud = temp.samplePoints(count);
    temp.dispose();
    return cloud;
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

  function beginMorph() {
    const step = SEQUENCE[stageIndex];
    const nextIndex = (stageIndex + 1) % SEQUENCE.length;
    const next = SEQUENCE[nextIndex];
    phase = 'morph';
    phaseT = 0;

    fromCloud = sampleStageCloud(stageIndex);
    toCloud = sampleStageCloud(nextIndex);

    stopFlowerBloom();
    stopSolidForm();
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
    } else {
      startSolidForm(step.id);
      setLabel(step.label, 'クリックで次へ');
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

    if (phase === 'hold') {
      if (isPetalHold()) {
        if (phaseT >= step.hold) beginMorph();
        return;
      }
      if (solidForm) solidForm.update(dt, time);
      if (phaseT >= step.hold) beginMorph();
      return;
    }

    // morph: パーティクル橋渡しのみ
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

      formsGroup = new THREE.Group();
      formsGroup.name = 'morphSolidForms';
      layer.add(formsGroup);

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

      const boost = pointer?.velocity > 8 && phase === 'morph' ? 1.35 : 1;
      syncStage(dt * boost, params);

      if (audioData?.isActive && audioData.bass > 0.45 && phase === 'hold' && phaseT > 1.2) {
        if (isPetalHold()) {
          if (phaseT > 3) phaseT = Math.max(phaseT, SEQUENCE[0].hold - 0.1);
        } else {
          phaseT = Math.max(phaseT, SEQUENCE[stageIndex].hold - 0.15);
        }
      }
    },

    render() {
      if (isPetalHold() && flowerBloom) flowerBloom.render();
    },

    onPointerDown(x, y, pointer) {
      if (isPetalHold()) {
        const now = performance.now();
        if (now - lastPointerDown < 380) {
          beginMorph();
          lastPointerDown = 0;
          return;
        }
        lastPointerDown = now;
        flowerBloom?.onPointerDown?.(x, y, pointer);
        return;
      }

      if (phase === 'hold') beginMorph();
    },

    onPointerMove(x, y, pointer) {
      if (isPetalHold()) flowerBloom?.onPointerMove?.(x, y, pointer);
    },

    onPointerUp(pointer) {
      if (isPetalHold()) flowerBloom?.onPointerUp?.(pointer);
    },

    setParams(p) {
      currentPalette = p.palette || currentPalette;
      latestParams = { ...(latestParams || {}), ...p };
      if (count > 0) {
        colorA = paletteUnitColors(currentPalette, count);
        colorB = paletteUnitColors(currentPalette, count);
      }
      flowerBloom?.setParams?.(p);
      solidForm?.setPalette?.(currentPalette);
    },

    destroy() {
      stopFlowerBloom();
      stopSolidForm();
      field = null;
      flowerGroup = null;
      formsGroup = null;
      layer = null;
      if (labelEl) {
        labelEl.remove();
        labelEl = null;
      }
    },
  };
}
