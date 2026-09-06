import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit, clearGroup } from '../space3d.js';
import { SimplexNoise } from '../../utils/noise.js';

/**
 * Fluid Words プリセット
 * 1. テキスト入力・単語選択による自動流体文字
 * 2. 画面を直接指でなぞって描ける「手書きカリグラフィー」
 * 文字が水流やオーロラのように揺らめき、触れると光の粒子となって水中に散開し、再び文字へと結実する
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
  const MAX_RIPPLES = 20;

  // プリセット単語リスト
  const PRESET_WORDS = ['光', 'Bloom', '夢', 'Flow', '宙', 'Cosmos', '波', '愛', 'Art'];
  let wordIndex = 0;
  let currentWord = PRESET_WORDS[0];
  let wordTimer = 0;
  const WORD_CYCLE_DURATION = 12.0; // 12秒ごとに自動切り替え
  let isCustomOrDrawn = false;       // 手書きまたはカスタム入力中は自動切り替えを停止

  let particles = [];
  let shockwaves = [];

  // 手書きストローク用配列
  let currentStroke = [];
  let isDrawing = false;

  // オフスクリーンCanvas（テキストサンプリング用・高解像度）
  const sampleCanvas = document.createElement('canvas');
  sampleCanvas.width = 1200;
  sampleCanvas.height = 800;
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

  /** 単語から文字のバウンディングボックスを検出し、画面中央に大きくジャストフィットサンプリング */
  function sampleWordPoints(text, w, h) {
    const cw = sampleCanvas.width;
    const ch = sampleCanvas.height;
    sampleCtx.clearRect(0, 0, cw, ch);

    // 文字数に応じたフォントサイズ
    const len = text.length;
    let fontSize = 280;
    if (len === 2) fontSize = 230;
    else if (len === 3) fontSize = 180;
    else if (len >= 4 && len <= 6) fontSize = 135;
    else if (len > 6) fontSize = Math.max(70, Math.floor(820 / len));

    sampleCtx.textAlign = 'center';
    sampleCtx.textBaseline = 'middle';
    sampleCtx.strokeStyle = '#ffffff';
    sampleCtx.lineWidth = Math.max(8, Math.floor(fontSize * 0.08)); // 太すぎず細すぎない美しい骨格ストローク
    sampleCtx.font = `600 ${fontSize}px "Noto Sans JP", "Outfit", -apple-system, "Hiragino Sans", "Meiryo", sans-serif`;
    sampleCtx.strokeText(text, cw * 0.5, ch * 0.5);
    // 内部も少しだけ薄く埋める
    sampleCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    sampleCtx.fillText(text, cw * 0.5, ch * 0.5);

    const imgData = sampleCtx.getImageData(0, 0, cw, ch);
    const data = imgData.data;
    const rawCoords = [];
    let minX = cw, maxX = 0, minY = ch, maxY = 0;

    // 高速ステップ走査
    const step = 3;
    for (let py = 0; py < ch; py += step) {
      for (let px = 0; px < cw; px += step) {
        const idx = (py * cw + px) * 4;
        if (data[idx + 3] > 80) {
          rawCoords.push({ x: px, y: py });
          if (px < minX) minX = px;
          if (px > maxX) maxX = px;
          if (py < minY) minY = py;
          if (py > maxY) maxY = py;
        }
      }
    }

    // フォールバック（文字が検出できない場合）
    if (rawCoords.length === 0 || minX >= maxX || minY >= maxY) {
      const fallbackCoords = [];
      for (let i = 0; i < MAX_PARTICLES; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 40 + Math.random() * 120;
        fallbackCoords.push({ x: w * 0.5 + Math.cos(a) * r, y: h * 0.5 + Math.sin(a) * r });
      }
      return fallbackCoords;
    }

    const textW = maxX - minX;
    const textH = maxY - minY;
    const textCenterX = (minX + maxX) * 0.5;
    const textCenterY = (minY + maxY) * 0.5;

    // 画面中央に美しく堂々とフィット（横幅70%、縦幅55%の範囲内に収める）
    const targetW = Math.max(200, w * 0.68);
    const targetH = Math.max(160, h * 0.52);
    const scale = Math.min(targetW / textW, targetH / textH);

    const filledCoords = [];
    for (const pt of rawCoords) {
      const targetX = w * 0.5 + (pt.x - textCenterX) * scale;
      const targetY = h * 0.5 + (pt.y - textCenterY) * scale;
      filledCoords.push({ x: targetX, y: targetY });
    }

    return filledCoords;
  }

  /** 単語を切り替えて目標位置へモーフィング */
  function applyWord(text, triggerBurst = true) {
    currentWord = text;
    wordTimer = 0;
    const sampled = sampleWordPoints(text, width, height);
    const totalSampled = sampled.length;
    const stride = totalSampled > 0 ? totalSampled / MAX_PARTICLES : 1;

    for (let i = 0; i < MAX_PARTICLES; i++) {
      // 文字全体から均等にインデックスを選択（上下・ストロークの抜けを完全に防止）
      const sampleIdx = Math.floor(i * stride) % totalSampled;
      const targetPoint = sampled[sampleIdx];
      const p = particles[i];
      if (p && targetPoint) {
        p.tx = targetPoint.x + (Math.random() - 0.5) * 4;
        p.ty = targetPoint.y + (Math.random() - 0.5) * 4;
        p.tz = (Math.random() - 0.5) * 35;

        if (triggerBurst) {
          const a = Math.random() * Math.PI * 2;
          const force = 60 + Math.random() * 140;
          p.vx += Math.cos(a) * force;
          p.vy += Math.sin(a) * force;
          p.vz += (Math.random() - 0.5) * force;
        }
      }
    }

    if (triggerBurst) {
      shockwaves.push(new Shockwave(width * 0.5, height * 0.5, 0, 350));
    }
  }

  /** 手書きストロークの点列を粒子目標位置として適用 */
  function applyDrawnStroke(points) {
    if (!points || points.length < 2) return;
    isCustomOrDrawn = true;
    currentWord = '手書き';

    const stride = points.length / MAX_PARTICLES;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const idx = Math.floor(i * stride) % points.length;
      const pt = points[idx];
      const p = particles[i];
      if (p && pt) {
        p.tx = pt.x + (Math.random() - 0.5) * 8;
        p.ty = pt.y + (Math.random() - 0.5) * 8;
        p.tz = (Math.random() - 0.5) * 30;
      }
    }
    const lastPt = points[points.length - 1];
    shockwaves.push(new Shockwave(lastPt.x, lastPt.y, 0, 220));
  }

  /** 光輪ショックウェーブ */
  class Shockwave {
    constructor(x, y, z, maxR = 280) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.radius = 5;
      this.maxRadius = maxR;
      this.speed = 190 + Math.random() * 140;
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
      this.x = w * 0.5 + (Math.random() - 0.5) * 300;
      this.y = h * 0.5 + (Math.random() - 0.5) * 200;
      this.z = (Math.random() - 0.5) * 60;
      this.tx = this.x;
      this.ty = this.y;
      this.tz = this.z;
      this.vx = (Math.random() - 0.5) * 20;
      this.vy = (Math.random() - 0.5) * 20;
      this.vz = (Math.random() - 0.5) * 15;
      this.baseSize = 3.5 + Math.random() * 3.5;
      this.colorIdx = Math.floor(Math.random() * 6);
      this.noiseOffset = Math.random() * 1000;
      this.flowScale = 0.003 + Math.random() * 0.002;
    }

    update(dt, w, h, pointer, speed, gravity, audioBass) {
      // 1. 文字形状への復元バネ力
      const dx = this.tx - this.x;
      const dy = this.ty - this.y;
      const dz = this.tz - this.z;
      const spring = (4.2 + gravity * 1.0) * speed;
      this.vx += dx * spring * dt;
      this.vy += dy * spring * dt;
      this.vz += dz * spring * dt;

      // 2. 流体力場（Simplex Noise による水流の揺らめき）
      const nAngle = noise.noise2D(
        this.x * this.flowScale,
        this.y * this.flowScale + time * 0.35 + this.noiseOffset
      ) * Math.PI * 2;
      const fluidForce = (24 + audioBass * 60) * speed;
      this.vx += Math.cos(nAngle) * fluidForce * dt;
      this.vy += Math.sin(nAngle) * fluidForce * dt;
      this.vz += Math.sin(nAngle * 2) * (fluidForce * 0.35) * dt;

      // 3. ポインターによる流体インタラクション（渦 & 反発）
      const pdx = pointer.x - this.x;
      const pdy = pointer.y - this.y;
      const pd2 = pdx * pdx + pdy * pdy;
      const influenceRadius = pointer.isDown ? 200 : 120;

      if (pd2 < influenceRadius * influenceRadius && pd2 > 1) {
        const pDist = Math.sqrt(pd2);
        const pRatio = 1 - pDist / influenceRadius;

        if (isDrawing) {
          // 手書き中は指先に引き寄せる
          const pullForce = 350 * pRatio;
          this.vx += (pdx / pDist) * pullForce * dt;
          this.vy += (pdy / pDist) * pullForce * dt;
        } else {
          // 通常時は反発 ＋ 渦流
          const pushForce = (pointer.isDown ? 400 : 140) * pRatio;
          this.vx -= (pdx / pDist) * pushForce * dt;
          this.vy -= (pdy / pDist) * pushForce * dt;

          const swirlForce = (pointer.isDown ? 240 : 90) * pRatio;
          this.vx += (-pdy / pDist) * swirlForce * dt;
          this.vy += (pdx / pDist) * swirlForce * dt;
          this.vz += (pointer.isDown ? -60 : 30) * pRatio * dt;
        }
      }

      // 4. 速度減衰（ダンピング）
      const damping = Math.pow(0.85, dt * 60);
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
      isCustomOrDrawn = false;
      particles = [];
      shockwaves = [];
      currentStroke = [];
      isDrawing = false;

      // 粒子バッファ作成（サイズを大きく視認性を向上）
      particleField = makePoints(MAX_PARTICLES, 18);
      group.add(particleField.points);

      // 衝撃波用リングメッシュ
      const ringGeo = new THREE.TorusGeometry(1, 0.018, 8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
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

      // 初期の単語を中央に大きく適用
      const initialText = params.customText || PRESET_WORDS[0];
      applyWord(initialText, false);
    },

    update(dt, params, pointer, audioData) {
      time += dt;
      wordTimer += dt;
      const speed = params.speed !== undefined ? params.speed : 1.0;
      const gravity = params.gravity !== undefined ? params.gravity : 1.0;
      const bass = audioData?.isActive ? audioData.bass : 0;

      // 自動サイクル（カスタム指定や手書き中でない場合）
      if (!isCustomOrDrawn && wordTimer > WORD_CYCLE_DURATION) {
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

      // 1. パーティクルバッファの書き込み（鮮やかなネオンカラー & 輝度向上）
      for (let i = 0; i < targetCount; i++) {
        const p = particles[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        const rgb = paletteRgbList[p.colorIdx % paletteRgbList.length];
        const [r, g, b] = rgbToUnit(rgb);

        // 速度とオーディオに応じた輝度ブースト
        const speed2 = p.vx * p.vx + p.vy * p.vy;
        const speedBoost = Math.min(1.5, 0.9 + Math.sqrt(speed2) * 0.007);
        const a = Math.min(1.0, speedBoost * (0.95 + bass * 0.4));

        particleField.positions[i * 3] = wpos.x;
        particleField.positions[i * 3 + 1] = wpos.y;
        particleField.positions[i * 3 + 2] = wpos.z;

        // 高輝度（ほんのりホワイトを加えてネオン発光感を強調）
        const glowR = Math.min(1.0, r * a + 0.15);
        const glowG = Math.min(1.0, g * a + 0.15);
        const glowB = Math.min(1.0, b * a + 0.15);

        particleField.colors[i * 3] = glowR;
        particleField.colors[i * 3 + 1] = glowG;
        particleField.colors[i * 3 + 2] = glowB;
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
          dummy.scale.set(sw.radius, sw.radius, sw.radius * 0.35);
          dummy.updateMatrix();
          rippleMesh.setMatrixAt(i, dummy.matrix);

          const mainCol = paletteRgbList[i % paletteRgbList.length];
          const [cr, cg, cb] = rgbToUnit(mainCol);
          _color.setRGB(cr, cg, cb).multiplyScalar(sw.opacity * 0.9);
          rippleMesh.setColorAt(i, _color);
        }
        rippleMesh.count = ringCount;
        rippleMesh.instanceMatrix.needsUpdate = true;
        if (rippleMesh.instanceColor) rippleMesh.instanceColor.needsUpdate = true;
      }
    },

    onPointerDown(x, y) {
      isDrawing = true;
      currentStroke = [{ x, y }];
    },

    onPointerMove(x, y) {
      if (isDrawing) {
        // ドラッグ移動した軌跡を記録
        const last = currentStroke[currentStroke.length - 1];
        const dx = x - last.x;
        const dy = y - last.y;
        if (dx * dx + dy * dy > 36) { // 一定距離以上移動したら点を追加
          currentStroke.push({ x, y });
        }
      }
    },

    onPointerUp() {
      if (isDrawing) {
        isDrawing = false;
        if (currentStroke.length >= 5) {
          // 指でなぞった軌跡（文字や線）をパーティクル形状として適用！
          applyDrawnStroke(currentStroke);
        } else if (currentStroke.length > 0) {
          // 単発タップの場合はショックウェーブを発生させて散開
          const pt = currentStroke[0];
          shockwaves.push(new Shockwave(pt.x, pt.y, 0, 260));
          for (const p of particles) {
            const dx = p.x - pt.x;
            const dy = p.y - pt.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 240 * 240 && d2 > 1) {
              const d = Math.sqrt(d2);
              const force = (1 - d / 240) * 350;
              p.vx += (dx / d) * force;
              p.vy += (dy / d) * force;
              p.vz += (Math.random() - 0.5) * force;
            }
          }
        }
        currentStroke = [];
      }
    },

    setParams(p) {
      if (p.palette) {
        currentPalette = p.palette;
      }
      if (p.customText !== undefined && p.customText !== currentWord) {
        isCustomOrDrawn = true;
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
      currentStroke = [];
      if (group) {
        clearGroup(group);
      }
      particleField = null;
      rippleMesh = null;
    },
  };
}
