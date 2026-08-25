import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { rgbToUnit } from '../space3d.js';

const Y_AXIS = new THREE.Vector3(0, 1, 0);

export function createKaleidoPrism() {
  let shapes = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'cyberpunk';
  let segments = 8;
  let pointerAngle = 0;
  let pointerDist = 0;
  let mesh = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX_SHAPES = 80;
  const MAX_SEG = 14;
  const MAX_INST = MAX_SHAPES * MAX_SEG;

  class KShape {
    constructor() {
      this.angle = Math.random() * Math.PI * 2;
      this.distance = 30 + Math.random() * 250;
      this.lat = (Math.random() - 0.5) * 0.9;
      this.baseSize = 4 + Math.random() * 18;
      this.size = this.baseSize;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 2.5;
      this.orbitSpeed = 0.08 + Math.random() * 0.4;
      this.type = Math.floor(Math.random() * 4);
      this.colorIdx = Math.floor(Math.random() * 5);
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.opacity = 0.2 + Math.random() * 0.45;
    }

    update(dt, speed) {
      this.angle += this.orbitSpeed * speed * dt;
      this.rotation += this.rotSpeed * speed * dt;
      this.size = this.baseSize + Math.sin(time * 2 + this.pulsePhase) * this.baseSize * 0.3;
    }
  }

  return {
    init(w, h, params, group) {
      width = w; height = h;
      currentPalette = params.palette || 'cyberpunk';
      time = 0;
      shapes = [];
      const geo = new THREE.OctahedronGeometry(1, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        wireframe: true,
      });
      mesh = new THREE.InstancedMesh(geo, mat, MAX_INST);
      mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_INST * 3), 3);
      mesh.frustumCulled = false;
      group.add(mesh);
      const count = Math.max(15, Math.floor(params.particleCount / 8));
      for (let i = 0; i < count; i++) shapes.push(new KShape());
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;
      pointerAngle = Math.atan2(pointer.y - height / 2, pointer.x - width / 2);
      pointerDist = Math.sqrt((pointer.x - width / 2) ** 2 + (pointer.y - height / 2) ** 2);
      segments = 6 + Math.floor((pointer.y / Math.max(height, 1)) * 8);
      const audioMult = audioData.isActive ? 1 + audioData.bass * 4 : 1;
      shapes.forEach(s => s.update(dt, params.speed * audioMult));
      if (audioData.isActive) {
        shapes.forEach(s => { s.size = s.baseSize * (1 + audioData.mid * 2); });
      }
      const target = Math.max(15, Math.min(MAX_SHAPES, Math.floor(params.particleCount / 8)));
      while (shapes.length < target) shapes.push(new KShape());
      while (shapes.length > target) shapes.pop();
    },

    render(_layer, _w, _h, params) {
      if (!mesh) return;
      const colors = getPaletteColors(currentPalette);
      const scale = Math.min(width, height) * 0.42;
      let inst = 0;
      const segs = Math.min(MAX_SEG, Math.max(6, segments));
      for (let seg = 0; seg < segs; seg++) {
        const rotY = (seg / segs) * Math.PI * 2 + pointerAngle * 0.1;
        const mirror = seg % 2 === 1 ? -1 : 1;
        shapes.forEach(s => {
          if (inst >= MAX_INST) return;
          const col = hexToRgb(colors[s.colorIdx % colors.length]);
          const [r, g, b] = rgbToUnit(col);
          const radius = (s.distance / 250) * scale;
          dummy.position.set(
            Math.cos(s.angle) * radius,
            Math.sin(s.lat + time * 0.15) * radius * 0.45 * mirror,
            Math.sin(s.angle) * radius
          );
          dummy.position.applyAxisAngle(Y_AXIS, rotY);
          dummy.rotation.set(s.rotation, rotY, s.rotation * 0.4);
          const sz = s.size * (params.particleSize / 5) * 0.55;
          dummy.scale.setScalar(Math.max(sz, 0.2));
          dummy.updateMatrix();
          mesh.setMatrixAt(inst, dummy.matrix);
          _color.setRGB(r, g, b).multiplyScalar(0.4 + s.opacity);
          mesh.setColorAt(inst, _color);
          inst++;
        });
      }
      while (inst < MAX_INST) {
        dummy.position.set(0, 0, -5000);
        dummy.scale.setScalar(0.001);
        dummy.updateMatrix();
        mesh.setMatrixAt(inst, dummy.matrix);
        mesh.setColorAt(inst, _color.setRGB(0, 0, 0));
        inst++;
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    },

    onPointerDown() {},
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { shapes = []; mesh = null; },
  };
}
