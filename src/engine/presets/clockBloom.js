import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints } from '../space3d.js';

/** 時計は常にレインボースペクトル（設定のサイバーネオンとは別） */
function randomPaletteHex(_paletteName = 'rainbow') {
  const colors = getPaletteColors('rainbow');
  return colors[Math.floor(Math.random() * colors.length)];
}

function vividRgb(hex) {
  const rgb = hexToRgb(hex);
  // 濃いめ: 彩度を上げつつ、明るさはしっかり出す
  const mid = (rgb.r + rgb.g + rgb.b) / 3;
  const sat = 1.12;
  return {
    r: Math.min(255, Math.max(0, Math.round(mid + (rgb.r - mid) * sat))),
    g: Math.min(255, Math.max(0, Math.round(mid + (rgb.g - mid) * sat))),
    b: Math.min(255, Math.max(0, Math.round(mid + (rgb.b - mid) * sat))),
  };
}

function showColor(rgb, boost = 1.05) {
  return {
    r: Math.min(1, (rgb.r / 255) * boost),
    g: Math.min(1, (rgb.g / 255) * boost),
    b: Math.min(1, (rgb.b / 255) * boost),
  };
}

function pickMarkSize() {
  const r = Math.random();
  if (r < 0.15) return 110 + Math.random() * 70;
  if (r < 0.4) return 85 + Math.random() * 40;
  return 65 + Math.random() * 35;
}

function prepareGeo(geometry) {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  geo.computeVertexNormals();
  const count = geo.attributes.position.count;
  if (!geo.attributes.uv) {
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(count * 2), 2));
  }
  return geo;
}

function mergeParts(parts) {
  const prepared = parts.map(prepareGeo);
  const merged = mergeGeometries(prepared, false);
  if (merged) {
    merged.computeVertexNormals();
    return merged;
  }
  return prepared[0];
}

function box(w, h, d, x = 0, y = 0, z = 0, rotZ = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotZ) g.rotateZ(rotZ);
  g.translate(x, y, z);
  return g;
}

/** ローマ数字（簡易ボックス構成） */
function buildRomanGeo(kind) {
  const parts = [];
  const t = 0.018;
  const d = 0.04;
  if (kind === 'I') {
    parts.push(box(t, 0.1, d));
  } else if (kind === 'V') {
    parts.push(box(t, 0.1, d, -0.028, 0, 0, 0.35));
    parts.push(box(t, 0.1, d, 0.028, 0, 0, -0.35));
  } else if (kind === 'X') {
    parts.push(box(t, 0.11, d, 0, 0, 0, 0.55));
    parts.push(box(t, 0.11, d, 0, 0, 0, -0.55));
  }
  return mergeParts(parts);
}

