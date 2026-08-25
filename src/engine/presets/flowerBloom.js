/**
 * 🌸 Flower Bloom プリセット
 * マウス操作で花が咲き誇り、風に舞い散るファンタジックな花園エフェクト
 */
import { getPaletteColors, hexToRgb, randomFromPalette } from '../palettes.js';

/**
 * Flower Bloom プリセットを生成
 * @returns {object} プリセットインターフェース
 */
export function createFlowerBloom() {
  let flowers = [];
  let petals = [];      // 花びら（散っている）
  let sparkles = [];    // 背景キラキラ
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'sakura';

  /* --- 花クラス --- */
  class Flower {
    constructor(x, y, palette) {
      this.x = x;
      this.y = y;
      this.petalCount = 5 + Math.floor(Math.random() * 4);
      this.maxSize = 18 + Math.random() * 28;
      this.size = 0;
      this.growth = 0;         // 0→1
      this.growthRate = 0.4 + Math.random() * 0.6;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.3;
      this.color = randomFromPalette(palette);
      this.rgb = hexToRgb(this.color);
      this.lifetime = 0;
      this.maxLifetime = 3.5 + Math.random() * 4;
      this.phase = 'growing';  // growing → bloomed → wilting
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
        vx: (Math.random() - 0.5) * 50,
        vy: -15 - Math.random() * 35,
        size: this.size * 0.25 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 4,
        color: this.color,
        rgb: this.rgb,
        opacity: 0.85,
      });
    }

    render(ctx) {
      if (this.size < 0.5) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;

      // 外側の花びら
      for (let i = 0; i < this.petalCount; i++) {
        const angle = (i / this.petalCount) * Math.PI * 2;
        ctx.save();
        ctx.rotate(angle);

        const len = this.size;
        const w = this.size * 0.38;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(w, -len * 0.3, w * 0.9, -len * 0.75, 0, -len);
        ctx.bezierCurveTo(-w * 0.9, -len * 0.75, -w, -len * 0.3, 0, 0);

        const grad = ctx.createLinearGradient(0, 0, 0, -len);
        grad.addColorStop(0, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},0.85)`);
        grad.addColorStop(0.6, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},0.5)`);
        grad.addColorStop(1, `rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b},0.2)`);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // 内側の花びら (小さめ・別色)
      for (let i = 0; i < this.petalCount; i++) {
        const angle = (i / this.petalCount) * Math.PI * 2 + Math.PI / this.petalCount;
        ctx.save();
        ctx.rotate(angle);
        const len = this.size * 0.55;
        const w = this.size * 0.22;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(w, -len * 0.3, w, -len * 0.7, 0, -len);
        ctx.bezierCurveTo(-w, -len * 0.7, -w, -len * 0.3, 0, 0);
        ctx.fillStyle = `rgba(${this.innerRgb.r},${this.innerRgb.g},${this.innerRgb.b},0.6)`;
        ctx.fill();
        ctx.restore();
      }

      // 中心の光
      const cg = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 0.25);
      cg.addColorStop(0, 'rgba(255,255,230,0.9)');
      cg.addColorStop(1, 'rgba(255,255,230,0)');
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  /* --- プリセットインターフェース --- */
  return {
    init(w, h, params) {
      width = w; height = h;
      currentPalette = params.palette || 'sakura';
      flowers = []; petals = []; sparkles = [];
      time = 0;

      // 初期花
      for (let i = 0; i < 12; i++) {
        flowers.push(new Flower(
          Math.random() * w, Math.random() * h, currentPalette
        ));
      }

      // 背景キラキラ
      for (let i = 0; i < 120; i++) {
        sparkles.push({
          x: Math.random() * w, y: Math.random() * h,
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

      // 花の更新
      flowers = flowers.filter(f => f.update(dt));

      // マウス移動で花を生成
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

      // 自然発生
      if (Math.random() < dt * 1.8 * params.speed) {
        flowers.push(new Flower(Math.random() * width, Math.random() * height, currentPalette));
      }

      // オーディオ連動: 低音で花爆発
      if (audioData.isActive && audioData.bass > 0.3) {
        const n = Math.floor(audioData.bass * 4);
        for (let i = 0; i < n; i++) {
          flowers.push(new Flower(
            Math.random() * width, Math.random() * height, currentPalette
          ));
        }
      }

      // 花びらの物理
      petals = petals.filter(p => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 25 * dt;                          // 重力
        p.vx += Math.sin(time * 2.5 + p.x * 0.008) * 15 * dt; // 風
        p.rot += p.rotSpeed * dt;
        p.opacity -= dt * 0.22;
        return p.opacity > 0 && p.y < height + 60;
      });

      // キラキラ
      sparkles.forEach(s => {
        s.y += s.speedY * params.speed * 60 * dt;
        s.x += Math.sin(time * 1.5 + s.phase) * 0.25;
        if (s.y < -10) { s.y = height + 10; s.x = Math.random() * width; }
      });

      // 最大数制限
      const maxFlowers = Math.max(20, Math.floor(params.particleCount / 4));
      if (flowers.length > maxFlowers) flowers.splice(0, flowers.length - maxFlowers);
      if (petals.length > 600) petals.splice(0, petals.length - 600);
    },

    render(ctx, w, h, params) {
      // 残像
      ctx.fillStyle = `rgba(10,10,18,${1 - params.trail})`;
      ctx.fillRect(0, 0, w, h);

      // キラキラ
      sparkles.forEach(s => {
        const a = 0.15 + 0.3 * Math.abs(Math.sin(time * 2.2 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      });

      // 花びら (散っている)
      ctx.globalCompositeOperation = 'lighter';
      petals.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.45, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();
      });
      ctx.globalCompositeOperation = 'source-over';

      // 花
      flowers.forEach(f => {
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 12;
        f.render(ctx);
        ctx.shadowBlur = 0;
      });
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
    destroy() { flowers = []; petals = []; sparkles = []; },
  };
}
