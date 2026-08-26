import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';

export function createCrystalDust() {
  let particles = [];
  let connections = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'midnight';
  let field = null;
  let lineField = null;
  const MAX = 800;

  class Crystal {
    constructor(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.z = (Math.random() - 0.5) * 200;
      this.vx = (Math.random() - 0.5) * 25;
      this.vy = (Math.random() - 0.5) * 25;
      this.vz = (Math.random() - 0.5) * 18;
      this.baseSize = 1 + Math.random() * 3;
      this.size = this.baseSize;
      this.brightness = Math.random();
      this.sparklePhase = Math.random() * Math.PI * 2;
      this.sparkleFreq = 1.5 + Math.random() * 3;
      this.colorIdx = Math.floor(Math.random() * 5);
      this.trail = [];
      this.maxTrail = 6 + Math.floor(Math.random() * 8);
    }

    update(dt, w, h, pointer, speed, gravity, audioData) {
      this.trail.push({ x: this.x, y: this.y, z: this.z });
      if (this.trail.length > this.maxTrail) this.trail.shift();

      const dx = pointer.x - this.x;
      const dy = pointer.y - this.y;
      const dist2 = dx * dx + dy * dy;
      const maxDist = 280;
      if (dist2 < maxDist * maxDist && dist2 > 1) {
        const dist = Math.sqrt(dist2);
        const force = ((maxDist - dist) / maxDist);
        const attraction = pointer.isDown ? 180 : 50;
        this.vx += (dx / dist) * force * attraction * dt;
        this.vy += (dy / dist) * force * attraction * dt;
        this.vz += (pointer.isDown ? -40 : 8) * force * dt;
      }

      this.vy += gravity * 35 * dt;
      this.vx *= 0.992;
      this.vy *= 0.992;
      this.vz *= 0.992;
      this.x += this.vx * speed * dt;
      this.y += this.vy * speed * dt;
      this.z += this.vz * speed * dt;
      if (this.x < 0) { this.x = 0; this.vx *= -0.7; }
      if (this.x > w) { this.x = w; this.vx *= -0.7; }
      if (this.y < 0) { this.y = 0; this.vy *= -0.7; }
      if (this.y > h) { this.y = h; this.vy *= -0.7; }
      if (this.z < -220) { this.z = -220; this.vz *= -0.7; }
      if (this.z > 220) { this.z = 220; this.vz *= -0.7; }
      this.brightness = 0.25 + 0.75 * Math.abs(Math.sin(time * this.sparkleFreq + this.sparklePhase));
      this.size = audioData.isActive
        ? this.baseSize * (1 + audioData.bass * 3)
        : this.baseSize;
    }
  }

  function findConnections(maxDist) {
    connections = [];
    const limit = Math.min(particles.length, 160);
    for (let i = 0; i < limit; i++) {
      for (let j = i + 1; j < limit; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dz = particles[i].z - particles[j].z;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < maxDist * maxDist) {
          connections.push({ a: particles[i], b: particles[j], opacity: 1 - Math.sqrt(d2) / maxDist });
        }
        if (connections.length > 400) return;
      }
    }
  }

  return {
    init(w, h, params, group) {
      width = w; height = h;
      currentPalette = params.palette || 'atmosphere';
      time = 0;
      connections = [];
      particles = [];
      field = makePoints(MAX * 4, 12);
      group.add(field.points);

      const lineGeo = new THREE.BufferGeometry();
      const linePos = new Float32Array(400 * 2 * 3);
      const lineCol = new Float32Array(400 * 2 * 3);
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
      lineGeo.setDrawRange(0, 0);
      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      lines.frustumCulled = false;
      group.add(lines);
      lineField = { geo: lineGeo, pos: linePos, col: lineCol };

      const count = Math.min(params.particleCount, MAX);
      for (let i = 0; i < count; i++) particles.push(new Crystal(w, h));
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;
      particles.forEach(p => p.update(dt, width, height, pointer, params.speed, params.gravity, audioData));
      if (Math.floor(time * 60) % 3 === 0) {
        findConnections(70 + params.particleSize * 4);
      }
      const target = Math.min(params.particleCount, MAX);
      while (particles.length < target) particles.push(new Crystal(width, height));
      while (particles.length > target) particles.pop();
    },

    render(_layer, _w, _h, params) {
      if (!field) return;
      const colors = getPaletteColors(currentPalette);
      field.mat.size = 5 + params.particleSize * 1.4;
      let n = 0;
      particles.forEach(p => {
        const col = hexToRgb(colors[p.colorIdx % colors.length]);
        const [r, g, b] = rgbToUnit(col);
        for (let i = 0; i < p.trail.length; i++) {
          const t = p.trail[i];
          const ratio = i / p.trail.length;
          const a = ratio * 0.35 * p.brightness;
          const wpos = toWorld(t.x, t.y, t.z, width, height);
          field.positions[n * 3] = wpos.x;
          field.positions[n * 3 + 1] = wpos.y;
          field.positions[n * 3 + 2] = wpos.z;
          field.colors[n * 3] = r * a;
          field.colors[n * 3 + 1] = g * a;
          field.colors[n * 3 + 2] = b * a;
          n++;
        }
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        field.positions[n * 3] = wpos.x;
        field.positions[n * 3 + 1] = wpos.y;
        field.positions[n * 3 + 2] = wpos.z;
        field.colors[n * 3] = Math.min(1, r * p.brightness * 1.4);
        field.colors[n * 3 + 1] = Math.min(1, g * p.brightness * 1.4);
        field.colors[n * 3 + 2] = Math.min(1, b * p.brightness * 1.4);
        n++;
      });
      field.geo.setDrawRange(0, n);
      field.geo.attributes.position.needsUpdate = true;
      field.geo.attributes.color.needsUpdate = true;

      connections.forEach((c, i) => {
        const col = hexToRgb(colors[c.a.colorIdx % colors.length]);
        const [r, g, b] = rgbToUnit(col);
        const a = toWorld(c.a.x, c.a.y, c.a.z, width, height);
        const bpos = toWorld(c.b.x, c.b.y, c.b.z, width, height);
        const li = i * 6;
        lineField.pos[li] = a.x; lineField.pos[li + 1] = a.y; lineField.pos[li + 2] = a.z;
        lineField.pos[li + 3] = bpos.x; lineField.pos[li + 4] = bpos.y; lineField.pos[li + 5] = bpos.z;
        const aCol = c.opacity * 0.35;
        lineField.col[li] = r * aCol; lineField.col[li + 1] = g * aCol; lineField.col[li + 2] = b * aCol;
        lineField.col[li + 3] = r * aCol; lineField.col[li + 4] = g * aCol; lineField.col[li + 5] = b * aCol;
      });
      lineField.geo.setDrawRange(0, connections.length * 2);
      lineField.geo.attributes.position.needsUpdate = true;
      lineField.geo.attributes.color.needsUpdate = true;
    },

    onPointerDown() {},
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { particles = []; connections = []; field = null; lineField = null; },
  };
}
