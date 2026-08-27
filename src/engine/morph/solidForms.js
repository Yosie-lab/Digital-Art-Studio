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
  clock: 2,      // シアン寄りネオン
  tadpole: 2,    // ミント
  music: 1,      // 電光青（文字・花びら系）
  brain: 0,      // 旧: 互換用
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
  const raw = formHex(palette, 'letter');
  // アルファベットは彩度をやや抑える（少し戻し）
  const main = tint(raw, 0.22);
  const mat = petalMat(main, { opacity: 0.65, roughness: 0.5, ei: 0.28 });

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
      // 上下・左右に大きくタンブル（連続スピンではなく振り）
      group.rotation.x = Math.sin(time * 0.55) * 0.7;
      group.rotation.y = Math.sin(time * 0.42) * 0.95;
      group.rotation.z = Math.sin(time * 0.33) * 0.35;
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

  const NEON = ['#00e8ff', '#00b7ff', '#2f6bff', '#1a48ff', '#4d7cff', '#7c4dff', '#ff2bd6', '#b026ff'];
  const NEON_WEIGHTED = [
    '#00e8ff', '#00e8ff', '#00b7ff', '#00b7ff', '#2f6bff', '#2f6bff', '#2f6bff',
    '#1a48ff', '#1a48ff', '#4d7cff', '#7c4dff', '#ff2bd6', '#b026ff',
  ];
  const neonHex = NEON_WEIGHTED[Math.floor(Math.random() * NEON_WEIGHTED.length)];
  const neonCol = col(neonHex);

  function neonEdge(opacity = 0.9) {
    return new THREE.MeshBasicMaterial({
      color: neonCol.clone(),
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }

  // 見える半透明ネオン青の傘
  const bellMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#1a48ff'),
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const bell = new THREE.Mesh(
    new THREE.SphereGeometry(52, 48, 36, 0, Math.PI * 2, 0, Math.PI * 0.58),
    bellMat,
  );
  bell.scale.set(1.2, 0.88, 1.2);
  bell.position.y = 22;
  group.add(bell);

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(58, 1.15, 6, 48),
    neonEdge(1),
  );
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 2;
  group.add(rim);

  // 内部ネット
  const net = new THREE.Group();
  for (let i = 0; i < 12; i++) {
    const ang = (i / 12) * Math.PI * 2;
    const rib = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 42, 4), neonEdge(0.75));
    rib.rotation.z = Math.PI / 2;
    rib.rotation.y = ang;
    rib.position.set(Math.cos(ang) * 22, 32, Math.sin(ang) * 22);
    net.add(rib);
  }
  for (let i = 0; i < 40; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 0.5;
    const r = 46;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(1.4 + Math.random(), 6, 5), neonEdge(0.9));
    dot.position.set(
      Math.sin(v) * Math.cos(u) * r * 1.2,
      22 + Math.cos(v) * r * 0.88,
      Math.sin(v) * Math.sin(u) * r * 1.2,
    );
    net.add(dot);
  }
  group.add(net);

  // 暖色コア
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(10, 14, 12),
    new THREE.MeshBasicMaterial({
      color: 0xa8e8ff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }),
  );
  core.scale.set(1.4, 0.7, 1.4);
  core.position.y = 8;
  group.add(core);

  const gonads = new THREE.Group();
  gonads.position.y = 28;
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const g = new THREE.Mesh(
      new THREE.TorusGeometry(11, 2.4, 8, 20, Math.PI * 1.35),
      neonEdge(0.75),
    );
    g.rotation.x = Math.PI * 0.55;
    g.rotation.y = ang;
    g.position.set(Math.cos(ang) * 14, 0, Math.sin(ang) * 14);
    gonads.add(g);
  }
  group.add(gonads);

  const fringe = new THREE.Group();
  fringe.position.y = 2;
  const fringeTips = [];
  for (let i = 0; i < 48; i++) {
    const ang = (i / 48) * Math.PI * 2;
    const len = 34 + (i % 4) * 10;
    const tip = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, len, 2, 4), neonEdge(0.35));
    tip.position.set(Math.cos(ang) * 54, -len * 0.42, Math.sin(ang) * 54);
    tip.userData = { ang, len, phase: i * 0.2 };
    fringe.add(tip);
    const node = new THREE.Mesh(new THREE.SphereGeometry(1.2, 6, 5), neonEdge(0.55));
    node.position.set(Math.cos(ang) * 54, -len * 0.85, Math.sin(ang) * 54);
    fringe.add(node);
    fringeTips.push(tip);
  }
  group.add(fringe);

  const arms = [];
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2;
    const root = new THREE.Group();
    root.position.set(Math.cos(ang) * 8, 6, Math.sin(ang) * 8);
    root.rotation.y = ang;
    root.userData = { phase: i * 1.15 };
    const armCol = i % 2 === 0 ? neonEdge(0.32) : neonEdge(0.32);
    if (i % 2 === 1) armCol.color.copy(col(NEON[(i + 2) % NEON.length]));
    for (let s = 0; s < 16; s++) {
      const t = (s + 0.5) / 16;
      const sway = Math.sin(t * Math.PI * 1.6) * 10;
      const y = -t * 100;
      const rad = 5.5 * (1 - t * 0.55);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.55, 5, 14), armCol.clone());
      ring.rotation.x = Math.PI / 2;
      ring.position.set(sway, y, 0);
      root.add(ring);
      if (s % 2 === 0) {
        const node = new THREE.Mesh(new THREE.SphereGeometry(1.3, 6, 5), armCol.clone());
        node.position.set(sway + rad * 0.7, y, 0);
        root.add(node);
      }
    }
    group.add(root);
    arms.push(root);
  }

  let driftY = -40;

  return {
    group,
    update(dt, time) {
      driftY += dt * 14;
      if (driftY > 130) driftY = -50;
      group.position.y = driftY + Math.sin(time * 0.7) * 8;
      group.position.x = Math.sin(time * 0.35) * 12;
      group.position.z = Math.cos(time * 0.28) * 8;
      group.rotation.y = Math.sin(time * 0.22) * 0.15;
      group.rotation.z = Math.sin(time * 0.48) * 0.08;
      group.rotation.x = Math.sin(time * 0.38) * 0.05;

      const pulse = Math.sin(time * 1.35);
      bell.scale.y = 0.88 + pulse * 0.08;
      bell.scale.x = bell.scale.z = 1.2 - pulse * 0.05;
      bell.material.opacity = 0.32 + 0.12 * Math.abs(pulse);
      rim.scale.x = rim.scale.z = 1 + pulse * 0.03;
      rim.material.opacity = 0.85 + 0.15 * Math.abs(pulse);
      core.material.opacity = 0.7 + 0.25 * Math.abs(pulse);
      gonads.position.y = 28 + pulse * 1.2;

      for (const tip of fringeTips) {
        const { ang, len, phase } = tip.userData;
        const sway = Math.sin(time * 1.5 + phase) * 4;
        tip.position.set(
          Math.cos(ang) * 54 + Math.cos(ang + Math.PI * 0.5) * sway,
          -len * 0.35 + Math.sin(time * 1.2 + phase) * 2,
          Math.sin(ang) * 54 + Math.sin(ang + Math.PI * 0.5) * sway,
        );
        tip.rotation.x = Math.sin(time * 1.3 + phase) * 0.15;
      }

      for (const root of arms) {
        const { phase } = root.userData;
        root.rotation.x = 0.2 + Math.sin(time * 1.1 + phase) * 0.45;
        root.rotation.z = Math.cos(time * 0.9 + phase * 0.8) * 0.3;
        root.rotation.y = Math.sin(time * 0.7 + phase) * 0.18;
        root.scale.y = 1.05 + Math.abs(Math.sin(time * 1.1 + phase)) * 0.15;
      }
    },
    setPalette(_p) {
      const pick = NEON[Math.floor(Math.random() * NEON.length)];
      const c = col(pick);
      rim.material.color.copy(c);
      bell.material.color.set('#1a48ff');
      net.traverse((ch) => { if (ch.isMesh) ch.material.color.copy(c); });
      gonads.children.forEach((ch) => ch.material.color.copy(c));
      fringeTips.forEach((t) => t.material.color.copy(c));
      arms.forEach((root) => root.traverse((ch) => {
        if (ch.isMesh && ch.material?.color) ch.material.color.copy(c);
      }));
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        if (i < count * 0.45) {
          const u = Math.random() * Math.PI * 2;
          const v = Math.random() * Math.PI * 0.55;
          out[i * 3] = Math.sin(v) * Math.cos(u) * 52 * 1.2;
          out[i * 3 + 1] = 22 + Math.cos(v) * 52 * 0.88;
          out[i * 3 + 2] = Math.sin(v) * Math.sin(u) * 52 * 1.2;
        } else if (i < count * 0.7) {
          const ang = Math.random() * Math.PI * 2;
          out[i * 3] = Math.cos(ang) * 54;
          out[i * 3 + 1] = -Math.random() * 20;
          out[i * 3 + 2] = Math.sin(ang) * 54;
        } else {
          const ang = (Math.floor(Math.random() * 4) / 4) * Math.PI * 2;
          const t = Math.random();
          out[i * 3] = Math.cos(ang) * 8 + t * t * 10;
          out[i * 3 + 1] = 6 - t * 78;
          out[i * 3 + 2] = Math.sin(ang) * 8;
        }
      }
      return out;
    },
  };
}


