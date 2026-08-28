import * as THREE from 'three';

export function toWorld(x, y, z, w, h) {
  return new THREE.Vector3(x - w * 0.5, h * 0.5 - y, z || 0);
}

export function disposeObject(obj) {
  obj.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    const mat = child.material;
    if (!mat) return;
    const list = Array.isArray(mat) ? mat : [mat];
    for (const m of list) {
      if (m.map) m.map.dispose();
      m.dispose();
    }
  });
}

export function clearGroup(group) {
  while (group.children.length) {
    const child = group.children[0];
    group.remove(child);
    disposeObject(child);
  }
}

export function makePoints(maxCount, size = 10) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(maxCount * 3);
  const colors = new Float32Array(maxCount * 3);
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setDrawRange(0, 0);
  const mat = new THREE.PointsMaterial({
    size,
    map: circleTexture(),
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { points, geo, mat, positions, colors };
}

function circleTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grd.addColorStop(0.7, 'rgba(255,255,255,0.18)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export function rgbToUnit(rgb) {
  return [rgb.r / 255, rgb.g / 255, rgb.b / 255];
}

/** 画面内に層状（グリッド＋ジッター）でスポーン座標を配る */
export function stratifiedSpawnPoints(count, w, h, margin = 0.06, yRange = null) {
  const cols = Math.max(1, Math.ceil(Math.sqrt(count * (w / Math.max(h, 1)))));
  const rows = Math.max(1, Math.ceil(count / cols));
  const mx = w * margin;
  const my = h * margin;
  const yMin = yRange ? yRange[0] : my;
  const yMax = yRange ? yRange[1] : h - my;
  const cw = (w - mx * 2) / cols;
  const ch = (yMax - yMin) / rows;
  const pts = [];
  let i = 0;
  for (let r = 0; r < rows && i < count; r++) {
    for (let c = 0; c < cols && i < count; c++, i++) {
      const x = mx + cw * (c + 0.12 + Math.random() * 0.76);
      const y = yMin + ch * (r + 0.12 + Math.random() * 0.76);
      pts.push([x, y]);
    }
  }
  return pts;
}

/** 原点中心のモデル点群を画面全体に散らしてワールド座標へ */
export function spreadModelCloudToWorld(modelPts, count, w, h, scale = 0.14) {
  const out = new Float32Array(count * 3);
  const srcN = Math.max(1, modelPts.length / 3);
  const anchors = stratifiedSpawnPoints(Math.min(count, 56), w, h);
  for (let i = 0; i < count; i++) {
    const si = Math.floor(Math.random() * srcN);
    const mx = modelPts[si * 3];
    const my = modelPts[si * 3 + 1];
    const mz = modelPts[si * 3 + 2];
    const [ax, ay] = anchors[i % anchors.length];
    const wpos = toWorld(
      ax + mx * scale + (Math.random() - 0.5) * 14,
      ay + my * scale + (Math.random() - 0.5) * 14,
      mz + (Math.random() - 0.5) * 40,
      w,
      h,
    );
    out[i * 3] = wpos.x;
    out[i * 3 + 1] = wpos.y;
    out[i * 3 + 2] = wpos.z;
  }
  return out;
}

/** 画面全体にランダム点群（ワールド座標） */
export function spreadScreenCloud(count, w, h) {
  const out = new Float32Array(count * 3);
  const anchors = stratifiedSpawnPoints(Math.min(count, 48), w, h);
  for (let i = 0; i < count; i++) {
    const [x, y] = anchors[i % anchors.length];
    const wpos = toWorld(x, y, (Math.random() - 0.5) * 80, w, h);
    out[i * 3] = wpos.x;
    out[i * 3 + 1] = wpos.y;
    out[i * 3 + 2] = wpos.z;
  }
  return out;
}

export function markSpreadSize(m, minSpread = 36) {
  return Math.max(m.size || 0, minSpread);
}

/** 成長中 mark を即表示サイズへ */
export function primeGrowingMarks(marks) {
  for (const m of marks) {
    if (m.maxSize == null) continue;
    m.growth = 1;
    m.phase = 'bloomed';
    m.size = m.maxSize * (0.62 + Math.random() * 0.32);
  }
}

export function primeGrowingFlowers(flowers) {
  for (const f of flowers) {
    if (f.maxSize == null) continue;
    f.growth = 1;
    f.phase = 'bloomed';
    f.size = f.maxSize * (0.62 + Math.random() * 0.32);
  }
}

/** Bloom mark からモーフ用点群（ワールド座標） */
export function sampleMarksWorld(marks, count, w, h, fallback = null) {
  const out = new Float32Array(count * 3);
  const n = marks.length;
  if (n === 0) {
    return fallback ? fallback(count, w, h) : spreadScreenCloud(count, w, h);
  }
  for (let i = 0; i < count; i++) {
    const m = marks[i % n];
    const spread = markSpreadSize(m);
    const wpos = toWorld(
      m.x + (Math.random() - 0.5) * spread,
      m.y + (Math.random() - 0.5) * spread,
      m.z + (Math.random() - 0.5) * Math.min(spread, 48),
      w,
      h,
    );
    out[i * 3] = wpos.x;
    out[i * 3 + 1] = wpos.y;
    out[i * 3 + 2] = wpos.z;
  }
  return out;
}
