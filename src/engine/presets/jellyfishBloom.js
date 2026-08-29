import * as THREE from 'three';
import { toWorld, makePoints, rgbToUnit, stratifiedSpawnPoints, primeGrowingMarks, sampleMarksWorld, spreadModelCloudToWorld } from '../space3d.js';
import {
  flowerDisplayColor as displayColor,
  flowerVividPetalRgb as vividPetalRgb,
  petalParticleRgb,
  pickMarkSizeJelly as pickMarkSize,
} from '../bloom/bloomColors.js';
import {
  cyberHexToRgb,
  cyberShowColor,
  moonJellyRgbFromNeon,
  pickJellyAccentHex,
  randomJellyCyberHex,
  randomJellyParticleHex,
} from '../bloom/cyberNeon.js';
import { prepareGeo, mergeParts } from '../geometryUtils.js';

const JELLY_CYBER_GREEN = { greenCap: 0.22 };

function jellyCyberHexToRgb(hex) {
  return cyberHexToRgb(hex, JELLY_CYBER_GREEN);
}

function jellyCyberShowColor(rgb, boost = 1.4) {
  return cyberShowColor(rgb, boost, JELLY_CYBER_GREEN);
}

const JELLY_SPARKLE_COUNT = 190;
const JELLY_FALL_MAX = 1250;
const JELLY_PARTICLE_SIZE_SPARKLE = 5.5;
const JELLY_PARTICLE_SIZE_FALL = 12;

/** 半球の傘（面・ほぼ透明用） */
export function buildMoonBellGeometry() {
  const bell = new THREE.SphereGeometry(0.42, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.58);
  bell.scale(1.18, 0.88, 1.18);
  bell.translate(0, 0.18, 0);
  return prepareGeo(bell);
}

/** 傘縁のネオンリム（明るめ） */
export function buildMoonRimGeometry() {
  const rim = new THREE.TorusGeometry(0.47, 0.011, 6, 48);
  rim.rotateX(Math.PI / 2);
  rim.translate(0, 0.01, 0);
  return prepareGeo(rim);
}

/** 傘内部のコンステレーション網（点＋放射線） */
export function buildMoonNetGeometry() {
  const parts = [];
  // 放射リブ
  for (let i = 0; i < 12; i++) {
    const ang = (i / 12) * Math.PI * 2;
    const rib = new THREE.CylinderGeometry(0.004, 0.004, 0.38, 4);
    rib.rotateZ(Math.PI / 2);
    rib.rotateY(ang);
    rib.translate(Math.cos(ang) * 0.19, 0.28, Math.sin(ang) * 0.19);
    parts.push(rib);
  }
  // 点ネットワーク（半球面上）
  for (let i = 0; i < 48; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 0.5;
    const r = 0.38;
    const x = Math.sin(v) * Math.cos(u) * r * 1.18;
    const y = 0.18 + Math.cos(v) * r * 0.88;
    const z = Math.sin(v) * Math.sin(u) * r * 1.18;
    const dot = new THREE.SphereGeometry(0.012 + Math.random() * 0.01, 6, 5);
    dot.translate(x, y, z);
    parts.push(dot);
  }
  // 細い緯線リング
  for (let k = 0; k < 3; k++) {
    const yy = 0.12 + k * 0.12;
    const rr = 0.28 + k * 0.08;
    const ring = new THREE.TorusGeometry(rr, 0.0035, 4, 32);
    ring.rotateX(Math.PI / 2);
    ring.translate(0, yy, 0);
    parts.push(ring);
  }
  return mergeParts(parts);
}

/** 傘中央下の暖色コア */
export function buildMoonCoreGeometry() {
  const core = new THREE.SphereGeometry(0.09, 12, 10);
  core.scale(1.35, 0.7, 1.35);
  core.translate(0, 0.08, 0);
  return prepareGeo(core);
}