export function createClock(palette = 'rainbow') {
  const group = new THREE.Group();
  group.scale.setScalar(1.45 * (2 / 3));
  softLights(group);
  const rainbow = getPaletteColors('rainbow');
  const main = rainbow[Math.floor(Math.random() * rainbow.length)];
  const neon = col(main);

  function inkMat(opacity = 1) {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#0a0a0c'),
      transparent: opacity < 1,
      opacity,
      depthWrite: true,
      blending: THREE.NormalBlending,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }

  function neonMat(opacity = 0.95) {
    return new THREE.MeshBasicMaterial({
      color: neon.clone(),
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.NormalBlending,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }

  const faceGeo = new THREE.CylinderGeometry(48, 48, 12, 48);
  faceGeo.rotateX(Math.PI / 2);
  const face = new THREE.Mesh(
    faceGeo,
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#eef2f8'),
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      blending: THREE.NormalBlending,
      toneMapped: false,
      side: THREE.DoubleSide,
    }),
  );
  group.add(face);

  const sideGeo = new THREE.CylinderGeometry(51, 51, 14, 48, 1, true);
  sideGeo.rotateX(Math.PI / 2);
  const side = new THREE.Mesh(sideGeo, neonMat(0.85));
  const bezel = new THREE.Mesh(new THREE.TorusGeometry(49.5, 2.4, 8, 48), neonMat(0.95));
  bezel.position.z = 6.5;
  const backGeo = new THREE.CylinderGeometry(46, 46, 4, 36);
  backGeo.rotateX(Math.PI / 2);
  const back = new THREE.Mesh(backGeo, neonMat(0.7));
  back.position.z = -7;
  group.add(side, bezel, back);

  const dial = new THREE.Group();
  for (let i = 0; i < 60; i++) {
    const ang = (i / 60) * Math.PI * 2;
    const major = i % 5 === 0;
    const tick = new THREE.Mesh(
      new THREE.BoxGeometry(major ? 1.6 : 0.8, major ? 7 : 3.5, 2.2),
      inkMat(1),
    );
    tick.position.set(Math.sin(ang) * 40, Math.cos(ang) * 40, 7);
    tick.rotation.z = -ang;
    dial.add(tick);
  }
  for (let h = 0; h < 12; h++) {
    const ang = (h / 12) * Math.PI * 2;
    const mark = new THREE.Mesh(new THREE.BoxGeometry(2.2, 8, 2.5), inkMat(1));
    mark.position.set(Math.sin(ang) * 34, Math.cos(ang) * 34, 7.5);
    mark.rotation.z = -ang;
    dial.add(mark);
  }
  group.add(dial);

  const hourHand = new THREE.Mesh(new THREE.BoxGeometry(3.2, 26, 2.4), inkMat(1));
  hourHand.position.set(0, 10, 9);
  const minuteHand = new THREE.Mesh(new THREE.BoxGeometry(2.2, 38, 2), inkMat(1));
  minuteHand.position.set(0, 16, 10);
  const secondHand = new THREE.Mesh(new THREE.BoxGeometry(1, 42, 1.5), inkMat(1));
  secondHand.position.set(0, 14, 11);
  const hub = new THREE.Mesh(new THREE.SphereGeometry(3.5, 12, 10), inkMat(1));
  hub.position.z = 10;
  const hourRoot = new THREE.Group();
  const minuteRoot = new THREE.Group();
  const secondRoot = new THREE.Group();
  hourRoot.add(hourHand);
  minuteRoot.add(minuteHand);
  secondRoot.add(secondHand);
  group.add(hourRoot, minuteRoot, secondRoot, hub);

  const crown = new THREE.Mesh(new THREE.CylinderGeometry(4, 4.5, 8, 10), neonMat(0.9));
  crown.position.y = 58;
  const bow = new THREE.Mesh(new THREE.TorusGeometry(9, 1.8, 6, 20, Math.PI * 1.3), neonMat(0.9));
  bow.rotation.z = Math.PI;
  bow.position.y = 70;
  group.add(crown, bow);

  const spinY = (Math.random() < 0.5 ? 1 : -1) * (0.55 + Math.random() * 0.5);
  const spinX = (Math.random() - 0.5) * 0.35;
  const spinZ = (Math.random() - 0.5) * 0.2;

  return {
    group,
    update(dt, time) {
      group.position.y = Math.sin(time * 0.7) * 8;
      group.rotation.y += spinY * dt;
      group.rotation.x += spinX * dt;
      group.rotation.z += spinZ * dt;
      const sec = time % 60;
      const min = (time / 60) % 60;
      const hr = (time / 3600) % 12;
      secondRoot.rotation.z = -(sec / 60) * Math.PI * 2;
      minuteRoot.rotation.z = -(min / 60) * Math.PI * 2;
      hourRoot.rotation.z = -(hr / 12) * Math.PI * 2;
    },
    setPalette(_p) {
      const ink = new THREE.Color('#0a0a0c');
      dial.traverse((ch) => { if (ch.isMesh) ch.material.color.copy(ink); });
      hourHand.material.color.copy(ink);
      minuteHand.material.color.copy(ink);
      secondHand.material.color.copy(ink);
      hub.material.color.copy(ink);
      crown.material.color.copy(c);
      bow.material.color.copy(c);
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 50;
        out[i * 3] = Math.cos(a) * r;
        out[i * 3 + 1] = Math.sin(a) * r;
        out[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
      return out;
    },
  };
}


export function createTadpole(palette = 'rainbow') {
  const group = new THREE.Group();
  softLights(group);
  const NEON = ['#00e8ff', '#00b7ff', '#2f6bff', '#1a48ff', '#4d7cff', '#7c4dff', '#ff2bd6'];
  const neonHex = NEON[Math.floor(Math.random() * NEON.length)];
  const neonCol = col(neonHex);

  function jellyMat(opacity = 0.3, additive = true) {
    return new THREE.MeshBasicMaterial({
      color: neonCol.clone(),
      transparent: true,
      opacity,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }

  // クラゲ風ゼリー胴
  const body = new THREE.Mesh(new THREE.SphereGeometry(28, 40, 32), jellyMat(0.28, true));
  body.scale.set(1.42, 1.08, 1.16);
  body.position.set(18, 2, 0);
  group.add(body);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(16, 28, 22), jellyMat(0.2, true));
  belly.scale.set(1.15, 0.82, 1.02);
  belly.position.set(14, -6, 2);
  group.add(belly);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(32, 1.2, 6, 36), jellyMat(0.85, true));
  rim.rotation.y = Math.PI / 2;
  rim.scale.set(1.15, 1, 1.08);
  rim.position.set(18, 2, 0);
  group.add(rim);

  const core = new THREE.Mesh(new THREE.SphereGeometry(10, 14, 12), jellyMat(0.5, true));
  core.scale.set(1.35, 0.9, 1.15);
  core.position.set(18, 2, 0);
  group.add(core);

  // 小さい丸い目
  const eyeMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#d0f0ff'),
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    toneMapped: false,
  });
  const pupilMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#0a1018'),
    transparent: false,
    depthWrite: true,
    toneMapped: false,
  });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(3.6, 12, 10), eyeMat);
  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(3.6, 12, 10), eyeMat.clone());
  eyeL.position.set(30, 8, 16);
  eyeR.position.set(30, 8, -16);
  const pupilL = new THREE.Mesh(new THREE.SphereGeometry(1.7, 10, 8), pupilMat);
  const pupilR = new THREE.Mesh(new THREE.SphereGeometry(1.7, 10, 8), pupilMat.clone());
  pupilL.position.set(32, 8, 17);
  pupilR.position.set(32, 8, -17);
  group.add(eyeL, eyeR, pupilL, pupilR);

  const tailLen = 185;
  const segsX = 36;
  const segsY = 8;
  const segsZ = 4;
  const tailGeo = new THREE.BoxGeometry(tailLen, 1, 1, segsX, segsY, segsZ);
  const base = Float32Array.from(tailGeo.attributes.position.array);
  const posAttr = tailGeo.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const x = base[i * 3];
    const along = (x + tailLen * 0.5) / tailLen;
    const taper = Math.max(0.03, Math.pow(1 - along, 0.85));
    const halfH = 22 * taper;
    const halfD = 5.5 * taper;
    const uy = base[i * 3 + 1] / 0.5;
    const uz = base[i * 3 + 2] / 0.5;
    const lift = Math.sin(along * Math.PI * 0.7) * 8 + along * along * 6;
    base[i * 3] = x;
    base[i * 3 + 1] = uy * halfH + lift;
    base[i * 3 + 2] = uz * halfD;
  }
  posAttr.array.set(base);
  posAttr.needsUpdate = true;
  tailGeo.computeVertexNormals();

  const tailMat = jellyMat(0.22, true);
  const tail = new THREE.Mesh(tailGeo, tailMat);
  tail.position.set(-58, 2, 0);
  group.add(tail);

  const spotMat = jellyMat(0.55, true);
  for (let i = 0; i < 12; i++) {
    const t = Math.random();
    const spot = new THREE.Mesh(
      new THREE.SphereGeometry(0.9 + Math.random() * 1.2, 8, 6),
      spotMat.clone(),
    );
    spot.position.set(
      -58 + (t - 0.5) * tailLen * 0.92,
      2 + Math.sin(t * Math.PI * 0.7) * 8 + (Math.random() - 0.5) * 8 * (1 - t),
      (Math.random() - 0.5) * 5,
    );
    group.add(spot);
  }

  return {
    group,
    update(_dt, time) {
      group.position.y = Math.sin(time * 1.3) * 5;
      group.rotation.y = Math.sin(time * 0.4) * 0.08;
      // ぷるんぷるん素早い泳ぎ波
      const swim = time * 15;
      const arr = posAttr.array;
      for (let i = 0; i < posAttr.count; i++) {
        const x = base[i * 3];
        const along = Math.min(1, (x + tailLen * 0.5) / (tailLen + 8));
        const a2 = along * along;
        const wave =
          Math.sin(swim - along * 7) * a2 * 36 +
          Math.sin(swim * 2.8 - along * 16) * a2 * 18 +
          Math.sin(swim * 6.2 - along * 30) * a2 * 10 +
          Math.sin(swim * 13 - along * 48) * a2 * 5;
        arr[i * 3] = base[i * 3];
        arr[i * 3 + 1] = base[i * 3 + 1] + Math.sin(swim * 1.8 - along * 5) * a2 * 5;
        arr[i * 3 + 2] = base[i * 3 + 2] + wave;
      }
      posAttr.needsUpdate = true;
      tailGeo.computeVertexNormals();
    },
    setPalette(_p) {
      // クラゲ風ネオンは個体生成時に固定
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        if (i < count * 0.5) {
          const u = Math.random() * Math.PI * 2;
          const v = Math.acos(2 * Math.random() - 1);
          out[i * 3] = 18 + Math.sin(v) * Math.cos(u) * 28 * 1.45;
          out[i * 3 + 1] = 2 + Math.sin(v) * Math.sin(u) * 28 * 1.12;
          out[i * 3 + 2] = Math.cos(v) * 28 * 1.18;
        } else {
          const t = Math.random();
          out[i * 3] = -58 + (t - 0.5) * tailLen;
          out[i * 3 + 1] = 2 + Math.sin(t * Math.PI * 0.7) * 8;
          out[i * 3 + 2] = (Math.random() - 0.5) * 5;
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
  const gold = tint(accent, 0.15);
  const skinHex = '#ffd9c4';
  const whiteHex = '#ffffff';
  const eyeHex = '#4a4450';

  const root = new THREE.Group();
  root.scale.setScalar(0.9);
  group.add(root);

  // 頭（桃色の円・少し小さめ）
  const skin = petalMat(skinHex, { opacity: 0.58, roughness: 0.65, ei: 0.25, em: 0.12 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(24, 32, 28), skin);
  head.position.set(0, 50, 6);
  outlineOf(head, '#c4b0a8', 1.025);
  root.add(head);

  // 黄色い髪スウープ（右上）
  const hairMat = petalMat(gold, { opacity: 0.65, roughness: 0.5, ei: 0.5 });
  const hair = new THREE.Mesh(new THREE.SphereGeometry(13, 20, 16), hairMat);
  hair.scale.set(1.45, 0.58, 0.9);
  hair.position.set(9, 64, 4);
  root.add(hair);

  // 閉じた弧の目（参照: ⌒ ⌒）— 頭表面に密着
  const eyeMat = new THREE.MeshBasicMaterial({
    color: col(eyeHex),
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const headC = { x: 0, y: 50, z: 6 };
  const faceR = 22.5;
  function onFace(lx, ly) {
    const xy = Math.hypot(lx, ly);
    const zRel = Math.sqrt(Math.max(1, faceR * faceR - xy * xy));
    return [headC.x + lx, headC.y + ly, headC.z + zRel];
  }
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(
      new THREE.TorusGeometry(5.6, 0.9, 6, 18, Math.PI * 0.95),
      eyeMat.clone(),
    );
    eye.scale.set(1, 1, 0.28);
    eye.position.set(...onFace(s * 9.2, 2.5));
    root.add(eye);
  }

  // ごく小さな口
  const mouth = new THREE.Mesh(
    new THREE.TorusGeometry(3.0, 0.75, 5, 12, Math.PI * 0.7),
    eyeMat.clone(),
  );
  mouth.rotation.z = Math.PI;
  mouth.scale.set(1, 1, 0.28);
  mouth.position.set(...onFace(0, -7));
  root.add(mouth);

  // 細い白い台形ドレス
  const dressShape = new THREE.Shape();
  dressShape.moveTo(-12, 24);
  dressShape.lineTo(12, 24);
  dressShape.lineTo(24, -52);
  dressShape.lineTo(-24, -52);
  dressShape.closePath();
  const dressGeo = new THREE.ExtrudeGeometry(dressShape, {
    depth: 12,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelSegments: 1,
    curveSegments: 4,
  });
  dressGeo.translate(0, 0, -6);
  const dressMat = petalMat(whiteHex, { opacity: 0.52, roughness: 0.6, ei: 0.2, em: 0.1 });
  const dress = new THREE.Mesh(dressGeo, dressMat);
  dress.position.y = 10;
  outlineOf(dress, '#d0d4dc', 1.02);
  root.add(dress);

  // 羽（スカラップ）
  const wingShape = new THREE.Shape();
  wingShape.moveTo(2, 14);
  wingShape.quadraticCurveTo(32, 42, 58, 24);
  wingShape.quadraticCurveTo(68, 8, 62, -8);
  wingShape.quadraticCurveTo(54, -18, 46, -10);
  wingShape.quadraticCurveTo(38, -22, 28, -10);
  wingShape.quadraticCurveTo(18, -22, 10, -8);
  wingShape.quadraticCurveTo(4, 0, 2, 10);
  wingShape.closePath();
  const wingGeo = new THREE.ExtrudeGeometry(wingShape, {
    depth: 4,
    bevelEnabled: false,
    curveSegments: 18,
  });
  wingGeo.translate(0, 0, -2);
  const wingMat = petalMat(whiteHex, { opacity: 0.4, roughness: 0.5, ei: 0.28 });
  const wingL = new THREE.Mesh(wingGeo, wingMat);
  const wingR = new THREE.Mesh(wingGeo, wingMat.clone());
  wingL.position.set(-6, 18, -12);
  wingR.position.set(6, 18, -12);
  wingL.scale.set(-1, 1, 1);
  wingL.rotation.set(0.05, 0.35, 0.05);
  wingR.rotation.set(0.05, -0.35, -0.05);
  outlineOf(wingL, '#d0d4dc', 1.015);
  outlineOf(wingR, '#d0d4dc', 1.015);
  group.add(wingL, wingR);

  // 羽の内側ライン
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(22 - i * 4, 1.6, 1.2),
        petalMat('#e8ecf4', { ei: 0.1 }),
      );
      line.position.set(side * (24 + i * 5), 22 - i * 8, -10);
      line.rotation.z = side * 0.2;
      root.add(line);
    }
  }

  // 光輪
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(22, 2.0, 10, 36),
    petalMat(gold, { opacity: 0.7, roughness: 0.4, ei: 0.8 }),
  );
  halo.rotation.x = Math.PI / 2;
  halo.position.set(0, 88, 0);
  root.add(halo);

  // 胸の星
  const starShape = new THREE.Shape();
  const outer = 12;
  const inner = 5;
  for (let i = 0; i < 5; i++) {
    const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const b = a + Math.PI / 5;
    if (i === 0) starShape.moveTo(Math.cos(a) * outer, Math.sin(a) * outer);
    else starShape.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
    starShape.lineTo(Math.cos(b) * inner, Math.sin(b) * inner);
  }
  starShape.closePath();
  const starGeo = new THREE.ExtrudeGeometry(starShape, { depth: 4, bevelEnabled: false });
  starGeo.translate(0, 0, -2);
  const star = new THREE.Mesh(starGeo, petalMat(gold, { opacity: 0.7, roughness: 0.45, ei: 0.75 }));
  star.position.set(0, 12, 18);
  root.add(star);

  // 周囲の白い発光ドット
  const sparkMat = petalMat('#ffffff', { opacity: 0.95, ei: 1.4, em: 0.55 });
  for (let i = 0; i < 16; i++) {
    const r = 2.5 + Math.random() * 4;
    const spark = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), sparkMat.clone());
    const ang = Math.random() * Math.PI * 2;
    const rad = 35 + Math.random() * 55;
    spark.position.set(Math.cos(ang) * rad, 25 + Math.random() * 80, Math.sin(ang) * 22 - 8);
    group.add(spark);
  }

  return {
    group,
    update(_dt, time) {
      group.position.y = Math.sin(time * 1.1) * 10 + time * 8;
      if (group.position.y > 120) group.position.y = -40;
      group.rotation.y = Math.sin(time * 0.28) * 0.2;
      const flap = Math.sin(time * 5.2) * 0.42;
      wingL.rotation.y = 0.4 + flap;
      wingR.rotation.y = -0.4 - flap;
      wingL.rotation.z = 0.08 + flap * 0.12;
      wingR.rotation.z = -0.08 - flap * 0.12;
      wingL.rotation.x = 0.08 + Math.abs(flap) * 0.1;
      wingR.rotation.x = 0.08 + Math.abs(flap) * 0.1;
      halo.rotation.z = time * 0.55;
      star.rotation.z = Math.sin(time * 1.5) * 0.08;
      root.position.y = Math.sin(time * 1.4) * 6;
    },
    setPalette(p) {
      const a = formHex(p, 'angel');
      const g = tint(a, 0.15);
      setMatHex(hairMat, g);
      setMatHex(halo.material, g);
      setMatHex(star.material, g);
    },
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        if (i < count * 0.35) {
          out[i * 3] = (Math.random() - 0.5) * 50;
          out[i * 3 + 1] = -30 + Math.random() * 100;
          out[i * 3 + 2] = (Math.random() - 0.5) * 28;
        } else if (i < count * 0.7) {
          const side = i % 2 ? 1 : -1;
          const u = Math.random();
          out[i * 3] = side * (10 + u * 55);
          out[i * 3 + 1] = 5 + Math.random() * 45;
          out[i * 3 + 2] = -14 + (Math.random() - 0.5) * 16;
        } else {
          const t = Math.random() * Math.PI * 2;
          out[i * 3] = Math.cos(t) * 22;
          out[i * 3 + 1] = 88 + Math.sin(t) * 4;
          out[i * 3 + 2] = Math.sin(t) * 22;
        }
      }
      return out;
    },
    dispose() { disposeObject(group); },
  };
}

