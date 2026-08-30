/**
 * Digital Art Studio — メインエントリーポイント
 * UIイベントハンドラ、プリセット管理、オーディオ・録画の統合
 */
import { ArtEngine } from './engine/artEngine.js';
import { UI_PRESET_FACTORIES as PRESET_FACTORIES } from './engine/presets/index.js';
import { AudioAnalyzer } from './utils/audioAnalyzer.js';
import { Recorder } from './utils/recorder.js';

const APP_REVISION = '20260829-refactor-bloom-split';
console.info(`[Digital Art Studio] ${APP_REVISION}`);

/* ============================================================
   初期化
   ============================================================ */
const canvas = document.getElementById('artCanvas');
const engine = new ArtEngine(canvas);
const audio = new AudioAnalyzer();
const recorder = new Recorder(canvas);
let currentPreset = 'morphSequence';

// 初期プリセットをセット & 開始
engine.setPreset(PRESET_FACTORIES[currentPreset]());
engine.start();

/* ============================================================
   プリセット切替
   ============================================================ */
const presetButtons = document.querySelectorAll('.preset-btn');

presetButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.preset;
    if (name === currentPreset) return;

    // ボタンのアクティブ状態を切替
    document.querySelector('.preset-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    currentPreset = name;
    engine.setPreset(PRESET_FACTORIES[name]());
  });
});

/* ============================================================
   パラメータースライダー
   ============================================================ */
const SLIDER_CONFIG = [
  { id: 'particleCount', displayId: 'particleCountValue', key: 'particleCount', parse: parseInt },
  { id: 'particleSize',  displayId: 'particleSizeValue',  key: 'particleSize',  parse: parseInt },
  { id: 'speed',         displayId: 'speedValue',         key: 'speed',         parse: parseFloat },
  { id: 'trail',         displayId: 'trailValue',         key: 'trail',         parse: parseFloat },
  { id: 'gravity',       displayId: 'gravityValue',       key: 'gravity',       parse: parseFloat },
];

SLIDER_CONFIG.forEach(({ id, displayId, key, parse }) => {
  const slider = document.getElementById(id);
  const display = document.getElementById(displayId);
  if (!slider || !display) return;

  slider.addEventListener('input', () => {
    const value = parse(slider.value);
    display.textContent = slider.value;
    engine.setParams({ [key]: value });
  });
});

/* ============================================================
   カラーパレット
   ============================================================ */
const paletteBtns = document.querySelectorAll('.palette-swatch');

paletteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.palette-swatch.active')?.classList.remove('active');
    btn.classList.add('active');
    engine.setParams({ palette: btn.dataset.palette });
  });
});

// カスタムカラー (パレットに追加して反映)
const customColorInput = document.getElementById('customColor');
if (customColorInput) {
  customColorInput.addEventListener('input', () => {
    // カスタムカラーは一旦非反映 (パレットベースのためスウォッチ選択を推奨)
  });
}

/* ============================================================
   オーディオ連動
   ============================================================ */
const btnAudio = document.getElementById('btnAudio');

btnAudio.addEventListener('click', async () => {
  if (audio.isActive) {
    audio.stop();
    btnAudio.querySelector('.audio-label').textContent = 'マイク OFF';
    btnAudio.classList.remove('active');
  } else {
    try {
      await audio.startMic();
      btnAudio.querySelector('.audio-label').textContent = 'マイク ON';
      btnAudio.classList.add('active');
    } catch {
      alert('マイクへのアクセスが拒否されました。\nブラウザの設定を確認してください。');
    }
  }
});

// オーディオデータを毎フレームエンジンに注入
function pumpAudio() {
  if (audio.isActive) {
    audio.update();
    engine.setAudioData(audio.getAudioData());
  }
  requestAnimationFrame(pumpAudio);
}
pumpAudio();

/* ============================================================
   スクリーンショット
   ============================================================ */
document.getElementById('btnCapture').addEventListener('click', () => {
  recorder.captureScreenshot(`digital-art-${currentPreset}-${Date.now()}.png`);
});

/* ============================================================
   録画
   ============================================================ */
const btnRecord = document.getElementById('btnRecord');
const recordingStatus = document.getElementById('recordingStatus');

btnRecord.addEventListener('click', () => {
  const isRec = recorder.toggleRecording();
  btnRecord.classList.toggle('recording', isRec);
  recordingStatus.classList.toggle('hidden', !isRec);
});

/* ============================================================
   フルスクリーン
   ============================================================ */
document.getElementById('btnFullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

/* ============================================================
   コントロールパネル開閉
   ============================================================ */
const controlPanel = document.getElementById('controlPanel');
const panelToggle = document.getElementById('panelToggle');

panelToggle.addEventListener('click', () => {
  controlPanel.classList.toggle('collapsed');
});

/* ============================================================
   ダブルクリックでUI非表示/表示
   ============================================================ */
let uiVisible = true;
const uiElements = [
  document.getElementById('toolbar'),
  document.getElementById('presetBar'),
  controlPanel,
  document.getElementById('statusBar'),
];

canvas.addEventListener('dblclick', () => {
  uiVisible = !uiVisible;
  uiElements.forEach(el => {
    if (!el) return;
    el.style.opacity = uiVisible ? '' : '0';
    el.style.pointerEvents = uiVisible ? '' : 'none';
  });
});

/* ============================================================
   FPS表示の更新
   ============================================================ */
const fpsDisplay = document.getElementById('fpsDisplay');
setInterval(() => {
  if (fpsDisplay) fpsDisplay.textContent = engine.fps + ' FPS';
}, 500);
