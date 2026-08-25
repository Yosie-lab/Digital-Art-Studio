/**
 * ✨ Crystal Dust プリセット
 * マウスに引き寄せられる光の粒子群・トレイル・コネクションライン
 */
import { getPaletteColors, hexToRgb } from '../palettes.js';

/**
 * Crystal Dust プリセットを生成
 * @returns {object} プリセットインターフェース
 */
export function createCrystalDust() {
  let particles = [];
  let connections = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'cyberpunk';

  /* --- パーティクルクラス --- */
  class Crystal {
    constructor(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 25;
      this.vy = (Math.random() - 0.5) * 25;
      this.baseSize = 1 + Math.random() * 3;
      this.size = this.baseSize;
      this.brightness = Math.random();
      this.sparklePhase = Math.random() * Math.PI * 2;
      this.sparkleFreq = 1.5 + Math.random() * 3;
      this.colorIdx = Math.floor(Math.random() * 5);
      // 軌跡
      this.trail = [];
      this.maxTrail = 6 + Math.floor(Math.random() * 8);
    }

    update(dt, w, h, pointer, speed, gravity, audioData) {
      // トレイル記録
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > this.maxTrail) this.trail.shift();

      // マウスインタラクション
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
      }

      // 重力
      this.vy += gravity * 35 * dt;

      // 減衰
      this.vx *= 0.992;
      this.vy *= 0.992;

      // 位置更新
      this.x += this.vx * speed * dt;
      this.y += this.vy * speed * dt;

      // 反射
      if (this.x < 0)  { this.x = 0; this.vx *= -0.7; }
      if (this.x > w)  { this.x = w; this.vx *= -0.7; }
      if (this.y < 0)  { this.y = 0; this.vy *= -0.7; }
      if (this.y > h)  { this.y = h; this.vy *= -0.7; }

      // キラキラ明滅
      this.brightness = 0.25 + 0.75 * Math.abs(Math.sin(time * this.sparkleFreq + this.sparklePhase));

      // オーディオ反応
      this.size = audioData.isActive
        ? this.baseSize * (1 + audioData.bass * 3)
        : this.baseSize;
    }
  }

  /* --- コネクション検索 (空間限定) --- */
  function findConnections(maxDist) {
    connections = [];
    const limit = Math.min(particles.length, 180);
    for (let i = 0; i < limit; i++) {
      for (let j = i + 1; j < limit; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < maxDist * maxDist) {
          connections.push({ a: particles[i], b: particles[j], opacity: 1 - Math.sqrt(d2) / maxDist });
        }
        if (connections.length > 400) return;
      }
    }
  }

  return {
    init(w, h, params) {
      width = w; height = h;
      currentPalette = params.palette || 'cyberpunk';
      time = 0;
      connections = [];
      particles = [];
      const count = Math.min(params.particleCount, 800);
      for (let i = 0; i < count; i++) particles.push(new Crystal(w, h));
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;

      particles.forEach(p => p.update(dt, width, height, pointer, params.speed, params.gravity, audioData));

      // 3フレームに1回コネクション更新
      if (Math.floor(time * 60) % 3 === 0) {
        findConnections(70 + params.particleSize * 4);
      }

      // 数調整
      const target = Math.min(params.particleCount, 800);
      while (particles.length < target) particles.push(new Crystal(width, height));
      while (particles.length > target) particles.pop();
    },

    render(ctx, w, h, params) {
      // 残像
      ctx.fillStyle = `rgba(10,10,18,${1 - params.trail})`;
      ctx.fillRect(0, 0, w, h);

      const colors = getPaletteColors(currentPalette);
      ctx.globalCompositeOperation = 'lighter';

      // コネクションライン
      connections.forEach(c => {
        const col = hexToRgb(colors[c.a.colorIdx % colors.length]);
        ctx.beginPath();
        ctx.moveTo(c.a.x, c.a.y);
        ctx.lineTo(c.b.x, c.b.y);
        ctx.strokeStyle = `rgba(${col.r},${col.g},${col.b},${c.opacity * 0.12})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // パーティクル描画
      particles.forEach(p => {
        const col = hexToRgb(colors[p.colorIdx % colors.length]);

        // トレイル
        for (let i = 0; i < p.trail.length; i++) {
          const t = p.trail[i];
          const ratio = i / p.trail.length;
          const a = ratio * 0.12 * p.brightness;
          const s = p.size * ratio * 0.4 * params.particleSize / 5;
          if (a < 0.005) continue;
          ctx.beginPath();
          ctx.arc(t.x, t.y, s, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col.r},${col.g},${col.b},${a})`;
          ctx.fill();
        }

        // グローエフェクト
        const glowR = p.size * params.particleSize / 5 * 3.5;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grad.addColorStop(0, `rgba(${col.r},${col.g},${col.b},${p.brightness * 0.7})`);
        grad.addColorStop(0.35, `rgba(${col.r},${col.g},${col.b},${p.brightness * 0.25})`);
        grad.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // 中心光点
        const coreR = p.size * params.particleSize / 5 * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.brightness * 0.85})`;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
    },

    onPointerDown() {},
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { particles = []; connections = []; },
  };
}