const ROMANS = ['XII', 'I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

function expandRoman(str) {
  const out = [];
  for (const ch of str) {
    if (ch === 'I' || ch === 'V' || ch === 'X') out.push(ch);
  }
  return out;
}

/** 半透明文字盤（厚みのある円柱＝立体） */
export function buildClockFaceGeometry() {
  const face = new THREE.CylinderGeometry(0.42, 0.42, 0.1, 48);
  face.rotateX(Math.PI / 2); // 軸を Z に（正面が円）
  return prepareGeo(face);
}

/** ケース側面＋裏蓋＋竜頭＋弓（立体懐中時計） */
export function buildClockCaseGeometry() {
  const parts = [];
  // 側面バンド（円柱の外周＝ケース厚み。土星リングにならない）
  const side = new THREE.CylinderGeometry(0.445, 0.445, 0.12, 48, 1, true);
  side.rotateX(Math.PI / 2);
  parts.push(side);
  // 前面ベゼル（細い円環・厚み付き）
  const bezel = new THREE.TorusGeometry(0.435, 0.022, 8, 48);
  bezel.translate(0, 0, 0.055);
  parts.push(bezel);
  // 裏蓋
  const back = new THREE.CylinderGeometry(0.4, 0.4, 0.035, 36);
  back.rotateX(Math.PI / 2);
  back.translate(0, 0, -0.06);
  parts.push(back);
  // 竜頭
  const crown = new THREE.CylinderGeometry(0.035, 0.04, 0.07, 10);
  crown.translate(0, 0.5, 0);
  parts.push(crown);
  const crownKnob = new THREE.SphereGeometry(0.028, 8, 6);
  crownKnob.translate(0, 0.545, 0);
  parts.push(crownKnob);
  // 弓（上部のみ）
  const bow = new THREE.TorusGeometry(0.08, 0.014, 6, 20, Math.PI * 1.15);
  bow.rotateZ(Math.PI);
  bow.translate(0, 0.62, 0);
  parts.push(bow);
  return mergeParts(parts);
}

/** 目盛＋ローマ数字 */
export function buildClockDialGeometry() {
  const parts = [];
  for (let i = 0; i < 60; i++) {
    const ang = (i / 60) * Math.PI * 2;
    const major = i % 5 === 0;
    const len = major ? 0.06 : 0.028;
    const w = major ? 0.014 : 0.007;
    const tick = box(w, len, 0.03);
    const r = 0.34;
    tick.rotateZ(-ang);
    tick.translate(Math.sin(ang) * r, Math.cos(ang) * r, 0.055);
    parts.push(tick);
  }
  for (let h = 0; h < 12; h++) {
    const ang = (h / 12) * Math.PI * 2;
    const glyphs = expandRoman(ROMANS[h]);
    const spread = 0.032;
    glyphs.forEach((g, gi) => {
      const geo = buildRomanGeo(g);
      const offset = (gi - (glyphs.length - 1) * 0.5) * spread;
      const r = 0.28;
      const tx = Math.cos(ang);
      const ty = -Math.sin(ang);
      geo.rotateZ(-ang);
      geo.translate(
        Math.sin(ang) * r + tx * offset,
        Math.cos(ang) * r + ty * offset,
        0.058,
      );
      parts.push(geo);
    });
  }
  return mergeParts(parts);
}

function buildHandGeometry(length, width, tip = 0.02) {
  const shape = new THREE.Shape();
  shape.moveTo(-width * 0.5, 0);
  shape.lineTo(-width * 0.22, length * 0.85);
  shape.lineTo(0, length + tip);
  shape.lineTo(width * 0.22, length * 0.85);
  shape.lineTo(width * 0.5, 0);
  shape.lineTo(width * 0.35, -0.04);
  shape.lineTo(-width * 0.35, -0.04);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.02,
    bevelEnabled: false,
  });
  geo.translate(0, 0, -0.01);
  return prepareGeo(geo);
}

export function buildClockHourHandGeometry() {
  return buildHandGeometry(0.22, 0.045, 0.025);
}
export function buildClockMinuteHandGeometry() {
  return buildHandGeometry(0.32, 0.032, 0.02);
}
export function buildClockSecondHandGeometry() {
  const g = box(0.01, 0.36, 0.012, 0, 0.14, 0.02);
  const hub = new THREE.SphereGeometry(0.025, 10, 8);
  hub.translate(0, 0, 0.02);
  const counter = box(0.016, 0.07, 0.012, 0, -0.05, 0.02);
  return mergeParts([g, hub, counter]);
}

/**
 * ネオン寄せ懐中時計群
 */
