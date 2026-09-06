import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit, clearGroup } from '../space3d.js';

/**
 * Spacey Bloom プリセット
 * 宇宙空間・銀河の螺旋（Nebula Spiral）・星屑粒子と、
 * 超新星爆発のように咲き誇る幻想的なコズミックフラワーを融合したアートエフェクト
 */
export function createSpaceyBloom() {
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'nebula';
  let autoBloomTimer = 0;

  // パーティクルシステム
  let starField = null;      // 星雲・銀河の星屑
  let bloomField = null;     // 宇宙花の花弁・コア粒子
  let ringMesh = null;       // 光のリング・ショックウェーブ (InstancedMesh)

  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();

  const MAX_STARS = 1600;
  const MAX_BLOOM_PARTICLES = 2400;
  const MAX_RINGS = 32;

  // 状態管理用配列
  let stars = [];
  let blooms = [];
  let rings = [];

  /** 宇宙空間を漂う星屑粒子クラス */
  class Star {
    constructor(w, h) {
      this.reset(w, h, true);
    }

    reset(w, h, initial = false) {
      const radius = initial
        ? Math.sqrt(Math.random()) * Math.min(w, h) * 0.75
        : Math.min(w, h) * (0.6 + Math.random() * 0.3);
      this.angle = Math.random() * Math.PI * 2;
      this.dist = radius;
      this.z = (Math.random() - 0.5) * 360;
      this.spiralSpeed = (0.2 + Math.random() * 0.5) * (Math.random() < 0.15 ? -1 : 1);
      this.inwardSpeed = (10 + Math.random() * 25);
      this.baseSize = 1.2 + Math.random() * 3.2;
      this.sparklePhase = Math.random() * Math.PI * 2;
      this.sparkleFreq = 2 + Math.random() * 4;
      this.colorIdx = Math.floor(Math.random() * 6);
      this.armOffset = (Math.floor(Math.random() * 3) * (Math.PI * 2 / 3)); // 3本の渦状腕
    }

    update(dt, w, h, pointer, speed, gravity, audioBass) {
      // 銀河の渦（スパイラル運動）
      const effSpeed = speed * (1 + audioBass * 1.5);
      this.angle += (this.spiralSpeed * 0.8 + 80 / (this.dist + 50)) * 0.015 * effSpeed * dt;
      this.dist -= (this.inwardSpeed * gravity * 0.03 + 8) * effSpeed * dt;

      // 中心に吸い込まれたら外側へ再配置
      if (this.dist < 20) {
        this.reset(w, h, false);
      }

      // 腕の形状とゆらぎを加味した位置算出
      const spiralA = this.angle + this.armOffset + Math.log(this.dist * 0.02 + 1) * 1.5;
      let cx = w * 0.5 + Math.cos(spiralA) * this.dist;
      let cy = h * 0.5 + Math.sin(spiralA) * this.dist * 0.75; // やや斜めの楕円銀河
      let cz = this.z + Math.sin(this.angle * 2) * 40;

      // ポインターの重力レンズ効果
      const dx = pointer.x - cx;
      const dy = pointer.y - cy;
      const d2 = dx * dx + dy * dy;
      const pullRange = 220;
      if (d2 < pullRange * pullRange && d2 > 10) {
        const d = Math.sqrt(d2);
        const force = (1 - d / pullRange) * (pointer.isDown ? 70 : 30);
        cx += (dx / d) * force;
        cy += (dy / d) * force;
        cz += (pointer.isDown ? -50 : 25) * (1 - d / pullRange);
      }

      this.currentX = cx;
      this.currentY = cy;
      this.currentZ = cz;
      this.brightness = 0.3 + 0.7 * Math.abs(Math.sin(time * this.sparkleFreq + this.sparklePhase));
    }
  }

  /** 光の衝撃波リング */
  class NovaRing {
    constructor(x, y, z, color, maxR = 240) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.radius = 2;
      this.maxRadius = maxR;
      this.growthSpeed = 120 + Math.random() * 150;
      this.opacity = 1;
      this.tiltX = (Math.random() - 0.5) * 1.2;
      this.tiltY = (Math.random() - 0.5) * 1.2;
      this.color = color;
      this.alive = true;
    }

    update(dt, speed) {
      this.radius += this.growthSpeed * speed * dt;
      this.opacity = Math.max(0, 1 - Math.pow(this.radius / this.maxRadius, 1.3));
      if (this.radius >= this.maxRadius || this.opacity <= 0.01) {
        this.alive = false;
      }
    }
  }

  /** 宇宙花（Spacy Bloom）クラス */
  class SpaceyBloomFlower {
    constructor(x, y, palette, isBig = false) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 120;
      this.palette = palette;
      this.isBig = isBig;
      this.lifetime = 0;
      this.maxLifetime = isBig ? 6.0 : 4.2 + Math.random() * 2.0;
      this.growth = 0;
      this.growthRate = (isBig ? 0.7 : 0.9 + Math.random() * 0.5);
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.6;
      this.petalsCount = isBig ? 8 + Math.floor(Math.random() * 4) : 5 + Math.floor(Math.random() * 3);
      this.maxRadius = (isBig ? 130 + Math.random() * 90 : 65 + Math.random() * 55);
      this.opacity = 1;
      this.alive = true;

      const colors = getPaletteColors(palette);
      this.mainColorHex = colors[Math.floor(Math.random() * colors.length)];
      this.accentColorHex = colors[Math.floor(Math.random() * colors.length)];
      this.mainRgb = hexToRgb(this.mainColorHex);
      this.accentRgb = hexToRgb(this.accentColorHex);

      // 花弁・放電粒子の生成
      this.particles = [];
      const count = isBig ? 180 : 85;
      for (let i = 0; i < count; i++) {
        const petalIdx = i % this.petalsCount;
        const norm = i / count;
        // 花弁の数学曲線（薔薇曲線 / フィボナッチ螺旋）
        const baseAngle = (petalIdx / this.petalsCount) * Math.PI * 2;
        const subAngle = (Math.random() - 0.5) * (Math.PI / this.petalsCount) * 1.4;
        const angle = baseAngle + subAngle;
        const distanceRatio = Math.pow(Math.random(), 0.65);
        const speed = (25 + Math.random() * 70);

        this.particles.push({
          angle,
          distRatio: distanceRatio,
          currentDist: 0,
          zOffset: (Math.random() - 0.5) * 60,
          driftSpeed: speed,
          phase: Math.random() * Math.PI * 2,
          isCore: Math.random() < 0.25,
          colorMix: Math.random(),
          size: 1.5 + Math.random() * 2.5,
        });
      }

      // ショックウェーブリングの発生
      rings.push(new NovaRing(this.x, this.y, this.z, this.accentRgb, this.maxRadius * 2.2));
      if (isBig) {
        setTimeout(() => {
          if (this.alive) {
            rings.push(new NovaRing(this.x, this.y, this.z, this.mainRgb, this.maxRadius * 3.0));
          }
        }, 120);
      }
    }

    update(dt, speed, audioBass) {
      this.lifetime += dt;
      this.rotation += this.rotSpeed * speed * dt;

      // 開花アニメーション（イージング）
      if (this.growth < 1) {
        this.growth = Math.min(1, this.growth + this.growthRate * speed * dt);
      }

      // フェードアウト
      const lifeRatio = this.lifetime / this.maxLifetime;
      if (lifeRatio > 0.6) {
        this.opacity = Math.max(0, 1 - (lifeRatio - 0.6) / 0.4);
      }

      if (this.lifetime >= this.maxLifetime || this.opacity <= 0.005) {
        this.alive = false;
        return;
      }

      // 粒子ごとの移動
      const expand = this._easeOutCubic(this.growth) * this.maxRadius * (1 + audioBass * 0.45);
      for (const p of this.particles) {
        p.currentDist = p.distRatio * expand + (lifeRatio * p.driftSpeed * 0.4);
      }
    }

    _easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
  }

  function spawnBloom(x, y, palette, isBig = false) {
    if (blooms.length >= 10) {
      blooms.shift(); // 上限制御
    }
    blooms.push(new SpaceyBloomFlower(x, y, palette, isBig));
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params.palette || 'nebula';
      time = 0;
      autoBloomTimer = 0;
      stars = [];
      blooms = [];
      rings = [];

      // 星屑ポイントフィールド作成
      starField = makePoints(MAX_STARS, 9);
      group.add(starField.points);

      // 宇宙花パーティクルフィールド作成
      bloomField = makePoints(MAX_BLOOM_PARTICLES, 13);
      group.add(bloomField.points);

      // 星屑の初期化
      for (let i = 0; i < MAX_STARS; i++) {
        stars.push(new Star(w, h));
      }

      // ショックウェーブ用 Torus InstancedMesh
      const ringGeo = new THREE.TorusGeometry(1, 0.015, 8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      ringMesh = new THREE.InstancedMesh(ringGeo, ringMat, MAX_RINGS);
      ringMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_RINGS * 3), 3);
      ringMesh.frustumCulled = false;
      group.add(ringMesh);

      // 初期の宇宙花を中央付近に配置
      spawnBloom(w * 0.5, h * 0.5, currentPalette, true);
    },

    update(dt, params, pointer, audioData) {
      time += dt;
      autoBloomTimer += dt;
      const speed = params.speed !== undefined ? params.speed : 1.0;
      const gravity = params.gravity !== undefined ? params.gravity : 1.0;
      const bass = audioData?.isActive ? audioData.bass : 0;

      // 自動開花サイクル（約2.5〜3.5秒に1回、ランダム位置に開花）
      const bloomInterval = audioData?.isActive ? 2.0 : 2.8;
      if (autoBloomTimer > bloomInterval) {
        autoBloomTimer = 0;
        const rx = width * (0.2 + Math.random() * 0.6);
        const ry = height * (0.2 + Math.random() * 0.6);
        spawnBloom(rx, ry, currentPalette, Math.random() < 0.4);
      }

      // 星屑の更新
      const targetStars = Math.min(stars.length, params.particleCount || 1000);
      for (let i = 0; i < targetStars; i++) {
        stars[i].update(dt, width, height, pointer, speed, gravity, bass);
      }

      // 宇宙花の更新
      for (let i = blooms.length - 1; i >= 0; i--) {
        blooms[i].update(dt, speed, bass);
        if (!blooms[i].alive) {
          blooms.splice(i, 1);
        }
      }

      // ショックウェーブリングの更新
      for (let i = rings.length - 1; i >= 0; i--) {
        rings[i].update(dt, speed);
        if (!rings[i].alive) {
          rings.splice(i, 1);
        }
      }
    },

    render(group, params, audioData) {
      const colors = getPaletteColors(currentPalette);
      const paletteRgbList = colors.map(hexToRgb);
      const bass = audioData?.isActive ? audioData.bass : 0;
      const pCount = Math.min(stars.length, params.particleCount || 1000);

      // 1. 星屑フィールドのバッファ更新
      let starIdx = 0;
      for (let i = 0; i < pCount; i++) {
        const s = stars[i];
        const wpos = toWorld(s.currentX, s.currentY, s.currentZ, width, height);
        const rgb = paletteRgbList[s.colorIdx % paletteRgbList.length];
        const [r, g, b] = rgbToUnit(rgb);
        const a = s.brightness * 0.85;

        starField.positions[starIdx * 3] = wpos.x;
        starField.positions[starIdx * 3 + 1] = wpos.y;
        starField.positions[starIdx * 3 + 2] = wpos.z;
        starField.colors[starIdx * 3] = r * a;
        starField.colors[starIdx * 3 + 1] = g * a;
        starField.colors[starIdx * 3 + 2] = b * a;
        starIdx++;
      }
      starField.geo.setDrawRange(0, starIdx);
      starField.geo.attributes.position.needsUpdate = true;
      starField.geo.attributes.color.needsUpdate = true;

      // 2. 宇宙花パーティクルバッファの更新
      let bIdx = 0;
      for (const bloom of blooms) {
        const [mr, mg, mb] = rgbToUnit(bloom.mainRgb);
        const [ar, ag, ab] = rgbToUnit(bloom.accentRgb);
        const bRot = bloom.rotation;

        for (const p of bloom.particles) {
          if (bIdx >= MAX_BLOOM_PARTICLES) break;

          const curA = p.angle + bRot;
          const px = bloom.x + Math.cos(curA) * p.currentDist;
          const py = bloom.y + Math.sin(curA) * p.currentDist;
          const pz = bloom.z + p.zOffset + Math.sin(curA * 3 + time * 2) * 15;

          const wpos = toWorld(px, py, pz, width, height);
          bloomField.positions[bIdx * 3] = wpos.x;
          bloomField.positions[bIdx * 3 + 1] = wpos.y;
          bloomField.positions[bIdx * 3 + 2] = wpos.z;

          // 色の補間と輝度計算
          const cr = (mr * (1 - p.colorMix) + ar * p.colorMix);
          const cg = (mg * (1 - p.colorMix) + ag * p.colorMix);
          const cb = (mb * (1 - p.colorMix) + ab * p.colorMix);
          const coreBoost = p.isCore ? 1.4 : 1.0;
          const alpha = bloom.opacity * coreBoost * (0.8 + bass * 0.4);

          bloomField.colors[bIdx * 3] = Math.min(1.0, cr * alpha);
          bloomField.colors[bIdx * 3 + 1] = Math.min(1.0, cg * alpha);
          bloomField.colors[bIdx * 3 + 2] = Math.min(1.0, cb * alpha);
          bIdx++;
        }
      }
      bloomField.geo.setDrawRange(0, bIdx);
      bloomField.geo.attributes.position.needsUpdate = true;
      bloomField.geo.attributes.color.needsUpdate = true;

      // 3. ショックウェーブリングのインスタンス更新
      if (ringMesh) {
        const ringCount = Math.min(rings.length, MAX_RINGS);
        for (let i = 0; i < ringCount; i++) {
          const r = rings[i];
          const pos = toWorld(r.x, r.y, r.z, width, height);
          dummy.position.copy(pos);
          dummy.rotation.set(r.tiltX + Math.PI / 2, r.tiltY, time * 0.3);
          dummy.scale.set(r.radius, r.radius, r.radius * 0.4);
          dummy.updateMatrix();
          ringMesh.setMatrixAt(i, dummy.matrix);

          const [cr, cg, cb] = rgbToUnit(r.color);
          _color.setRGB(cr, cg, cb).multiplyScalar(r.opacity * 0.85);
          ringMesh.setColorAt(i, _color);
        }
        ringMesh.count = ringCount;
        ringMesh.instanceMatrix.needsUpdate = true;
        if (ringMesh.instanceColor) ringMesh.instanceColor.needsUpdate = true;
      }
    },

    onPointerDown(x, y) {
      // タップ・クリックした場所に巨大な Spacy Bloom を開花
      spawnBloom(x, y, currentPalette, true);
    },

    onPointerMove(x, y, pointer) {
      // 素早いドラッグ時に小星花を開花
      if (pointer.velocity > 18 && Math.random() < 0.3) {
        spawnBloom(x, y, currentPalette, false);
      }
    },

    onPointerUp() {},

    setParams(p) {
      if (p.palette) {
        currentPalette = p.palette;
      }
    },

    resize(w, h) {
      width = w;
      height = h;
    },

    destroy(group) {
      blooms = [];
      stars = [];
      rings = [];
      if (group) {
        clearGroup(group);
      }
      starField = null;
      bloomField = null;
      ringMesh = null;
    },
  };
}
