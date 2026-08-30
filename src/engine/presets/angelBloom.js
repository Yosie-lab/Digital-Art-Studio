import * as THREE from 'three';
import { toWorld, makePoints, rgbToUnit, stratifiedSpawnPoints, primeGrowingMarks, sampleMarksWorld, spreadModelCloudToWorld, spreadScreenCloud, remapScreenMarks, safeViewport, viewportReady, marksNeedRemap, marksOutOfViewport } from '../space3d.js';
import { sampleAngelCloud } from '../morph/sampleShapes.js';
import { pickMarkSizeDefault as pickMarkSize } from '../bloom/bloomColors.js';
import {
  ANGEL_CYBER_NEON,
  angelColorAt,
  angelFillColor,
  angelParticleFill,
  angelRimColor,
  angelShardRgb,
  cyberHexToRgb,
  randomAngelCyberHex,
} from '../bloom/cyberNeon.js';
import {
  buildAngelBodyGeometry,
  buildAngelEyesGeometry,
  buildAngelMouthGeometry,
  buildAngelFaceHiGeometry,
  buildAngelBlushGeometry,
  buildAngelWingGeometry,
  buildAngelHaloGeometry,
} from '../geometries/angel.js';

const ANGEL_PARTICLE_SIZE_SPARKLE = 6;
const ANGEL_PARTICLE_SIZE_SPARKLE_LARGE = 10.5;
const ANGEL_PARTICLE_SIZE_FALL = 14;
const ANGEL_PARTICLE_SIZE_FALL_LARGE = 21;
const ANGEL_SPARKLE_COUNT = 180;
const ANGEL_SPARKLE_LARGE_COUNT = 48;
const ANGEL_FALL_MAX = 1100;
const ANGEL_FALL_LARGE_MAX = 280;
const ANGEL_LARGE_SHARD_CHANCE = 0.28;
const ANGEL_PARTICLE_GLOW = 1.78;
const ANGEL_BODY_OPACITY = 0.14;
const ANGEL_RIM_OPACITY = 0.42;
const ANGEL_WING_OPACITY = 0.12;
const ANGEL_WING_RIM_OPACITY = 0.36;
const ANGEL_HALO_OPACITY = 0.17;
const ANGEL_EYE_OPACITY = 0.58;
const ANGEL_MOUTH_OPACITY = 0.52;
const ANGEL_SPARKLE_OPACITY = 0.74;
const ANGEL_FALL_OPACITY = 0.68;
const ANGEL_FILL_BOOST = 1.24;
const ANGEL_WING_FILL_BOOST = 1.2;
const ANGEL_HALO_FILL_BOOST = 1.14;
const ANGEL_RIM_BOOST = 1.4;

function angelNeonRim(hex) {
  return angelRimColor(hex, ANGEL_RIM_BOOST);
}

/**
 * 天使専用: ゼリー透明 + 高彩度ネオン（ピンク / 金 / 白金 / ラベンダー / シアン / エレクトリックブルー）
 */
