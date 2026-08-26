import * as THREE from 'three';
import { getPaletteColors } from '../palettes.js';
import { disposeObject } from '../space3d.js';

/**
 * かわいい立体イラスト
 * 配色は花びらと同じ発想: 個体ごとパレット1色（＋同系の薄い副色だけ）
 */

/** 形態ごとの代表色インデックス（パレット内） */
const FORM_HUE = {
  letter: 1,     // 電光青
  jellyfish: 12, // 水色寄り青
  hourglass: 4,  // バイオレット
  tadpole: 2,    // ミント
  brain: 0,      // マゼンタ
  angel: 8,      // 暖色（髪・光輪）／体は薄い同系
};

function P(name, i = 0) {
  const c = getPaletteColors(name || 'rainbow');
  return c[((i % c.length) + c.length) % c.length];
}

function formHex(palette, formId) {
  return P(palette, FORM_HUE[formId] ?? 0);
}

function col(hex) {
  return new THREE.Color(hex);
}

/** 同系の明るめ／暗め */
function tint(hex, lighten = 0.35) {
  const c = col(hex);
  if (lighten >= 0) c.lerp(col('#ffffff'), lighten);
  else c.lerp(col('#201028'), -lighten);
  return `#${c.getHexString()}`;
}

/** 花びら風: ほどよい発光、どぎつくしない */
function petalMat(hex, opts = {}) {
  const c = col(hex);
  return new THREE.MeshStandardMaterial({
    color: c,
    roughness: opts.roughness ?? 0.62,
    metalness: 0,
    emissive: c.clone().multiplyScalar(opts.em ?? 0.28),
    emissiveIntensity: opts.ei ?? 0.55,
    transparent: opts.opacity != null && opts.opacity < 1,
    opacity: opts.opacity ?? 1,
    depthWrite: opts.opacity == null || opts.opacity >= 0.95,
  });
}

function jellyMat(hex, opacity = 0.48) {
  const c = col(hex);
  return new THREE.MeshPhysicalMaterial({
    color: c,
    roughness: 0.2,
    metalness: 0,
    transmission: 0.62,
    thickness: 6,
    transparent: true,
    opacity,
    clearcoat: 0.5,
    clearcoatRoughness: 0.4,
    emissive: c.clone().multiplyScalar(0.15),
    emissiveIntensity: 0.35,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}

function setMatHex(mat, hex) {
  mat.color.set(hex);
  if (mat.emissive) mat.emissive.copy(col(hex).multiplyScalar(0.28));
}

function softLights(group) {
  const a = new THREE.PointLight(0xffffff, 1.15, 1000);
  a.position.set(70, 110, 200);
  const b = new THREE.PointLight(0xe8f0ff, 0.4, 750);
  b.position.set(-110, 20, 100);
  group.add(a, b);
}

function outlineOf(mesh, hex = '#3a3050', inflate = 1.045) {
  const m = new THREE.Mesh(
    mesh.geometry,
    new THREE.MeshBasicMaterial({ color: col(hex), side: THREE.BackSide }),
  );
  m.scale.setScalar(inflate);
  mesh.add(m);
  return m;
}

function dotEyes(parent, y, z, spread = 8, size = 2.6) {
  const mat = new THREE.MeshBasicMaterial({ color: 0x2a2430 });
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(size, 14, 14), mat);
    eye.position.set(s * spread * 0.5, y, z);
    parent.add(eye);
  }
}

function blush(parent, y, z, spread = 16, size = 5) {
  const mat = petalMat('#f870b8', { opacity: 0.42, roughness: 0.88, em: 0.2, ei: 0.35 });
  for (const s of [-1, 1]) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(size, 14, 14), mat);
    b.position.set(s * spread * 0.5, y, z);
    parent.add(b);
  }
}

function gloss(parent, x, y, z, size = 4) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(size, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.82 }),
  );
  m.position.set(x, y, z);
  parent.add(m);
}

function sampleBoxSurface(count, sx, sy, sz, out, offset = 0) {
  for (let i = 0; i < count; i++) {
    const face = Math.floor(Math.random() * 6);
    let x = (Math.random() - 0.5) * sx;
    let y = (Math.random() - 0.5) * sy;
    let z = (Math.random() - 0.5) * sz;
    if (face === 0) x = sx * 0.5;
    if (face === 1) x = -sx * 0.5;
    if (face === 2) y = sy * 0.5;
    if (face === 3) y = -sy * 0.5;
    if (face === 4) z = sz * 0.5;
    if (face === 5) z = -sz * 0.5;
    const i3 = (offset + i) * 3;
    out[i3] = x; out[i3 + 1] = y; out[i3 + 2] = z;
  }
}

