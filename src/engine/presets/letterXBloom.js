import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld } from '../space3d.js';

/** 花びらと同系の電光青寄り */
function letterBlueHex(paletteName) {
  const colors = getPaletteColors(paletteName || 'rainbow');
  const preferred = colors.find((hex) => {
    const { r, g, b } = hexToRgb(hex);
    return b > 180 && g < 160 && r < 140;
  });
  return preferred || colors[1] || colors[0] || '#2a5cff';
}

function toRgb(hex) {
  return hexToRgb(hex);
}

function displayColor(rgb, scale = 1) {
  return {
    r: Math.min(1, (rgb.r / 255) * scale),
    g: Math.min(1, (rgb.g / 255) * scale),
    b: Math.min(1, (rgb.b / 255) * scale),
  };
}

/**
 * Flower Bloom と同じシチュエーション:
 * カーソルに沿って大量出現＋画面各所にも自然発生
 */
export function createLetterXBloom() {
  let marks = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let beamMesh = null;
  let coreMesh = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 64;
  const BEAMS = 2;
  const MAX_INST = MAX * BEAMS;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 160;
      this.maxSize = 18 + Math.random() * 28;
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.4 + Math.random() * 0.6;
      this.rx = Math.random() * Math.PI * 2;
      this.ry = Math.random() * Math.PI * 2;
      this.rz = Math.random() * Math.PI * 2;
      this.spinX = 0.45 + Math.random() * 0.55;
      this.spinY = 0.35 + Math.random() * 0.5;
      this.spinZ = 0.25 + Math.random() * 0.4;
      this.phaseX = Math.random() * Math.PI * 2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.phaseZ = Math.random() * Math.PI * 2;
      this.color = letterBlueHex(palette);
      this.rgb = toRgb(this.color);
      this.lifetime = 0;
      this.maxLifetime = 3.5 + Math.random() * 4;
      this.phase = 'growing';
      this.opacity = 1;
    }

    update(dt, t) {
      this.lifetime += dt;
      // 上下・左右に振る
      this.rx = Math.sin(t * this.spinX + this.phaseX) * 0.7;
      this.ry = Math.sin(t * this.spinY + this.phaseY) * 0.95;
      this.rz = Math.sin(t * this.spinZ + this.phaseZ) * 0.35;
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
          this.opacity -= dt * 0.28;
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _easeOutBack(u) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
    }
  }

  function syncMeshes() {
    if (!beamMesh) return;
    const shown = Math.min(marks.length, MAX);
    let inst = 0;
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      const pos = mark ? toWorld(mark.x, mark.y, mark.z, width, height) : null;
      for (let b = 0; b < BEAMS; b++) {
        if (!mark || mark.size < 0.5) {
          dummy.position.set(0, 0, -4000);
          dummy.scale.set(0.001, 0.001, 0.001);
          dummy.rotation.set(0, 0, 0);
        } else {
          dummy.position.copy(pos);
          dummy.rotation.set(mark.rx, mark.ry, mark.rz + (b === 0 ? Math.PI / 4 : -Math.PI / 4));
          const s = mark.size;
          dummy.scale.set(s * 0.22, s * 1.05, s * 0.2);
        }
        dummy.updateMatrix();
        beamMesh.setMatrixAt(inst, dummy.matrix);
        if (mark) {
          const c = displayColor(mark.rgb, 0.7 + mark.opacity * 0.5);
          beamMesh.setColorAt(inst, _color.setRGB(c.r, c.g, c.b));
        } else {
          beamMesh.setColorAt(inst, _color.setRGB(0, 0, 0));
        }
        inst++;
      }
      if (mark && coreMesh && mark.size >= 0.5) {
        dummy.position.copy(pos);
        dummy.rotation.set(mark.rx, mark.ry, mark.rz);
        dummy.scale.setScalar(Math.max(mark.size * 0.22, 0.01));
        dummy.updateMatrix();
        coreMesh.setMatrixAt(i, dummy.matrix);
        const c = displayColor(mark.rgb, 0.55 + mark.opacity * 0.35);
        coreMesh.setColorAt(i, _color.setRGB(c.r * 1.05, c.g * 1.05, c.b));
      } else if (coreMesh) {
        dummy.position.set(0, 0, -4000);
        dummy.scale.setScalar(0.001);
        dummy.updateMatrix();
        coreMesh.setMatrixAt(i, dummy.matrix);
      }
    }
    beamMesh.instanceMatrix.needsUpdate = true;
    if (beamMesh.instanceColor) beamMesh.instanceColor.needsUpdate = true;
    if (coreMesh) {
      coreMesh.instanceMatrix.needsUpdate = true;
      if (coreMesh.instanceColor) coreMesh.instanceColor.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params.palette || 'rainbow';
      marks = [];
      time = 0;
      layer = group;

      const beamGeo = new THREE.BoxGeometry(1, 1, 1);
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.92,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      beamMesh = new THREE.InstancedMesh(beamGeo, beamMat, MAX_INST);
      beamMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_INST * 3), 3);
      beamMesh.frustumCulled = false;
      layer.add(beamMesh);

      const coreGeo = new THREE.BoxGeometry(1, 1, 1);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      coreMesh = new THREE.InstancedMesh(coreGeo, coreMat, MAX);
      coreMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
      coreMesh.frustumCulled = false;
      layer.add(coreMesh);

      for (let i = 0; i < 12; i++) {
        spawn(Math.random() * w, Math.random() * h);
      }
    },

    resize(w, h) {
      width = w;
      height = h;
    },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette || currentPalette;
      marks = marks.filter((m) => m.update(dt, time));

      if (pointer?.velocity > 3) {
        const n = Math.min(2, Math.floor(pointer.velocity / 16) + 1);
        for (let i = 0; i < n; i++) {
          spawn(
            pointer.x + (Math.random() - 0.5) * 50,
            pointer.y + (Math.random() - 0.5) * 50,
          );
        }
      }

      if (Math.random() < dt * 1.8 * (params.speed || 1)) {
        spawn(Math.random() * width, Math.random() * height);
      }

      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) {
          spawn(Math.random() * width, Math.random() * height);
        }
      }

      const maxMarks = Math.min(MAX, Math.max(20, Math.floor((params.particleCount || 1030) / 4)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
      if (beamMesh) beamMesh.material.opacity = 0.9;
    },

    onPointerDown(x, y) {
      for (let i = 0; i < 6; i++) {
        spawn(x + (Math.random() - 0.5) * 90, y + (Math.random() - 0.5) * 90);
      }
    },

    onPointerMove() {},
    onPointerUp() {},
    setParams(p) {
      currentPalette = p.palette || currentPalette;
    },

    /** 変容用: 現在の X 群のワールド座標をサンプリング */
    samplePoints(count) {
      const out = new Float32Array(count * 3);
      const n = marks.length;
      if (n === 0) {
        for (let i = 0; i < count; i++) {
          const ang = (i / count) * Math.PI * 2;
          const r = 40 + (i % 5) * 12;
          out[i * 3] = Math.cos(ang) * r;
          out[i * 3 + 1] = Math.sin(ang * 2) * r * 0.6;
          out[i * 3 + 2] = (i % 7) * 8 - 24;
        }
        return out;
      }
      for (let i = 0; i < count; i++) {
        const m = marks[i % n];
        const wpos = toWorld(
          m.x + (Math.random() - 0.5) * m.size * 0.8,
          m.y + (Math.random() - 0.5) * m.size * 0.8,
          m.z + (Math.random() - 0.5) * 20,
          width,
          height,
        );
        out[i * 3] = wpos.x;
        out[i * 3 + 1] = wpos.y;
        out[i * 3 + 2] = wpos.z;
      }
      return out;
    },

    destroy() {
      marks = [];
      beamMesh = null;
      coreMesh = null;
      layer = null;
    },
  };
}
