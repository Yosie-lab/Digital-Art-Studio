import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { makePoints, rgbToUnit, clearGroup } from '../space3d.js';
import { SimplexNoise } from '../../utils/noise.js';

/**
 * Fluid Words プリセット (Fluid-001 オリジナルスタイル完全準拠)
 * - 指やマウスでなぞると、星屑の光彩粒子（パーティクル）が帯状にきらめきながら軌跡を描く
 * - 書いた文字は約 4秒間（約2.8秒保持 + 1.4秒消散）で優美に宇宙へ溶けて消える
 * - 初期文字（光）は出さず、静謐な宇宙空間からスタート
 * - 単語タグを押した時のみ、中央にその文字が星屑として美しく咲き出す
 */
// レイヤー種別の定義
const LAYER_CORE = 0;    // コア星屑（眩い発光中心）
const LAYER_DUST = 1;    // 中間星屑ダスト（鮮やかなパレット色）
const LAYER_GLITTER = 2; // 外縁グリッター（淡く瞬く星の粉）

// 定数定義
const MAX_PARTICLES = 16000; // 星屑クラスター大容量プール
const MAX_RIPPLES = 24;
const DEFAULT_HOLD_DURATION = 2.8;     // 文字維持時間（秒）
const DEFAULT_DISSOLVE_DURATION = 1.4; // 優雅な消散時間（秒）

/**
 * Fluid Words プリセット (Fluid-001 オリジナルスタイル完全準拠)
 * - 指やマウスでなぞると、星屑の光彩粒子（パーティクル）が帯状にきらめきながら軌跡を描く
 * - 書いた文字は約 4秒間（約2.8秒保持 + 1.4秒消散）で優美に宇宙へ溶けて消える
 * - 初期文字（光）は出さず、静謐な宇宙空間からスタート
 * - 単語タグを押した時のみ、中央にその文字が星屑として美しく咲き出す
 */
