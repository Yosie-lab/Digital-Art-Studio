import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit, clearGroup } from '../space3d.js';
import { SimplexNoise } from '../../utils/noise.js';

/**
 * Fluid Words プリセット (Fluid-001 スタイル)
 * 指やマウスでなぞった通りの軌跡がリアルタイムに光の流体粒子（インク）となって描かれ、
 * 水中を漂うオーロラのように優美にたなびき、時間とともに幻想的に消散していく。
 * 単語タグを押すと、画面中央にその文字が流体インクとして一斉に咲き出す。
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

  const MAX_PARTICLES = 16000; // 長文や複数文字も絶対に上書きされない大容量プール
  const MAX_RIPPLES = 24;

  let holdDuration = 45.0; // デフォルトで45秒間は1ミリも形を崩さず100%鮮明に完全静止キープ（じっくり読める）
  const DISSOLVE_DURATION = 10.0; // 保持時間終了後、10秒かけて星屑のように優美に昇華

  // パーティクルプール
  const particles = [];
  let particleHead = 0; // リングバッファの書き込みポインタ
  let activeParticleCount = 0;

  // ショックウェーブ（宇宙の光輪）
  let shockwaves = [];

  // 描画状態
  let isDown = false;
  let lastX = 0;
  let lastY = 0;
  let strokeColorSeed = 0;
  let currentWord = '光';

  // オフスクリーンCanvas（テキストサンプリング用）
  const sampleCanvas = document.createElement('canvas');
  sampleCanvas.width = 1200;
  sampleCanvas.height = 800;
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

  /** 単一の流体粒子クラス */
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
      this.maxLife = 25.0;
      this.size = 5.6;
      this.colorIdx = 0;
      this.active = false;
      this.noiseOffset = Math.random() * 1000;
      this.glow = 1.0;
    }

    spawn(x, y, z, colorIdx, life = 25.0, size = 5.6) {
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
      this.life = life;
      this.maxLife = life;
      this.size = size;
      this.colorIdx = colorIdx;
      this.active = true;
      this.glow = 1.0;
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
        // 【完全静止フェーズ】書いた通りの位置に1ミリも狂わず完全固定！誰でもハッキリ読める
        this.x = this.baseX;
        this.y = this.baseY;
        this.z = this.baseZ;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
      } else {
        // 【昇華フェーズ】保持期間経過後、ゆっくりと星屑のように優雅にたなびいて消散
        const dissolveAge = this.age - holdDuration;
        const dissolveRatio = Math.min(1.0, dissolveAge / DISSOLVE_DURATION);

        const angle = noise.noise2D(
          this.x * 0.002,
          this.y * 0.002 + time * 0.1 + this.noiseOffset
        ) * Math.PI * 2;

        const flowMag = (10 + audioBass * 20) * speed * dissolveRatio;
        this.vx += Math.cos(angle) * flowMag * dt;
        this.vy += Math.sin(angle) * flowMag * dt - 6 * dt; // ほんのり上空へ昇華
        this.vz += Math.sin(angle * 1.5) * (flowMag * 0.2) * dt;

        const damping = Math.pow(0.95, dt * 60);
        this.vx *= damping;
        this.vy *= damping;
        this.vz *= damping;

        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.z += this.vz * dt;
      }
    }
  }

  /** 光輪波紋クラス */
  class CosmicRipple {
    constructor(x, y, maxR = 260) {
      this.x = x;
      this.y = y;
      this.radius = 4;
      this.maxRadius = maxR;
      this.speed = 180 + Math.random() * 90;
      this.opacity = 1.0;
      this.alive = true;
    }
    update(dt) {
      this.radius += this.speed * dt;
      this.opacity = Math.max(0, 1 - Math.pow(this.radius / this.maxRadius, 1.3));
      if (this.radius >= this.maxRadius || this.opacity <= 0.01) {
        this.alive = false;
      }
    }
  }

  /** プールから1つの粒子をスポーン（初速ゼロでピタッと留まる） */
  function spawnParticle(x, y, z, colorIdx, life = null, size = 5.6) {
    const p = particles[particleHead];
    const particleLife = life !== null ? life : (holdDuration > 1000 ? 999999 : (holdDuration + DISSOLVE_DURATION));
    p.spawn(x, y, z, colorIdx, particleLife, size);
    particleHead = (particleHead + 1) % MAX_PARTICLES;
    if (activeParticleCount < MAX_PARTICLES) {
      activeParticleCount++;
    }
  }

  /** 指やマウスの移動区間を補間して滑らかに流体インクを散布 */
  function strokeInterpolate(x1, y1, x2, y2, colorIdx) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy);
    if (dist < 0.5) return;

    // 3.0px刻みで滑らかかつ効率的にスポーン（線の途切れがなく、容量も長持ち）
    const step = 3.0;
    const count = Math.max(1, Math.ceil(dist / step));
    const invCount = 1 / count;

    for (let i = 1; i <= count; i++) {
      const t = i * invCount;
      const px = x1 + dx * t + (Math.random() - 0.5) * 1.5;
      const py = y1 + dy * t + (Math.random() - 0.5) * 1.5;
      const pz = (Math.random() - 0.5) * 6;

      spawnParticle(px, py, pz, colorIdx, null, 5.6 + Math.random() * 1.0);
    }
  }

  /** 単語テキストから全ストロークピクセルを抽出し、流体粒子として一斉配置 */
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
    sampleCtx.lineWidth = Math.max(7, Math.floor(fontSize * 0.08));
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
        if (data[idx + 3] > 70) {
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

    // 最大約 1400 粒子を一斉にスポーン
    const countToSpawn = Math.min(rawCoords.length, 1400);
    const stride = rawCoords.length / countToSpawn;

    for (let i = 0; i < countToSpawn; i++) {
      const idx = Math.floor(i * stride);
      const pt = rawCoords[idx];
      const targetX = width * 0.5 + (pt.x - textCenterX) * scale;
      const targetY = height * 0.5 + (pt.y - textCenterY) * scale;
      const pz = (Math.random() - 0.5) * 20;

      const colorIdx = Math.floor((i / countToSpawn) * 8);
      spawnParticle(targetX, targetY, pz, colorIdx, null, 4.8 + Math.random() * 1.2);
    }

    if (triggerRipple) {
      shockwaves.push(new CosmicRipple(width * 0.5, height * 0.5, 340));
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
        p.life = Math.min(p.life, 1.0); // 1秒で速やかに消散
      }
    }
    shockwaves.push(new CosmicRipple(width * 0.5, height * 0.5, 450));
  }

  return {
    name: 'fluidWords',
    noLayerRotation: true,

    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params?.palette || 'rainbow';

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
        size: 5.5,
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

      // 初期表示として「光」を優美に配置
      dropWordText(currentWord, false);
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette || currentPalette;
      const bass = audioData?.volume || 0;
      const speed = params.speed ?? 1.0;

      // 1. 指/マウスでなぞり中の連続描画（Fluid Inking）
      if (isDown) {
        strokeInterpolate(lastX, lastY, pointer.x, pointer.y, strokeColorSeed);
        lastX = pointer.x;
        lastY = pointer.y;

        // 指の周りに適度な波紋
        if (Math.random() < 0.08) {
          shockwaves.push(new CosmicRipple(pointer.x, pointer.y, 80 + Math.random() * 60));
        }
      }

      // 2. 粒子の物理更新（保持期間中は文字を完全固定、その後ゆっくり昇華）
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

      const paletteColors = getPaletteColors(currentPalette);
      const paletteRgbList = paletteColors.map(hexToRgb);

      // 1. パーティクルバッファの書き込み
      let renderedCount = 0;
      for (let i = 0; i < MAX_PARTICLES; i++) {
        const p = particles[i];
        if (p.active && p.life > 0) {
          const wpos = toWorld(p.x, p.y, p.z, width, height);
          const rgb = paletteRgbList[p.colorIdx % paletteRgbList.length];
          const [r, g, b] = rgbToUnit(rgb);

          // 保持期間（holdDuration）中は 100% 鮮明に維持、保持期間終了後に滑らかにフェードアウト
          let alpha = 1.0;
          if (p.age > holdDuration) {
            const dissolveRatio = Math.min(1.0, (p.age - holdDuration) / DISSOLVE_DURATION);
            alpha = Math.max(0, 1.0 - dissolveRatio);
          }

          particleField.positions[renderedCount * 3] = wpos.x;
          particleField.positions[renderedCount * 3 + 1] = wpos.y;
          particleField.positions[renderedCount * 3 + 2] = wpos.z;

          // ネオンホワイトコア + 鮮烈なオーロラグロー
          const core = 0.25 * alpha;
          particleField.colors[renderedCount * 3] = Math.min(1.0, r * alpha + core);
          particleField.colors[renderedCount * 3 + 1] = Math.min(1.0, g * alpha + core);
          particleField.colors[renderedCount * 3 + 2] = Math.min(1.0, b * alpha + core);

          renderedCount++;
        }
      }

      particleField.mat.size = 5.0 + (params.particleSize ?? 3.5) * 0.7;
      particleField.geo.setDrawRange(0, renderedCount);
      particleField.geo.attributes.position.needsUpdate = true;
      particleField.geo.attributes.color.needsUpdate = true;

      // 2. ショックウェーブの描画
      if (rippleMesh) {
        const ringCount = Math.min(shockwaves.length, MAX_RIPPLES);
        for (let i = 0; i < ringCount; i++) {
          const sw = shockwaves[i];
          const pos = toWorld(sw.x, sw.y, 0, width, height);
          dummy.position.copy(pos);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.set(sw.radius, sw.radius, 1);
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
      isDown = true;
      lastX = x;
      lastY = y;
      strokeColorSeed = Math.floor(Math.random() * 8);

      // タップしたその瞬間に光の粒子コアを静止配置
      for (let i = 0; i < 6; i++) {
        spawnParticle(
          x + (Math.random() - 0.5) * 2.5,
          y + (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 4,
          strokeColorSeed,
          null,
          5.6 + Math.random() * 1.0
        );
      }
      shockwaves.push(new CosmicRipple(x, y, 65));
    },

    onPointerMove(x, y) {
      if (isDown) {
        // pointermoveイベントの座標で連続補間描画
        strokeInterpolate(lastX, lastY, x, y, strokeColorSeed);
        lastX = x;
        lastY = y;
      }
    },

    onPointerUp() {
      if (isDown) {
        isDown = false;
        // 指を離した瞬間に優美な光輪
        shockwaves.push(new CosmicRipple(lastX, lastY, 110));
      }
    },

    setParams(p) {
      if (!p) return;
      if (p.palette) {
        currentPalette = p.palette;
      }
      if (p.trail !== undefined) {
        // trailスライダー: 0〜0.85で15秒〜90秒、0.85以上で消去するまで無限キープ
        holdDuration = p.trail >= 0.85 ? 999999 : (15.0 + p.trail * 75.0);
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
