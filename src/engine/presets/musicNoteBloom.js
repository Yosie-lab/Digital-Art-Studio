import * as THREE from 'three';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';
import {
  DEPTH,
  NOTE_IDS,
  NOTE_BUILDERS,
  pickNoteSymbol,
} from './musicSymbolGeometries.js';

function saturateRgb(rgb, amount = 0.07) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const mid = (max + min) * 0.5;
  return {
    r: Math.min(255, Math.max(0, Math.round(mid + (rgb.r - mid) * (1 + amount)))),
    g: Math.min(255, Math.max(0, Math.round(mid + (rgb.g - mid) * (1 + amount)))),
    b: Math.min(255, Math.max(0, Math.round(mid + (rgb.b - mid) * (1 + amount)))),
  };
}

function coolToneRgb(rgb) {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat > 0.35 && max > 80) {
    const isBlueDominant = rgb.b > rgb.r && rgb.b > rgb.g;
    if (isBlueDominant) {
      return {
        r: Math.min(255, Math.round(rgb.r * 0.95)),
        g: Math.min(255, Math.round(rgb.g * 0.72)),
        b: Math.min(255, Math.round(rgb.b * 1.08 + 8)),
      };
    }
    return saturateRgb(rgb, 0.05);
  }
  const b = Math.min(255, Math.round(rgb.b * 1.08 + 16));
  return {
    r: Math.min(Math.round(rgb.r * 0.7), Math.round(b * 0.55)),
    g: Math.min(Math.round(rgb.g * 0.55), Math.round(b * 0.4)),
    b,
  };
}

function vividPetalRgb(rgb) {
  const cool = coolToneRgb(rgb);
  const vivid = saturateRgb(cool, 0.05);
  return {
    r: Math.min(255, Math.round(vivid.r * 1.06 + 5)),
    g: Math.min(255, Math.round(vivid.g * 1.05 + 3)),
    b: Math.min(255, Math.round(vivid.b * 1.06 + 5)),
  };
}

function brightenRgb(rgb) {
  const base = coolToneRgb(rgb);
  return {
    r: Math.min(255, base.r + 18),
    g: Math.min(255, base.g + 14),
    b: Math.min(255, base.b + 18),
  };
}

function petalParticleRgb(rgb, lift = 1.15) {
  return {
    r: Math.min(255, Math.round(rgb.r * lift)),
    g: Math.min(255, Math.round(rgb.g * lift)),
    b: Math.min(255, Math.round(rgb.b * lift)),
  };
}

function displayColor(rgb, scale = 1) {
  // 暗くしすぎない（coolTone を弱めて明るく）
  const vivid = saturateRgb(rgb, 0.12);
  return {
    r: Math.min(1, (vivid.r / 255) * scale * 1.15 + 0.06),
    g: Math.min(1, (vivid.g / 255) * scale * 1.12 + 0.05),
    b: Math.min(1, (vivid.b / 255) * scale * 1.18 + 0.08),
  };
}

function randomFlowerPetalColor(paletteName) {
  const colors = getPaletteColors(paletteName).filter((hex) => {
    const { r, g, b } = hexToRgb(hex);
    return !(r > 230 && g > 230 && b > 230);
  });
  const pool = colors.length ? colors : getPaletteColors(paletteName);
  const weighted = [];
  for (const hex of pool) {
    const { r, g, b } = hexToRgb(hex);
    const isElectricBlue = b > 200 && g < 140 && r < 120 && b > g * 1.5;
    const isViolet = b > 160 && r > 40 && r < 140 && g < r * 0.9 && b > r;
    const copies = (isElectricBlue || isViolet) ? 6 : 2;
    for (let i = 0; i < copies; i++) weighted.push(hex);
  }
  const pick = weighted.length ? weighted : pool;
  return pick[Math.floor(Math.random() * pick.length)];
}

function paletteAccentRgb(paletteName) {
  const colors = getPaletteColors(paletteName);
  return vividPetalRgb(hexToRgb(colors[Math.floor(Math.random() * colors.length)]));
}

function pickMarkSize() {
  const r = Math.random();
  if (r < 0.12) return 68 + Math.random() * 30;
  if (r < 0.35) return 44 + Math.random() * 20;
  return 30 + Math.random() * 16;
}

function pickNote() {
  return pickNoteSymbol();
}

/**
 * 楽譜として読めるシルエット表示 + Flower Bloom 出現ロジック
 */
