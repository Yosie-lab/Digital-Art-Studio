import * as THREE from 'three';
import {
  toWorld,
  makePoints,
  rgbToUnit,
  stratifiedSpawnPoints,
  primeGrowingMarks,
  sampleMarksWorld,
  spreadScreenCloud,
  spreadModelCloudToWorld,
  remapScreenMarks,
  safeViewport,
} from '../space3d.js';
import {
  boostVividRgb,
  flowerBrightenRgb as brightenRgb,
  flowerDisplayColor as displayColor,
  flowerVividFromHex as vividPetalRgb,
  petalParticleRgb,
  paletteAccentRgb,
  randomFlowerPetalColor,
} from '../bloom/bloomColors.js';
import { samplePetalCloud } from '../morph/sampleShapes.js';

export function createFlowerBloom() {
  let flowers = [];
  let petals = [];
  let sparkles = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let petalMesh = null;
  let coreMesh = null;
  let sparkleField = null;
  let fallField = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX_FLOWERS = 64;
  const PETALS_PER = 8;
  const MAX_INST = MAX_FLOWERS * PETALS_PER;
  /** 花・パーティクルの出現を少し早く */
  const FLOWER_GROWTH_MUL = 1.22;
  const FLOWER_SPAWN_RATE = 2.3;

  class Flower {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 160;
      this.petalCount = 5 + Math.floor(Math.random() * 4);
      this.maxSize = 18 + Math.random() * 28;
      this.size = 0;
      this.growth = 0;
      this.growthRate = (0.4 + Math.random() * 0.6) * FLOWER_GROWTH_MUL;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.3;
      this.tilt = (Math.random() - 0.5) * 0.7;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.7 + Math.random() * 0.55;
      this.windAmp = 0.12 + Math.random() * 0.1;
      this.color = randomFlowerPetalColor(palette);
      this.rgb = vividPetalRgb(this.color);
      this.lifetime = 0;
      this.maxLifetime = 3.5 + Math.random() * 4;
      this.phase = 'growing';
      this.opacity = 1;
      this.innerRgb = brightenRgb(this.rgb);
    }

    update(dt) {
      this.lifetime += dt;
      this.rotation += this.rotSpeed * dt;
      switch (this.phase) {
        case 'growing':
          this.growth = Math.min(1, this.growth + this.growthRate * dt);
          this.size = this.maxSize * this._easeOutBack(this.growth);
          if (this.growth >= 1) this.phase = 'bloomed';
          break;
        case 'bloomed':
          if (Math.random() < dt * 2.4) this._shedDust();
          if (this.lifetime > this.maxLifetime * 0.5) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.28;
          if (Math.random() < dt * 5.6) this._shedPetal();
          if (Math.random() < dt * 7.5) this._shedDust();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _easeOutBack(t) {
      const c1 = 1.70158, c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    _shedPetal() {
      const burst = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < burst; i++) {
        petals.push({
          x: this.x + (Math.random() - 0.5) * this.size * 1.2,
          y: this.y + (Math.random() - 0.5) * this.size * 1.2,
          z: this.z + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 70,
          vy: -20 - Math.random() * 45,
          vz: (Math.random() - 0.5) * 45,
          size: this.size * 0.18 + Math.random() * 8,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 6,
          color: this.color,
          rgb: petalParticleRgb(this.rgb, 1.2),
          opacity: 1,
          glow: 1.45 + Math.random() * 0.3,
          kind: 'petal',
        });
      }
    }

    _shedDust() {
      const dust = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < dust; i++) {
        petals.push({
          x: this.x + (Math.random() - 0.5) * this.size * 0.6,
          y: this.y + (Math.random() - 0.5) * this.size * 0.6,
          z: this.z + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 90,
          vy: (Math.random() - 0.5) * 90 - 10,
          vz: (Math.random() - 0.5) * 60,
          size: 2 + Math.random() * 5,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 8,
          color: this.color,
          rgb: petalParticleRgb(this.innerRgb || this.rgb, 1.25),
          opacity: 1,
          glow: 1.55 + Math.random() * 0.35,
          kind: 'dust',
        });
      }
    }
  }

  function syncMeshes() {
    if (!petalMesh) return;
    const shown = Math.min(flowers.length, MAX_FLOWERS);
    let inst = 0;
    for (let f = 0; f < MAX_FLOWERS; f++) {
      const flower = f < shown ? flowers[f] : null;
      const pos = flower ? toWorld(flower.x, flower.y, flower.z, width, height) : null;
      for (let p = 0; p < PETALS_PER; p++) {
        if (!flower || p >= flower.petalCount || flower.size < 0.5) {
          dummy.position.set(0, 0, -4000);
          dummy.scale.set(0.001, 0.001, 0.001);
        } else {
          // 風揺れ: 花全体 + 花びらごとのわずかな位相差
          const wind = Math.sin(time * flower.windSpeed + flower.windPhase);
          const wind2 = Math.sin(time * flower.windSpeed * 1.37 + flower.windPhase * 1.2);
          const swayX = wind * flower.windAmp;
          const swayZ = wind2 * flower.windAmp * 0.85;
          const petalFlutter = Math.sin(time * flower.windSpeed * 1.8 + flower.windPhase + p * 0.9)
            * flower.windAmp * 0.9;

          const angle = (p / flower.petalCount) * Math.PI * 2 + flower.rotation;
          dummy.position.copy(pos);
          dummy.position.x += swayX * flower.size * 0.22;
          dummy.position.z += swayZ * flower.size * 0.16;
          dummy.rotation.set(
            flower.tilt + swayX * 1.6 + petalFlutter,
            angle + swayZ * 0.55,
            Math.PI * 0.35 + petalFlutter * 1.1,
          );
          dummy.translateY(flower.size * 0.45);
          dummy.scale.set(
            flower.size * 0.42,
            flower.size * (0.95 + petalFlutter * 0.18),
            1,
          );
        }
        dummy.updateMatrix();
        petalMesh.setMatrixAt(inst, dummy.matrix);
        if (flower) {
          const c = displayColor(flower.rgb, 0.75 + flower.opacity * 0.45);
          petalMesh.setColorAt(inst, _color.setRGB(c.r, c.g, c.b));
        } else {
          petalMesh.setColorAt(inst, _color.setRGB(0, 0, 0));
        }
        inst++;
      }
      if (flower && coreMesh) {
        const wind = Math.sin(time * flower.windSpeed + flower.windPhase);
        const wind2 = Math.sin(time * flower.windSpeed * 1.37 + flower.windPhase * 1.2);
        dummy.position.copy(pos);
        dummy.position.x += wind * flower.windAmp * flower.size * 0.16;
        dummy.position.z += wind2 * flower.windAmp * flower.size * 0.12;
        dummy.rotation.set(wind * flower.windAmp * 1.1, 0, wind2 * flower.windAmp * 0.8);
        dummy.scale.setScalar(Math.max(flower.size * 0.18, 0.01));
        dummy.updateMatrix();
        coreMesh.setMatrixAt(f, dummy.matrix);
        const c = displayColor(flower.rgb, 0.65);
        coreMesh.setColorAt(f, _color.setRGB(c.r * 0.82, c.g * 0.7, c.b));
      } else if (coreMesh) {
        dummy.position.set(0, 0, -4000);
        dummy.scale.setScalar(0.001);
        dummy.updateMatrix();
        coreMesh.setMatrixAt(f, dummy.matrix);
      }
    }
    petalMesh.instanceMatrix.needsUpdate = true;
    if (petalMesh.instanceColor) petalMesh.instanceColor.needsUpdate = true;
    if (coreMesh) {
      coreMesh.instanceMatrix.needsUpdate = true;
      if (coreMesh.instanceColor) coreMesh.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.25 + 0.3 * Math.abs(Math.sin(time * 2.8 + s.phase));
        const c = displayColor(s.rgb, pulse);
        sparkleField.colors[i * 3] = c.r;
        sparkleField.colors[i * 3 + 1] = c.g;
        sparkleField.colors[i * 3 + 2] = c.b;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(petals.length, 900);
      for (let i = 0; i < n; i++) {
        const p = petals[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r, g, b] = rgbToUnit(p.rgb);
        const glow = (p.glow || 1.4) * (0.5 + p.opacity * 0.55);
        const twinkle = p.kind === 'dust'
          ? 0.9 + 0.1 * Math.sin(time * 8 + p.rot * 3)
          : 1;
        fallField.colors[i * 3] = Math.min(1, r * glow * twinkle);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow * twinkle);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow * twinkle);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  return {
    init(w, h, params, group) {
      width = w; height = h;
      currentPalette = params.palette || 'rainbow';
      flowers = []; petals = []; sparkles = [];
      time = 0;
      layer = group;

      const petalGeo = new THREE.CircleGeometry(0.55, 10);
      petalGeo.translate(0, 0.45, 0);
      const petalMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      petalMesh = new THREE.InstancedMesh(petalGeo, petalMat, MAX_INST);
      petalMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_INST * 3), 3);
      petalMesh.frustumCulled = false;
      layer.add(petalMesh);

      const coreGeo = new THREE.SphereGeometry(1, 8, 8);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      coreMesh = new THREE.InstancedMesh(coreGeo, coreMat, MAX_FLOWERS);
      coreMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_FLOWERS * 3), 3);
      coreMesh.frustumCulled = false;
      layer.add(coreMesh);

      sparkleField = makePoints(160, 6);
      fallField = makePoints(900, 18);
      fallField.mat.opacity = 1;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(20, w, h)) {
        flowers.push(new Flower(x, y, currentPalette));
      }
      primeGrowingMarks(flowers);
      syncMeshes();
      for (let i = 0; i < 120; i++) {
        sparkles.push({
          x: Math.random() * w, y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          size: 0.5 + Math.random() * 1.8,
          speedY: -(0.08 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
          rgb: paletteAccentRgb(currentPalette),
        });
      }
    },

    resize(w, h) {
      remapScreenMarks(flowers, width, height, w, h);
      width = w;
      height = h;
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;
      flowers = flowers.filter(f => f.update(dt));

      if (pointer.velocity > 3) {
        const n = Math.min(2, Math.floor(pointer.velocity / 16) + 1);
        for (let i = 0; i < n; i++) {
          flowers.push(new Flower(
            pointer.x + (Math.random() - 0.5) * 50,
            pointer.y + (Math.random() - 0.5) * 50,
            currentPalette
          ));
        }
      }

      if (Math.random() < dt * FLOWER_SPAWN_RATE * params.speed) {
        flowers.push(new Flower(Math.random() * width, Math.random() * height, currentPalette));
      }

      if (audioData.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) {
          flowers.push(new Flower(Math.random() * width, Math.random() * height, currentPalette));
        }
      }

      petals = petals.filter(p => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.vx += Math.sin(time * 2.5 + p.x * 0.008) * 18 * dt;
        p.vz += Math.cos(time * 2.2 + p.y * 0.01) * 12 * dt;
        p.rot += p.rotSpeed * dt;
        const fade = p.kind === 'dust' ? 0.14 : 0.1;
        p.opacity -= dt * fade;
        p.glow = Math.max(1.2, (p.glow || 1.4) - dt * 0.08);
        return p.opacity > 0.02 && p.y < height + 80;
      });

      sparkles.forEach(s => {
        s.y += s.speedY * params.speed * 72 * dt;
        s.x += Math.sin(time * 1.5 + s.phase) * 0.25;
        if (s.y < -10) { s.y = height + 10; s.x = Math.random() * width; }
      });

      const maxFlowers = Math.min(MAX_FLOWERS, Math.max(20, Math.floor(params.particleCount / 4)));
      if (flowers.length > maxFlowers) flowers.splice(0, flowers.length - maxFlowers);
      if (petals.length > 900) petals.splice(0, petals.length - 900);
    },

    render() {
      syncMeshes();
      if (petalMesh) petalMesh.material.opacity = 0.88;
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 6; i++) {
        flowers.push(new Flower(
          x + (Math.random() - 0.5) * 90,
          y + (Math.random() - 0.5) * 90,
          currentPalette
        ));
      }
    },

    onPointerMove() {},
    onPointerUp() {},

    samplePoints(count, vw = width, vh = height) {
      const { w, h } = safeViewport(vw, vh, width, height);
      const petalFallback = (n, cw, ch) =>
        spreadModelCloudToWorld(samplePetalCloud(n, 95), n, cw, ch, 0.12);
      return sampleMarksWorld(flowers, count, w, h, petalFallback);
    },

    setParams(p) { currentPalette = p.palette; },
    destroy() {
      flowers = []; petals = []; sparkles = [];
      petalMesh = null; coreMesh = null;
      sparkleField = null; fallField = null;
      layer = null;
    },
  };
}
