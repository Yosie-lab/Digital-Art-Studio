import * as THREE from 'three';
import { randomFromPalette, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';

export function createFlowerBloom() {
  let flowers = [];
  let petals = [];
  let sparkles = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'sakura';
  let layer = null;
  let petalMesh = null;
  let coreMesh = null;
  let sparkleField = null;
  let fallField = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX_FLOWERS = 64;
  const PETALS_PER = 8;
  const MAX_INST = MAX_FLOWERS * PETALS_PER;

  class Flower {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 160;
      this.petalCount = 5 + Math.floor(Math.random() * 4);
      this.maxSize = 18 + Math.random() * 28;
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.4 + Math.random() * 0.6;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.3;
      this.tilt = (Math.random() - 0.5) * 0.7;
      this.color = randomFromPalette(palette);
      this.rgb = hexToRgb(this.color);
      this.lifetime = 0;
      this.maxLifetime = 3.5 + Math.random() * 4;
      this.phase = 'growing';
      this.opacity = 1;
      this.innerColor = randomFromPalette(palette);
      this.innerRgb = hexToRgb(this.innerColor);
    }

    update(dt) {
      this.lifetime += dt;
      this.rotation += this.rotSpeed * dt;
      switch (this.phase) {
        case 'growing':
          this.growth = Math.min(1, this.growth + this.growthRate * dt);
          this.size = this.maxSize * this._easeOutBack(this.growth);
          if (this.growth >= 1) this.phase = 'bloomed';
          break;
        case 'bloomed':
          if (this.lifetime > this.maxLifetime * 0.55) this.phase = 'wilting';
          break;
        case 'wilting':
          this.opacity -= dt * 0.35;
          if (Math.random() < dt * 2.5) this._shedPetal();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _easeOutBack(t) {
      const c1 = 1.70158, c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    _shedPetal() {
      petals.push({
        x: this.x + (Math.random() - 0.5) * this.size,
        y: this.y + (Math.random() - 0.5) * this.size,
        z: this.z + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 50,
        vy: -15 - Math.random() * 35,
        vz: (Math.random() - 0.5) * 30,
        size: this.size * 0.25 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 4,
        color: this.color,
        rgb: this.rgb,
        opacity: 0.85,
      });
    }
  }

  function syncMeshes() {
    if (!petalMesh) return;
    const shown = Math.min(flowers.length, MAX_FLOWERS);
    let inst = 0;
    for (let f = 0; f < MAX_FLOWERS; f++) {
      const flower = f < shown ? flowers[f] : null;
      const pos = flower ? toWorld(flower.x, flower.y, flower.z, width, height) : null;
      for (let p = 0; p < PETALS_PER; p++) {
        if (!flower || p >= flower.petalCount || flower.size < 0.5) {
          dummy.position.set(0, 0, -4000);
          dummy.scale.set(0.001, 0.001, 0.001);
        } else {
          const angle = (p / flower.petalCount) * Math.PI * 2 + flower.rotation;
          dummy.position.copy(pos);
          dummy.rotation.set(flower.tilt, angle, Math.PI * 0.35);
          dummy.translateY(flower.size * 0.45);
          dummy.scale.set(flower.size * 0.42, flower.size * 0.95, 1);
        }
        dummy.updateMatrix();
        petalMesh.setMatrixAt(inst, dummy.matrix);
        if (flower) {
          _color.setRGB(flower.rgb.r / 255, flower.rgb.g / 255, flower.rgb.b / 255);
          _color.multiplyScalar(0.45 + flower.opacity * 0.7);
          petalMesh.setColorAt(inst, _color);
        } else {
          petalMesh.setColorAt(inst, _color.setRGB(0, 0, 0));
        }
        inst++;
      }
      if (flower && coreMesh) {
        dummy.position.copy(pos);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(Math.max(flower.size * 0.18, 0.01));
        dummy.updateMatrix();
        coreMesh.setMatrixAt(f, dummy.matrix);
        coreMesh.setColorAt(f, _color.setRGB(1, 0.95, 0.7));
      } else if (coreMesh) {
        dummy.position.set(0, 0, -4000);
        dummy.scale.setScalar(0.001);
        dummy.updateMatrix();
        coreMesh.setMatrixAt(f, dummy.matrix);
      }
    }
    petalMesh.instanceMatrix.needsUpdate = true;
    if (petalMesh.instanceColor) petalMesh.instanceColor.needsUpdate = true;
    if (coreMesh) {
      coreMesh.instanceMatrix.needsUpdate = true;
      if (coreMesh.instanceColor) coreMesh.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const a = 0.25 + 0.45 * Math.abs(Math.sin(time * 2.2 + s.phase));
        sparkleField.colors[i * 3] = a;
        sparkleField.colors[i * 3 + 1] = a;
        sparkleField.colors[i * 3 + 2] = a;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(petals.length, 600);
      for (let i = 0; i < n; i++) {
        const p = petals[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r, g, b] = rgbToUnit(p.rgb);
        fallField.colors[i * 3] = r * p.opacity;
        fallField.colors[i * 3 + 1] = g * p.opacity;
        fallField.colors[i * 3 + 2] = b * p.opacity;
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  return {
    init(w, h, params, group) {
      width = w; height = h;
      currentPalette = params.palette || 'sakura';
      flowers = []; petals = []; sparkles = [];
      time = 0;
      layer = group;

      const petalGeo = new THREE.CircleGeometry(0.55, 10);
      petalGeo.translate(0, 0.45, 0);
      const petalMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.82,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      petalMesh = new THREE.InstancedMesh(petalGeo, petalMat, MAX_INST);
      petalMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_INST * 3), 3);
      petalMesh.frustumCulled = false;
      layer.add(petalMesh);

      const coreGeo = new THREE.SphereGeometry(1, 8, 8);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      coreMesh = new THREE.InstancedMesh(coreGeo, coreMat, MAX_FLOWERS);
      coreMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_FLOWERS * 3), 3);
      coreMesh.frustumCulled = false;
      layer.add(coreMesh);

      sparkleField = makePoints(160, 6);
      fallField = makePoints(600, 14);
      layer.add(sparkleField.points, fallField.points);

      for (let i = 0; i < 12; i++) {
        flowers.push(new Flower(Math.random() * w, Math.random() * h, currentPalette));
      }
      for (let i = 0; i < 120; i++) {
        sparkles.push({
          x: Math.random() * w, y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          size: 0.5 + Math.random() * 1.8,
          speedY: -(0.08 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
        });
      }
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;
      flowers = flowers.filter(f => f.update(dt));

      if (pointer.velocity > 3) {
        const n = Math.min(3, Math.floor(pointer.velocity / 12) + 1);
        for (let i = 0; i < n; i++) {
          flowers.push(new Flower(
            pointer.x + (Math.random() - 0.5) * 70,
            pointer.y + (Math.random() - 0.5) * 70,
            currentPalette
          ));
        }
      }

      if (Math.random() < dt * 1.8 * params.speed) {
        flowers.push(new Flower(Math.random() * width, Math.random() * height, currentPalette));
      }

      if (audioData.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) {
          flowers.push(new Flower(Math.random() * width, Math.random() * height, currentPalette));
        }
      }

      petals = petals.filter(p => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 25 * dt;
        p.vx += Math.sin(time * 2.5 + p.x * 0.008) * 15 * dt;
        p.rot += p.rotSpeed * dt;
        p.opacity -= dt * 0.22;
        return p.opacity > 0 && p.y < height + 60;
      });

      sparkles.forEach(s => {
        s.y += s.speedY * params.speed * 60 * dt;
        s.x += Math.sin(time * 1.5 + s.phase) * 0.25;
        if (s.y < -10) { s.y = height + 10; s.x = Math.random() * width; }
      });

      const maxFlowers = Math.min(MAX_FLOWERS, Math.max(20, Math.floor(params.particleCount / 4)));
      if (flowers.length > maxFlowers) flowers.splice(0, flowers.length - maxFlowers);
      if (petals.length > 600) petals.splice(0, petals.length - 600);
    },

    render() {
      syncMeshes();
      if (petalMesh) petalMesh.material.opacity = 0.55 + 0.35 * 0.85;
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 6; i++) {
        flowers.push(new Flower(
          x + (Math.random() - 0.5) * 90,
          y + (Math.random() - 0.5) * 90,
          currentPalette
        ));
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() {
      flowers = []; petals = []; sparkles = [];
      petalMesh = null; coreMesh = null;
      sparkleField = null; fallField = null;
      layer = null;
    },
  };
}