export function createMusicNoteBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let noteSets = {};
  let sparkleField = null;
  let fallField = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 64;
  const MAX_PER = 10;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 280;
      this.note = pickNote();
      this.maxSize = pickMarkSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.35 + Math.random() * 0.5;
      this.baseRot = (Math.random() - 0.5) * 0.35;
      this.tilt = (Math.random() - 0.5) * 0.45;
      this.yaw = (Math.random() - 0.5) * 0.55;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.55 + Math.random() * 0.35;
      this.windAmp = 0.05 + Math.random() * 0.04;
      this.spinX = 0.35 + Math.random() * 0.25;
      this.spinY = 0.45 + Math.random() * 0.35;
      this.spinZ = 0.2 + Math.random() * 0.15;
      this.phaseX = Math.random() * Math.PI * 2;
      this.phaseY = Math.random() * Math.PI * 2;
      this.phaseZ = Math.random() * Math.PI * 2;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.7 + Math.random() * 0.5;
      this.driftZ = (Math.random() - 0.5) * 18;
      this.color = randomFlowerPetalColor(palette);
      const base = vividPetalRgb(hexToRgb(this.color));
      this.rgb = {
        r: Math.min(255, Math.round(base.r * 1.2 + 20)),
        g: Math.min(255, Math.round(base.g * 1.18 + 16)),
        b: Math.min(255, Math.round(base.b * 1.22 + 24)),
      };
      this.innerRgb = brightenRgb(this.rgb);
      this.lifetime = 0;
      this.maxLifetime = 4 + Math.random() * 4.5;
      this.phase = 'growing';
      this.opacity = 1;
    }

    update(dt, t) {
      this.lifetime += dt;
      // ゆっくり立体回転（読みやすさは残しつつ厚みが見える）
      this.tumbleX = Math.sin(t * this.spinX + this.phaseX) * 0.28;
      this.tumbleY = Math.sin(t * this.spinY + this.phaseY) * 0.42;
      this.tumbleZ = Math.sin(t * this.spinZ + this.phaseZ) * 0.12;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 22;
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
          if (Math.random() < dt * 4) this._shedShard();
          if (Math.random() < dt * 5) this._shedDust();
          break;
      }
      return this.opacity > 0.01 && this.lifetime < this.maxLifetime;
    }

    _easeOutBack(u) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
    }

    _shedShard() {
      for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size,
          y: this.y + (Math.random() - 0.5) * this.size,
          z: this.z + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 65,
          vy: -18 - Math.random() * 40,
          vz: (Math.random() - 0.5) * 42,
          size: this.size * 0.12 + Math.random() * 6,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 6,
          rgb: petalParticleRgb(this.rgb, 1.2),
          opacity: 1,
          glow: 1.4 + Math.random() * 0.3,
          kind: 'shard',
        });
      }
    }

    _shedDust() {
      for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 0.5,
          y: this.y + (Math.random() - 0.5) * this.size * 0.5,
          z: this.z + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 85,
          vy: (Math.random() - 0.5) * 85 - 8,
          vz: (Math.random() - 0.5) * 55,
          size: 2 + Math.random() * 5,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 8,
          rgb: petalParticleRgb(this.innerRgb, 1.25),
          opacity: 1,
          glow: 1.5 + Math.random() * 0.3,
          kind: 'dust',
        });
      }
    }
  }

  function placeMark(mark, scaleMul = 1) {
    const wind = Math.sin(time * mark.windSpeed + mark.windPhase);
    const wind2 = Math.sin(time * mark.windSpeed * 1.37 + mark.windPhase * 1.2);
    const pos = toWorld(mark.x, mark.y, mark.z + mark.bob + wind2 * mark.driftZ, width, height);
    dummy.position.copy(pos);
    dummy.position.x += wind * mark.windAmp * mark.size * 0.28;
    dummy.position.y += Math.sin(time * mark.bobSpeed * 0.7 + mark.bobPhase) * mark.size * 0.04;
    dummy.rotation.set(
      mark.tilt + mark.tumbleX + wind * mark.windAmp * 0.5,
      mark.yaw + mark.tumbleY + wind2 * 0.15,
      mark.baseRot + mark.tumbleZ + wind2 * mark.windAmp * 0.35,
    );
    const s = mark.size * scaleMul;
    // Z を少し厚くして押し出しの立体感を強調
    dummy.scale.set(s, s, s * 1.55);
    dummy.updateMatrix();
    return pos;
  }

  function hideInstance(mesh, i) {
    dummy.position.set(0, 0, -4000);
    dummy.scale.set(0.001, 0.001, 0.001);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (mesh.instanceColor) mesh.setColorAt(i, _color.setRGB(0, 0, 0));
  }

  function syncMeshes() {
    if (!NOTE_IDS.every((id) => noteSets[id])) return;

    const buckets = Object.fromEntries(NOTE_IDS.map((id) => [id, []]));
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < shown; i++) {
      const m = marks[i];
      if (m && m.size >= 0.5) buckets[m.note].push(m);
    }

    for (const id of NOTE_IDS) {
      const set = noteSets[id];
      const list = buckets[id];
      for (let i = 0; i < MAX_PER; i++) {
        const mark = list[i];
        if (!mark) {
          hideInstance(set.mesh, i);
          hideInstance(set.outline, i);
          continue;
        }
        placeMark(mark, 1);
        set.mesh.setMatrixAt(i, dummy.matrix);
        const c = displayColor(mark.rgb, 1.05 + mark.opacity * 0.15);
        set.mesh.setColorAt(i, _color.setRGB(c.r, c.g, c.b));
        placeMark(mark, 1.06);
        set.outline.setMatrixAt(i, dummy.matrix);
        set.outline.setColorAt(i, _color.setRGB(c.r * 0.35, c.g * 0.4, c.b * 0.55));
      }
      set.mesh.instanceMatrix.needsUpdate = true;
      set.outline.instanceMatrix.needsUpdate = true;
      if (set.mesh.instanceColor) set.mesh.instanceColor.needsUpdate = true;
      if (set.outline.instanceColor) set.outline.instanceColor.needsUpdate = true;
    }

    if (sparkleField) {
      sparkles.forEach((s, i) => {
        const wpos = toWorld(s.x, s.y, s.z, width, height);
        sparkleField.positions[i * 3] = wpos.x;
        sparkleField.positions[i * 3 + 1] = wpos.y;
        sparkleField.positions[i * 3 + 2] = wpos.z;
        const pulse = 0.14 + 0.16 * Math.abs(Math.sin(time * 2.8 + s.phase));
        const c = displayColor(s.rgb, pulse);
        sparkleField.colors[i * 3] = c.r;
        sparkleField.colors[i * 3 + 1] = c.g;
        sparkleField.colors[i * 3 + 2] = c.b;
      });
      sparkleField.geo.setDrawRange(0, sparkles.length);
      sparkleField.geo.attributes.position.needsUpdate = true;
      sparkleField.geo.attributes.color.needsUpdate = true;
    }

    if (fallField) {
      const n = Math.min(shards.length, 700);
      for (let i = 0; i < n; i++) {
        const p = shards[i];
        const wpos = toWorld(p.x, p.y, p.z, width, height);
        fallField.positions[i * 3] = wpos.x;
        fallField.positions[i * 3 + 1] = wpos.y;
        fallField.positions[i * 3 + 2] = wpos.z;
        const [r, g, b] = rgbToUnit(p.rgb);
        const glow = (p.glow || 1.4) * (0.5 + p.opacity * 0.55);
        fallField.colors[i * 3] = Math.min(1, r * glow);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
    }
  }

  function spawn(x, y) {
    marks.push(new Mark(x, y, currentPalette));
  }

  const matOpts = {
    color: 0xffffff,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.NormalBlending,
    toneMapped: false,
  };

  return {
    init(w, h, params, group) {
      width = w;
      height = h;
      currentPalette = params.palette || 'rainbow';
      marks = [];
      shards = [];
      sparkles = [];
      time = 0;
      layer = group;
      noteSets = {};

      for (const id of NOTE_IDS) {
        let geo;
        try {
          geo = NOTE_BUILDERS[id]();
        } catch (err) {
          console.error('[musicNoteBloom] geometry failed:', id, err);
          geo = new THREE.BoxGeometry(0.2, 0.2, DEPTH);
          geo.center();
        }
        const mesh = new THREE.InstancedMesh(
          geo,
          new THREE.MeshBasicMaterial({ ...matOpts, opacity: 0.72 }),
          MAX_PER,
        );
        mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_PER * 3), 3);
        mesh.frustumCulled = false;
        layer.add(mesh);
        const outline = new THREE.InstancedMesh(
          geo,
          new THREE.MeshBasicMaterial({
            ...matOpts,
            side: THREE.BackSide,
            opacity: 0.28,
            depthWrite: false,
          }),
          MAX_PER,
        );
        outline.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_PER * 3), 3);
        outline.frustumCulled = false;
        layer.add(outline);
        noteSets[id] = { mesh, outline, geo };
      }

      sparkleField = makePoints(80, 5);
      fallField = makePoints(700, 14);
      fallField.mat.opacity = 0.85;
      layer.add(sparkleField.points, fallField.points);

      for (let i = 0; i < 12; i++) spawn(Math.random() * w, Math.random() * h);
      for (let i = 0; i < 70; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 220,
          speedY: -(0.08 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
          rgb: paletteAccentRgb(currentPalette),
        });
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
          spawn(pointer.x + (Math.random() - 0.5) * 50, pointer.y + (Math.random() - 0.5) * 50);
        }
      }
      if (Math.random() < dt * 1.8 * (params.speed || 1)) {
        spawn(Math.random() * width, Math.random() * height);
      }
      if (audioData?.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) spawn(Math.random() * width, Math.random() * height);
      }

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.opacity -= dt * (p.kind === 'dust' ? 0.14 : 0.1);
        return p.opacity > 0.02 && p.y < height + 80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 60 * dt;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(20, Math.floor((params.particleCount || 1030) / 4)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
    },

    render() {
      syncMeshes();
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

    samplePoints(count) {
      const out = new Float32Array(count * 3);
      const n = marks.length;
      if (n === 0) {
        for (let i = 0; i < count; i++) {
          out[i * 3] = (Math.random() - 0.5) * 70;
          out[i * 3 + 1] = (Math.random() - 0.5) * 70;
          out[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return out;
      }
      for (let i = 0; i < count; i++) {
        const m = marks[i % n];
        const wpos = toWorld(
          m.x + (Math.random() - 0.5) * m.size,
          m.y + (Math.random() - 0.5) * m.size,
          m.z + (Math.random() - 0.5) * 24,
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
      shards = [];
      sparkles = [];
      for (const id of NOTE_IDS) noteSets[id]?.geo?.dispose();
      noteSets = {};
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
