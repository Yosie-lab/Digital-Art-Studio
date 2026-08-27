import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';
import { toWorld, makePoints, rgbToUnit } from '../space3d.js';

/* ——— Letter / Flower Bloom と同一の色処理 ——— */
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
  const cool = saturateRgb(coolToneRgb(rgb), 0.03);
  return {
    r: Math.min(1, (cool.r / 255) * scale),
    g: Math.min(1, (cool.g / 255) * scale),
    b: Math.min(1, (cool.b / 255) * scale),
  };
}

function randomFlowerPetalColor(paletteName) {
  const colors = getPaletteColors(paletteName).filter((hex) => {
    const { r, g, b } = hexToRgb(hex);
    const isWhitish = r > 230 && g > 230 && b > 230;
    const isYellowWhite = r > 220 && g > 210 && b > 180 && Math.min(r, g, b) > 170;
    return !isWhitish && !isYellowWhite;
  });
  const pool = colors.length ? colors : getPaletteColors(paletteName);
  const weighted = [];
  for (const hex of pool) {
    const { r, g, b } = hexToRgb(hex);
    const isYellow = r > 150 && g > 110 && b < 150 && r + g > b * 2.4;
    const isElectricBlue = b > 200 && g < 140 && r < 120 && b > g * 1.5;
    const isViolet = b > 160 && r > 40 && r < 140 && g < r * 0.9 && b > r;
    const isCyanish = b > 150 && g > b * 0.7 && g > r;
    const copies = (isElectricBlue || isViolet) ? 6 : isCyanish || isYellow ? 1 : 2;
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
  if (r < 0.1) return 58 + Math.random() * 42;
  if (r < 0.28) return 40 + Math.random() * 22;
  return 20 + Math.random() * 24;
}

/** 単位スケールのかわいいクラゲ（傘＋触手） */
function buildJellyGeometry() {
  const bell = new THREE.SphereGeometry(0.42, 22, 16, 0, Math.PI * 2, 0, Math.PI * 0.62);
  bell.scale(1.15, 0.92, 1.15);
  bell.translate(0, 0.22, 0);

  const rim = new THREE.TorusGeometry(0.4, 0.045, 8, 24);
  rim.rotateX(Math.PI / 2);
  rim.translate(0, 0.02, 0);

  const parts = [bell, rim];
  for (let i = 0; i < 7; i++) {
    const ang = (i / 7) * Math.PI * 2;
    const tent = new THREE.CapsuleGeometry(0.028, 0.52, 3, 6);
    tent.translate(Math.cos(ang) * 0.16, -0.38, Math.sin(ang) * 0.16);
    parts.push(tent);
  }
  return mergeGeometries(parts, false);
}

/**
 * Letter Bloom と同じ出現ロジックのクラゲ群
 */
export function createJellyfishBloom() {
  let marks = [];
  let shards = [];
  let sparkles = [];
  let width = 0;
  let height = 0;
  let time = 0;
  let currentPalette = 'rainbow';
  let layer = null;
  let jellyMesh = null;
  let outlineMesh = null;
  let sparkleField = null;
  let fallField = null;
  let jellyGeo = null;
  const dummy = new THREE.Object3D();
  const _color = new THREE.Color();
  const MAX = 64;

  class Mark {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.z = (Math.random() - 0.5) * 140;
      this.maxSize = pickMarkSize();
      this.size = 0;
      this.growth = 0;
      this.growthRate = 0.35 + Math.random() * 0.5;
      this.baseRot = (Math.random() - 0.5) * 0.5;
      this.tilt = (Math.random() - 0.5) * 0.25;
      this.windPhase = Math.random() * Math.PI * 2;
      this.windSpeed = 0.55 + Math.random() * 0.45;
      this.windAmp = 0.08 + Math.random() * 0.08;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.7 + Math.random() * 0.5;
      this.spinY = 0.18 + Math.random() * 0.22;
      this.phaseY = Math.random() * Math.PI * 2;
      this.color = randomFlowerPetalColor(palette);
      this.rgb = vividPetalRgb(hexToRgb(this.color));
      this.innerRgb = brightenRgb(this.rgb);
      this.lifetime = 0;
      this.maxLifetime = 4 + Math.random() * 4.5;
      this.phase = 'growing';
      this.opacity = 1;
    }

    update(dt, t) {
      this.lifetime += dt;
      this.bob = Math.sin(t * this.bobSpeed + this.bobPhase) * 0.12;
      this.sway = Math.sin(t * this.windSpeed + this.windPhase) * this.windAmp;
      this.spin = Math.sin(t * this.spinY + this.phaseY) * 0.35;
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
          if (Math.random() < dt * 3.5) this._shedShard();
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
      const burst = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < burst; i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 1.1,
          y: this.y + (Math.random() - 0.5) * this.size * 1.1,
          z: this.z + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 60,
          vy: -15 - Math.random() * 40,
          vz: (Math.random() - 0.5) * 40,
          size: this.size * 0.12 + Math.random() * 6,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 5,
          rgb: petalParticleRgb(this.rgb, 1.2),
          opacity: 1,
          glow: 1.4 + Math.random() * 0.3,
          kind: 'shard',
        });
      }
    }

    _shedDust() {
      const dust = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < dust; i++) {
        shards.push({
          x: this.x + (Math.random() - 0.5) * this.size * 0.5,
          y: this.y + (Math.random() - 0.5) * this.size * 0.5,
          z: this.z + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 80,
          vy: (Math.random() - 0.5) * 80 - 8,
          vz: (Math.random() - 0.5) * 50,
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
    const pos = toWorld(mark.x, mark.y, mark.z, width, height);
    dummy.position.copy(pos);
    dummy.position.y += mark.bob * mark.size;
    dummy.position.x += mark.sway * mark.size * 0.35;
    dummy.rotation.set(
      mark.tilt + mark.sway * 0.8,
      mark.baseRot + mark.spin,
      mark.sway * 0.5,
    );
    const pulse = 1 + Math.sin(time * mark.bobSpeed * 1.6 + mark.bobPhase) * 0.04;
    const s = mark.size * scaleMul * pulse;
    dummy.scale.set(s * 1.05, s * (0.92 + mark.bob * 0.15), s * 1.05);
    dummy.updateMatrix();
  }

  function syncMeshes() {
    if (!jellyMesh) return;
    const shown = Math.min(marks.length, MAX);
    for (let i = 0; i < MAX; i++) {
      const mark = i < shown ? marks[i] : null;
      if (!mark || mark.size < 0.5) {
        dummy.position.set(0, 0, -4000);
        dummy.scale.set(0.001, 0.001, 0.001);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        jellyMesh.setMatrixAt(i, dummy.matrix);
        outlineMesh.setMatrixAt(i, dummy.matrix);
        jellyMesh.setColorAt(i, _color.setRGB(0, 0, 0));
      } else {
        placeMark(mark, 1);
        jellyMesh.setMatrixAt(i, dummy.matrix);
        const c = displayColor(mark.rgb, 0.62 + mark.opacity * 0.28);
        jellyMesh.setColorAt(i, _color.setRGB(c.r, c.g, c.b));

        placeMark(mark, 1.035);
        outlineMesh.setMatrixAt(i, dummy.matrix);
        const outline = displayColor(mark.rgb, 0.26);
        outlineMesh.setColorAt(i, _color.setRGB(outline.r * 0.55, outline.g * 0.5, outline.b * 0.75));
      }
    }
    jellyMesh.instanceMatrix.needsUpdate = true;
    outlineMesh.instanceMatrix.needsUpdate = true;
    if (jellyMesh.instanceColor) jellyMesh.instanceColor.needsUpdate = true;
    if (outlineMesh.instanceColor) outlineMesh.instanceColor.needsUpdate = true;

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
        const twinkle = p.kind === 'dust'
          ? 0.9 + 0.1 * Math.sin(time * 8 + p.rot * 3)
          : 1;
        fallField.colors[i * 3] = Math.min(1, r * glow * twinkle);
        fallField.colors[i * 3 + 1] = Math.min(1, g * glow * twinkle);
        fallField.colors[i * 3 + 2] = Math.min(1, b * glow * twinkle);
      }
      fallField.geo.setDrawRange(0, n);
      fallField.geo.attributes.position.needsUpdate = true;
      fallField.geo.attributes.color.needsUpdate = true;
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
      shards = [];
      sparkles = [];
      time = 0;
      layer = group;

      jellyGeo = buildJellyGeometry();
      jellyGeo.computeVertexNormals();

      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.78,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      jellyMesh = new THREE.InstancedMesh(jellyGeo, mat, MAX);
      jellyMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
      jellyMesh.frustumCulled = false;
      layer.add(jellyMesh);

      const outlineMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      outlineMesh = new THREE.InstancedMesh(jellyGeo, outlineMat, MAX);
      outlineMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
      outlineMesh.frustumCulled = false;
      layer.add(outlineMesh);

      sparkleField = makePoints(80, 5);
      fallField = makePoints(700, 14);
      fallField.mat.opacity = 0.85;
      layer.add(sparkleField.points, fallField.points);

      for (let i = 0; i < 12; i++) {
        spawn(Math.random() * w, Math.random() * h);
      }
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

      shards = shards.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += 18 * dt;
        p.vx += Math.sin(time * 2.5 + p.x * 0.008) * 18 * dt;
        p.vz += Math.cos(time * 2.2 + p.y * 0.01) * 12 * dt;
        p.rot += p.rotSpeed * dt;
        const fade = p.kind === 'dust' ? 0.14 : 0.1;
        p.opacity -= dt * fade;
        p.glow = Math.max(1.2, (p.glow || 1.4) - dt * 0.08);
        return p.opacity > 0.02 && p.y < height + 80;
      });

      sparkles.forEach((s) => {
        s.y += s.speedY * (params.speed || 1) * 60 * dt;
        s.x += Math.sin(time * 1.5 + s.phase) * 0.25;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      });

      const maxMarks = Math.min(MAX, Math.max(20, Math.floor((params.particleCount || 1030) / 4)));
      if (marks.length > maxMarks) marks.splice(0, marks.length - maxMarks);
      if (shards.length > 700) shards.splice(0, shards.length - 700);
    },

    render() {
      syncMeshes();
      if (jellyMesh) jellyMesh.material.opacity = 0.76;
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
          const u = Math.random() * Math.PI * 2;
          const v = Math.random() * Math.PI * 0.55;
          out[i * 3] = Math.sin(v) * Math.cos(u) * 48;
          out[i * 3 + 1] = 10 + Math.cos(v) * 36;
          out[i * 3 + 2] = Math.sin(v) * Math.sin(u) * 48;
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
      jellyGeo?.dispose();
      jellyMesh = null;
      outlineMesh = null;
      sparkleField = null;
      fallField = null;
      layer = null;
    },
  };
}