function sampleMusicNotePoints(count) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const kind = Math.random();
    if (kind < 0.32) {
      out[i * 3] = 6 + (Math.random() - 0.5) * 10;
      out[i * 3 + 1] = -32 + (Math.random() - 0.5) * 10;
      out[i * 3 + 2] = (Math.random() - 0.5) * 8;
    } else if (kind < 0.78) {
      out[i * 3] = 16 + (Math.random() - 0.5) * 5;
      out[i * 3 + 1] = (Math.random() - 0.5) * 72;
      out[i * 3 + 2] = (Math.random() - 0.5) * 8;
    } else {
      const t = Math.random() * Math.PI * 2;
      out[i * 3] = Math.cos(t) * 14 - 4;
      out[i * 3 + 1] = Math.sin(t) * 10 + 8;
      out[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
  }
  return out;
}

function createMusicNote(palette) {
  const main = formHex(palette, 'music');
  const group = new THREE.Group();
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(5, 10, 8),
    petalMat(main, { roughness: 0.58, opacity: 0.72 }),
  );
  head.scale.set(1.2, 0.85, 0.55);
  head.position.set(6, -32, 0);
  const stem = new THREE.Mesh(
    new THREE.BoxGeometry(3.5, 36, 3.5),
    petalMat(tint(main, 0.2), { roughness: 0.62, opacity: 0.72 }),
  );
  stem.position.set(16, 2, 0);
  group.add(head, stem);
  return {
    group,
    update(_dt, time) {
      group.rotation.z = Math.sin(time * 0.5) * 0.08;
    },
    setPalette(p) {
      const m = formHex(p, 'music');
      setMatHex(head.material, m);
      setMatHex(stem.material, tint(m, 0.2));
    },
    samplePoints: sampleMusicNotePoints,
    dispose() { disposeObject(group); },
  };
}

export function createSolidForm(id, palette) {
  switch (id) {
    case 'letter': return createLetterX(palette);
    case 'jellyfish': return createJellyfish(palette);
    case 'clock': return createClock(palette);
    case 'hourglass': return createClock(palette);
    case 'tadpole': return createTadpole(palette);
    case 'music': return createMusicNote(palette);
    case 'brain': return createBrain(palette);
    case 'angel': return createAngel(palette);
    default: return null;
  }
}
