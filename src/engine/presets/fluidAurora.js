/**
 * 🌊 Fluid Aurora プリセット
 * ノイズベースのフローフィールドで滑らかな光の流体エフェクト
 */
import { SimplexNoise, fbm } from '../../utils/noise.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';

/**
 * Fluid Aurora プリセットを生成
 * @returns {object} プリセットインターフェース
 */
export function createFluidAurora() {
  const noise = new SimplexNoise();
  let particles = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'aurora';

  /* --- 流体パーティクル --- */
  class FluidParticle {
    constructor(w, h) {
      this.reset(w, h);
    }

    reset(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.prevX = this.x;
      this.prevY = this.y;
      this.vx = 0;
      this.vy = 0;
      this.life = 0;
      this.maxLife = 1.5 + Math.random() * 3;
      this.colorIdx = Math.floor(Math.random() * 5);
      this.size = 1 + Math.random() * 2;
    }

    update(dt, w, h, speed, gravity) {
      this.prevX = this.x;
      this.prevY = this.y;

      // フローフィールドの力を計算
      const scale = 0.0018;
      const angle = fbm(noise, this.x * scale, this.y * scale, time * 0.25, 3) * Math.PI * 4;
      const force = 90 * speed;

      this.vx += Math.cos(angle) * force * dt;
      this.vy += Math.sin(angle) * force * dt;
      this.vy += gravity * 40 * dt;

      // 減衰
      this.vx *= 0.97;
      this.vy *= 0.97;

      this.x += this.vx * dt;
      this.y += this.vy * dt;

      this.life += dt;

      // 画面外 or 寿命切れ → リセット
      if (this.x < -80 || this.x > w + 80 ||
          this.y < -80 || this.y > h + 80 ||
          this.life > this.maxLife) {
        this.reset(w, h);
      }
    }
  }

  return {
    init(w, h, params) {
      width = w; height = h;
      currentPalette = params.palette || 'aurora';
      time = 0;
      particles = [];
      const count = Math.min(params.particleCount, 1500);
      for (let i = 0; i < count; i++) {
        const p = new FluidParticle(w, h);
        p.life = Math.random() * p.maxLife; // ずらして初期化
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

        // マウスへの引き寄せ
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

      // パーティクル数調整
      const target = Math.min(params.particleCount, 1500);
      while (particles.length < target) particles.push(new FluidParticle(width, height));
      while (particles.length > target) particles.pop();
    },

    render(ctx, w, h, params) {
      // 残像
      ctx.fillStyle = `rgba(10,10,18,${1 - params.trail})`;
      ctx.fillRect(0, 0, w, h);

      const colors = getPaletteColors(currentPalette);

      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = 1;

      particles.forEach(p => {
        const c = hexToRgb(colors[p.colorIdx % colors.length]);
        const lifeRatio = p.life / p.maxLife;
        // 寿命に応じてフェードイン・アウト
        const alpha = Math.sin(lifeRatio * Math.PI) * 0.55;
        const sz = params.particleSize * p.size * (0.5 + Math.sin(lifeRatio * Math.PI) * 0.5);

        if (alpha < 0.01) return;

        // 線で描画（流れの軌跡感を出す）
        const dx = p.x - p.prevX;
        const dy = p.y - p.prevY;
        const trailLen = Math.sqrt(dx * dx + dy * dy);

        if (trailLen > 1) {
          ctx.beginPath();
          ctx.moveTo(p.prevX, p.prevY);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
          ctx.lineWidth = sz;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // 光の点
        ctx.beginPath();
        ctx.arc(p.x, p.y, sz * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha * 0.7})`;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
    },

    onPointerDown() {},
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { particles = []; },
  };
}
