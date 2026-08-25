/**
 * 🎆 Interactive Ripples プリセット
 * クリック/タップで色鮮やかな光の波紋が広がり干渉し合う
 */
import { getPaletteColors, hexToRgb } from '../palettes.js';

/**
 * Interactive Ripples プリセットを生成
 * @returns {object} プリセットインターフェース
 */
export function createInteractiveRipples() {
  let ripples = [];
  let ambient = [];        // 浮遊パーティクル
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'aurora';
  let autoTimer = 0;

  /* --- 波紋クラス --- */
  class Ripple {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.radius = 0;
      this.maxRadius = 180 + Math.random() * 320;
      this.speed = 110 + Math.random() * 140;
      this.lineWidth = 1.5 + Math.random() * 3;
      this.opacity = 1;
      this.rings = 1 + Math.floor(Math.random() * 3);
      const colors = getPaletteColors(palette);
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rgb = hexToRgb(this.color);
    }

    update(dt, speed) {
      this.radius += this.speed * speed * dt;
      this.opacity = Math.max(0, 1 - this.radius / this.maxRadius);
      return this.opacity > 0.008;
    }

    render(ctx) {
      for (let r = 0; r < this.rings; r++) {
        const rr = this.radius - r * 18;
        if (rr < 0) continue;

        const a = this.opacity * (1 - r * 0.3);
        const lw = this.lineWidth * (1 - this.radius / this.maxRadius);

        ctx.beginPath();
        ctx.arc(this.x, this.y, rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},${a})`;
        ctx.lineWidth = Math.max(0.3, lw);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // 中心フラッシュ
      if (this.radius < 40) {
        const fa = (1 - this.radius / 40) * this.opacity;
        const fg = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 25);
        fg.addColorStop(0, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},${fa})`);
        fg.addColorStop(1, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
        ctx.fillStyle = fg;
        ctx.fill();
      }
    }
  }

  return {
    init(w, h, params) {
      width = w; height = h;
      currentPalette = params.palette || 'aurora';
      time = 0; autoTimer = 0;
      ripples = [];
      ambient = [];

      // 浮遊パーティクル
      for (let i = 0; i < 90; i++) {
        ambient.push({
          x: Math.random() * w, y: Math.random() * h,
          size: 0.5 + Math.random() * 2,
          sx: (Math.random() - 0.5) * 8,
          sy: (Math.random() - 0.5) * 8,
          phase: Math.random() * Math.PI * 2,
          colorIdx: Math.floor(Math.random() * 5),
        });
      }

      // 初期波紋を数個
      for (let i = 0; i < 3; i++) {
        ripples.push(new Ripple(
          Math.random() * w, Math.random() * h, currentPalette
        ));
      }
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;

      ripples = ripples.filter(r => r.update(dt, params.speed));

      // 自動波紋
      autoTimer += dt;
      const autoInterval = Math.max(0.3, 1.8 / params.speed);
      if (autoTimer > autoInterval) {
        autoTimer = 0;
        ripples.push(new Ripple(
          Math.random() * width, Math.random() * height, currentPalette
        ));
      }

      // ドラッグで連続波紋
      if (pointer.isDown && pointer.velocity > 4) {
        ripples.push(new Ripple(pointer.x, pointer.y, currentPalette));
      }

      // オーディオ連動
      if (audioData.isActive && audioData.bass > 0.35) {
        ripples.push(new Ripple(
          width / 2 + (Math.random() - 0.5) * width * 0.5,
          height / 2 + (Math.random() - 0.5) * height * 0.5,
          currentPalette
        ));
      }

      // 浮遊パーティクルを波紋が押す
      ambient.forEach(p => {
        p.x += p.sx * dt;
        p.y += p.sy * dt;

        ripples.forEach(r => {
          const dx = p.x - r.x;
          const dy = p.y - r.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - r.radius) < 35 && r.opacity > 0.08) {
            const push = r.opacity * 25;
            p.sx += (dx / (dist || 1)) * push * dt;
            p.sy += (dy / (dist || 1)) * push * dt;
          }
        });

        p.sx *= 0.992;
        p.sy *= 0.992;

        if (p.x < 0) p.x += width;
        if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        if (p.y > height) p.y -= height;
      });

      if (ripples.length > 60) ripples.splice(0, ripples.length - 60);
    },

    render(ctx, w, h, params) {
      // 残像
      ctx.fillStyle = `rgba(10,10,18,${1 - params.trail})`;
      ctx.fillRect(0, 0, w, h);

      const colors = getPaletteColors(currentPalette);
      ctx.globalCompositeOperation = 'lighter';

      // 浮遊パーティクル
      ambient.forEach(p => {
        const col = hexToRgb(colors[p.colorIdx % colors.length]);
        const a = 0.22 + 0.18 * Math.sin(time * 2.2 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r},${col.g},${col.b},${a})`;
        ctx.fill();
      });

      // 波紋
      ripples.forEach(r => r.render(ctx));

      ctx.globalCompositeOperation = 'source-over';
    },

    onPointerDown(x, y) {
      // クリックで複数波紋
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
      // 高速移動で波紋を残す
      if (pointer.velocity > 10) {
        ripples.push(new Ripple(x, y, currentPalette));
      }
    },

    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { ripples = []; ambient = []; },
  };
}
