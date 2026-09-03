import * as THREE from 'three';
import { toWorld, makePoints, rgbToUnit, stratifiedSpawnPoints, primeGrowingMarks } from '../space3d.js';
import { resizeBloomMarks, sampleBloomMarks, runBloomSpawns, trimMarkBuffer, trimShardBuffer } from '../bloom/bloomPresetUtils.js';
import {
  letterBrightenRgb as brightenRgb,
  letterDisplayColor as displayColor,
  letterVividFromHex as vividPetalRgb,
  petalParticleRgb,
  paletteAccentRgb,
  randomFlowerPetalColor,
  pickMarkSizeMusic as pickMarkSize,
} from '../bloom/bloomColors.js';
import { easeOutBack } from '../ease.js';
import {
  DEPTH,
  NOTE_IDS,
  NOTE_BUILDERS,
  pickNoteSymbol,
} from './musicSymbolGeometries.js';

function pickNote() {
  return pickNoteSymbol();
}

const MUSIC_NOTE_OPACITY = 0.36;
const MUSIC_NOTE_OUTLINE_OPACITY = 0.12;
const MUSIC_PARTICLE_GLOW = 1.2;
const MUSIC_SPARKLE_COUNT = 140;
const MUSIC_FALL_MAX = 1200;
const MUSIC_SPAWN_RATE = 3.0;
const MUSIC_GROWTH_MUL = 1.35;
/** 音符が咲いてからパーティクルが出始めるまでの秒数 */
const MUSIC_PARTICLE_DELAY = 1.05;

/**
 * 楽譜として読めるシルエット表示 + Flower Bloom 出現ロジック
 */
