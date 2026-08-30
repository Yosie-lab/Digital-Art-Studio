import * as THREE from 'three';

/** モバイル向け: 有効なビューポート寸法か */
export const VIEWPORT_MIN = 64;

export function viewportReady(w, h, min = VIEWPORT_MIN) {
  return Number.isFinite(w) && Number.isFinite(h) && w >= min && h >= min;
}

/** 0 / 極小を避け、最後に有効だった寸法へフォールバック */
export function safeViewport(w, h, fallbackW = 0, fallbackH = 0, min = VIEWPORT_MIN) {
  if (viewportReady(w, h, min)) return { w, h };
  if (viewportReady(fallbackW, fallbackH, min)) return { w: fallbackW, h: fallbackH };
  return { w: Math.max(w || 0, min), h: Math.max(h || 0, min) };
}

export function toWorld(x, y, z, w, h) {
  const { w: vw, h: vh } = safeViewport(w, h);
  return new THREE.Vector3(x - vw * 0.5, vh * 0.5 - y, z || 0);
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

/** bloom の screen 座標 marks をリサイズに追従（誤初期化時は再散布） */
export function remapScreenMarks(marks, oldW, oldH, newW, newH) {
  if (!marks?.length || !viewportReady(newW, newH)) return;
  if (!viewportReady(oldW, oldH)) {
    const pts = stratifiedSpawnPoints(marks.length, newW, newH);
    for (let i = 0; i < marks.length; i++) {
      marks[i].x = pts[i][0];
      marks[i].y = pts[i][1];
    }
    return;
  }
  const sx = newW / oldW;
  const sy = newH / oldH;
  for (const m of marks) {
    m.x *= sx;
    m.y *= sy;
  }
}

/** 点群が1点集中していないか（ワールド XY の広がり） */
export function cloudSpread(cloud) {
  if (!cloud || cloud.length < 6) return 0;
  const n = cloud.length / 3;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < n; i++) {
    const x = cloud[i * 3];
    const y = cloud[i * 3 + 1];
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  if (!Number.isFinite(minX)) return 0;
  return Math.max(maxX - minX, maxY - minY);
}

export function cloudWellSpread(cloud, minSpread = 48) {
  return cloudSpread(cloud) >= minSpread;
}

/** ビューポートに対する最低広がり（ワールド XY） */
export function minCloudSpread(w, h, floor = 48) {
  const { w: vw, h: vh } = safeViewport(w, h);
  return Math.max(floor, Math.min(vw, vh) * 0.22);
}

/** marks が画面に対して狭すぎるか（screen px） */
export function marksNeedRemap(marks, w, h, ratio = 0.18) {
  if (!marks?.length) return false;
  const { w: vw, h: vh } = safeViewport(w, h);
  return marksScreenSpread(marks) < Math.min(vw, vh) * ratio;
}

/** 点群が狭いとき画面全体へフォールバック */
export function ensureCloudSpread(cloud, count, w, h, fallback = null) {
  const { w: vw, h: vh } = safeViewport(w, h);
  const min = minCloudSpread(vw, vh);
  if (cloudWellSpread(cloud, min)) return cloud;
  if (fallback) return fallback(count, vw, vh);
  return spreadScreenCloud(count, vw, vh);
}

/** 画面内に層状（グリッド＋ジッター）でスポーン座標を配る */
export function stratifiedSpawnPoints(count, w, h, margin = 0.06, yRange = null) {
  ({ w, h } = safeViewport(w, h));
  const cols = Math.max(1, Math.ceil(Math.sqrt(count * (w / h))));
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
  const { w: vw, h: vh } = safeViewport(w, h);
  const out = new Float32Array(count * 3);
  const srcN = Math.max(1, modelPts.length / 3);
  const anchors = stratifiedSpawnPoints(Math.min(count, 56), vw, vh);
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
      vw,
      vh,
    );
    out[i * 3] = wpos.x;
    out[i * 3 + 1] = wpos.y;
    out[i * 3 + 2] = wpos.z;
  }
  return ensureCloudSpread(out, count, vw, vh);
}

/** 画面全体にランダム点群（ワールド座標） */
export function spreadScreenCloud(count, w, h) {
  const { w: vw, h: vh } = safeViewport(w, h);
  const out = new Float32Array(count * 3);
  const anchors = stratifiedSpawnPoints(Math.min(count, 48), vw, vh);
  for (let i = 0; i < count; i++) {
    const [x, y] = anchors[i % anchors.length];
    const wpos = toWorld(x, y, (Math.random() - 0.5) * 80, vw, vh);
    out[i * 3] = wpos.x;
    out[i * 3 + 1] = wpos.y;
    out[i * 3 + 2] = wpos.z;
  }
  return out;
}

export function markSpreadSize(m, minSpread = 36) {
  return Math.max(m.size || 0, minSpread);
}

function marksScreenSpread(marks) {
  if (!marks?.length) return 0;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const m of marks) {
    if (!Number.isFinite(m.x) || !Number.isFinite(m.y)) continue;
    if (m.x < minX) minX = m.x;
    if (m.x > maxX) maxX = m.x;
    if (m.y < minY) minY = m.y;
    if (m.y > maxY) maxY = m.y;
  }
  if (!Number.isFinite(minX)) return 0;
  return Math.max(maxX - minX, maxY - minY);
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

/** @deprecated use primeGrowingMarks */
export const primeGrowingFlowers = primeGrowingMarks;

/** Bloom mark からモーフ用点群（ワールド座標） */
export function sampleMarksWorld(marks, count, w, h, fallback = null) {
  const { w: vw, h: vh } = safeViewport(w, h);
  const screenFallback = fallback || spreadScreenCloud;
  const n = marks.length;
  if (n === 0) {
    return screenFallback(count, vw, vh);
  }
  if (marksNeedRemap(marks, vw, vh)) {
    remapScreenMarks(marks, 0, 0, vw, vh);
  }
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const m = marks[i % n];
    const spread = markSpreadSize(m);
    const wpos = toWorld(
      m.x + (Math.random() - 0.5) * spread,
      m.y + (Math.random() - 0.5) * spread,
      m.z + (Math.random() - 0.5) * Math.min(spread, 48),
      vw,
      vh,
    );
    out[i * 3] = wpos.x;
    out[i * 3 + 1] = wpos.y;
    out[i * 3 + 2] = wpos.z;
  }
  return ensureCloudSpread(out, count, vw, vh, screenFallback);
}