export function createFluidWords() {
  let width = 0;
  let height = 0;
  let halfWidth = 0;
  let halfHeight = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let particleField = null;
  let rippleMesh = null;

  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const noise = new SimplexNoise();

  let holdDuration = DEFAULT_HOLD_DURATION;
  let dissolveDuration = DEFAULT_DISSOLVE_DURATION;

  // パレットRGBキャッシュ (フレームごとのGC発生をゼロにする)
  let cachedPaletteName = '';
  let cachedRgbUnits = [];

  function updatePaletteCache(paletteName) {
    if (paletteName === cachedPaletteName && cachedRgbUnits.length > 0) return;
    cachedPaletteName = paletteName;
    const colors = getPaletteColors(paletteName);
    cachedRgbUnits = colors.map((hex) => {
      const rgb = hexToRgb(hex);
      return rgbToUnit(rgb);
    });
  }

  // パーティクルプール
  const particles = [];
  let particleHead = 0;
  let activeParticleCount = 0;

  // ショックウェーブ（宇宙の光輪）
  let shockwaves = [];

  // 描画状態
  let isDown = false;
  let lastX = 0;
  let lastY = 0;
  let strokeColorSeed = 0;
  let currentWord = '';

  // オフスクリーンCanvas（単語タグ用）
  const sampleCanvas = document.createElement('canvas');
  sampleCanvas.width = 1200;
  sampleCanvas.height = 800;
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

  /** 単一の星屑流体粒子クラス */
  class InkParticle {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.vx = 0;
      this.vy = 0;
      this.vz = 0;
      this.baseX = 0;
      this.baseY = 0;
      this.baseZ = 0;
      this.age = 0;
      this.life = 0;
      this.maxLife = 4.2;
      this.size = 5.0;
      this.colorIdx = 0;
      this.layerType = LAYER_CORE;
      this.active = false;
      this.noiseOffset = Math.random() * 1000;
      this.twinkleSpeed = 4.0 + Math.random() * 10.0;
      this.twinkleOffset = Math.random() * 6.28;
    }

    spawn(x, y, z, colorIdx, layerType = LAYER_CORE, size = 5.0, life = null) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.baseX = x;
      this.baseY = y;
      this.baseZ = z;
      this.vx = 0;
      this.vy = 0;
      this.vz = 0;
      this.age = 0;
      const targetLife = life !== null ? life : (holdDuration + dissolveDuration);
      this.life = targetLife;
      this.maxLife = targetLife;
      this.size = size;
      this.colorIdx = colorIdx;
      this.layerType = layerType;
      this.active = true;
      this.noiseOffset = Math.random() * 1000;
    }

    update(dt, speed, audioBass) {
      if (!this.active) return;

      this.age += dt;
      this.life -= dt;
      if (this.life <= 0) {
        this.active = false;
        return;
      }

      if (this.age < holdDuration) {
        // 【文字維持フェーズ】位置を完全固定し、読める状態をキープ
        this.x = this.baseX;
        this.y = this.baseY;
        this.z = this.baseZ;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
      } else {
        // 【消散フェーズ】宇宙ノイズ流体によって優雅に宇宙へ溶けて消える
        const dissolveAge = this.age - holdDuration;
        const dissolveRatio = Math.min(1.0, dissolveAge / dissolveDuration);

        const angle = noise.noise2D(
          this.x * 0.003,
          this.y * 0.003 + time * 0.15 + this.noiseOffset
        ) * Math.PI * 2;

        const flowMag = (18 + audioBass * 30) * speed * dissolveRatio;
        this.vx += Math.cos(angle) * flowMag * dt;
        this.vy += Math.sin(angle) * flowMag * dt - 12 * dt; // 宇宙の空へふわりと昇華
        this.vz += Math.sin(angle * 1.5) * (flowMag * 0.3) * dt;

        const damping = Math.pow(0.92, dt * 60);
        this.vx *= damping;
        this.vy *= damping;
        this.vz *= damping;

        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.z += this.vz * dt;
      }
    }
  }

  /** 光輪波紋クラス (Fluid-001 スタイル) */
  class CosmicRipple {
    constructor(x, y, maxR = 180) {
      this.x = x;
      this.y = y;
      this.radius = 4;
      this.maxRadius = maxR;
      this.speed = 120 + Math.random() * 60;
      this.opacity = 0.85;
      this.alive = true;
    }
    update(dt) {
      this.radius += this.speed * dt;
      this.opacity = Math.max(0, 0.85 * (1 - Math.pow(this.radius / this.maxRadius, 1.2)));
      if (this.radius >= this.maxRadius || this.opacity <= 0.01) {
        this.alive = false;
      }
    }
  }

  /** プールから1つの星屑粒子をスポーン */
  function spawnParticle(x, y, z, colorIdx, layerType, size, life = null) {
    const p = particles[particleHead];
    p.spawn(x, y, z, colorIdx, layerType, size, life);
    particleHead = (particleHead + 1) % MAX_PARTICLES;
    if (activeParticleCount < MAX_PARTICLES) {
      activeParticleCount++;
    }
  }

  /**
   * 指やマウスの移動区間に「星屑の帯（パーティクルクラスター）」を散布
   * 単なる細い線ではなく、Fluid-001 のように幅を持ったきらめく星屑粒子群を形成する
   */
  function strokeInterpolate(x1, y1, x2, y2, colorIdx) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy);
    if (dist < 0.5) return;

    // 進行方向に直交する法線ベクトル（線の太さ・広がり用）
    const invDist = 1 / dist;
    const nx = -dy * invDist;
    const ny = dx * invDist;

    // 4px ごとに補間点を設け、周囲に星屑を散布
    const step = 4.0;
    const count = Math.max(1, Math.ceil(dist / step));
    const invCount = 1 / count;

    for (let i = 1; i <= count; i++) {
      const t = i * invCount;
      const cx = x1 + dx * t;
      const cy = y1 + dy * t;

      // 1. コア星屑粒子（中心部、高輝度・発光コア）: 1〜2個
      const coreCount = 1 + (Math.random() < 0.4 ? 1 : 0);
      for (let k = 0; k < coreCount; k++) {
        const spread = (Math.random() - 0.5) * 6.0;
        const px = cx + nx * spread + (Math.random() - 0.5) * 3.0;
        const py = cy + ny * spread + (Math.random() - 0.5) * 3.0;
        const pz = (Math.random() - 0.5) * 8.0;
        spawnParticle(px, py, pz, colorIdx, LAYER_CORE, 5.2 + Math.random() * 2.2);
      }

      // 2. 中間星屑ダスト（パレット色で周囲を彩る星屑群）: 2〜3個
      const dustCount = 2 + Math.floor(Math.random() * 2);
      for (let k = 0; k < dustCount; k++) {
        const spread = (Math.random() - 0.5) * 16.0;
        const px = cx + nx * spread + (Math.random() - 0.5) * 5.0;
        const py = cy + ny * spread + (Math.random() - 0.5) * 5.0;
        const pz = (Math.random() - 0.5) * 14.0;
        spawnParticle(px, py, pz, colorIdx, LAYER_DUST, 3.2 + Math.random() * 1.8);
      }

      // 3. 外縁グリッター（微細に瞬く星の粉）: 1〜2個
      if (Math.random() < 0.75) {
        const spread = (Math.random() - 0.5) * 26.0;
        const px = cx + nx * spread + (Math.random() - 0.5) * 6.0;
        const py = cy + ny * spread + (Math.random() - 0.5) * 6.0;
        const pz = (Math.random() - 0.5) * 20.0;
        spawnParticle(px, py, pz, colorIdx, LAYER_GLITTER, 1.8 + Math.random() * 1.5);
      }
    }
  }

  /** 単語テキストから星屑文字を一斉配置（単語タグが押された時のみ発火） */
  function dropWordText(text, triggerRipple = true) {
    if (!text || width === 0 || height === 0) return;
    currentWord = text;

    const cw = sampleCanvas.width;
    const ch = sampleCanvas.height;
    sampleCtx.clearRect(0, 0, cw, ch);

    const len = text.length;
    let fontSize = 260;
    if (len === 2) fontSize = 220;
    else if (len === 3) fontSize = 175;
    else if (len >= 4 && len <= 6) fontSize = 130;
    else if (len > 6) fontSize = Math.max(70, Math.floor(800 / len));

    sampleCtx.textAlign = 'center';
    sampleCtx.textBaseline = 'middle';
    sampleCtx.strokeStyle = '#ffffff';
    sampleCtx.lineWidth = Math.max(8, Math.floor(fontSize * 0.09));
    sampleCtx.font = `600 ${fontSize}px "Noto Sans JP", "Outfit", -apple-system, sans-serif`;
    sampleCtx.strokeText(text, cw * 0.5, ch * 0.5);
    sampleCtx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    sampleCtx.fillText(text, cw * 0.5, ch * 0.5);

    const imgData = sampleCtx.getImageData(0, 0, cw, ch);
    const data = imgData.data;
    const rawCoords = [];
    let minX = cw, maxX = 0, minY = ch, maxY = 0;

    const step = 3;
    for (let py = 0; py < ch; py += step) {
      for (let px = 0; px < cw; px += step) {
        const idx = (py * cw + px) * 4;
        if (data[idx + 3] > 60) {
          rawCoords.push({ x: px, y: py });
          if (px < minX) minX = px;
          if (px > maxX) maxX = px;
          if (py < minY) minY = py;
          if (py > maxY) maxY = py;
        }
      }
    }

    if (rawCoords.length === 0 || minX >= maxX || minY >= maxY) return;

    const textW = maxX - minX;
    const textH = maxY - minY;
    const textCenterX = (minX + maxX) * 0.5;
    const textCenterY = (minY + maxY) * 0.5;

    const targetW = Math.max(200, width * 0.65);
    const targetH = Math.max(160, height * 0.50);
    const scale = Math.min(targetW / textW, targetH / textH);

    // 最大約 1600 個の星屑粒子で文字を構築
    const countToSpawn = Math.min(rawCoords.length, 1600);
    const stride = rawCoords.length / countToSpawn;

    for (let i = 0; i < countToSpawn; i++) {
      const idx = Math.floor(i * stride);
      const pt = rawCoords[idx];
      const targetX = width * 0.5 + (pt.x - textCenterX) * scale + (Math.random() - 0.5) * 5.0;
      const targetY = height * 0.5 + (pt.y - textCenterY) * scale + (Math.random() - 0.5) * 5.0;
      const pz = (Math.random() - 0.5) * 20;

      const colorIdx = Math.floor((i / countToSpawn) * 8);
      const layerType = (i % 3 === 0) ? LAYER_CORE : ((i % 3 === 1) ? LAYER_DUST : LAYER_GLITTER);
      const sz = layerType === LAYER_CORE ? 5.5 : (layerType === LAYER_DUST ? 3.8 : 2.2);
      spawnParticle(targetX, targetY, pz, colorIdx, layerType, sz);
    }

    if (triggerRipple) {
      shockwaves.push(new CosmicRipple(width * 0.5, height * 0.5, 300));
    }
  }

  /** 全粒子を散開させてキャンバスをクリア */
  function clearCanvas() {
    for (const p of particles) {
      if (p.active) {
        const angle = Math.random() * Math.PI * 2;
        const force = 180 + Math.random() * 250;
        p.vx += Math.cos(angle) * force;
        p.vy += Math.sin(angle) * force;
        p.life = Math.min(p.life, 0.6); // 0.6秒で素早く消散
      }
    }
    shockwaves.push(new CosmicRipple(width * 0.5, height * 0.5, 350));
  }

  return {
    name: 'fluidWords',
    noLayerRotation: true,

    init(w, h, params, group) {
      width = w;
      height = h;
      halfWidth = w * 0.5;
      halfHeight = h * 0.5;
      currentPalette = params?.palette || 'rainbow';
      updatePaletteCache(currentPalette);

      // 粒子プール初期化
      particles.length = 0;
      for (let i = 0; i < MAX_PARTICLES; i++) {
        particles.push(new InkParticle());
      }
      particleHead = 0;
      activeParticleCount = 0;
      shockwaves = [];

      // Three.js ポイントクラウド
      particleField = makePoints(MAX_PARTICLES, {
        size: 5.0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
      });
      group.add(particleField.points);

      // ショックウェーブ用リングメッシュ（インスタンスメッシュ）
      const ringGeo = new THREE.RingGeometry(0.9, 1.0, 36);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      rippleMesh = new THREE.InstancedMesh(ringGeo, ringMat, MAX_RIPPLES);
      rippleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      rippleMesh.count = 0;
      group.add(rippleMesh);

      // ★ユーザー要望: 「最初の文字は邪魔」→ 初期文字は出さず、静謐な宇宙空間からスタート！
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      if (params.palette && params.palette !== currentPalette) {
        currentPalette = params.palette;
        updatePaletteCache(currentPalette);
      }
      const bass = audioData?.volume || 0;
      const speed = params.speed ?? 1.0;

      // 1. 指/マウスでなぞり中の星屑散布（Fluid Inking）
      if (isDown) {
        strokeInterpolate(lastX, lastY, pointer.x, pointer.y, strokeColorSeed);
        lastX = pointer.x;
        lastY = pointer.y;

        // 指の周りに適度な宇宙波紋
        if (Math.random() < 0.06) {
          shockwaves.push(new CosmicRipple(pointer.x, pointer.y, 60 + Math.random() * 40));
        }
      }

      // 2. 粒子の更新（約2.8秒間維持し、その後約1.4秒かけて消散：合計約4秒）
      for (let i = 0; i < MAX_PARTICLES; i++) {
        const p = particles[i];
        if (p.active) {
          p.update(dt, speed, bass);
        }
      }

      // 3. ショックウェーブの更新
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.update(dt);
        if (!sw.alive) {
          shockwaves.splice(i, 1);
        }
      }
    },

    render(_layer, _w, _h, params) {
      if (!particleField) return;

      updatePaletteCache(currentPalette);
      const paletteRgbList = cachedRgbUnits;
      const palCount = paletteRgbList.length || 1;

      // 1. パーティクルバッファの高速書き込み（GCアロケーション完全ゼロ）
      let renderedCount = 0;
      const posBuf = particleField.positions;
      const colBuf = particleField.colors;

      for (let i = 0; i < MAX_PARTICLES; i++) {
        const p = particles[i];
        if (p.active && p.life > 0) {
          const [r, g, b] = paletteRgbList[p.colorIdx % palCount];

          // 約2.8秒間は 100% 鮮明に維持、その後1.4秒かけて優雅にフェードアウト
          let alpha = 1.0;
          if (p.age > holdDuration) {
            const dissolveRatio = Math.min(1.0, (p.age - holdDuration) / dissolveDuration);
            alpha = Math.max(0, 1.0 - dissolveRatio);
          }

          // 星のような微細な瞬き（チカチカきらめく質感）
          const twinkle = 0.78 + 0.22 * Math.sin(time * p.twinkleSpeed + p.twinkleOffset);
          const finalAlpha = alpha * twinkle;

          const baseIdx = renderedCount * 3;
          // インラインワールド座標変換（Vector3 インスタンス生成を根絶）
          posBuf[baseIdx] = p.x - halfWidth;
          posBuf[baseIdx + 1] = halfHeight - p.y;
          posBuf[baseIdx + 2] = p.z;

          if (p.layerType === LAYER_CORE) {
            // コア星屑粒子: 眩いネオンホワイト + パレット色のハイライト
            const core = 0.45 * finalAlpha;
            colBuf[baseIdx] = Math.min(1.0, r * finalAlpha * 0.7 + core);
            colBuf[baseIdx + 1] = Math.min(1.0, g * finalAlpha * 0.7 + core);
            colBuf[baseIdx + 2] = Math.min(1.0, b * finalAlpha * 0.7 + core);
          } else if (p.layerType === LAYER_DUST) {
            // 中間星屑ダスト: 鮮やかなパレットカラーの星屑
            const core = 0.15 * finalAlpha;
            colBuf[baseIdx] = Math.min(1.0, r * finalAlpha + core);
            colBuf[baseIdx + 1] = Math.min(1.0, g * finalAlpha + core);
            colBuf[baseIdx + 2] = Math.min(1.0, b * finalAlpha + core);
          } else {
            // 外縁グリッター: 淡くきらめく星の粉
            colBuf[baseIdx] = r * finalAlpha * 0.65;
            colBuf[baseIdx + 1] = g * finalAlpha * 0.65;
            colBuf[baseIdx + 2] = b * finalAlpha * 0.65;
          }

          renderedCount++;
        }
      }

      particleField.mat.size = 4.8 + (params.particleSize ?? 3.5) * 0.6;
      particleField.geo.setDrawRange(0, renderedCount);
      particleField.geo.attributes.position.needsUpdate = true;
      particleField.geo.attributes.color.needsUpdate = true;

      // 2. ショックウェーブの描画
      if (rippleMesh) {
        const ringCount = Math.min(shockwaves.length, MAX_RIPPLES);
        for (let i = 0; i < ringCount; i++) {
          const sw = shockwaves[i];
          dummy.position.set(sw.x - halfWidth, halfHeight - sw.y, 0);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.set(sw.radius, sw.radius, 1);
          dummy.updateMatrix();
          rippleMesh.setMatrixAt(i, dummy.matrix);

          const [cr, cg, cb] = paletteRgbList[i % palCount];
          _color.setRGB(cr, cg, cb).multiplyScalar(sw.opacity * 0.85);
          rippleMesh.setColorAt(i, _color);
        }
        rippleMesh.count = ringCount;
        rippleMesh.instanceMatrix.needsUpdate = true;
        if (rippleMesh.instanceColor) rippleMesh.instanceColor.needsUpdate = true;
      }
    },

    onPointerDown(x, y) {
      isDown = true;
      lastX = x;
      lastY = y;
      strokeColorSeed = Math.floor(Math.random() * 8);

      // タップした瞬間にも星屑クラスターを散布
      for (let i = 0; i < 8; i++) {
        const spread = (Math.random() - 0.5) * 14;
        const layerType = i < 3 ? LAYER_CORE : LAYER_DUST;
        const sz = i < 3 ? 5.8 : 3.4;
        spawnParticle(
          x + spread,
          y + (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
          strokeColorSeed,
          layerType,
          sz
        );
      }
      shockwaves.push(new CosmicRipple(x, y, 65));
    },

    onPointerMove(x, y) {
      if (isDown) {
        strokeInterpolate(lastX, lastY, x, y, strokeColorSeed);
        lastX = x;
        lastY = y;
      }
    },

    onPointerUp() {
      if (isDown) {
        isDown = false;
        // 指を離した瞬間に優美な宇宙波紋
        shockwaves.push(new CosmicRipple(lastX, lastY, 95));
      }
    },

    setParams(p) {
      if (!p) return;
      if (p.palette) {
        currentPalette = p.palette;
        updatePaletteCache(currentPalette);
      }
      if (p.trail !== undefined) {
        // trailスライダーで消える時間を 2秒〜8秒程度に調整可能
        holdDuration = 1.6 + p.trail * 3.5;
        dissolveDuration = 0.8 + p.trail * 1.5;
      }
      if (p.customText !== undefined && p.customText !== null) {
        dropWordText(p.customText, true);
        delete p.customText;
      }
      if (p.clear) {
        clearCanvas();
        delete p.clear;
      }
    },

    resize(w, h) {
      width = w;
      height = h;
      halfWidth = w * 0.5;
      halfHeight = h * 0.5;
    },

    clear() {
      clearCanvas();
    },

    destroy(group) {
      particles.length = 0;
      shockwaves = [];
      if (group) {
        clearGroup(group);
      }
      if (particleField?.points?.geometry) particleField.points.geometry.dispose();
      if (particleField?.points?.material) particleField.points.material.dispose();
      if (rippleMesh?.geometry) rippleMesh.geometry.dispose();
      if (rippleMesh?.material) rippleMesh.material.dispose();
      particleField = null;
      rippleMesh = null;
    },
  };
}