/** 4つの蹄鉄状生殖腺（クローバー） */
export function buildMoonGonadGeometry() {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const g = new THREE.TorusGeometry(0.09, 0.028, 8, 20, Math.PI * 1.35);
    g.rotateX(Math.PI * 0.55);
    g.rotateY(ang);
    g.translate(Math.cos(ang) * 0.12, 0.22, Math.sin(ang) * 0.12);
    parts.push(g);
  }
  return mergeParts(parts);
}

/** 傘縁の細い半透明ネオン触手（長い糸＋先端点） */
export function buildMoonFringeGeometry() {
  const parts = [];
  const n = 48;
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2;
    const len = 0.32 + (i % 4) * 0.08;
    const tent = new THREE.CapsuleGeometry(0.0032, len, 2, 4);
    const x = Math.cos(ang) * 0.45;
    const z = Math.sin(ang) * 0.45;
    tent.translate(x, -len * 0.42, z);
    parts.push(tent);
    const tip = new THREE.SphereGeometry(0.01, 6, 5);
    tip.translate(x, -len * 0.85, z);
    parts.push(tip);
  }
  return mergeParts(parts);
}

/** 半透明レース状の口腕（リング縁＋細い芯・サイバーネオン） */
export function buildMoonOralArmGeometry() {
  const parts = [];
  const segs = 16;
  for (let s = 0; s < segs; s++) {
    const t = (s + 0.5) / segs;
    const sway = Math.sin(t * Math.PI * 1.6) * 0.09;
    const y = -t * 1.15;
    const rad = 0.048 * (1 - t * 0.55);
    // ひだの縁リング（透明感のあるネオン輪郭）
    const ring = new THREE.TorusGeometry(rad, 0.0055, 5, 14);
    ring.rotateX(Math.PI / 2);
    ring.translate(sway, y, 0);
    parts.push(ring);
    // 細い芯糸
    const thread = new THREE.CapsuleGeometry(0.0035, 0.06, 2, 4);
    thread.translate(sway, y, 0);
    parts.push(thread);
    // 発光ノード
    if (s % 2 === 0) {
      const node = new THREE.SphereGeometry(0.011, 6, 5);
      node.translate(sway + rad * 0.7, y, 0);
      parts.push(node);
    }
  }
  return mergeParts(parts);
}

/**
 * ミズクラゲ群: 半透明・傘の脈動・触手のゆらぎ・ゆっくり上昇
 */