export function createAngelBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let sparklesLarge = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let bodyMesh = null;
  let bodyOutline = null;
  let angelEyeMesh = null;
  let angelMouthMesh = null;
  let faceHiMesh = null;
  let blushMesh = null;
  let wingLMesh = null;
  let wingRMesh = null;
  let wingOutlineLMesh = null;
  let wingOutlineRMesh = null;
  let haloMesh = null;
  let sparkleField = null;
  let sparkleFieldLarge = null;
  let fallField = null;
  let fallFieldLarge = null;
  let bodyGeo = null;
  let angelEyeGeo = null;
  let angelMouthGeo = null;
  let faceHiGeo = null;
  let blushGeo = null;
  let wingGeo = null;
  let haloGeo = null;
  const root = new THREE.Object3D();
  const wingHoldL = new THREE.Object3D();
  const wingHoldR = new THREE.Object3D();
  const haloHold = new THREE.Object3D();
  root.add(wingHoldL, wingHoldR, haloHold);
  wingHoldL.position.set(-0.04, 0.1, -0.1);
  wingHoldR.position.set(0.04, 0.1, -0.1);
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 48;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 280;
      this.maxSize = pickMarkSize() * 0.92;
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.32 + Math.random() * 0.4;
      this.baseRot = (Math.random() - 0.5) * 0.35;
      this.tilt = (Math.random() - 0.5) * 0.4;
      this.yaw = (Math.random() - 0.5) * 0.5;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.7 + Math.random() * 0.5;
      this.windAmp = 0.06 + Math.random() * 0.05;
      this.flapPhase = Math.random() * Math.PI * 2;
      this.flapSpeed = 4.2 + Math.random() * 2.2;
      this.riseSpeed = 55 + Math.random() * 45;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 1.1 + Math.random() * 0.7;
      this.spinY = 0.25 + Math.random() * 0.2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.hueIndex = Math.floor(Math.random() * ANGEL_CYBER_NEON.length);
      this.color = ANGEL_CYBER_NEON[this.hueIndex];
      this.rgb = cyberHexToRgb(this.color);
      this.innerRgb = { ...this.rgb };
      this.lifetime = 0;
      this.maxLifetime = 7 + Math.random() * 5;
      this.phase = 'growing';
      this.opacity = 1;
      this.flap = 0;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.flap = Math.sin(t * this.flapSpeed + this.flapPhase) * 0.55;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 18;
      this.sway = Math.sin(t * this.windSpeed + this.windPhase) * this.windAmp;
      this.spin = Math.sin(t * this.spinY + this.phaseY) * 0.35;

      const lift = this.riseSpeed * (0.75 + Math.abs(this.flap) * 0.55);
      this.y -= lift * dt;
      this.x += Math.sin(t * 0.9 + this.flapPhase) * 18 * dt;
      this.z += Math.cos(t * 0.7 + this.bobPhase) * 12 * dt;

      if (this.y < -100) {
        this.y = height + 80;
        this.x = Math.random() * width;
        this.z = (Math.random() - 0.5) * 280;
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
          if (Math.random() < dt * 9.5) this._sparkTrail();
          if (this.lifetime > this.maxLifetime * 0.65) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.22;
          if (Math.random() < dt * 9) this._shed();
          if (Math.random() < dt * 7.5) this._sparkTrail();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _sparkTrail() {
      const bursts = 1 + (Math.random() < 0.62 ? 1 : 0);
      for (let b = 0; b < bursts; b++) {
        const side = Math.random() < 0.5 ? -1 : 1;
        shards.push({
          x: this.x + side * this.size * (0.35 + Math.random() * 0.55),
          y: this.y + this.size * (0.2 + Math.random() * 0.55),
          z: this.z - 30 - Math.random() * 40,
          vx: side * (15 + Math.random() * 25) + (Math.random() - 0.5) * 20,
          vy: 10 + Math.random() * 30,
          vz: (Math.random() - 0.5) * 25,
          rgb: angelShardRgb(this.color),
          opacity: 1,
          glow: (2.12 + Math.random() * 0.88) * ANGEL_PARTICLE_GLOW,
          kind: 'dust',
          large: Math.random() < ANGEL_LARGE_SHARD_CHANCE,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }

    _shed() {
      for (let i = 0; i < 7; i++) {
        const side = Math.random() < 0.5 ? -1 : 1;
        const hex = randomAngelCyberHex();
        shards.push({
          x: this.x + side * this.size * (0.2 + Math.random() * 0.6),
          y: this.y + this.size * (0.25 + Math.random() * 0.5),
          z: this.z - 20 - Math.random() * 40,
          vx: (Math.random() - 0.5) * 55,
          vy: -45 - Math.random() * 45,
          vz: (Math.random() - 0.5) * 45,
          rgb: angelShardRgb(hex),
          opacity: 1,
          glow: (2.02 + Math.random() * 0.82) * ANGEL_PARTICLE_GLOW,
          kind: 'shard',
          large: Math.random() < ANGEL_LARGE_SHARD_CHANCE,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 4,
          twinkle: Math.random() * Math.PI * 2,
        });
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
    root.position.x += mark.sway * mark.size * 0.35;
    root.rotation.set(
      mark.tilt + mark.sway * 0.6,
      mark.yaw + mark.spin,
      mark.baseRot + mark.sway * 0.4,
    );
    const s = mark.size;
    root.scale.set(s, s, s * 1.75);
    const flap = mark.flap;
    wingHoldL.rotation.set(0.12 + flap * 0.15, 0.55 + flap, 0.1 + flap * 0.08);
    wingHoldR.rotation.set(0.12 + flap * 0.15, -0.55 - flap, -0.1 - flap * 0.08);
    wingHoldL.scale.set(-1.14, 1.14, 1.14);
    wingHoldR.scale.set(1.14, 1.14, 1.14);
    haloHold.rotation.z = time * 0.8 + mark.flapPhase;
    root.updateMatrixWorld(true);
  }

  function syncMeshes() {
    if (!bodyMesh || !angelEyeMesh || !angelMouthMesh || !wingLMesh || !wingRMesh || !haloMesh) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        hide(bodyMesh, i);
        hide(bodyOutline, i);
        hide(angelEyeMesh, i);
        hide(angelMouthMesh, i);
        hide(faceHiMesh, i);
        hide(blushMesh, i);
        hide(wingLMesh, i);
        hide(wingRMesh, i);
        hide(wingOutlineLMesh, i);
        hide(wingOutlineRMesh, i);
        hide(haloMesh, i);
        continue;
      }
      poseRoot(mark);
      const n = ANGEL_CYBER_NEON.length;
      const idx = (mark.hueIndex + Math.floor(time * 0.35)) % n;
      const bodyHex = angelColorAt(idx);
      const wingHex = angelColorAt(idx + 1);
      const haloHex = angelColorAt(idx + 2);
      const tint = angelFillColor(bodyHex, ANGEL_FILL_BOOST);
      const wingTint = angelFillColor(wingHex, ANGEL_WING_FILL_BOOST);
      const haloTint = angelFillColor(haloHex, ANGEL_HALO_FILL_BOOST);
      const rim = angelNeonRim(bodyHex);
      const wingRim = angelNeonRim(wingHex);

      dummy.matrix.copy(root.matrixWorld);
      bodyMesh.setMatrixAt(i, dummy.matrix);
      bodyMesh.setColorAt(i, _color.setRGB(tint.r, tint.g, tint.b));

      const sx = root.scale.x;
      const sy = root.scale.y;
      const sz = root.scale.z;
      root.scale.set(sx * 1.04, sy * 1.04, sz * 1.04);
      root.updateMatrixWorld(true);
      dummy.matrix.copy(root.matrixWorld);
      bodyOutline.setMatrixAt(i, dummy.matrix);
      bodyOutline.setColorAt(i, _color.setRGB(rim.r, rim.g, rim.b));
      root.scale.set(sx, sy, sz);
      root.updateMatrixWorld(true);

      dummy.matrix.copy(wingHoldL.matrixWorld);
      wingLMesh.setMatrixAt(i, dummy.matrix);
      wingLMesh.setColorAt(i, _color.setRGB(wingTint.r, wingTint.g, wingTint.b));
      wingOutlineLMesh.setMatrixAt(i, dummy.matrix);
      wingOutlineLMesh.setColorAt(i, _color.setRGB(wingRim.r, wingRim.g, wingRim.b));

      dummy.matrix.copy(wingHoldR.matrixWorld);
      wingRMesh.setMatrixAt(i, dummy.matrix);
      wingRMesh.setColorAt(i, _color.setRGB(wingTint.r, wingTint.g, wingTint.b));
      wingOutlineRMesh.setMatrixAt(i, dummy.matrix);
      wingOutlineRMesh.setColorAt(i, _color.setRGB(wingRim.r, wingRim.g, wingRim.b));

      dummy.matrix.copy(root.matrixWorld);
      haloMesh.setMatrixAt(i, dummy.matrix);
      haloMesh.setColorAt(i, _color.setRGB(haloTint.r, haloTint.g, haloTint.b));

      dummy.matrix.copy(root.matrixWorld);
      angelEyeMesh.setMatrixAt(i, dummy.matrix);
      angelEyeMesh.setColorAt(i, _color.setRGB(0.06, 0.08, 0.2));

      dummy.matrix.copy(root.matrixWorld);
      angelMouthMesh.setMatrixAt(i, dummy.matrix);
      angelMouthMesh.setColorAt(i, _color.setRGB(0.12, 0.08, 0.18));
      hide(faceHiMesh, i);
      hide(blushMesh, i);
    }
    for (const m of [bodyMesh, bodyOutline, angelEyeMesh, angelMouthMesh, faceHiMesh, blushMesh, wingLMesh, wingRMesh, wingOutlineLMesh, wingOutlineRMesh, haloMesh]) {
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
        const sc = angelParticleFill(angelColorAt(s.phase * 3 + i * 0.1), 1.54, 0.06);
        const glow = pulse * ANGEL_PARTICLE_GLOW;
        sparkleField.colors[i * 3] = Math.min(1, sc.r * glow);
        sparkleField.colors[i * 3 + 1] = Math.min(1, sc.g * glow);
        sparkleField.colors[i * 3 + 2] = Math.min(1, sc.b * glow);
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }
    if (sparkleFieldLarge) {
      sparklesLarge.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleFieldLarge.positions[i * 3] = wpos.x;
        sparkleFieldLarge.positions[i * 3 + 1] = wpos.y;
        sparkleFieldLarge.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.82 + 0.65 * Math.abs(Math.sin(time * 2.6 + s.phase));
        const sc = angelParticleFill(angelColorAt(s.phase * 3 + i * 0.17), 1.54, 0.06);
        const glow = pulse * ANGEL_PARTICLE_GLOW * 0.92;
        sparkleFieldLarge.colors[i * 3] = Math.min(1, sc.r * glow);
        sparkleFieldLarge.colors[i * 3 + 1] = Math.min(1, sc.g * glow);
        sparkleFieldLarge.colors[i * 3 + 2] = Math.min(1, sc.b * glow);
      });
      sparkleFieldLarge.geo.setDrawRange(0, sparklesLarge.length);
      sparkleFieldLarge.geo.attributes.position.needsUpdate = true;
      sparkleFieldLarge.geo.attributes.color.needsUpdate = true;
    }
    if (fallField || fallFieldLarge) {
      let ni = 0;
      let li = 0;
      const n = Math.min(shards.length, ANGEL_FALL_MAX + ANGEL_FALL_LARGE_MAX);
      for (let si = 0; si < n; si++) {
        const p = shards[si];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        const [r0, g0, b0] = rgbToUnit(p.rgb);
        const twinkle = 0.84 + 0.38 * Math.abs(Math.sin(time * 9 + (p.twinkle || 0)));
        const glow = (p.glow || 1.92) * (0.66 + p.opacity * 0.56) * twinkle * ANGEL_PARTICLE_GLOW;
        const w = 0.06;
        const cr = Math.min(1, r0 * glow * (1 - w) + w);
        const cg = Math.min(1, g0 * glow * (1 - w) + w);
        const cb = Math.min(1, b0 * glow * (1 - w) + w);
        if (p.large && fallFieldLarge && li < ANGEL_FALL_LARGE_MAX) {
          const i3 = li * 3;
          fallFieldLarge.positions[i3] = wpos.x;
          fallFieldLarge.positions[i3 + 1] = wpos.y;
          fallFieldLarge.positions[i3 + 2] = wpos.z;
          fallFieldLarge.colors[i3] = cr;
          fallFieldLarge.colors[i3 + 1] = cg;
          fallFieldLarge.colors[i3 + 2] = cb;
          li++;
        } else if (fallField && ni < ANGEL_FALL_MAX) {
          const i3 = ni * 3;
          fallField.positions[i3] = wpos.x;
          fallField.positions[i3 + 1] = wpos.y;
          fallField.positions[i3 + 2] = wpos.z;
          fallField.colors[i3] = cr;
          fallField.colors[i3 + 1] = cg;
          fallField.colors[i3 + 2] = cb;
          ni++;
        }
      }
      if (fallField) {
        fallField.geo.setDrawRange(0, ni);
        fallField.geo.attributes.position.needsUpdate = true;
        fallField.geo.attributes.color.needsUpdate = true;
      }
      if (fallFieldLarge) {
        fallFieldLarge.geo.setDrawRange(0, li);
        fallFieldLarge.geo.attributes.position.needsUpdate = true;
        fallFieldLarge.geo.attributes.color.needsUpdate = true;
      }
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  function makeMat(opacity, opts = {}) {
    const { back = false, additive = false } = opts;
    return new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity,
      side: back ? THREE.BackSide : THREE.DoubleSide,
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
      sparklesLarge = [];
      time = 0;
      layer = group;

      bodyGeo = buildAngelBodyGeometry();
      angelEyeGeo = buildAngelEyesGeometry();
      angelMouthGeo = buildAngelMouthGeometry();
      faceHiGeo = buildAngelFaceHiGeometry();
      blushGeo = buildAngelBlushGeometry();
      wingGeo = buildAngelWingGeometry();
      haloGeo = buildAngelHaloGeometry();
      bodyMesh = new THREE.InstancedMesh(bodyGeo, makeMat(ANGEL_BODY_OPACITY, { additive: true }), MAX);
      bodyOutline = new THREE.InstancedMesh(bodyGeo, makeMat(ANGEL_RIM_OPACITY, { back: true, additive: true }), MAX);
      const eyeMat = makeMat(ANGEL_EYE_OPACITY, { additive: false });
      eyeMat.polygonOffset = true;
      eyeMat.polygonOffsetFactor = -4;
      eyeMat.polygonOffsetUnits = -4;
      angelEyeMesh = new THREE.InstancedMesh(angelEyeGeo, eyeMat, MAX);
      angelEyeMesh.renderOrder = 12;
      const mouthMat = makeMat(ANGEL_MOUTH_OPACITY, { additive: false });
      mouthMat.polygonOffset = true;
      mouthMat.polygonOffsetFactor = -3;
      mouthMat.polygonOffsetUnits = -3;
      angelMouthMesh = new THREE.InstancedMesh(angelMouthGeo, mouthMat, MAX);
      angelMouthMesh.renderOrder = 11;
      faceHiMesh = new THREE.InstancedMesh(faceHiGeo, makeMat(0.11, { additive: false }), MAX);
      blushMesh = new THREE.InstancedMesh(blushGeo, makeMat(0.09, { additive: false }), MAX);
      wingLMesh = new THREE.InstancedMesh(wingGeo, makeMat(ANGEL_WING_OPACITY, { additive: true }), MAX);
      wingRMesh = new THREE.InstancedMesh(wingGeo, makeMat(ANGEL_WING_OPACITY, { additive: true }), MAX);
      wingOutlineLMesh = new THREE.InstancedMesh(wingGeo, makeMat(ANGEL_WING_RIM_OPACITY, { back: true, additive: true }), MAX);
      wingOutlineRMesh = new THREE.InstancedMesh(wingGeo, makeMat(ANGEL_WING_RIM_OPACITY, { back: true, additive: true }), MAX);
      haloMesh = new THREE.InstancedMesh(haloGeo, makeMat(ANGEL_HALO_OPACITY, { additive: true }), MAX);
      for (const m of [bodyMesh, bodyOutline, angelEyeMesh, angelMouthMesh, faceHiMesh, blushMesh, wingLMesh, wingRMesh, wingOutlineLMesh, wingOutlineRMesh, haloMesh]) {
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
        m.frustumCulled = false;
        layer.add(m);
      }

      sparkleField = makePoints(ANGEL_SPARKLE_COUNT, ANGEL_PARTICLE_SIZE_SPARKLE);
      sparkleFieldLarge = makePoints(ANGEL_SPARKLE_LARGE_COUNT, ANGEL_PARTICLE_SIZE_SPARKLE_LARGE);
      fallField = makePoints(ANGEL_FALL_MAX, ANGEL_PARTICLE_SIZE_FALL);
      fallFieldLarge = makePoints(ANGEL_FALL_LARGE_MAX, ANGEL_PARTICLE_SIZE_FALL_LARGE);
      sparkleField.mat.blending = THREE.AdditiveBlending;
      sparkleFieldLarge.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      fallFieldLarge.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = ANGEL_SPARKLE_OPACITY;
      sparkleFieldLarge.mat.opacity = ANGEL_SPARKLE_OPACITY * 0.88;
      fallField.mat.opacity = ANGEL_FALL_OPACITY;
      fallFieldLarge.mat.opacity = ANGEL_FALL_OPACITY * 0.9;
      sparkleField.mat.toneMapped = false;
      sparkleFieldLarge.mat.toneMapped = false;
      fallField.mat.toneMapped = false;
      fallFieldLarge.mat.toneMapped = false;
      layer.add(
        sparkleField.points,
        sparkleFieldLarge.points,
        fallField.points,
        fallFieldLarge.points,
      );

      for (const [x, y] of stratifiedSpawnPoints(20, w, h, 0.06, [h * 0.25, h * 0.95])) spawn(x, y);
      primeGrowingMarks(marks);
      syncMeshes();
      for (let i = 0; i < ANGEL_SPARKLE_COUNT; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.12 + Math.random() * 0.32),
          phase: Math.random() * Math.PI * 2,
          rgb: angelShardRgb(randomAngelCyberHex()),
        });
      }
      for (let i = 0; i < ANGEL_SPARKLE_LARGE_COUNT; i++) {
        sparklesLarge.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 260,
          speedY: -(0.08 + Math.random() * 0.24),
          phase: Math.random() * Math.PI * 2,
          rgb: angelShardRgb(randomAngelCyberHex()),
        });
      }
    },

    resize(w, h) {
      remapScreenMarks(marks, width, height, w, h);
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
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 40);
        }
      }
      if (Math.random() < dt * 1.4 * (params.speed || 1)) {
        spawn(Math.random() * width, height + 40 + Math.random() * 80);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 3);
        for (let i = 0; i < n; i++) spawn(Math.random() * width, height + 20);
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy -= 25 * dt;
        p.opacity -= dt * 0.12;
        return p.opacity > 0.02 && p.y > -80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 70 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });
      sparklesLarge.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 58 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(16, Math.floor((params.particleCount || 1030) / 5)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 5; i++) spawn(x + (Math.random() - 0.5) * 70, y + (Math.random() - 0.5) * 50);
    },
    onPointerMove() {},
    onPointerUp() {},

    setPalette(name) {
      currentPalette = name;
    },

    samplePoints(count, vw = width, vh = height) {
      const { w, h } = safeViewport(vw, vh, width, height);
      if (viewportReady(w, h) && marks.length) {
        if (!viewportReady(width, height) || marksOutOfViewport(marks, w, h) || marksNeedRemap(marks, w, h, 0.2)) {
          remapScreenMarks(marks, viewportReady(width, height) ? width : 0, viewportReady(width, height) ? height : 0, w, h);
        } else if (width !== w || height !== h) {
          remapScreenMarks(marks, width, height, w, h);
        }
      }
      const angelFallback = (n, cw, ch) =>
        spreadModelCloudToWorld(sampleAngelCloud(n, 130), n, cw, ch, 0.14);
      return sampleMarksWorld(marks, count, w, h, angelFallback);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      sparklesLarge = [];
      bodyGeo?.dispose();
      angelEyeGeo?.dispose();
      angelMouthGeo?.dispose();
      faceHiGeo?.dispose();
      blushGeo?.dispose();
      wingGeo?.dispose();
      haloGeo?.dispose();
      bodyMesh = null;
      bodyOutline = null;
      angelEyeMesh = null;
      angelMouthMesh = null;
      faceHiMesh = null;
      blushMesh = null;
      wingLMesh = null;
      wingRMesh = null;
      wingOutlineLMesh = null;
      wingOutlineRMesh = null;
      haloMesh = null;
      sparkleField = null;
      sparkleFieldLarge = null;
      fallField = null;
      fallFieldLarge = null;
      layer = null;
    },
  };
}