export function createClockBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let faceMesh = null;
  let caseMesh = null;
  let dialMesh = null;
  let hourMesh = null;
  let minuteMesh = null;
  let secondMesh = null;
  let sparkleField = null;
  let fallField = null;
  let faceGeo = null;
  let caseGeo = null;
  let dialGeo = null;
  let hourGeo = null;
  let minuteGeo = null;
  let secondGeo = null;

  const root = new THREE.Object3D();
  const hourHold = new THREE.Object3D();
  const minuteHold = new THREE.Object3D();
  const secondHold = new THREE.Object3D();
  root.add(hourHold, minuteHold, secondHold);
  hourHold.position.z = 0.07;
  minuteHold.position.z = 0.08;
  secondHold.position.z = 0.09;

  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 36;

  class Mark {
    constructor(x, y, palette) {
      const pal = palette || currentPalette;
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 180;
      this.maxSize = pickMarkSize() * 1.25 * (2 / 3);
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.3 + Math.random() * 0.35;
      this.baseRot = (Math.random() - 0.5) * 0.4;
      this.tilt = (Math.random() - 0.5) * 0.5;
      this.yaw = (Math.random() - 0.5) * Math.PI;
      this.rotX = this.tilt;
      this.rotY = this.yaw;
      this.rotZ = this.baseRot;
      // 連続タンブル回転（時計ごとに速度・向きを変える）
      const dir = Math.random() < 0.5 ? 1 : -1;
      this.spinVelX = (Math.random() - 0.5) * 0.55;
      this.spinVelY = dir * (0.55 + Math.random() * 0.95);
      this.spinVelZ = (Math.random() - 0.5) * 0.35;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.5 + Math.random() * 0.4;
      this.windAmp = 0.05 + Math.random() * 0.04;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.7 + Math.random() * 0.5;
      this.riseSpeed = 28 + Math.random() * 22;
      this.timeOffset = Math.random() * 3600;
      this.speedMul = 0.85 + Math.random() * 0.4;
      this.neonHex = randomPaletteHex(pal);
      this.rgb = vividRgb(this.neonHex);
      // 文字盤は濃い影、ケース・針は濃く明るい本体色
      this.fillRgb = {
        r: Math.round(this.rgb.r * 0.28),
        g: Math.round(this.rgb.g * 0.28),
        b: Math.round(this.rgb.b * 0.28),
      };
      this.innerRgb = {
        r: Math.min(255, Math.round(this.rgb.r * 0.95)),
        g: Math.min(255, Math.round(this.rgb.g * 0.95)),
        b: Math.min(255, Math.round(this.rgb.b * 0.95)),
      };
      this.lifetime = 0;
      this.maxLifetime = 8 + Math.random() * 5;
      this.phase = 'growing';
      this.opacity = 1;
      this.pulse = 0;
      this.sway = 0;
      this.bob = 0;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.pulse = Math.sin(t * 1.4 + this.bobPhase) * 0.5 + 0.5;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 12;
      this.sway = Math.sin(t * this.windSpeed + this.windPhase) * this.windAmp;
      this.rotX += this.spinVelX * dt;
      this.rotY += this.spinVelY * dt;
      this.rotZ += this.spinVelZ * dt;

      // 画面上方向へ浮上（y は下向き）。遅すぎると下の画面外に溜まる
      const lift = this.riseSpeed * (0.75 + this.pulse * 0.35);
      this.y -= lift * dt;
      this.x += Math.sin(t * 0.5 + this.windPhase) * 10 * dt;
      if (this.y < -120) {
        this.y = height + 40 + Math.random() * 50;
        this.x = Math.random() * width;
        this.z = (Math.random() - 0.5) * 180;
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
          if (Math.random() < dt * 5.5) this._neonSpark();
          if (this.lifetime > this.maxLifetime * 0.7) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.2;
          if (Math.random() < dt * 4) this._neonSpark();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _neonSpark() {
      const particle = vividRgb(randomPaletteHex(currentPalette));
      const rgb = {
        r: Math.round(particle.r * 0.65 + this.rgb.r * 0.35),
        g: Math.round(particle.g * 0.65 + this.rgb.g * 0.35),
        b: Math.round(particle.b * 0.65 + this.rgb.b * 0.35),
      };
      shards.push({
        x: this.x + (Math.random() - 0.5) * this.size * 0.9,
        y: this.y + (Math.random() - 0.5) * this.size * 0.9,
        z: this.z + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 40,
        vy: -15 - Math.random() * 30,
        vz: (Math.random() - 0.5) * 30,
        rgb,
        opacity: 1,
        glow: 1.5 + Math.random() * 0.6,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    handsAt(t) {
      const sec = (t * this.speedMul + this.timeOffset) % 60;
      const min = ((t * this.speedMul + this.timeOffset) / 60) % 60;
      const hr = ((t * this.speedMul + this.timeOffset) / 3600) % 12;
      return {
        second: -(sec / 60) * Math.PI * 2,
        minute: -(min / 60) * Math.PI * 2,
        hour: -((hr / 12) * Math.PI * 2),
      };
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
      mark.rotX + mark.sway * 0.35,
      mark.rotY,
      mark.rotZ + mark.sway * 0.2,
    );
    const s = mark.size;
    // ほぼ等方スケールで立体感を出す（以前の Z 潰しをやめる）
    root.scale.set(s, s, s * 0.92);

    const hands = mark.handsAt(time);
    hourHold.rotation.z = hands.hour;
    minuteHold.rotation.z = hands.minute;
    secondHold.rotation.z = hands.second;
    root.updateMatrixWorld(true);
  }

  function syncMeshes() {
    if (!faceMesh || !caseMesh || !dialMesh || !hourMesh) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        hide(faceMesh, i);
        hide(caseMesh, i);
        hide(dialMesh, i);
        hide(hourMesh, i);
        hide(minuteMesh, i);
        hide(secondMesh, i);
        continue;
      }
      poseRoot(mark);
      const neon = showColor(mark.rgb, 0.92 + mark.opacity * 0.12);
      const neonPulse = showColor(mark.innerRgb, 0.96 + mark.opacity * 0.08);
      // 文字盤はほぼ透明ガラス、文字・針は黒
      const ink = 0.04 + (1 - mark.opacity) * 0.02;

      dummy.matrix.copy(root.matrixWorld);
      faceMesh.setMatrixAt(i, dummy.matrix);
      faceMesh.setColorAt(i, _color.setRGB(0.92, 0.94, 0.98));

      caseMesh.setMatrixAt(i, dummy.matrix);
      caseMesh.setColorAt(i, _color.setRGB(neonPulse.r, neonPulse.g, neonPulse.b));

      dialMesh.setMatrixAt(i, dummy.matrix);
      dialMesh.setColorAt(i, _color.setRGB(ink, ink, ink * 1.05));

      dummy.matrix.copy(hourHold.matrixWorld);
      hourMesh.setMatrixAt(i, dummy.matrix);
      hourMesh.setColorAt(i, _color.setRGB(ink, ink, ink * 1.05));

      dummy.matrix.copy(minuteHold.matrixWorld);
      minuteMesh.setMatrixAt(i, dummy.matrix);
      minuteMesh.setColorAt(i, _color.setRGB(ink, ink, ink * 1.05));

      dummy.matrix.copy(secondHold.matrixWorld);
      secondMesh.setMatrixAt(i, dummy.matrix);
      secondMesh.setColorAt(i, _color.setRGB(ink * 1.2, ink, ink));
    }

    for (const m of [faceMesh, caseMesh, dialMesh, hourMesh, minuteMesh, secondMesh]) {
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.65 + 0.5 * Math.abs(Math.sin(time * 2.5 + s.phase));
        const c = showColor(s.rgb, pulse * 1.05);
        sparkleField.colors[i * 3] = c.r;
        sparkleField.colors[i * 3 + 1] = c.g;
        sparkleField.colors[i * 3 + 2] = c.b;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, 800);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const twinkle = 0.7 + 0.4 * Math.abs(Math.sin(time * 6 + (p.twinkle || 0)));
        const c = showColor(p.rgb, (p.glow || 1.4) * (0.55 + p.opacity * 0.4) * twinkle);
        fallField.colors[i * 3] = c.r;
        fallField.colors[i * 3 + 1] = c.g;
        fallField.colors[i * 3 + 2] = c.b;
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
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

      faceGeo = buildClockFaceGeometry();
      caseGeo = buildClockCaseGeometry();
      dialGeo = buildClockDialGeometry();
      hourGeo = buildClockHourHandGeometry();
      minuteGeo = buildClockMinuteHandGeometry();
      secondGeo = buildClockSecondHandGeometry();

      // 文字盤: 高透明 / 文字・針: 不透明の黒 / ケース: レインボー
      faceMesh = new THREE.InstancedMesh(faceGeo, makeMat(0.1, false), MAX);
      caseMesh = new THREE.InstancedMesh(caseGeo, makeMat(0.95, false), MAX);
      dialMesh = new THREE.InstancedMesh(dialGeo, makeMat(1, false), MAX);
      hourMesh = new THREE.InstancedMesh(hourGeo, makeMat(1, false), MAX);
      minuteMesh = new THREE.InstancedMesh(minuteGeo, makeMat(1, false), MAX);
      secondMesh = new THREE.InstancedMesh(secondGeo, makeMat(1, false), MAX);

      for (const m of [faceMesh, caseMesh, dialMesh, hourMesh, minuteMesh, secondMesh]) {
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
        m.frustumCulled = false;
        // インスタンス色を確実に有効化
        m.material.vertexColors = false;
        layer.add(m);
      }

      sparkleField = makePoints(100, 6);
      fallField = makePoints(800, 14);
      sparkleField.mat.blending = THREE.AdditiveBlending;
      fallField.mat.blending = THREE.AdditiveBlending;
      sparkleField.mat.opacity = 0.7;
      fallField.mat.opacity = 0.75;
      sparkleField.mat.toneMapped = false;
      fallField.mat.toneMapped = false;
      layer.add(sparkleField.points, fallField.points);

      // 初期は画面内〜やや下から（下外ばかりにしない）
      for (let i = 0; i < 12; i++) {
        spawn(Math.random() * w, height * 0.15 + Math.random() * height * 0.75);
      }
      for (let i = 0; i < 80; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.06 + Math.random() * 0.18),
          phase: Math.random() * Math.PI * 2,
          rgb: vividRgb(randomPaletteHex(currentPalette)),
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
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 40);
        }
      }
      if (Math.random() < dt * 1.3 * (params.speed || 1)) {
        // 半分は画面内、半分は下から浮上
        if (Math.random() < 0.45) {
          spawn(Math.random() * width, Math.random() * height * 0.85);
        } else {
          spawn(Math.random() * width, height + 20 + Math.random() * 40);
        }
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 3);
        for (let i = 0; i < n; i++) {
          spawn(Math.random() * width, height * 0.2 + Math.random() * height * 0.7);
        }
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 8 * dt;
        p.opacity -= dt * 0.1;
        return p.opacity > 0.02 && p.y > -80;
      });
      if (shards.length > 800) shards.splice(0, shards.length - 800);

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 55 * dt;
        s.x += Math.sin(time * 1.2 + s.phase) * 0.2;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
          s.rgb = vividRgb(randomPaletteHex(currentPalette));
        }
      });

      const maxMarks = Math.min(MAX, Math.max(12, Math.floor((params.particleCount || 1030) / 5)));
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
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },
    setPalette(name) {
      currentPalette = name;
    },

    samplePoints(count) {
      const out = new Float32Array(count * 3);
      const n = marks.length;
      if (!n) {
        for (let i = 0; i < count; i++) {
          const a = Math.random() * Math.PI * 2;
          const r = Math.random() * 50;
          out[i * 3] = Math.cos(a) * r;
          out[i * 3 + 1] = Math.sin(a) * r;
          out[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return out;
      }
      for (let i = 0; i < count; i++) {
        const m = marks[i % n];
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * m.size * 0.45;
        const wpos = toWorld(m.x + Math.cos(a) * r, m.y + Math.sin(a) * r, m.z, width, height);
        out[i * 3] = wpos.x;
        out[i * 3 + 1] = wpos.y;
        out[i * 3 + 2] = wpos.z;
      }
      return out;
    },

    destroy() {
      marks = [];
      shards = [];
      sparkles = [];
      faceGeo?.dispose();
      caseGeo?.dispose();
      dialGeo?.dispose();
      hourGeo?.dispose();
      minuteGeo?.dispose();
      secondGeo?.dispose();
      faceMesh = null;
      caseMesh = null;
      dialMesh = null;
      hourMesh = null;
      minuteMesh = null;
      secondMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
