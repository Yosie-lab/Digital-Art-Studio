import * as THREE from 'three';
import { clearGroup } from './space3d.js';
import { createStarfield } from './starfield.js';

export class ArtEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    });
    this.renderer.setClearColor(0x000510, 1);
    this.renderer.autoClear = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000510, 0.0007);

    this.camera = new THREE.PerspectiveCamera(55, 1, 1, 5000);
    this.starfield = createStarfield();
    this.layer = new THREE.Group();
    this.scene.add(this.layer);

    // Spacey Bloom 宇宙背景 + trail フェード
    this._bgColor = this.starfield.bgColor;
    this._forceClear = true;
    this._fadeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this._fadeScene = new THREE.Scene();
    this._fadeMaterial = new THREE.MeshBasicMaterial({
      color: this._bgColor,
      transparent: true,
      opacity: 0.15,
      depthTest: false,
      depthWrite: false,
    });
    this._fadeScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._fadeMaterial));

    const ambient = new THREE.AmbientLight(0x90a8d8, 0.55);
    const key = new THREE.PointLight(0xffffff, 1.6, 3200);
    key.position.set(160, 240, 480);
    const fill = new THREE.DirectionalLight(0xa8c8ff, 0.85);
    fill.position.set(-280, 120, 260);
    const rim = new THREE.DirectionalLight(0x6a9cff, 0.55);
    rim.position.set(80, -40, -320);
    this.scene.add(ambient, key, fill, rim);

    this.activePreset = null;
    this.running = false;
    this.lastTime = 0;
    this.frameCount = 0;
    this._elapsed = 0;

    this.fps = 60;
    this._fpsTimer = 0;
    this._fpsFrames = 0;

    this.pointer = {
      x: 0, y: 0,
      prevX: 0, prevY: 0,
      isDown: false,
      velocity: 0,
    };

    this.params = {
      particleCount: 1030,
      particleSize: 15,
      speed: 2.6,
      trail: 0.49,
      gravity: 0,
      palette: 'rainbow',
    };

    this.audioData = {
      volume: 0, bass: 0, mid: 0, treble: 0,
      isActive: false, frequencyData: null, waveformData: null,
    };

    this.width = 0;
    this.height = 0;
    this._lastGoodWidth = 0;
    this._lastGoodHeight = 0;
    this._resizePending = false;

    this._resize();
    this._bindEvents();
  }

  _readViewportSize() {
    const vv = window.visualViewport;
    const w = Math.round(vv?.width ?? window.innerWidth);
    const h = Math.round(vv?.height ?? window.innerHeight);
    return { w, h };
  }

  _applyViewportSize(w, h) {
    if (w < 64 || h < 64) {
      if (this._lastGoodWidth >= 64 && this._lastGoodHeight >= 64) {
        return { w: this._lastGoodWidth, h: this._lastGoodHeight, applied: false };
      }
      return { w: 0, h: 0, applied: false };
    }
    this._lastGoodWidth = w;
    this._lastGoodHeight = h;
    return { w, h, applied: true };
  }

  _fitCamera() {
    const fov = THREE.MathUtils.degToRad(this.camera.fov);
    this.camera.position.set(0, 0, this.height / (2 * Math.tan(fov / 2)));
    this.camera.lookAt(0, 0, 0);
  }

  _resize() {
    const raw = this._readViewportSize();
    const { w, h, applied } = this._applyViewportSize(raw.w, raw.h);
    if (!applied && (w < 64 || h < 64)) {
      this._resizePending = true;
      return;
    }
    this._resizePending = false;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = w;
    this.height = h;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(this.width, this.height, false);
    this.camera.aspect = this.width / Math.max(this.height, 1);
    this.camera.updateProjectionMatrix();
    this._fitCamera();
    this._forceClear = true;
    this.starfield?.resize?.(this.width, this.height);
    this.activePreset?.resize?.(this.width, this.height);
  }

  _bindEvents() {
    let resizeTimer;
    const scheduleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this._resize(), 100);
    };
    window.addEventListener('resize', scheduleResize);
    window.addEventListener('orientationchange', scheduleResize);
    window.visualViewport?.addEventListener('resize', scheduleResize);
    window.visualViewport?.addEventListener('scroll', scheduleResize);

    const updatePointer = (x, y) => {
      this.pointer.prevX = this.pointer.x;
      this.pointer.prevY = this.pointer.y;
      this.pointer.x = x;
      this.pointer.y = y;
      const dx = x - this.pointer.prevX;
      const dy = y - this.pointer.prevY;
      this.pointer.velocity = Math.sqrt(dx * dx + dy * dy);
    };

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

  setPreset(preset) {
    if (this.activePreset?.destroy) this.activePreset.destroy();
    clearGroup(this.layer);
    this._forceClear = true;
    this.activePreset = preset;
    if (this.activePreset?.init) {
      this.activePreset.init(this.width, this.height, this.params, this.layer);
    }
  }

  setParams(newParams) {
    Object.assign(this.params, newParams);
    this.activePreset?.setParams?.(this.params);
  }

  setAudioData(data) {
    this.audioData = data;
  }

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
    const dt = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;
    this._elapsed += dt;

    this._fpsFrames++;
    this._fpsTimer += dt;
    if (this._fpsTimer >= 0.5) {
      this.fps = Math.round(this._fpsFrames / this._fpsTimer);
      this._fpsFrames = 0;
      this._fpsTimer = 0;
    }

    if (this._resizePending) {
      const raw = this._readViewportSize();
      const { applied } = this._applyViewportSize(raw.w, raw.h);
      if (applied) this._resize();
    }

    this.layer.rotation.y = Math.sin(this._elapsed * 0.17) * 0.28;
    this.layer.rotation.x = Math.sin(this._elapsed * 0.11) * 0.1;

    this.starfield?.update?.(dt, this.pointer, this.width, this.height);

    if (this.activePreset) {
      this.activePreset.update(dt, this.pointer, this.audioData, this.params);
      this.activePreset.render?.(this.layer, this.width, this.height, this.params);
    }

    this._renderWithTrail();
    this.frameCount++;
    requestAnimationFrame(() => this._loop());
  }

  _renderWithTrail() {
    const trail = this.params.trail ?? 0;
    const fade = 1 - trail;

    if (this._forceClear || fade >= 0.999) {
      this.renderer.setClearColor(this._bgColor, 1);
      this.renderer.clear(true, true, true);
      this._forceClear = false;
    } else {
      this.renderer.clearDepth();
      if (fade > 0.001) {
        this._fadeMaterial.opacity = fade;
        this.renderer.render(this._fadeScene, this._fadeCamera);
      }
    }

    // 星空はメインシーンの霧の影響を受けないよう別描画
    this.starfield?.render?.(this.renderer);
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);
  }
}
