import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';

export function createInteractiveRipples() {
  let ripples = [];
  let ambient = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'atmosphere';
  let autoTimer = 0;
  let ringMesh = null;
  let ambientField = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX_RINGS = 48;

  class Ripple {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 80;
      this.radius = 0;
      this.maxRadius = 180 + Math.random() * 320;
      this.speed = 110 + Math.random() * 140;
      this.lineWidth = 1.5 + Math.random() * 3;
      this.opacity = 1;
      this.rings = 1 + Math.floor(Math.random() * 3);
      this.tilt = (Math.random() - 0.5) * 0.8;
      const colors = getPaletteColors(palette);
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rgb = hexToRgb(this.color);
    }

    update(dt, speed) {
      this.radius += this.speed * speed * dt;
      this.opacity = Math.max(0, 1 - this.radius / this.maxRadius);
      return this.opacity > 0.008;
    }
  }

  return {
    init(w, h, params, group) {
      width = w; height = h;
      currentPalette = params.palette || 'atmosphere';
      time = 0; autoTimer = 0;
      ripples = [];
      ambient = [];

      const geo = new THREE.TorusGeometry(1, 0.018, 8, 64);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      ringMesh = new THREE.InstancedMesh(geo, mat, MAX_RINGS);
      ringMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_RINGS * 3), 3);
      ringMesh.frustumCulled = false;
      group.add(ringMesh);

      ambientField = makePoints(90, 8);
      group.add(ambientField.points);

      for (let i = 0; i < 90; i++) {
        ambient.push({
          x: Math.random() * w, y: Math.random() * h,
          z: (Math.random() - 0.5) * 140,
          size: 0.5 + Math.random() * 2,
          sx: (Math.random() - 0.5) * 8,
          sy: (Math.random() - 0.5) * 8,
          sz: (Math.random() - 0.5) * 6,
          phase: Math.random() * Math.PI * 2,
          colorIdx: Math.floor(Math.random() * 5),
        });
      }
      for (let i = 0; i < 3; i++) {
        ripples.push(new Ripple(Math.random() * w, Math.random() * h, currentPalette));
      }
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;
      ripples = ripples.filter(r => r.update(dt, params.speed));

      autoTimer += dt;
      const autoInterval = Math.max(0.3, 1.8 / params.speed);
      if (autoTimer > autoInterval) {
        autoTimer = 0;
        ripples.push(new Ripple(Math.random() * width, Math.random() * height, currentPalette));
      }

      if (pointer.isDown && pointer.velocity > 4) {
        ripples.push(new Ripple(pointer.x, pointer.y, currentPalette));
      }

      if (audioData.isActive && audioData.bass > 0.35) {
        ripples.push(new Ripple(
          width / 2 + (Math.random() - 0.5) * width * 0.5,
          height / 2 + (Math.random() - 0.5) * height * 0.5,
          currentPalette
        ));
      }

      ambient.forEach(p => {
        p.x += p.sx * dt;
        p.y += p.sy * dt;
        p.z += p.sz * dt;
        ripples.forEach(r => {
          const dx = p.x - r.x;
          const dy = p.y - r.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - r.radius) < 35 && r.opacity > 0.08) {
            const push = r.opacity * 25;
            p.sx += (dx / (dist || 1)) * push * dt;
            p.sy += (dy / (dist || 1)) * push * dt;
            p.sz += (Math.random() - 0.5) * push * dt;
          }
        });
        p.sx *= 0.992;
        p.sy *= 0.992;
        p.sz *= 0.992;
        if (p.x < 0) p.x += width;
        if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        if (p.y > height) p.y -= height;
      });

      if (ripples.length > MAX_RINGS) ripples.splice(0, ripples.length - MAX_RINGS);
    },

    render() {
      if (!ringMesh) return;
      const colors = getPaletteColors(currentPalette);
      for (let i = 0; i < MAX_RINGS; i++) {
        const r = ripples[i];
        if (!r || r.radius < 1) {
          dummy.position.set(0, 0, -4000);
          dummy.scale.setScalar(0.001);
          dummy.updateMatrix();
          ringMesh.setMatrixAt(i, dummy.matrix);
          ringMesh.setColorAt(i, _color.setRGB(0, 0, 0));
          continue;
        }
        const pos = toWorld(r.x, r.y, r.z, width, height);
        dummy.position.copy(pos);
        dummy.rotation.set(Math.PI / 2 + r.tilt, 0, time * 0.2);
        dummy.scale.set(r.radius, r.radius, r.radius * 0.35);
        dummy.updateMatrix();
        ringMesh.setMatrixAt(i, dummy.matrix);
        const [cr, cg, cb] = rgbToUnit(r.rgb);
        _color.setRGB(cr, cg, cb).multiplyScalar(r.opacity);
        ringMesh.setColorAt(i, _color);
      }
      ringMesh.instanceMatrix.needsUpdate = true;
      if (ringMesh.instanceColor) ringMesh.instanceColor.needsUpdate = true;

      ambient.forEach((p, i) => {
        const col = hexToRgb(colors[p.colorIdx % colors.length]);
        const [r, g, b] = rgbToUnit(col);
        const a = 0.35 + 0.4 * Math.sin(time * 2.2 + p.phase);
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        ambientField.positions[i * 3] = wpos.x;
        ambientField.positions[i * 3 + 1] = wpos.y;
        ambientField.positions[i * 3 + 2] = wpos.z;
        ambientField.colors[i * 3] = r * a;
        ambientField.colors[i * 3 + 1] = g * a;
        ambientField.colors[i * 3 + 2] = b * a;
      });
      ambientField.geo.setDrawRange(0, ambient.length);
      ambientField.geo.attributes.position.needsUpdate = true;
      ambientField.geo.attributes.color.needsUpdate = true;
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 3; i++) {
        const delay = i * 80;
        setTimeout(() => {
          ripples.push(new Ripple(
            x + (Math.random() - 0.5) * 15,
            y + (Math.random() - 0.5) * 15,
            currentPalette
          ));
        }, delay);
      }
    },

    onPointerMove(x, y, pointer) {
      if (pointer.velocity > 10) {
        ripples.push(new Ripple(x, y, currentPalette));
      }
    },

    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() {
      ripples = []; ambient = [];
      ringMesh = null; ambientField = null;
    },
  };
}
