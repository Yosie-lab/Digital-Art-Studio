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
  grd.addColorStop(0, 'rgba(120,170,255,0.9)');
  grd.addColorStop(0.35, 'rgba(80,140,255,0.45)');
  grd.addColorStop(0.7, 'rgba(40,100,220,0.15)');
  grd.addColorStop(1, 'rgba(20,60,180,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export function rgbToUnit(rgb) {
  return [rgb.r / 255, rgb.g / 255, rgb.b / 255];
}