export function createJellyfishBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let bellMesh = null;
  let rimMesh = null;
  let netMesh = null;
  let coreMesh = null;
  let gonadMesh = null;
  let fringeMesh = null;
  let armMeshes = [];
  let sparkleField = null;
  let fallField = null;
  let bellGeo = null;
  let rimGeo = null;
  let netGeo = null;
  let coreGeo = null;
  let gonadGeo = null;
  let fringeGeo = null;
  let armGeo = null;
  const root = new THREE.Object3D();
  const bellHold = new THREE.Object3D();
  const fringeHold = new THREE.Object3D();
  const armHolds = [0, 1, 2, 3].map(() => new THREE.Object3D());
  root.add(bellHold, fringeHold, ...armHolds);
  fringeHold.position.y = 0.02;
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2;
    armHolds[i].position.set(Math.cos(ang) * 0.06, 0.05, Math.sin(ang) * 0.06);
    armHolds[i].rotation.y = ang;
  }
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 72;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 200;
      this.maxSize = pickMarkSize() * 0.95;
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.28 + Math.random() * 0.35;
      this.baseRot = Math.random() * Math.PI * 2;
      this.tilt = (Math.random() - 0.5) * 0.2;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.45 + Math.random() * 0.35;
      this.windAmp = 0.06 + Math.random() * 0.05;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.55 + Math.random() * 0.35;
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 1.15 + Math.random() * 0.55;
      this.spinY = 0.08 + Math.random() * 0.12;
      this.phaseY = Math.random() * Math.PI * 2;
      this.riseSpeed = 22 + Math.random() * 18;
      this.neonHex = randomJellyCyberHex();
      this.rgb = jellyCyberHexToRgb(this.neonHex);
      this.accentRgb = jellyCyberHexToRgb(pickJellyAccentHex(this.neonHex));
      this.fillRgb = moonJellyRgbFromNeon(this.rgb);
      this.innerRgb = {
        r: Math.min(255, this.rgb.r + 40),
        g: Math.min(255, this.rgb.g + 20),
        b: Math.min(255, this.rgb.b + 50),
      };
      this.lifetime = 0;
      this.maxLifetime = 20 + Math.random() * 25;
      this.phase = 'growing';
      this.opacity = 1;
      this.pulse = 0;
      this.sway = 0;
      this.bob = 0;
      this.spin = 0;
      this._deathBursted = false;
      this._finalBursted = false;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.pulse = Math.sin(t * this.pulseSpeed + this.pulsePhase);
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 10;
      this.sway = Math.sin(t * this.windSpeed + this.windPhase) * this.windAmp;
      this.spin = Math.sin(t * this.spinY + this.phaseY) * 0.2;

      const lift = this.riseSpeed * (0.7 + Math.max(0, this.pulse) * 0.45);
      this.y -= lift * dt;
      this.x += Math.sin(t * 0.55 + this.windPhase) * 10 * dt;
      this.z += Math.cos(t * 0.4 + this.bobPhase) * 8 * dt;

      if (this.y < -120) {
        this.y = height + 60 + Math.random() * 40;
        this.x = Math.random() * width;
        this.z = (Math.random() - 0.5) * 200;
      }

      switch (this.phase) {
        case 'growing': {
          this.growth = Math.min(1, this.growth + this.growthRate * dt);
          const c1 = 1.70158;
          const c3 = c1 + 1;
          const u = this.growth;
          this.size = this.maxSize * (1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2));
          if (this.growth >= 1) this.phase = 'bloomed';
          break;
        }
        case 'bloomed':
          if (Math.random() < dt * 11.5) this._neonSpark();
          if (this.lifetime > this.maxLifetime * 0.72) {
            if (this.phase === 'bloomed') {
              this.phase = 'wilting';
              for (let i = 0; i < 28; i++) this._neonSpark();
            }
          }
          break;
        case 'wilting':
          this.opacity -= dt * 0.18;
          if (Math.random() < dt * 20) this._neonSpark();
          if (Math.random() < dt * 18) this._shedDust();
          if (!this._deathBursted && this.opacity < 0.42) {
            this._deathBursted = true;
            for (let i = 0; i < 26; i++) this._neonSpark();
          }
          if (!this._finalBursted && this.lifetime >= this.maxLifetime * 0.96) {
            this._finalBursted = true;
            for (let i = 0; i < 18; i++) this._neonSpark();
          }
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    /** サイバーネオンシアンブルー寄りの発光パーティクル（本体色を少し混ぜる） */
    _neonSpark() {
      const particle = jellyCyberHexToRgb(randomJellyParticleHex());
      const body = Math.random() < 0.25 ? this.accentRgb : this.rgb;
      // 粒子はシアンブルー主体、本体色は2〜3割だけ反映
      const rgb = {
        r: Math.round(particle.r * 0.75 + body.r * 0.25),
        g: Math.min(
          Math.round(particle.g * 0.7 + body.g * 0.2),
          Math.round(Math.max(particle.r, particle.b, body.b) * 0.2),
        ),
        b: Math.min(255, Math.round(particle.b * 0.75 + body.b * 0.18 + 10)),
      };
      const side = Math.random() < 0.5 ? -1 : 1;
      shards.push({
        x: this.x + side * this.size * (0.15 + Math.random() * 0.55),
        y: this.y + this.size * (0.05 + Math.random() * 0.7),
        z: this.z + (Math.random() - 0.5) * 50,
        vx: side * (8 + Math.random() * 28) + (Math.random() - 0.5) * 12,
        vy: -12 - Math.random() * 28,
        vz: (Math.random() - 0.5) * 24,
        size: 2.5 + Math.random() * 5.5,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 5,
        rgb,
        opacity: 1,
        glow: 2.05 + Math.random() * 1.05,
        kind: 'neon',
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    _shedDust() {
      for (let i = 0; i < 32; i++) {
        this._neonSpark();
      }
    }
  }

  function hide(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  function poseRoot(mark) {
    const pos = toWorld(mark.x, mark.y, mark.z + mark.bob, width, height);
    root.position.copy(pos);
    root.position.x += mark.sway * mark.size * 0.4;
    root.rotation.set(
      mark.tilt + mark.sway * 0.7 + mark.pulse * 0.04,
      mark.baseRot + mark.spin,
      mark.sway * 0.55,
    );
    const s = mark.size;
    const bx = 1.05 - mark.pulse * 0.06;
    const by = 0.92 + mark.pulse * 0.1;
    root.scale.set(s * bx, s * by, s * bx * 1.15);

    const fringeSway = Math.sin(time * 1.4 + mark.windPhase) * 0.12;
    fringeHold.rotation.set(fringeSway * 0.4, 0, fringeSway);

    for (let i = 0; i < 4; i++) {
      const lag = mark.pulsePhase + i * 1.2;
      const wave = Math.sin(time * 1.15 + lag) * 0.42;
      const side = Math.cos(time * 0.9 + lag * 0.8) * 0.28;
      const twist = Math.sin(time * 0.75 + lag) * 0.2;
      armHolds[i].rotation.x = 0.2 + wave;
      armHolds[i].rotation.z = side;
      armHolds[i].rotation.y = (i / 4) * Math.PI * 2 + twist;
      armHolds[i].scale.set(1, 1.05 + Math.abs(wave) * 0.18, 1);
    }
    root.updateMatrixWorld(true);
  }

  function syncMeshes() {
    if (!bellMesh || !rimMesh || !netMesh || !coreMesh || !gonadMesh || !fringeMesh || armMeshes.length < 4) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        hide(bellMesh, i);
        hide(rimMesh, i);
        hide(netMesh, i);
        hide(coreMesh, i);
        hide(gonadMesh, i);
        hide(fringeMesh, i);
        for (const m of armMeshes) hide(m, i);
        continue;
      }
      poseRoot(mark);
      // 傘: 半透明ネオン青 / 縁・網・触手: 強発光 / コア: 暖白
      const fill = jellyCyberShowColor(mark.fillRgb, 0.48 + mark.opacity * 0.15);
      const neon = jellyCyberShowColor(mark.rgb, 0.92 + mark.opacity * 0.18);
      const neonPulse = jellyCyberShowColor(mark.innerRgb, 1.0 + 0.18 * Math.abs(mark.pulse));
      const coreWarm = {
        r: Math.min(1, 0.34 + 0.07 * Math.abs(mark.pulse)),
        g: Math.min(1, 0.46 + 0.04 * Math.abs(mark.pulse)),
        b: Math.min(1, 0.64 + 0.08 * Math.abs(mark.pulse)),
      };

      dummy.matrix.copy(bellHold.matrixWorld);
      bellMesh.setMatrixAt(i, dummy.matrix);
      bellMesh.setColorAt(i, _color.setRGB(fill.r, fill.g, fill.b));

      dummy.matrix.copy(root.matrixWorld);
      rimMesh.setMatrixAt(i, dummy.matrix);
      rimMesh.setColorAt(i, _color.setRGB(
        Math.min(1, neonPulse.r * 0.86),
        Math.min(1, neonPulse.g * 0.88),
        Math.min(1, neonPulse.b * 0.84),
      ));

      dummy.matrix.copy(root.matrixWorld);
      netMesh.setMatrixAt(i, dummy.matrix);
      netMesh.setColorAt(i, _color.setRGB(neonPulse.r, neonPulse.g, neonPulse.b));

      dummy.matrix.copy(root.matrixWorld);
      coreMesh.setMatrixAt(i, dummy.matrix);
      coreMesh.setColorAt(i, _color.setRGB(coreWarm.r, coreWarm.g, coreWarm.b));

      dummy.matrix.copy(root.matrixWorld);
      gonadMesh.setMatrixAt(i, dummy.matrix);
      gonadMesh.setColorAt(i, _color.setRGB(neon.r, neon.g, neon.b));

      const accent = jellyCyberShowColor(mark.accentRgb, 0.82 + 0.15 * Math.abs(mark.pulse));
      dummy.matrix.copy(fringeHold.matrixWorld);
      fringeMesh.setMatrixAt(i, dummy.matrix);
      // 細い足は半透明ネオン（先端寄りにアクセント）
      fringeMesh.setColorAt(i, _color.setRGB(
        neonPulse.r * 0.68 + accent.r * 0.2,
        neonPulse.g * 0.72 + accent.g * 0.16,
        neonPulse.b * 0.68 + accent.b * 0.2,
      ));

      for (let a = 0; a < 4; a++) {
        dummy.matrix.copy(armHolds[a].matrixWorld);
        armMeshes[a].setMatrixAt(i, dummy.matrix);
        const mix = a % 2 === 0 ? neon : accent;
        armMeshes[a].setColorAt(i, _color.setRGB(mix.r * 0.82, mix.g * 0.78, mix.b * 0.86));
      }
    }

    const all = [bellMesh, rimMesh, netMesh, coreMesh, gonadMesh, fringeMesh, ...armMeshes];
    for (const m of all) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.82 + 0.65 * Math.abs(Math.sin(time * 2.6 + s.phase));
        const c = jellyCyberShowColor(s.rgb, pulse * 1.65);
        sparkleField.colors[i * 3] = c.r;
        sparkleField.colors[i * 3 + 1] = c.g;
        sparkleField.colors[i * 3 + 2] = c.b;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, JELLY_FALL_MAX);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const twinkle = 0.78 + 0.42 * Math.abs(Math.sin(time * 6 + (p.twinkle || 0)));
        const boost = (p.glow || 2.1) * (0.58 + p.opacity * 0.52) * twinkle;
        const c = jellyCyberShowColor(p.rgb, boost * 1.15);
        fallField.colors[i * 3] = c.r;
        fallField.colors[i * 3 + 1] = c.g;
        fallField.colors[i * 3 + 2] = c.b;
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function trimMarks(max) {
    while (marks.length > max) {
      const dying = marks.findIndex((m) => m.phase === 'wilting' && m.opacity < 0.35);
      if (dying >= 0) {
        marks.splice(dying, 1);
        continue;
      }
      const expired = marks.findIndex((m) => m.lifetime >= m.maxLifetime * 0.92);
      if (expired >= 0) {
        marks.splice(expired, 1);
        continue;
      }
      marks.splice(0, 1);
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  function makeMat(opacity, additive = false) {
    return new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      toneMapped: false,
    });
  }

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

      bellGeo = buildMoonBellGeometry();
      rimGeo = buildMoonRimGeometry();
      netGeo = buildMoonNetGeometry();
      coreGeo = buildMoonCoreGeometry();
      gonadGeo = buildMoonGonadGeometry();
      fringeGeo = buildMoonFringeGeometry();
      armGeo = buildMoonOralArmGeometry();

      // 傘: 見える半透明ネオン青 / 縁・網・触手: 加算発光 / コア: 暖白
      bellMesh = new THREE.InstancedMesh(bellGeo, makeMat(0.26, true), MAX);
      rimMesh = new THREE.InstancedMesh(rimGeo, makeMat(0.58, true), MAX);
      netMesh = new THREE.InstancedMesh(netGeo, makeMat(0.52, true), MAX);
      coreMesh = new THREE.InstancedMesh(coreGeo, makeMat(0.54, true), MAX);
      gonadMesh = new THREE.InstancedMesh(gonadGeo, makeMat(0.42, true), MAX);
      fringeMesh = new THREE.InstancedMesh(fringeGeo, makeMat(0.22, true), MAX);
      armMeshes = [0, 1, 2, 3].map(() => new THREE.InstancedMesh(armGeo, makeMat(0.2, true), MAX));

      for (const m of [bellMesh, rimMesh, netMesh, coreMesh, gonadMesh, fringeMesh, ...armMeshes]) {
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
        m.frustumCulled = false;
        layer.add(m);
      }

      sparkleField = makePoints(JELLY_SPARKLE_COUNT, JELLY_PARTICLE_SIZE_SPARKLE);
      fallField = makePoints(JELLY_FALL_MAX, JELLY_PARTICLE_SIZE_FALL);
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = 0.78;
      fallField.mat.opacity = 0.72;
      sparkleField.mat.toneMapped = false;
      fallField.mat.toneMapped = false;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(20, w, h, 0.06, [h * 0.2, h * 0.95])) {
        spawn(x, y);
      }
      primeGrowingMarks(marks);
      syncMeshes();
      for (let i = 0; i < JELLY_SPARKLE_COUNT; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.05 + Math.random() * 0.16),
          phase: Math.random() * Math.PI * 2,
          rgb: jellyCyberHexToRgb(randomJellyParticleHex()),
        });
      }
    },

    resize(w, h) {
      width = w;
      height = h;
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette || currentPalette;
      marks = marks.filter((m) => m.update(dt, time));

      if (pointer?.velocity > 3) {
        const n = Math.min(2, Math.floor(pointer.velocity / 16) + 1);
        for (let i = 0; i < n; i++) {
          spawn(
            pointer.x + (Math.random() - 0.5) * 50,
            pointer.y + (Math.random() - 0.5) * 40,
          );
        }
      }

      if (Math.random() < dt * 1.2 * (params.speed || 1)) {
        spawn(Math.random() * width, height + 30 + Math.random() * 60);
      }

      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 3);
        for (let i = 0; i < n; i++) {
          spawn(Math.random() * width, height + 20);
        }
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vx *= 0.985;
        p.vy += (p.kind === 'neon' ? 6 : 10) * dt;
        p.opacity -= dt * (p.kind === 'neon' ? 0.05 : 0.085);
        return p.opacity > 0.02 && p.y < height + 80 && p.y > -100;
      });
      if (shards.length > JELLY_FALL_MAX) shards.splice(0, shards.length - JELLY_FALL_MAX);

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 50 * dt;
        s.x += Math.sin(time * 1.2 + s.phase) * 0.2;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
          // 画面上のクラゲ色に合わせて再着色
          // 再出現時もシアンブルー寄り（たまに本体色）
          if (marks.length && Math.random() < 0.25) {
            const m = marks[Math.floor(Math.random() * marks.length)];
            s.rgb = { ...m.rgb };
          } else {
            s.rgb = jellyCyberHexToRgb(randomJellyParticleHex());
          }
        }
      });

      const maxMarks = Math.min(MAX, Math.max(20, Math.floor((params.particleCount || 1030) / 4)));
      trimMarks(maxMarks);
      if (shards.length > 1100) shards.splice(0, shards.length - 1100);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 5; i++) {
        spawn(x + (Math.random() - 0.5) * 80, y + (Math.random() - 0.5) * 60);
      }
    },
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },
    setPalette(name) {
      currentPalette = name;
    },

    samplePoints(count) {
      return sampleMarksWorld(marks, count, width, height, (n, w, h) => {
        const out = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          const u = Math.random() * Math.PI * 2;
          const v = Math.random() * Math.PI * 0.55;
          out[i * 3] = Math.sin(v) * Math.cos(u) * 48;
          out[i * 3 + 1] = 10 + Math.cos(v) * 36;
          out[i * 3 + 2] = Math.sin(v) * Math.sin(u) * 48;
        }
        return spreadModelCloudToWorld(out, n, w, h, 1);
      });
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      bellGeo?.dispose();
      rimGeo?.dispose();
      netGeo?.dispose();
      coreGeo?.dispose();
      gonadGeo?.dispose();
      fringeGeo?.dispose();
      armGeo?.dispose();
      bellMesh = null;
      rimMesh = null;
      netMesh = null;
      coreMesh = null;
      gonadMesh = null;
      fringeMesh = null;
      armMeshes = [];
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