function rotatePointsZ(positions, start, n, angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  for (let i = 0; i < n; i++) {
    const i3 = (start + i) * 3;
    const x = positions[i3];
    const y = positions[i3 + 1];
    positions[i3] = x * c - y * s;
    positions[i3 + 1] = x * s + y * c;
  }
}

/** ——— X: 青1色（角ばった立体） ——— */
export function createLetterX(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const main = formHex(palette, 'letter');
  const mat = petalMat(main);

  // 厚みのある角棒＋両端を少し面取りした立体
  const makeBeam = (m) => {
    const g = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(20, 100, 28), m);
    outlineOf(shaft, tint(main, -0.45), 1.035);
    // 先端の斜めカット風（くさび）
    const tipMat = m;
    const tipA = new THREE.Mesh(new THREE.BoxGeometry(20, 22, 28), tipMat);
    tipA.position.y = 58;
    tipA.rotation.x = 0.35;
    tipA.scale.set(1, 1, 0.85);
    const tipB = new THREE.Mesh(new THREE.BoxGeometry(20, 22, 28), tipMat);
    tipB.position.y = -58;
    tipB.rotation.x = -0.35;
    tipB.scale.set(1, 1, 0.85);
    outlineOf(tipA, tint(main, -0.45), 1.035);
    outlineOf(tipB, tint(main, -0.45), 1.035);
    g.add(shaft, tipA, tipB);
    return g;
  };

  const a = makeBeam(mat);
  const b = makeBeam(mat.clone());
  a.rotation.z = Math.PI / 4;
  b.rotation.z = -Math.PI / 4;

  // 交差部の立体ブロック
  const core = new THREE.Mesh(new THREE.BoxGeometry(32, 32, 36), petalMat(tint(main, 0.12)));
  outlineOf(core, tint(main, -0.45), 1.03);
  gloss(core, -6, 8, 18, 5);

  group.add(a, b, core);

  return {
    group,
    update(_dt, time) {
      group.rotation.y = time * 0.4;
      group.rotation.x = Math.sin(time * 0.45) * 0.15;
      group.rotation.z = Math.cos(time * 0.3) * 0.06;
    },
    setPalette(p) {
      const m = formHex(p, 'letter');
      const paint = (root) => {
        root.traverse((ch) => {
          if (ch.isMesh && ch.material && ch.material.side !== THREE.BackSide) {
            setMatHex(ch.material, ch === core ? tint(m, 0.12) : m);
          }
        });
      };
      paint(a);
      paint(b);
      setMatHex(core.material, tint(m, 0.12));
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      const half = Math.floor(count / 2);
      sampleBoxSurface(half, 20, 118, 28, out, 0);
      rotatePointsZ(out, 0, half, Math.PI / 4);
      sampleBoxSurface(count - half, 20, 118, 28, out, half);
      rotatePointsZ(out, half, count - half, -Math.PI / 4);
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

/** ——— クラゲ: 水色1色 ——— */
export function createJellyfish(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const main = formHex(palette, 'jellyfish');
  const lite = tint(main, 0.22);

  const bellMat = jellyMat(main, 0.42);
  const bell = new THREE.Mesh(
    new THREE.SphereGeometry(50, 48, 36, 0, Math.PI * 2, 0, Math.PI * 0.68),
    bellMat,
  );
  bell.scale.set(1.12, 0.95, 1.12);
  bell.position.y = 26;
  // 半透明なので太いアウトラインは弱く
  outlineOf(bell, tint(main, -0.25), 1.015);
  gloss(bell, -16, 18, 32, 10);
  gloss(bell, 8, 10, 36, 5);
  group.add(bell);

  const rim = new THREE.Group();
  rim.position.y = 2;
  const rimMat = jellyMat(lite, 0.38);
  for (let i = 0; i < 12; i++) {
    const ang = (i / 12) * Math.PI * 2;
    const bump = new THREE.Mesh(new THREE.SphereGeometry(11, 18, 14), rimMat.clone());
    bump.position.set(Math.cos(ang) * 46, Math.sin(i * 1.7) * 2, Math.sin(ang) * 46);
    bump.scale.set(1.05, 0.65, 1.05);
    rim.add(bump);
  }
  group.add(rim);

  const face = new THREE.Group();
  face.position.set(0, 28, 44);
  dotEyes(face, 3, 2, 16, 3.4);
  blush(face, -3, 0, 28, 6.5);
  group.add(face);

  const tentMat = jellyMat(main, 0.36);
  const tentacles = [];
  for (let i = 0; i < 9; i++) {
    const ang = (i / 9) * Math.PI * 2;
    const root = new THREE.Group();
    root.position.set(Math.cos(ang) * 20, 0, Math.sin(ang) * 20);
    root.userData = { phase: i * 0.65, ang };
    const len = 58 + (i % 3) * 6;
    const beads = [];
    for (let s = 0; s < 7; s++) {
      const t = (s + 0.5) / 7;
      const rad = 8.5 * (1 - t * 0.4);
      const bead = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 14), tentMat.clone());
      bead.scale.setScalar(rad);
      bead.position.set(Math.cos(ang) * t * t * 16, -t * len, Math.sin(ang) * t * t * 16);
      root.add(bead);
      beads.push(bead);
    }
    root.userData.beads = beads;
    root.userData.len = len;
    group.add(root);
    tentacles.push(root);
  }

  const bubbles = [];
  const bubMat = jellyMat(lite, 0.28);
  for (let i = 0; i < 6; i++) {
    const bub = new THREE.Mesh(new THREE.SphereGeometry(5 + (i % 3) * 2.2, 16, 16), bubMat.clone());
    bub.position.set((i - 2.5) * 20, 48 + (i % 3) * 14, 18 + (i % 2) * 12);
    gloss(bub, -1.2, 1.5, 3, 1.6);
    group.add(bub);
    bubbles.push(bub);
  }

  return {
    group,
    update(_dt, time) {
      group.position.y = Math.sin(time * 1.1) * 10;
      group.rotation.y = Math.sin(time * 0.22) * 0.12;
      const pulse = Math.sin(time * 2.0);
      bell.scale.y = 0.95 + pulse * 0.05;
      bell.scale.x = bell.scale.z = 1.12 - pulse * 0.03;
      for (const root of tentacles) {
        const { phase, ang, beads, len } = root.userData;
        for (let s = 0; s < beads.length; s++) {
          const t = (s + 0.5) / beads.length;
          const sway = Math.sin(time * 2.1 + phase + t * 2.4) * t * 9;
          beads[s].position.set(
            Math.cos(ang) * (t * t * 16) + Math.cos(ang + 1.5) * sway * 0.35,
            -t * len + Math.sin(time * 1.4 + phase + t) * 2,
            Math.sin(ang) * (t * t * 16) + sway * 0.5,
          );
        }
      }
      bubbles.forEach((b, i) => {
        b.position.y += Math.sin(time * 0.9 + i) * 0.025;
        b.position.x += Math.cos(time * 0.6 + i) * 0.03;
      });
    },
    setPalette(p) {
      const m = formHex(p, 'jellyfish');
      const l = tint(m, 0.22);
      setMatHex(bellMat, m);
      rim.children.forEach((ch) => setMatHex(ch.material, l));
      tentacles.forEach((root) => root.userData.beads.forEach((bead) => setMatHex(bead.material, m)));
      bubbles.forEach((b) => setMatHex(b.material, l));
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        if (i < count * 0.45) {
          const u = Math.random() * Math.PI * 2;
          const v = Math.random() * Math.PI * 0.6;
          out[i * 3] = Math.sin(v) * Math.cos(u) * 50 * 1.12;
          out[i * 3 + 1] = 26 + Math.cos(v) * 50 * 0.95;
          out[i * 3 + 2] = Math.sin(v) * Math.sin(u) * 50 * 1.12;
        } else {
          const ti = Math.floor(Math.random() * 9);
          const ang = (ti / 9) * Math.PI * 2;
          const t = Math.random();
          out[i * 3] = Math.cos(ang) * (20 + t * 16);
          out[i * 3 + 1] = -t * 60;
          out[i * 3 + 2] = Math.sin(ang) * (20 + t * 16);
        }
      }
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

/** ——— 砂時計: 紫＋同系の薄いガラス ——— */
export function createHourglass(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const main = formHex(palette, 'hourglass');
  const lite = tint(main, 0.4);

  const glassM = jellyMat(lite, 0.5);
  const profile = [
    new THREE.Vector2(0.5, -50), new THREE.Vector2(32, -46), new THREE.Vector2(36, -24),
    new THREE.Vector2(12, -5), new THREE.Vector2(5, 0), new THREE.Vector2(12, 5),
    new THREE.Vector2(36, 24), new THREE.Vector2(32, 46), new THREE.Vector2(0.5, 50),
  ];
  const glass = new THREE.Mesh(new THREE.LatheGeometry(profile, 48), glassM);
  outlineOf(glass, tint(main, -0.35), 1.03);
  group.add(glass);

  const sandM = petalMat(main, { roughness: 0.85, ei: 0.4 });
  const sandTop = new THREE.Mesh(new THREE.ConeGeometry(22, 16, 24), sandM);
  sandTop.rotation.x = Math.PI;
  sandTop.position.y = 24;
  const sandBot = new THREE.Mesh(new THREE.ConeGeometry(28, 22, 24), sandM.clone());
  sandBot.position.y = -30;
  group.add(sandTop, sandBot);

  const frameM = petalMat(main);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(38, 38, 10, 32), frameM);
  top.position.y = 54;
  outlineOf(top, tint(main, -0.4), 1.04);
  const bot = new THREE.Mesh(new THREE.CylinderGeometry(38, 38, 10, 32), frameM.clone());
  bot.position.y = -54;
  outlineOf(bot, tint(main, -0.4), 1.04);
  group.add(top, bot);
  const pillars = [];
  for (let i = 0; i < 3; i++) {
    const ang = (i / 3) * Math.PI * 2;
    const p = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 100, 6, 10), frameM.clone());
    p.position.set(Math.cos(ang) * 36, 0, Math.sin(ang) * 36);
    group.add(p);
    pillars.push(p);
  }

  const sandCount = 280;
  const sandPos = new Float32Array(sandCount * 3);
  const sandVel = new Float32Array(sandCount);
  for (let i = 0; i < sandCount; i++) {
    sandPos[i * 3] = (Math.random() - 0.5) * 14;
    sandPos[i * 3 + 1] = 8 + Math.random() * 28;
    sandPos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    sandVel[i] = 20 + Math.random() * 25;
  }
  const sandGeo = new THREE.BufferGeometry();
  sandGeo.setAttribute('position', new THREE.BufferAttribute(sandPos, 3));
  const sandPts = new THREE.Points(sandGeo, new THREE.PointsMaterial({
    color: col(main),
    size: 3,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
    depthWrite: false,
  }));
  group.add(sandPts);

  return {
    group,
    update(dt, time) {
      group.rotation.y = time * 0.25;
      sandTop.scale.y = 0.8 + Math.sin(time * 0.4) * 0.15;
      for (let i = 0; i < sandCount; i++) {
        sandPos[i * 3 + 1] -= sandVel[i] * dt;
        const y = sandPos[i * 3 + 1];
        const pinch = Math.max(1.5, 4 + Math.abs(y) * 0.18);
        sandPos[i * 3] *= 0.985;
        sandPos[i * 3 + 2] *= 0.985;
        if (Math.abs(sandPos[i * 3]) > pinch) sandPos[i * 3] *= 0.9;
        if (Math.abs(sandPos[i * 3 + 2]) > pinch) sandPos[i * 3 + 2] *= 0.9;
        if (y < -44) {
          sandPos[i * 3] = (Math.random() - 0.5) * 16;
          sandPos[i * 3 + 1] = 12 + Math.random() * 26;
          sandPos[i * 3 + 2] = (Math.random() - 0.5) * 16;
        }
      }
      sandGeo.attributes.position.needsUpdate = true;
    },
    setPalette(p) {
      const m = formHex(p, 'hourglass');
      const l = tint(m, 0.4);
      setMatHex(glassM, l);
      setMatHex(sandM, m);
      setMatHex(sandBot.material, m);
      setMatHex(frameM, m);
      setMatHex(top.material, m);
      setMatHex(bot.material, m);
      pillars.forEach((pil) => setMatHex(pil.material, m));
      sandPts.material.color.set(m);
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const t = Math.random() * 2 - 1;
        const y = t * 48;
        const absT = Math.abs(t);
        const r = absT < 0.12 ? 5 + absT * 40 : 14 + (absT - 0.12) * 30;
        const u = Math.random() * Math.PI * 2;
        out[i * 3] = Math.cos(u) * r;
        out[i * 3 + 1] = y;
        out[i * 3 + 2] = Math.sin(u) * r;
      }
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

/** ——— オタマ: ミント1色・尾は無地でゆるく ——— */
export function createTadpole(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const main = formHex(palette, 'tadpole');
  const lite = tint(main, 0.25);

  const bodyMat = petalMat(main);
  const body = new THREE.Mesh(new THREE.SphereGeometry(38, 40, 32), bodyMat);
  body.scale.set(1.35, 1.08, 1.12);
  body.position.set(-8, 0, 0);
  outlineOf(body, tint(main, -0.4), 1.04);
  gloss(body, -6, 16, 26, 8);
  gloss(body, 10, 10, 28, 4.5);
  group.add(body);

  const belly = new THREE.Mesh(
    new THREE.SphereGeometry(22, 28, 22),
    petalMat(lite, { opacity: 0.92 }),
  );
  belly.scale.set(1.15, 0.85, 1);
  belly.position.set(-4, -12, 8);
  group.add(belly);

  const face = new THREE.Group();
  face.position.set(10, 10, 30);
  dotEyes(face, 2, 0, 12, 3.6);
  blush(face, -6, -2, 18, 7);
  group.add(face);

  // 無地の一本尾・先端は丸めずスッと尖る
  const tailLen = 130;
  const segsX = 28;
  const segsY = 6;
  const segsZ = 4;
  const tailGeo = new THREE.BoxGeometry(tailLen, 1, 1, segsX, segsY, segsZ);
  const base = Float32Array.from(tailGeo.attributes.position.array);
  const posAttr = tailGeo.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const x = base[i * 3];
    const along = (x + tailLen * 0.5) / tailLen; // 0付け根 → 1先端
    // 付け根は太く、先は直線的に細く（丸く閉じない）
    const taper = Math.max(0.02, 1 - along);
    const halfH = 26 * taper;
    const halfD = 10 * taper;
    const uy = base[i * 3 + 1] / 0.5;
    const uz = base[i * 3 + 2] / 0.5;
    const lift = Math.sin(along * Math.PI * 0.55) * 10;
    // 先端側を少し伸ばす
    const stretch = along > 0.85 ? (along - 0.85) * 18 : 0;
    base[i * 3] = x + stretch;
    base[i * 3 + 1] = uy * halfH + lift;
    base[i * 3 + 2] = uz * halfD;
  }
  posAttr.array.set(base);
  posAttr.needsUpdate = true;
  tailGeo.computeVertexNormals();

  const tailMat = petalMat(main);
  const tail = new THREE.Mesh(tailGeo, tailMat);
  tail.position.set(48, 2, 0);
  outlineOf(tail, tint(main, -0.4), 1.02);
  group.add(tail);

  return {
    group,
    update(_dt, time) {
      group.position.y = Math.sin(time * 1.1) * 5;
      group.rotation.y = Math.sin(time * 0.45) * 0.15;
      const swim = time * 3.6;
      const arr = posAttr.array;
      for (let i = 0; i < posAttr.count; i++) {
        const x = base[i * 3];
        const along = Math.min(1, (x + tailLen * 0.5) / (tailLen + 8));
        // 付け根は小さく、先ほど左右に大きく振る
        const wave = Math.sin(swim - along * 2.8) * along * along * 28;
        arr[i * 3] = base[i * 3];
        arr[i * 3 + 1] = base[i * 3 + 1];
        arr[i * 3 + 2] = base[i * 3 + 2] + wave;
      }
      posAttr.needsUpdate = true;
      tailGeo.computeVertexNormals();
    },
    setPalette(p) {
      const m = formHex(p, 'tadpole');
      const l = tint(m, 0.25);
      setMatHex(bodyMat, m);
      setMatHex(belly.material, l);
      setMatHex(tailMat, m);
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        if (i < count * 0.6) {
          const u = Math.random() * Math.PI * 2;
          const v = Math.acos(2 * Math.random() - 1);
          out[i * 3] = -8 + Math.sin(v) * Math.cos(u) * 38 * 1.35;
          out[i * 3 + 1] = Math.sin(v) * Math.sin(u) * 38 * 1.08;
          out[i * 3 + 2] = Math.cos(v) * 38 * 1.12;
        } else {
          const t = Math.random();
          out[i * 3] = 48 + (t - 0.5) * tailLen;
          out[i * 3 + 1] = 2 + Math.sin(t * Math.PI * 0.65) * 12;
          out[i * 3 + 2] = (Math.random() - 0.5) * 6;
        }
      }
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

/** ——— 脳: いびつな円の上三分の一＋ヒダ ——— */
function warpBrainPoint(x, y, z, seed = 0) {
  // 外形を少しゆがませる
  const n1 = Math.sin(x * 0.05 + seed) * Math.cos(z * 0.04);
  const n2 = Math.sin(z * 0.06 + x * 0.03 + 1.7);
  const n3 = Math.cos(x * 0.04 - z * 0.05 + seed * 0.5);
  return {
    x: x * (1 + n1 * 0.1 + n3 * 0.06),
    y: y * (1 + n2 * 0.08) + n1 * 3,
    z: z * (1 + n2 * 0.1 + n1 * 0.05),
  };
}

export function createBrain(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const main = formHex(palette, 'brain');
  const deep = tint(main, -0.3);

  const baseMat = petalMat(main, { roughness: 0.72 });
  const creaseMat = petalMat(deep, { roughness: 0.68, ei: 0.4 });

  // 半円に近いが、ヒダでいびつになるドーム
  const hemiGeo = new THREE.SphereGeometry(52, 56, 40, 0, Math.PI * 2, 0, Math.PI * 0.52);
  const pos = hemiGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const w = warpBrainPoint(x, y, z, 0.8);
    // 半円寄り（縦をつぶしすぎない）＋わずかないびつ
    pos.setXYZ(i, w.x * 1.12, w.y * 0.92 - 2, w.z * 1.08);
  }
  pos.needsUpdate = true;
  hemiGeo.computeVertexNormals();

  const hemi = new THREE.Mesh(hemiGeo, baseMat);
  outlineOf(hemi, tint(main, -0.42), 1.02);
  group.add(hemi);

  // 底をいびつに閉じる
  const bottom = new THREE.Mesh(
    new THREE.SphereGeometry(48, 40, 16, 0, Math.PI * 2, Math.PI * 0.42, Math.PI * 0.2),
    baseMat,
  );
  const bpos = bottom.geometry.attributes.position;
  for (let i = 0; i < bpos.count; i++) {
    const w = warpBrainPoint(bpos.getX(i), bpos.getY(i), bpos.getZ(i), 1.4);
    bpos.setXYZ(i, w.x * 1.1, w.y * 0.7 - 4, w.z * 1.05);
  }
  bpos.needsUpdate = true;
  bottom.geometry.computeVertexNormals();
  group.add(bottom);

  // 縁のいびつなぽこぽこ
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const rr = 48 + Math.sin(i * 2.3) * 6;
    const bump = new THREE.Mesh(new THREE.SphereGeometry(6 + (i % 3), 12, 12), baseMat);
    bump.position.set(Math.cos(a) * rr * 1.05, -4 + Math.sin(i) * 3, Math.sin(a) * rr * 0.98);
    bump.scale.set(1.15, 0.6, 1.05);
    group.add(bump);
  }

  const folds = [];
  const creaseFolds = [];
  const hiFolds = [];

  const onDome = (lon, lat, rBoost = 0) => {
    const r = 51 + rBoost;
    const p = warpBrainPoint(
      Math.sin(lat) * Math.cos(lon) * r * 1.12,
      Math.cos(lat) * r * 0.92 - 2,
      Math.sin(lat) * Math.sin(lon) * r * 1.08,
      lon + lat,
    );
    return new THREE.Vector3(p.x * 1.05, p.y * 1.05 + 1, p.z * 1.05);
  };

  // 経線ヒダ（てっぺん→裾まで）
  for (let i = 0; i < 28; i++) {
    const lon = (i / 28) * Math.PI * 2;
    const pts = [];
    for (let s = 0; s <= 18; s++) {
      const t = s / 18;
      const lat = t * Math.PI * 0.58; // 下端近くまで
      const lonW = lon + Math.sin(t * Math.PI * 3.8 + i) * 0.16;
      pts.push(onDome(lonW, lat, Math.sin(t * 5 + i) * 2));
    }
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, 2.5, 8, false),
      creaseMat.clone(),
    );
    group.add(tube);
    creaseFolds.push(tube);
    folds.push(tube);
  }

  // 緯線ヒダ（下のほうまでぎっしり）
  for (let j = 0; j < 18; j++) {
    const lat = 0.06 + j * 0.055;
    const pts = [];
    for (let s = 0; s <= 40; s++) {
      const t = s / 40;
      const lon = t * Math.PI * 2;
      const latW = lat + Math.sin(lon * 4 + j) * 0.05;
      pts.push(onDome(lon, latW, Math.sin(lon * 3 + j) * 1.5));
    }
    pts.push(pts[0].clone());
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 56, 2.2, 8, false),
      creaseMat.clone(),
    );
    group.add(tube);
    creaseFolds.push(tube);
    folds.push(tube);
  }

  // U字ヒダ（下側帯も含めて増量）
  for (let i = 0; i < 32; i++) {
    const lon0 = (i / 32) * Math.PI * 2 + 0.15;
    const lat0 = 0.08 + (i % 8) * 0.075;
    const pts = [];
    for (let s = 0; s <= 10; s++) {
      const t = s / 10;
      const a = t * Math.PI * 1.2;
      pts.push(onDome(lon0 + Math.cos(a) * 0.34, lat0 + Math.sin(a) * 0.22, 1));
    }
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 14, 2.0, 6, false),
      creaseMat.clone(),
    );
    group.add(tube);
    creaseFolds.push(tube);
    folds.push(tube);
  }

  // 裾まわり専用の短いヒダ（下までぎっしり）
  for (let i = 0; i < 24; i++) {
    const lon0 = (i / 24) * Math.PI * 2;
    const pts = [];
    for (let s = 0; s <= 8; s++) {
      const t = s / 8;
      const lat = 0.42 + t * 0.16;
      const lon = lon0 + Math.sin(t * 3 + i) * 0.2;
      pts.push(onDome(lon, lat, 1.5));
    }
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 2.3, 6, false),
      creaseMat.clone(),
    );
    group.add(tube);
    creaseFolds.push(tube);
    folds.push(tube);
  }

  const hiMat = petalMat(tint(main, 0.35), { ei: 0.4, roughness: 0.55 });
  for (let i = 0; i < 18; i++) {
    const lon = (i / 18) * Math.PI * 2 + 0.12;
    const pts = [];
    for (let s = 0; s <= 12; s++) {
      const t = s / 12;
      pts.push(onDome(lon + Math.sin(t * 4) * 0.1, t * Math.PI * 0.55, 2.5));
    }
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 18, 1.1, 6, false),
      hiMat.clone(),
    );
    group.add(tube);
    hiFolds.push(tube);
    folds.push(tube);
  }

  // 浅い中央のへこみ（きっちり左右対称にしない）
  const dent = new THREE.Mesh(
    new THREE.SphereGeometry(10, 16, 12),
    petalMat(deep, { roughness: 0.85, ei: 0.15 }),
  );
  dent.position.set(3, 14, 10);
  dent.scale.set(0.45, 0.4, 1.6);
  group.add(dent);

  gloss(hemi, -14, 22, 30, 6);

  return {
    group,
    update(_dt, time) {
      const pulse = 1 + Math.sin(time * 2.0) * 0.02;
      group.scale.setScalar(pulse);
      group.rotation.y = Math.sin(time * 0.32) * 0.35;
      group.rotation.x = 0.22 + Math.sin(time * 0.4) * 0.05;
    },
    setPalette(p) {
      const m = formHex(p, 'brain');
      const d = tint(m, -0.3);
      const h = tint(m, 0.35);
      setMatHex(baseMat, m);
      setMatHex(hemi.material, m);
      setMatHex(bottom.material, m);
      creaseFolds.forEach((f) => setMatHex(f.material, d));
      hiFolds.forEach((f) => setMatHex(f.material, h));
      setMatHex(dent.material, d);
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const lon = Math.random() * Math.PI * 2;
        const lat = Math.random() * Math.PI * 0.52;
        const p = onDome(lon, lat, 0);
        out[i * 3] = p.x;
        out[i * 3 + 1] = p.y;
        out[i * 3 + 2] = p.z;
      }
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

/** ——— 天使: 暖色（髪・光輪）＋薄い同系（服・翼）の2色 ——— */
export function createAngel(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const accent = formHex(palette, 'angel');
  const soft = tint(accent, 0.55);

  const skin = petalMat('#ffdcc8', { roughness: 0.7, ei: 0.25, em: 0.12 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(30, 36, 32), skin);
  head.position.y = 44;
  outlineOf(head, '#6b5060', 1.03);
  group.add(head);

  const hair = new THREE.Group();
  hair.position.y = 50;
  const hairMat = petalMat(accent);
  const hairBlobs = [
    [0, 20, 0, 24], [-18, 14, 10, 17], [18, 14, 10, 17],
    [-24, 4, 0, 15], [24, 4, 0, 15], [0, 10, -18, 16],
    [-12, 18, -12, 14], [12, 18, -12, 14], [0, 26, 8, 13],
  ];
  for (const [x, y, z, r] of hairBlobs) {
    const blob = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 18), hairMat.clone());
    blob.position.set(x, y, z);
    outlineOf(blob, tint(accent, -0.35), 1.03);
    gloss(blob, -r * 0.25, r * 0.2, r * 0.5, r * 0.2);
    hair.add(blob);
  }
  group.add(hair);

  const face = new THREE.Group();
  face.position.set(0, 42, 26);
  dotEyes(face, 2, 0, 14, 3);
  blush(face, -5, 0, 24, 6);
  const mouth = new THREE.Mesh(
    new THREE.TorusGeometry(2.4, 0.6, 8, 12, Math.PI),
    petalMat(tint(accent, -0.15), { ei: 0.3 }),
  );
  mouth.rotation.x = Math.PI;
  mouth.position.set(0, -9, 1);
  face.add(mouth);
  group.add(face);

  for (const s of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(5.5, 16, 6, 10), skin.clone());
    arm.position.set(s * 24, 14, 0);
    arm.rotation.z = s * 0.95;
    outlineOf(arm, '#6b5060', 1.04);
    group.add(arm);
  }
  for (const s of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(6, 12, 6, 10), skin.clone());
    leg.position.set(s * 11, -30, 2);
    outlineOf(leg, '#6b5060', 1.04);
    group.add(leg);
  }

  const dressM = petalMat(soft);
  const dress = new THREE.Mesh(new THREE.ConeGeometry(34, 50, 28, 1, true), dressM);
  dress.position.y = -4;
  outlineOf(dress, tint(accent, -0.3), 1.03);
  const collar = new THREE.Mesh(new THREE.SphereGeometry(17, 24, 16), dressM.clone());
  collar.scale.set(1.15, 0.55, 1);
  collar.position.y = 18;
  group.add(dress, collar);

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(24, 2.2, 12, 40),
    petalMat(accent, { roughness: 0.4, ei: 0.7 }),
  );
  halo.rotation.x = Math.PI / 2.2;
  halo.position.y = 92;
  group.add(halo);

  // 背中あたりに付く広がる翼（上付きすぎない）
  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 8);
  wingShape.quadraticCurveTo(28, 2, 54, -4);
  wingShape.quadraticCurveTo(70, 6, 66, 28);
  wingShape.quadraticCurveTo(48, 36, 30, 40);
  wingShape.quadraticCurveTo(12, 32, 0, 8);
  const wingGeo = new THREE.ExtrudeGeometry(wingShape, {
    depth: 1.2, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.5, bevelSegments: 1, curveSegments: 16,
  });
  wingGeo.translate(0, 0, -0.6);
  const wingM = petalMat(soft, { opacity: 0.78, roughness: 0.62 });
  const wingL = new THREE.Mesh(wingGeo, wingM);
  const wingR = new THREE.Mesh(wingGeo, wingM.clone());
  wingL.position.set(-10, -2, -6);
  wingR.position.set(10, -2, -6);
  wingL.scale.set(-1.15, 1.05, 0.55);
  wingR.scale.set(1.15, 1.05, 0.55);
  // 大きく開く
  wingL.rotation.y = 1.05;
  wingR.rotation.y = -1.05;
  wingL.rotation.z = 0.15;
  wingR.rotation.z = -0.15;
  outlineOf(wingL, tint(accent, -0.3), 1.03);
  outlineOf(wingR, tint(accent, -0.3), 1.03);
  gloss(wingL, 8, 28, 3, 4);
  gloss(wingR, -8, 28, 3, 4);
  group.add(wingL, wingR);

  return {
    group,
    update(_dt, time) {
      group.position.y = Math.sin(time * 1.15) * 12;
      group.rotation.y = Math.sin(time * 0.32) * 0.2;
      const flap = Math.sin(time * 2.4) * 0.22;
      wingL.rotation.y = 1.05 + flap;
      wingR.rotation.y = -1.05 - flap;
      wingL.rotation.z = 0.15 + flap * 0.12;
      wingR.rotation.z = -0.15 - flap * 0.12;
      halo.rotation.z = time * 0.45;
      hair.rotation.y = Math.sin(time * 0.7) * 0.05;
      dress.scale.x = 1 + Math.sin(time * 1.4) * 0.025;
      dress.scale.z = 1 + Math.cos(time * 1.4) * 0.025;
    },
    setPalette(p) {
      const a = formHex(p, 'angel');
      const s = tint(a, 0.55);
      hair.children.forEach((blob) => {
        if (blob.isMesh) setMatHex(blob.material, a);
      });
      setMatHex(halo.material, a);
      setMatHex(dressM, s);
      setMatHex(dress.material, s);
      setMatHex(collar.material, s);
      setMatHex(wingL.material, s);
      setMatHex(wingR.material, s);
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        if (i < count * 0.4) {
          out[i * 3] = (Math.random() - 0.5) * 55;
          out[i * 3 + 1] = -22 + Math.random() * 95;
          out[i * 3 + 2] = (Math.random() - 0.5) * 32;
        } else {
          const side = i % 2 ? 1 : -1;
          const u = Math.random();
          out[i * 3] = side * (14 + u * 42);
          out[i * 3 + 1] = 12 + Math.random() * 42;
          out[i * 3 + 2] = -12 + (Math.random() - 0.5) * 14;
        }
      }
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

export function createSolidForm(id, palette) {
  switch (id) {
    case 'letter': return createLetterX(palette);
    case 'jellyfish': return createJellyfish(palette);
    case 'hourglass': return createHourglass(palette);
    case 'tadpole': return createTadpole(palette);
    case 'brain': return createBrain(palette);
    case 'angel': return createAngel(palette);
    default: return null;
  }
}
