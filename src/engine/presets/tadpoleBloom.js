import * as THREE from 'three';
import { toWorld, makePoints, rgbToUnit, stratifiedSpawnPoints, primeGrowingMarks, sampleMarksWorld, spreadScreenCloud } from '../space3d.js';
import { pickTadpoleSize } from '../bloom/bloomColors.js';
import {
  cyberHexToRgb,
  cyberShowColor,
  randomTadpoleCyberHex,
} from '../bloom/cyberNeon.js';
import {
  buildTadpoleBodyGeometry,
  buildTadpoleRimGeometry,
  buildTadpoleCoreGeometry,
  buildTadpoleEyeGeometry,
  buildTadpolePupilGeometry,
  buildTadpoleTailGeometry,
} from '../geometries/tadpole.js';

/** 単位球上のランダム方向（画面座標: x右 / y下 / z奥） */
function randomUnitDir3() {
  const z = Math.random() * 2 - 1;
  const t = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  return { x: r * Math.cos(t), y: r * Math.sin(t), z };
}

/**
 * オタマ専用: 胴と尾を分離し、尾をプルプル揺らす
 */
export function createTadpoleBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let bodyMesh = null;
  let rimMesh = null;
  let coreMesh = null;
  let eyeMesh = null;
  let pupilMesh = null;
  let tailMesh = null;
  let sparkleField = null;
  let fallField = null;
  let bodyGeo = null;
  let rimGeo = null;
  let coreGeo = null;
  let eyeGeo = null;
  let pupilGeo = null;
  let tailGeo = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const _fwd = new THREE.Vector3();
  const _modelFwd = new THREE.Vector3(1, 0, 0);
  const _baseQuat = new THREE.Quaternion();
  const _wagQuat = new THREE.Quaternion();
  const _wagAxis = new THREE.Vector3(0, 0, 1);
  const _flipAxis = new THREE.Vector3(0, 1, 0);
  const Z_SPAN = 260;
  const MAX = 128;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * Z_SPAN;
      this.maxSize = pickTadpoleSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.4 + Math.random() * 0.45;
      const dir = randomUnitDir3();
      this.dirX = dir.x;
      this.dirY = dir.y;
      this.dirZ = dir.z;
      this.speed = 70 + Math.random() * 70;
      this.wagPhase = Math.random() * Math.PI * 2;
      this.wagSpeed = 28 + Math.random() * 12;
      this.tremblePhase = Math.random() * Math.PI * 2;
      this.trembleSpeed = 42 + Math.random() * 18;
      const wagScale = [0.5, 1 / 3, 0.25][Math.floor(Math.random() * 3)];
      this.wagAmp = (0.75 + Math.random() * 0.35) * wagScale;
      this.trembleAmp = (0.22 + Math.random() * 0.14) * wagScale;
      this.color = randomTadpoleCyberHex();
      this.rgb = cyberHexToRgb(this.color);
      this.innerRgb = {
        r: Math.min(255, this.rgb.r + 50),
        g: Math.min(255, this.rgb.g + 40),
        b: Math.min(255, this.rgb.b + 55),
      };
      this.lifetime = 0;
      this.maxLifetime = 8 + Math.random() * 5;
      this.phase = 'growing';
      this.opacity = 1;
      this.wag = 0;
    }

    update(dt, t) {
      this.lifetime += dt;
      const swim = Math.sin(t * this.wagSpeed + this.wagPhase) * this.wagAmp;
      const tremble =
        Math.sin(t * this.trembleSpeed + this.tremblePhase) * this.trembleAmp +
        Math.sin(t * this.trembleSpeed * 2.1 + this.tremblePhase * 1.4) * this.trembleAmp * 0.65 +
        Math.sin(t * this.trembleSpeed * 3.4 + this.tremblePhase * 0.6) * this.trembleAmp * 0.35;
      this.wag = swim + tremble;

      const thrust = 0.65 + Math.abs(this.wag) * 0.95;
      const step = this.speed * thrust * dt;
      this.x += this.dirX * step;
      this.y += this.dirY * step;
      this.z += this.dirZ * step;

      const margin = 80;
      if (this.x < -margin) this.x = width + margin;
      if (this.x > width + margin) this.x = -margin;
      if (this.y < -margin) this.y = height + margin;
      if (this.y > height + margin) this.y = -margin;
      if (this.z < -Z_SPAN * 0.5) this.z = Z_SPAN * 0.5;
      if (this.z > Z_SPAN * 0.5) this.z = -Z_SPAN * 0.5;

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
          if (this.lifetime > this.maxLifetime * 0.6) this.phase = 'wilting';
          if (Math.random() < dt * 4.5) this._sparkTrail();
          break;
        case 'wilting':
          this.opacity -= dt * 0.25;
          if (Math.random() < dt * 5) this._shed();
          if (Math.random() < dt * 6) this._sparkTrail();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _shed() {
      for (let i = 0; i < 4 + Math.floor(Math.random() * 4); i++) {
        const neon = cyberHexToRgb(randomTadpoleCyberHex());
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size,
          y: this.y + (Math.random() - 0.5) * this.size,
          z: this.z + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 90,
          vy: -10 - Math.random() * 50,
          vz: (Math.random() - 0.5) * 55,
          rgb: {
            r: Math.round(neon.r + (255 - neon.r) * 0.72),
            g: Math.round(neon.g + (255 - neon.g) * 0.72),
            b: Math.round(neon.b + (255 - neon.b) * 0.72),
          },
          opacity: 1,
          glow: 1.55 + Math.random() * 0.7,
          kind: 'shard',
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }

    _sparkTrail() {
      const neon = cyberHexToRgb(this.color);
      shards.push({
        x: this.x - this.dirX * this.size * 0.35 + (Math.random() - 0.5) * this.size * 0.4,
        y: this.y - this.dirY * this.size * 0.35 + (Math.random() - 0.5) * this.size * 0.4,
        z: this.z - this.dirZ * 12 + (Math.random() - 0.5) * 30,
        vx: -this.dirX * 20 + (Math.random() - 0.5) * 40,
        vy: -this.dirY * 20 + (Math.random() - 0.5) * 40,
        vz: -this.dirZ * 20 + (Math.random() - 0.5) * 30,
        rgb: {
          r: Math.round(neon.r + (255 - neon.r) * 0.78),
          g: Math.round(neon.g + (255 - neon.g) * 0.78),
          b: Math.round(neon.b + (255 - neon.b) * 0.78),
        },
        opacity: 1,
        glow: 1.7 + Math.random() * 0.7,
        kind: 'dust',
        twinkle: Math.random() * Math.PI * 2,
      });
    }
  }

  function hide(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.quaternion.identity();
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  function orientMark(mark, wagMul) {
    _fwd.set(mark.dirX, -mark.dirY, mark.dirZ);
    if (_fwd.lengthSq() < 1e-8) _fwd.set(1, 0, 0);
    else _fwd.normalize();
    if (Math.abs(_fwd.x) > 0.999) {
      _baseQuat.identity();
      if (_fwd.x < 0) _baseQuat.setFromAxisAngle(_flipAxis, Math.PI);
    } else {
      _baseQuat.setFromUnitVectors(_modelFwd, _fwd);
    }
    _wagQuat.setFromAxisAngle(_wagAxis, mark.wag * wagMul);
    dummy.quaternion.copy(_baseQuat).multiply(_wagQuat);
  }

  function placeBody(mark, scaleMul = 1) {
    const pos = toWorld(mark.x, mark.y, mark.z, width, height);
    dummy.position.copy(pos);
    orientMark(mark, 0.12);
    const s = mark.size * scaleMul;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
  }

  function placeTail(mark, scaleMul = 1) {
    const pos = toWorld(mark.x, mark.y, mark.z, width, height);
    dummy.position.copy(pos);
    orientMark(mark, 1.35);
    const s = mark.size * scaleMul;
    const squash = 1 + Math.sin(time * mark.trembleSpeed + mark.tremblePhase) * 0.16
      + Math.sin(time * mark.trembleSpeed * 2.4 + mark.tremblePhase) * 0.08;
    dummy.scale.set(s * squash, s / Math.sqrt(Math.max(0.55, squash)), s);
    dummy.updateMatrix();
  }

  function syncMeshes() {
    if (!bodyMesh || !tailMesh || !eyeMesh || !pupilMesh) return;
    const shown = Math.min(marks.length, MAX);
    const allMeshes = [bodyMesh, rimMesh, coreMesh, eyeMesh, pupilMesh, tailMesh];
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        for (const m of allMeshes) hide(m, i);
        continue;
      }
      const c = cyberShowColor(mark.rgb, 0.95);
      const rimC = cyberShowColor(mark.innerRgb, 1.25);
      const coreC = cyberShowColor(mark.innerRgb, 1.1);
      const tailC = cyberShowColor(mark.rgb, 0.75);

      placeBody(mark, 1);
      bodyMesh.setMatrixAt(i, dummy.matrix);
      bodyMesh.setColorAt(i, _color.setRGB(c.r * 0.55, c.g * 0.7, Math.min(1, c.b * 0.95)));

      placeBody(mark, 1);
      rimMesh.setMatrixAt(i, dummy.matrix);
      rimMesh.setColorAt(i, _color.setRGB(rimC.r, rimC.g, rimC.b));

      placeBody(mark, 0.92);
      coreMesh.setMatrixAt(i, dummy.matrix);
      coreMesh.setColorAt(i, _color.setRGB(
        Math.min(1, coreC.r * 0.7 + 0.25),
        Math.min(1, coreC.g * 0.75 + 0.3),
        Math.min(1, coreC.b * 0.7 + 0.35),
      ));

      placeBody(mark, 1);
      eyeMesh.setMatrixAt(i, dummy.matrix);
      eyeMesh.setColorAt(i, _color.setRGB(0.82, 0.94, 1.0));

      placeBody(mark, 1);
      pupilMesh.setMatrixAt(i, dummy.matrix);
      pupilMesh.setColorAt(i, _color.setRGB(0.04, 0.06, 0.12));

      placeTail(mark, 1);
      tailMesh.setMatrixAt(i, dummy.matrix);
      tailMesh.setColorAt(i, _color.setRGB(tailC.r * 0.5, tailC.g * 0.65, Math.min(1, tailC.b * 0.9)));
    }
    for (const m of allMeshes) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.55 + 0.35 * Math.abs(Math.sin(time * 3.4 + s.phase));
        const wr = (s.rgb.r / 255) * 0.28 + 0.72;
        const wg = (s.rgb.g / 255) * 0.28 + 0.72;
        const wb = (s.rgb.b / 255) * 0.28 + 0.72;
        sparkleField.colors[i * 3] = wr * pulse;
        sparkleField.colors[i * 3 + 1] = wg * pulse;
        sparkleField.colors[i * 3 + 2] = wb * pulse;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, 700);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r0, g0, b0] = rgbToUnit(p.rgb);
        const r = r0 * 0.3 + 0.7;
        const g = g0 * 0.3 + 0.7;
        const b = b0 * 0.3 + 0.7;
        const twinkle = 0.7 + 0.3 * Math.abs(Math.sin(time * 9 + (p.twinkle || 0)));
        const glow = (p.glow || 1.6) * (0.55 + p.opacity * 0.45) * twinkle;
        fallField.colors[i * 3] = Math.min(1, r * glow);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  function spawnPair(x, y) {
    spawn(x, y);
    spawn(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 80);
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

      bodyGeo = buildTadpoleBodyGeometry();
      rimGeo = buildTadpoleRimGeometry();
      coreGeo = buildTadpoleCoreGeometry();
      eyeGeo = buildTadpoleEyeGeometry();
      pupilGeo = buildTadpolePupilGeometry();
      tailGeo = buildTadpoleTailGeometry();

      bodyMesh = new THREE.InstancedMesh(bodyGeo, makeMat(0.28, true), MAX);
      rimMesh = new THREE.InstancedMesh(rimGeo, makeMat(0.85, true), MAX);
      coreMesh = new THREE.InstancedMesh(coreGeo, makeMat(0.45, true), MAX);
      eyeMesh = new THREE.InstancedMesh(eyeGeo, makeMat(0.95, false), MAX);
      pupilMesh = new THREE.InstancedMesh(pupilGeo, makeMat(1, false), MAX);
      tailMesh = new THREE.InstancedMesh(tailGeo, makeMat(0.22, true), MAX);

      for (const m of [bodyMesh, rimMesh, coreMesh, eyeMesh, pupilMesh, tailMesh]) {
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
        m.frustumCulled = false;
        layer.add(m);
      }

      sparkleField = makePoints(80, 5);
      fallField = makePoints(700, 14);
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = 0.7;
      fallField.mat.opacity = 0.65;
      sparkleField.mat.toneMapped = false;
      fallField.mat.toneMapped = false;
      layer.add(sparkleField.points, fallField.points);

      for (const [x, y] of stratifiedSpawnPoints(40, w, h)) spawnPair(x, y);
      primeGrowingMarks(marks);
      syncMeshes();
      for (let i = 0; i < 70; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.08 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
          rgb: (() => {
            const n = cyberHexToRgb(randomTadpoleCyberHex());
            return {
              r: Math.round(n.r + (255 - n.r) * 0.75),
              g: Math.round(n.g + (255 - n.g) * 0.75),
              b: Math.round(n.b + (255 - n.b) * 0.75),
            };
          })(),
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
        const n = Math.min(4, Math.floor(pointer.velocity / 16) + 1);
        for (let i = 0; i < n; i++) {
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 50);
        }
      }
      if (Math.random() < dt * 3.6 * (params.speed || 1)) {
        spawnPair(Math.random() * width, Math.random() * height);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 8);
        for (let i = 0; i < n; i++) spawnPair(Math.random() * width, Math.random() * height);
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.opacity -= dt * 0.12;
        return p.opacity > 0.02 && p.y < height + 80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 60 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(40, Math.floor((params.particleCount || 1030) / 2)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 12; i++) {
        spawnPair(x + (Math.random() - 0.5) * 90, y + (Math.random() - 0.5) * 90);
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },

    samplePoints(count) {
      return sampleMarksWorld(marks, count, width, height, spreadScreenCloud);
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      bodyGeo?.dispose();
      rimGeo?.dispose();
      coreGeo?.dispose();
      eyeGeo?.dispose();
      pupilGeo?.dispose();
      tailGeo?.dispose();
      bodyMesh = null;
      rimMesh = null;
      coreMesh = null;
      eyeMesh = null;
      pupilMesh = null;
      tailMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
