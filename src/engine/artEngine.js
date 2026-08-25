/**
 * メイン描画エンジン
 * Canvas管理、アニメーションループ、ポインタ入力、プリセット切替を統括
 */
export class ArtEngine {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { willReadFrequently: false });

    /** 現在アクティブなプリセットインスタンス */
    this.activePreset = null;
    this.running = false;
    this.lastTime = 0;
    this.frameCount = 0;

    // FPS計測
    this.fps = 60;
    this._fpsTimer = 0;
    this._fpsFrames = 0;

    // ポインタ状態 (マウス/タッチ共通)
    this.pointer = {
      x: 0, y: 0,
      prevX: 0, prevY: 0,
      isDown: false,
      velocity: 0,
    };

    // デフォルトパラメーター
    this.params = {
      particleCount: 500,
      particleSize: 5,
      speed: 1.0,
      trail: 0.85,
      gravity: 0,
      palette: 'cyberpunk',
    };

    // オーディオデータ (外部から注入)
    this.audioData = {
      volume: 0, bass: 0, mid: 0, treble: 0,
      isActive: false, frequencyData: null, waveformData: null,
    };

    // キャンバスサイズ (CSS pixel)
    this.width = 0;
    this.height = 0;

    this._resize();
    this._bindEvents();
  }

  /* ========== リサイズ ========== */

  _resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // 最大2x
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (this.activePreset?.resize) {
      this.activePreset.resize(this.width, this.height);
    }
  }

  /* ========== イベントバインド ========== */

  _bindEvents() {
    // リサイズ (デバウンス付き)
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this._resize(), 100);
    });

    // --- ポインタ更新ヘルパー ---
    const updatePointer = (x, y) => {
      this.pointer.prevX = this.pointer.x;
      this.pointer.prevY = this.pointer.y;
      this.pointer.x = x;
      this.pointer.y = y;
      const dx = x - this.pointer.prevX;
      const dy = y - this.pointer.prevY;
      this.pointer.velocity = Math.sqrt(dx * dx + dy * dy);
    };

    // --- マウスイベント ---
    this.canvas.addEventListener('mousemove', (e) => {
      updatePointer(e.clientX, e.clientY);
      this.activePreset?.onPointerMove?.(e.clientX, e.clientY, this.pointer);
    });

    this.canvas.addEventListener('mousedown', (e) => {
      this.pointer.isDown = true;
      updatePointer(e.clientX, e.clientY);
      this.activePreset?.onPointerDown?.(e.clientX, e.clientY, this.pointer);
    });

    window.addEventListener('mouseup', () => {
      this.pointer.isDown = false;
      this.activePreset?.onPointerUp?.(this.pointer);
    });

    // --- タッチイベント ---
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      this.pointer.isDown = true;
      updatePointer(t.clientX, t.clientY);
      this.activePreset?.onPointerDown?.(t.clientX, t.clientY, this.pointer);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      updatePointer(t.clientX, t.clientY);
      this.activePreset?.onPointerMove?.(t.clientX, t.clientY, this.pointer);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.pointer.isDown = false;
      this.activePreset?.onPointerUp?.(this.pointer);
    }, { passive: false });
  }

  /* ========== プリセット管理 ========== */

  /**
   * アクティブプリセットを切り替え
   * @param {object} preset - createXxx() で生成されたプリセットオブジェクト
   */
  setPreset(preset) {
    // 古いプリセットを破棄
    if (this.activePreset?.destroy) this.activePreset.destroy();

    // キャンバスをクリア
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.activePreset = preset;
    if (this.activePreset?.init) {
      this.activePreset.init(this.width, this.height, this.params);
    }
  }

  /* ========== パラメーター ========== */

  /**
   * パラメーターを更新 (差分マージ)
   * @param {object} newParams
   */
  setParams(newParams) {
    Object.assign(this.params, newParams);
    this.activePreset?.setParams?.(this.params);
  }

  /**
   * オーディオデータを外部から注入
   * @param {object} data
   */
  setAudioData(data) {
    this.audioData = data;
  }

  /* ========== アニメーションループ ========== */

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this._loop();
  }

  stop() {
    this.running = false;
  }

  _loop() {
    if (!this.running) return;

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.05); // 50msクランプ
    this.lastTime = now;

    // FPS計測
    this._fpsFrames++;
    this._fpsTimer += dt;
    if (this._fpsTimer >= 0.5) {
      this.fps = Math.round(this._fpsFrames / this._fpsTimer);
      this._fpsFrames = 0;
      this._fpsTimer = 0;
    }

    // プリセット更新 & 描画
    if (this.activePreset) {
      this.activePreset.update(dt, this.pointer, this.audioData, this.params);
      this.activePreset.render(this.ctx, this.width, this.height, this.params);
    }

    this.frameCount++;
    requestAnimationFrame(() => this._loop());
  }
}
