import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit, clearGroup } from '../space3d.js';
import { SimplexNoise } from '../../utils/noise.js';

/**
 * Fluid Words プリセット
 * 文字が水流やオーロラのように揺らめき、
 * 触れると光の粒子となって流動し、再び文字へと結実する流体文字アートエフェクト
 */
export function createFluidWords() {
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let particleField = null;
  let rippleMesh = null;

  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const noise = new SimplexNoise();

  const MAX_PARTICLES = 1600;
  const MAX_RIPPLES = 16;

  // プリセット単語リスト
  const PRESET_WORDS = ['光', 'Bloom', '夢', 'Flow', '響', 'Cosmos', '宙', 'Wave', '愛', 'Art'];
  let wordIndex = 0;
  let currentWord = PRESET_WORDS[0];
  let wordTimer = 0;
  const WORD_CYCLE_DURATION = 9.0; // 9秒ごとに自動切り替え

  let particles = [];
  let shockwaves = [];

  // オフスクリーンCanvas（テキストサンプリング用）
  const sampleCanvas = document.createElement('canvas');
  sampleCanvas.width = 800;
  sampleCanvas.height = 400;
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

  /** 単語から目標パーティクル座標を抽出 */
  function sampleWordPoints(text, w, h) {
    const cw = sampleCanvas.width;
    const ch = sampleCanvas.height;
    sampleCtx.clearRect(0, 0, cw, ch);

    // 文字数に応じてフォントサイズを動的に決定
    const len = text.length;
    let fontSize = 210;
    if (len === 2) fontSize = 165;
    else if (len === 3) fontSize = 135;
    else if (len >= 4 && len <= 6) fontSize = 105;
    else if (len > 6) fontSize = Math.max(55, Math.floor(650 / len));

    sampleCtx.textAlign = 'center';
    sampleCtx.textBaseline = 'middle';
    sampleCtx.fillStyle = '#ffffff';
    sampleCtx.font = `900 ${fontSize}px "Outfit", "Noto Sans JP", -apple-system, sans-serif`;
    sampleCtx.fillText(text, cw * 0.5, ch * 0.5);

    const imgData = sampleCtx.getImageData(0, 0, cw, ch);
    const data = imgData.data;
    const filledCoords = [];

    // 高速サンプリング（ステップ刻み）
    const step = 3;
    for (let py = 0; py < ch; py += step) {
      for (let px = 0; px < cw; px += step) {
        const idx = (py * cw + px) * 4;
        const alpha = data[idx + 3];
        if (alpha > 120) {
          // 画面全体に対する相対スケール
          const scale = Math.min(w * 0.85 / cw, h * 0.85 / ch) * 1.05;
          const targetX = w * 0.5 + (px - cw * 0.5) * scale;
          const targetY = h * 0.5 + (py - ch * 0.5) * scale;
          filledCoords.push({ x: targetX, y: targetY });
        }
      }
    }

    if (filledCoords.length === 0) {
      // フォールバック（中央円）
      for (let i = 0; i < MAX_PARTICLES; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 100;
        filledCoords.push({ x: w * 0.5 + Math.cos(a) * r, y: h * 0.5 + Math.sin(a) * r });
      }
    }

    return filledCoords;
  }

  /** 単語を切り替えて各粒子の目標位置を更新 */
  function applyWord(text, triggerBurst = true) {
    currentWord = text;
    wordTimer = 0;
    const sampled = sampleWordPoints(text, width, height);

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const targetPoint = sampled[i % sampled.length];
      const p = particles[i];
      if (p) {
        // 微小なゆらぎと厚み（Z軸）
        p.tx = targetPoint.x + (Math.random() - 0.5) * 4;
        p.ty = targetPoint.y + (Math.random() - 0.5) * 4;
        p.tz = (Math.random() - 0.5) * 50;

        if (triggerBurst) {
          // 切り替え時の流体ジャンプ速度
          const a = Math.random() * Math.PI * 2;
          const force = 40 + Math.random() * 120;
          p.vx += Math.cos(a) * force;
          p.vy += Math.sin(a) * force;
          p.vz += (Math.random() - 0.5) * force;
        }
      }
    }

    // 単語切り替えの光輪ショックウェーブ
    if (triggerBurst) {
      shockwaves.push(new Shockwave(width * 0.5, height * 0.5, 0, 320));
    }
  }

  /** 光輪ショックウェーブ */
  class Shockwave {
    constructor(x, y, z, maxR = 260) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.radius = 5;
      this.maxRadius = maxR;
      this.speed = 180 + Math.random() * 120;
      this.opacity = 1;
      this.alive = true;
    }
    update(dt, speed) {
      this.radius += this.speed * speed * dt;
      this.opacity = Math.max(0, 1 - Math.pow(this.radius / this.maxRadius, 1.2));
      if (this.radius >= this.maxRadius || this.opacity <= 0.01) {
        this.alive = false;
      }
    }
  }

  /** 流体文字パーティクル */
  class WordParticle {
    constructor(w, h) {
      this.x = w * 0.5 + (Math.random() - 0.5) * 200;
      this.y = h * 0.5 + (Math.random() - 0.5) * 200;
      this.z = (Math.random() - 0.5) * 60;
      this.tx = this.x;
      this.ty = this.y;
      this.tz = this.z;
      this.vx = (Math.random() - 0.5) * 30;
      this.vy = (Math.random() - 0.5) * 30;
      this.vz = (Math.random() - 0.5) * 20;
      this.baseSize = 2.2 + Math.random() * 2.8;
      this.colorIdx = Math.floor(Math.random() * 6);
      this.noiseOffset = Math.random() * 1000;
      this.flowScale = 0.0035 + Math.random() * 0.002;
    }

    update(dt, w, h, pointer, speed, gravity, audioBass) {
      // 1. 文字形状への復元バネ力
      const dx = this.tx - this.x;
      const dy = this.ty - this.y;
      const dz = this.tz - this.z;
      const spring = (3.6 + gravity * 0.8) * speed;
      this.vx += dx * spring * dt;
      this.vy += dy * spring * dt;
      this.vz += dz * spring * dt;

      // 2. 流体力場（Simplex Noise による水流のうねり）
      const nAngle = noise.noise2D(
        this.x * this.flowScale,
        this.y * this.flowScale + time * 0.35 + this.noiseOffset
      ) * Math.PI * 2;
      const fluidForce = (28 + audioBass * 55) * speed;
      this.vx += Math.cos(nAngle) * fluidForce * dt;
      this.vy += Math.sin(nAngle) * fluidForce * dt;
      this.vz += Math.sin(nAngle * 2) * (fluidForce * 0.4) * dt;

      // 3. ポインターによる流体インタラクション（渦 & 反発）
      const pdx = pointer.x - this.x;
      const pdy = pointer.y - this.y;
      const pd2 = pdx * pdx + pdy * pdy;
      const influenceRadius = pointer.isDown ? 240 : 130;

      if (pd2 < influenceRadius * influenceRadius && pd2 > 1) {
        const pDist = Math.sqrt(pd2);
        const pRatio = 1 - pDist / influenceRadius;
        const pushForce = (pointer.isDown ? 450 : 160) * pRatio;

        // 反発ベクトル
        this.vx -= (pdx / pDist) * pushForce * dt;
        this.vy -= (pdy / pDist) * pushForce * dt;

        // 接線方向の渦流（Swirl）
        const swirlForce = (pointer.isDown ? 280 : 110) * pRatio;
        this.vx += (-pdy / pDist) * swirlForce * dt;
        this.vy += (pdx / pDist) * swirlForce * dt;
        this.vz += (pointer.isDown ? -80 : 35) * pRatio * dt;
      }

      // 4. 速度減衰（ダンピング）
      const damping = Math.pow(0.86, dt * 60);
      this.vx *= damping;
      this.vy *= damping;
      this.vz *= damping;

      // 位置更新
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.z += this.vz * dt;
    }
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params.palette || 'rainbow';
      time = 0;
      wordTimer = 0;
      particles = [];
      shockwaves = [];

      // 粒子バッファ作成
      particleField = makePoints(MAX_PARTICLES, 12);
      group.add(particleField.points);

      // 衝撃波用リングメッシュ
      const ringGeo = new THREE.TorusGeometry(1, 0.016, 8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      rippleMesh = new THREE.InstancedMesh(ringGeo, ringMat, MAX_RIPPLES);
      rippleMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_RIPPLES * 3), 3);
      rippleMesh.frustumCulled = false;
      group.add(rippleMesh);

      // パーティクル初期化
      for (let i = 0; i < MAX_PARTICLES; i++) {
        particles.push(new WordParticle(w, h));
      }

      // 初期の単語を適用
      const initialText = params.customText || PRESET_WORDS[0];
      applyWord(initialText, false);
    },

    update(dt, params, pointer, audioData) {
      time += dt;
      wordTimer += dt;
      const speed = params.speed !== undefined ? params.speed : 1.0;
      const gravity = params.gravity !== undefined ? params.gravity : 1.0;
      const bass = audioData?.isActive ? audioData.bass : 0;

      // 自動単語サイクル（ユーザーがカスタム単語を指定していない場合）
      if (!params.customText && wordTimer > WORD_CYCLE_DURATION) {
        wordIndex = (wordIndex + 1) % PRESET_WORDS.length;
        applyWord(PRESET_WORDS[wordIndex], true);
      }

      // パーティクルの更新
      const targetCount = Math.min(particles.length, params.particleCount || 1200);
      for (let i = 0; i < targetCount; i++) {
        particles[i].update(dt, width, height, pointer, speed, gravity, bass);
      }

      // ショックウェーブの更新
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        shockwaves[i].update(dt, speed);
        if (!shockwaves[i].alive) {
          shockwaves.splice(i, 1);
        }
      }
    },

    render(group, params, audioData) {
      const colors = getPaletteColors(currentPalette);
      const paletteRgbList = colors.map(hexToRgb);
      const bass = audioData?.isActive ? audioData.bass : 0;
      const targetCount = Math.min(particles.length, params.particleCount || 1200);

      // 1. パーティクルバッファの書き込み
      for (let i = 0; i < targetCount; i++) {
        const p = particles[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        const rgb = paletteRgbList[p.colorIdx % paletteRgbList.length];
        const [r, g, b] = rgbToUnit(rgb);

        // 速度に応じた輝度ブースト（流れるほど発光）
        const speed2 = p.vx * p.vx + p.vy * p.vy;
        const speedBoost = Math.min(1.4, 0.75 + Math.sqrt(speed2) * 0.006);
        const a = Math.min(1.0, speedBoost * (0.8 + bass * 0.45));

        particleField.positions[i * 3] = wpos.x;
        particleField.positions[i * 3 + 1] = wpos.y;
        particleField.positions[i * 3 + 2] = wpos.z;
        particleField.colors[i * 3] = r * a;
        particleField.colors[i * 3 + 1] = g * a;
        particleField.colors[i * 3 + 2] = b * a;
      }
      particleField.geo.setDrawRange(0, targetCount);
      particleField.geo.attributes.position.needsUpdate = true;
      particleField.geo.attributes.color.needsUpdate = true;

      // 2. ショックウェーブリングのレンダリング
      if (rippleMesh) {
        const ringCount = Math.min(shockwaves.length, MAX_RIPPLES);
        for (let i = 0; i < ringCount; i++) {
          const sw = shockwaves[i];
          const pos = toWorld(sw.x, sw.y, sw.z, width, height);
          dummy.position.copy(pos);
          dummy.rotation.set(Math.PI / 2, 0, time * 0.2);
          dummy.scale.set(sw.radius, sw.radius, sw.radius * 0.3);
          dummy.updateMatrix();
          rippleMesh.setMatrixAt(i, dummy.matrix);

          const mainCol = paletteRgbList[i % paletteRgbList.length];
          const [cr, cg, cb] = rgbToUnit(mainCol);
          _color.setRGB(cr, cg, cb).multiplyScalar(sw.opacity * 0.85);
          rippleMesh.setColorAt(i, _color);
        }
        rippleMesh.count = ringCount;
        rippleMesh.instanceMatrix.needsUpdate = true;
        if (rippleMesh.instanceColor) rippleMesh.instanceColor.needsUpdate = true;
      }
    },

    onPointerDown(x, y) {
      // タップ時にその位置から衝撃波を発生させ、粒子を吹き飛ばす
      shockwaves.push(new Shockwave(x, y, 0, 240));
      for (const p of particles) {
        const dx = p.x - x;
        const dy = p.y - y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 200 * 200 && d2 > 1) {
          const d = Math.sqrt(d2);
          const force = (1 - d / 200) * 320;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
          p.vz += (Math.random() - 0.5) * force;
        }
      }
    },

    onPointerMove() {},
    onPointerUp() {},

    setParams(p) {
      if (p.palette) {
        currentPalette = p.palette;
      }
      if (p.customText !== undefined && p.customText !== currentWord) {
        applyWord(p.customText, true);
      }
    },

    resize(w, h) {
      width = w;
      height = h;
      applyWord(currentWord, false);
    },

    destroy(group) {
      particles = [];
      shockwaves = [];
      if (group) {
        clearGroup(group);
      }
      particleField = null;
      rippleMesh = null;
    },
  };
}