export function createMusicNoteBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let noteSets = {};
  let sparkleField = null;
  let fallField = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const _vel = new THREE.Vector3();
  const MAX = 64;
  const MAX_PER = 10;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 280;
      this.note = pickNote();
      this.maxSize = pickMarkSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = (0.35 + Math.random() * 0.5) * MUSIC_GROWTH_MUL;
      this.baseRot = (Math.random() - 0.5) * 0.35;
      this.tilt = (Math.random() - 0.5) * 0.45;
      this.yaw = (Math.random() - 0.5) * 0.55;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.42 + Math.random() * 0.28;
      this.windAmp = 0.07 + Math.random() * 0.06;
      this.spinX = 0.22 + Math.random() * 0.18;
      this.spinY = 0.28 + Math.random() * 0.22;
      this.spinZ = 0.12 + Math.random() * 0.1;
      this.phaseX = Math.random() * Math.PI * 2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.phaseZ = Math.random() * Math.PI * 2;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.52 + Math.random() * 0.38;
      this.driftZ = (Math.random() - 0.5) * 28;
      this.driftPhase = Math.random() * Math.PI * 2;
      this.glidePhase = Math.random() * Math.PI * 2;
      this.flowAngle = Math.random() * Math.PI * 2;
      this.flowTurn = 0.18 + Math.random() * 0.32;
      this.flutterAmp = 0.72 + Math.random() * 0.55;
      this.smoothRate = 0.9 + Math.random() * 0.75;
      const driftSpeed = 7 + Math.random() * 10;
      this.vx = Math.cos(this.flowAngle) * driftSpeed;
      this.vy = -5 - Math.random() * 7;
      this.vz = (Math.random() - 0.5) * 22;
      this.targetVx = this.vx;
      this.targetVy = this.vy;
      this.targetVz = this.vz;
      this.swayX = 0;
      this.swayY = 0;
      this.swayZ = 0;
      this.color = randomFlowerPetalColor(palette);
      this.rgb = vividPetalRgb(this.color);
      this.innerRgb = brightenRgb(this.rgb);
      this.lifetime = 0;
      this.maxLifetime = 6 + Math.random() * 6;
      this.phase = 'growing';
      this.opacity = 1;
      this.bloomedAt = null;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.flowAngle += this.flowTurn * dt * (0.45 + 0.35 * Math.sin(t * 0.28 + this.driftPhase));

      const glide = (6 + Math.sin(t * 0.32 + this.glidePhase) * 3.5) * this.flutterAmp;
      this.targetVx = Math.cos(this.flowAngle) * glide
        + Math.sin(t * 0.4 + this.phaseX) * 7;
      this.targetVy = Math.sin(this.flowAngle) * glide * 0.3 - 4.5
        + Math.cos(t * 0.3 + this.bobPhase) * 3.5;
      this.targetVz = Math.sin(t * 0.26 + this.windPhase) * glide * 0.42
        + Math.cos(this.flowAngle * 1.2 + this.glidePhase) * 5;

      const smooth = 1 - Math.exp(-this.smoothRate * dt);
      this.vx += (this.targetVx - this.vx) * smooth;
      this.vy += (this.targetVy - this.vy) * smooth;
      this.vz += (this.targetVz - this.vz) * smooth;

      _vel.set(this.vx, this.vy, this.vz);
      const speed = _vel.length();
      if (speed > 28) _vel.multiplyScalar(28 / speed);
      if (speed < 4 && speed > 0.01) _vel.multiplyScalar(4 / speed);
      this.vx = _vel.x;
      this.vy = _vel.y;
      this.vz = _vel.z;

      const a = this.flutterAmp;
      this.swayX = Math.sin(t * 0.58 + this.phaseX) * 22 * a
        + Math.sin(t * 1.12 + this.driftPhase) * 9 * a;
      this.swayY = Math.cos(t * 0.46 + this.bobPhase) * 18 * a
        + Math.sin(t * 0.92 + this.phaseY) * 7 * a;
      this.swayZ = Math.sin(t * 0.38 + this.windPhase) * 16 * a
        + Math.cos(t * 0.74 + this.driftPhase) * 8 * a;

      this.x += this.vx * dt + this.swayX * dt * 0.55;
      this.y += this.vy * dt + this.swayY * dt * 0.55;
      this.z += this.vz * dt + this.swayZ * dt * 0.48;

      this.tumbleX = Math.sin(t * this.spinX + this.phaseX) * 0.2;
      this.tumbleY = Math.sin(t * this.spinY + this.phaseY) * 0.34;
      this.tumbleZ = Math.sin(t * this.spinZ + this.phaseZ) * 0.1;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 28;

      this._softBounds(dt);

      switch (this.phase) {
        case 'growing':
          this.growth = Math.min(1, this.growth + this.growthRate * dt);
          this.size = this.maxSize * easeOutBack(this.growth);
          if (this.growth >= 1) {
            this.phase = 'bloomed';
            this.bloomedAt = this.lifetime;
          }
          break;
        case 'bloomed':
          if (this.bloomedAt == null) this.bloomedAt = this.lifetime;
          if (this.lifetime - this.bloomedAt >= MUSIC_PARTICLE_DELAY) {
            if (Math.random() < dt * 3.5) this._shedDust();
          }
          if (this.lifetime > this.maxLifetime * 0.55) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.28;
          if (Math.random() < dt * 7.5) this._shedShard();
          if (Math.random() < dt * 9.5) this._shedDust();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _softBounds(dt) {
      const margin = 60;
      const steer = 22 * dt;
      if (this.x < margin) {
        this.vx += steer;
        this.flowAngle += dt * 0.35;
      }
      if (this.x > width - margin) {
        this.vx -= steer;
        this.flowAngle -= dt * 0.35;
      }
      if (this.y < margin) this.vy += steer * 0.5;
      if (this.y > height - margin) this.vy -= steer * 0.4;

      const pad = 80;
      if (this.x < -pad) this.x = width + pad * 0.4;
      if (this.x > width + pad) this.x = -pad * 0.4;
      if (this.y < -pad) this.y = height + pad * 0.4;
      if (this.y > height + pad) this.y = -pad * 0.4;
      if (this.z < -260) this.z = 220;
      if (this.z > 260) this.z = -220;
    }

    _shedShard() {
      for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size,
          y: this.y + (Math.random() - 0.5) * this.size,
          z: this.z + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 65,
          vy: -18 - Math.random() * 40,
          vz: (Math.random() - 0.5) * 42,
          size: this.size * 0.12 + Math.random() * 6,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 6,
          rgb: petalParticleRgb(this.rgb, 1.42),
          opacity: 1,
          glow: (1.78 + Math.random() * 0.4) * MUSIC_PARTICLE_GLOW,
          kind: 'shard',
        });
      }
    }

    _shedDust() {
      for (let i = 0; i < 5 + Math.floor(Math.random() * 4); i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 0.5,
          y: this.y + (Math.random() - 0.5) * this.size * 0.5,
          z: this.z + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 85,
          vy: (Math.random() - 0.5) * 85 - 8,
          vz: (Math.random() - 0.5) * 55,
          size: 2 + Math.random() * 5,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 8,
          rgb: petalParticleRgb(this.innerRgb, 1.48),
          opacity: 1,
          glow: (1.88 + Math.random() * 0.4) * MUSIC_PARTICLE_GLOW,
          kind: 'dust',
        });
      }
    }
  }

  function placeMark(mark, scaleMul = 1) {
    const wind = Math.sin(time * mark.windSpeed + mark.windPhase);
    const wind2 = Math.sin(time * mark.windSpeed * 1.37 + mark.windPhase * 1.2);
    const pos = toWorld(
      mark.x + mark.swayX * 0.08,
      mark.y + mark.swayY * 0.08,
      mark.z + mark.bob + wind2 * mark.driftZ + mark.swayZ * 0.1,
      width,
      height,
    );
    dummy.position.copy(pos);
    dummy.position.x += wind * mark.windAmp * mark.size * 0.32;
    dummy.position.y += Math.sin(time * mark.bobSpeed * 0.65 + mark.bobPhase) * mark.size * 0.06;
    dummy.position.z += wind2 * mark.windAmp * mark.size * 0.18;
    const bankY = Math.atan2(mark.vx + mark.swayX * 0.3, mark.vy + mark.swayY * 0.3 + 0.001) * 0.14;
    dummy.rotation.set(
      mark.tilt + mark.tumbleX + wind * mark.windAmp * 0.45,
      mark.yaw + mark.tumbleY + wind2 * 0.12 + bankY,
      mark.baseRot + mark.tumbleZ + wind2 * mark.windAmp * 0.28,
    );
    const s = mark.size * scaleMul;
    // Z を少し厚くして押し出しの立体感を強調
    dummy.scale.set(s, s, s * 1.55);
    dummy.updateMatrix();
    return pos;
  }

  function hideInstance(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  function syncMeshes() {
    if (!NOTE_IDS.every((id) => noteSets[id])) return;

    const buckets = Object.fromEntries(NOTE_IDS.map((id) => [id, []]));
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < shown; i++) {
      const m = marks[i];
      if (m && m.size >= 0.5) buckets[m.note].push(m);
    }

    for (const id of NOTE_IDS) {
      const set = noteSets[id];
      const list = buckets[id];
      for (let i = 0; i < MAX_PER; i++) {
        const mark = list[i];
        if (!mark) {
          hideInstance(set.mesh, i);
          hideInstance(set.outline, i);
          continue;
        }
        placeMark(mark, 1);
        set.mesh.setMatrixAt(i, dummy.matrix);
        const c = displayColor(mark.rgb, 0.92 + mark.opacity * 0.32);
        set.mesh.setColorAt(i, _color.setRGB(c.r, c.g, c.b));
        placeMark(mark, 1.03);
        set.outline.setMatrixAt(i, dummy.matrix);
        const outline = displayColor(mark.rgb, 0.38);
        set.outline.setColorAt(i, _color.setRGB(outline.r * 0.55, outline.g * 0.5, outline.b * 0.75));
      }
      set.mesh.instanceMatrix.needsUpdate = true;
      set.outline.instanceMatrix.needsUpdate = true;
      if (set.mesh.instanceColor) set.mesh.instanceColor.needsUpdate = true;
      if (set.outline.instanceColor) set.outline.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.26 + 0.28 * Math.abs(Math.sin(time * 2.8 + s.phase));
        const c = displayColor(s.rgb, pulse * 1.28 * MUSIC_PARTICLE_GLOW);
        sparkleField.colors[i * 3] = Math.min(1, c.r);
        sparkleField.colors[i * 3 + 1] = Math.min(1, c.g);
        sparkleField.colors[i * 3 + 2] = Math.min(1, c.b);
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, MUSIC_FALL_MAX);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r, g, b] = rgbToUnit(p.rgb);
        const glow = (p.glow || 1.68) * (0.62 + p.opacity * 0.66) * MUSIC_PARTICLE_GLOW;
        const twinkle = p.kind === 'dust'
          ? 0.96 + 0.14 * Math.sin(time * 8 + p.rot * 3)
          : 1.08;
        fallField.colors[i * 3] = Math.min(1, r * glow * twinkle);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow * twinkle);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow * twinkle);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  const matOpts = {
    color: 0xffffff,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.NormalBlending,
    toneMapped: false,
  };

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params.palette || 'rainbow';
      marks = [];
      shards = [];
      sparkles = [];
      time = 0;
      layer = group;
      noteSets = {};

      for (const id of NOTE_IDS) {
        let geo;
        try {
          geo = NOTE_BUILDERS[id]();
        } catch (err) {
          console.error('[musicNoteBloom] geometry failed:', id, err);
          geo = new THREE.BoxGeometry(0.2, 0.2, DEPTH);
          geo.center();
        }
        const mesh = new THREE.InstancedMesh(
          geo,
          new THREE.MeshBasicMaterial({
            ...matOpts,
            opacity: MUSIC_NOTE_OPACITY,
            blending: THREE.AdditiveBlending,
          }),
          MAX_PER,
        );
        mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_PER * 3), 3);
        mesh.frustumCulled = false;
        layer.add(mesh);
        const outline = new THREE.InstancedMesh(
          geo,
          new THREE.MeshBasicMaterial({
            ...matOpts,
            side: THREE.BackSide,
            opacity: MUSIC_NOTE_OUTLINE_OPACITY,
            depthWrite: false,
          }),
          MAX_PER,
        );
        outline.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_PER * 3), 3);
        outline.frustumCulled = false;
        layer.add(outline);
        noteSets[id] = { mesh, outline, geo };
      }

      sparkleField = makePoints(MUSIC_SPARKLE_COUNT, 5);
      fallField = makePoints(MUSIC_FALL_MAX, 14);
      sparkleField.mat.opacity = 0.76;
      fallField.mat.opacity = 0.7;
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(28, w, h)) {
        spawn(x, y);
      }
      primeGrowingMarks(marks);
      syncMeshes();
      for (let i = 0; i < MUSIC_SPARKLE_COUNT; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.12 + Math.random() * 0.32),
          phase: Math.random() * Math.PI * 2,
          rgb: paletteAccentRgb(currentPalette),
        });
      }
    },

    resize(w, h) {
      ({ width, height } = resizeBloomMarks(marks, width, height, w, h));
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette || currentPalette;
      marks = marks.filter((m) => m.update(dt, time));

      runBloomSpawns({
        dt,
        pointer,
        audioData,
        params,
        spawn: (p) => spawn(p.x + (Math.random() - 0.5) * 50, p.y + (Math.random() - 0.5) * 50),
        randomSpawn: () => spawn(Math.random() * width, Math.random() * height),
        bassSpawn: () => spawn(Math.random() * width, Math.random() * height),
        randomRate: MUSIC_SPAWN_RATE,
        pointerMax: 3,
      });

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.opacity -= dt * (p.kind === 'dust' ? 0.14 : 0.1);
        return p.opacity > 0.02 && p.y < height + 80;
      });
      trimShardBuffer(shards, MUSIC_FALL_MAX);

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 78 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(28, Math.floor((params.particleCount || 1030) / 3.2)));
      trimMarkBuffer(marks, maxMarks);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 6; i++) {
        spawn(x + (Math.random() - 0.5) * 90, y + (Math.random() - 0.5) * 90);
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },

    samplePoints(count, vw = width, vh = height) {
      return sampleBloomMarks(marks, count, vw, vh, width, height);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      for (const id of NOTE_IDS) noteSets[id]?.geo?.dispose();
      noteSets = {};
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
