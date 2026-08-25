import * as THREE from 'three';
import { SimplexNoise, fbm } from '../../utils/noise.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';

export function createFluidAurora() {
  const noise = new SimplexNoise();
  let particles = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'atmosphere';
  let field = null;
  let lineField = null;
  const MAX = 1500;

  class FluidParticle {
    constructor(w, h) {
      this.reset(w, h);
    }

    reset(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.z = (Math.random() - 0.5) * 180;
      this.prevX = this.x;
      this.prevY = this.y;
      this.prevZ = this.z;
      this.vx = 0;
      this.vy = 0;
      this.vz = 0;
      this.life = 0;
      this.maxLife = 1.5 + Math.random() * 3;
      this.colorIdx = Math.floor(Math.random() * 5);
      this.size = 1 + Math.random() * 2;
    }

    update(dt, w, h, speed, gravity) {
      this.prevX = this.x;
      this.prevY = this.y;
      this.prevZ = this.z;
      const scale = 0.0018;
      const angle = fbm(noise, this.x * scale, this.y * scale, time * 0.25, 3) * Math.PI * 4;
      const lift = fbm(noise, this.z * scale, this.x * scale, time * 0.2, 2);
      const force = 90 * speed;
      this.vx += Math.cos(angle) * force * dt;
      this.vy += Math.sin(angle) * force * dt;
      this.vz += (lift - 0.5) * force * 0.45 * dt;
      this.vy += gravity * 40 * dt;
      this.vx *= 0.97;
      this.vy *= 0.97;
      this.vz *= 0.97;
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.z += this.vz * dt;
      this.life += dt;
      if (this.x < -80 || this.x > w + 80 ||
          this.y < -80 || this.y > h + 80 ||
          this.life > this.maxLife) {
        this.reset(w, h);
      }
    }
  }

  return {
    init(w, h, params, group) {
      width = w; height = h;
      currentPalette = params.palette || 'atmosphere';
      time = 0;
      particles = [];
      field = makePoints(MAX, 11);
      group.add(field.points);

      const lineGeo = new THREE.BufferGeometry();
      const linePos = new Float32Array(MAX * 2 * 3);
      const lineCol = new Float32Array(MAX * 2 * 3);
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
      lineField = { geo: lineGeo, pos: linePos, col: lineCol, lines };

      const count = Math.min(params.particleCount, MAX);
      for (let i = 0; i < count; i++) {
        const p = new FluidParticle(w, h);
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;
      const audioBoost = audioData.isActive ? 1 + audioData.volume * 2.5 : 1;
      particles.forEach(p => {
        p.update(dt, width, height, params.speed * audioBoost, params.gravity);
        if (pointer.isDown || pointer.velocity > 5) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist2 = dx * dx + dy * dy;
          const maxDist = 220;
          if (dist2 < maxDist * maxDist && dist2 > 1) {
            const dist = Math.sqrt(dist2);
            const f = ((maxDist - dist) / maxDist) * 120 * dt;
            p.vx += (dx / dist) * f;
            p.vy += (dy / dist) * f;
          }
        }
      });
      const target = Math.min(params.particleCount, MAX);
      while (particles.length < target) particles.push(new FluidParticle(width, height));
      while (particles.length > target) particles.pop();
    },

    render(_layer, _w, _h, params) {
      if (!field) return;
      const colors = getPaletteColors(currentPalette);
      field.mat.size = 6 + params.particleSize * 0.9;
      let lineCount = 0;
      particles.forEach((p, i) => {
        const c = hexToRgb(colors[p.colorIdx % colors.length]);
        const [r, g, b] = rgbToUnit(c);
        const lifeRatio = p.life / p.maxLife;
        const alpha = Math.sin(lifeRatio * Math.PI) * 0.85;
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        field.positions[i * 3] = wpos.x;
        field.positions[i * 3 + 1] = wpos.y;
        field.positions[i * 3 + 2] = wpos.z;
        field.colors[i * 3] = r * alpha;
        field.colors[i * 3 + 1] = g * alpha;
        field.colors[i * 3 + 2] = b * alpha;

        const prev = toWorld(p.prevX, p.prevY, p.prevZ, width, height);
        const li = lineCount * 6;
        lineField.pos[li] = prev.x;
        lineField.pos[li + 1] = prev.y;
        lineField.pos[li + 2] = prev.z;
        lineField.pos[li + 3] = wpos.x;
        lineField.pos[li + 4] = wpos.y;
        lineField.pos[li + 5] = wpos.z;
        lineField.col[li] = r * alpha * 0.35;
        lineField.col[li + 1] = g * alpha * 0.35;
        lineField.col[li + 2] = b * alpha * 0.35;
        lineField.col[li + 3] = r * alpha;
        lineField.col[li + 4] = g * alpha;
        lineField.col[li + 5] = b * alpha;
        lineCount++;
      });
      field.geo.setDrawRange(0, particles.length);
      field.geo.attributes.position.needsUpdate = true;
      field.geo.attributes.color.needsUpdate = true;
      lineField.geo.setDrawRange(0, lineCount * 2);
      lineField.geo.attributes.position.needsUpdate = true;
      lineField.geo.attributes.color.needsUpdate = true;
    },

    onPointerDown() {},
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { particles = []; field = null; lineField = null; },
  };
}
