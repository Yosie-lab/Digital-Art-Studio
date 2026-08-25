/**
 * 🌀 Kaleido Prism プリセット
 * 万華鏡のような対称幾何学パターンとネオングローエフェクト
 */
import { SimplexNoise } from '../../utils/noise.js';
import { getPaletteColors, hexToRgb } from '../palettes.js';

/**
 * Kaleido Prism プリセットを生成
 * @returns {object} プリセットインターフェース
 */
export function createKaleidoPrism() {
  const noise = new SimplexNoise(42);
  let shapes = [];
  let width = 0, height = 0;
  let time = 0;
  let currentPalette = 'cyberpunk';
  let segments = 8;     // 対称セグメント数
  let pointerAngle = 0; // マウス位置による回転オフセット
  let pointerDist = 0;

  /* --- 幾何学シェイプ --- */
  class KShape {
    constructor() {
      this.angle = Math.random() * Math.PI * 2;
      this.distance = 30 + Math.random() * 250;
      this.baseSize = 4 + Math.random() * 18;
      this.size = this.baseSize;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 2.5;
      this.orbitSpeed = 0.08 + Math.random() * 0.4;
      this.type = Math.floor(Math.random() * 4); // 0円, 1三角, 2四角, 3六角
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

  /* --- ポリゴン描画ヘルパー --- */
  function drawPolygon(ctx, sides, size) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
      const px = Math.cos(a) * size;
      const py = Math.sin(a) * size;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  return {
    init(w, h, params) {
      width = w; height = h;
      currentPalette = params.palette || 'cyberpunk';
      time = 0;
      shapes = [];
      const count = Math.max(15, Math.floor(params.particleCount / 8));
      for (let i = 0; i < count; i++) shapes.push(new KShape());
    },

    resize(w, h) { width = w; height = h; },

    update(dt, pointer, audioData, params) {
      time += dt;
      currentPalette = params.palette;

      const cx = width / 2, cy = height / 2;
      pointerAngle = Math.atan2(pointer.y - cy, pointer.x - cx);
      pointerDist = Math.sqrt((pointer.x - cx) ** 2 + (pointer.y - cy) ** 2);

      // セグメント数をマウスY位置で動的変更 (6-14)
      segments = 6 + Math.floor((pointer.y / height) * 8);

      const audioMult = audioData.isActive ? 1 + audioData.bass * 4 : 1;

      shapes.forEach(s => s.update(dt, params.speed * audioMult));

      // オーディオ反応でサイズ変動
      if (audioData.isActive) {
        shapes.forEach(s => {
          s.size = s.baseSize * (1 + audioData.mid * 2);
        });
      }

      // 数調整
      const target = Math.max(15, Math.floor(params.particleCount / 8));
      while (shapes.length < target) shapes.push(new KShape());
      while (shapes.length > target) shapes.pop();
    },

    render(ctx, w, h, params) {
      // 残像
      ctx.fillStyle = `rgba(10,10,18,${1 - params.trail})`;
      ctx.fillRect(0, 0, w, h);

      const colors = getPaletteColors(currentPalette);
      const cx = w / 2, cy = h / 2;

      ctx.globalCompositeOperation = 'lighter';

      // 各セグメントを描画
      for (let seg = 0; seg < segments; seg++) {
        const segAngle = (seg / segments) * Math.PI * 2 + pointerAngle * 0.1;
        const mirror = seg % 2 === 1;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(segAngle);
        if (mirror) ctx.scale(1, -1);

        shapes.forEach(s => {
          const x = Math.cos(s.angle) * s.distance;
          const y = Math.sin(s.angle) * s.distance;
          const col = hexToRgb(colors[s.colorIdx % colors.length]);
          const sz = s.size * (params.particleSize / 5);

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(s.rotation);

          ctx.fillStyle = `rgba(${col.r},${col.g},${col.b},${s.opacity * 0.35})`;
          ctx.shadowColor = `rgb(${col.r},${col.g},${col.b})`;
          ctx.shadowBlur = 12;

          switch (s.type) {
            case 0: // 円
              ctx.beginPath();
              ctx.arc(0, 0, sz, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 1: // 三角
              drawPolygon(ctx, 3, sz);
              ctx.fill();
              break;
            case 2: // 四角
              ctx.fillRect(-sz / 2, -sz / 2, sz, sz);
              break;
            case 3: // 六角
              drawPolygon(ctx, 6, sz);
              ctx.fill();
              break;
          }

          // ストローク（ネオン感）
          ctx.strokeStyle = `rgba(${col.r},${col.g},${col.b},${s.opacity * 0.5})`;
          ctx.lineWidth = 1;
          if (s.type === 0) {
            ctx.beginPath();
            ctx.arc(0, 0, sz, 0, Math.PI * 2);
            ctx.stroke();
          } else if (s.type === 2) {
            ctx.strokeRect(-sz / 2, -sz / 2, sz, sz);
          } else {
            drawPolygon(ctx, s.type === 1 ? 3 : 6, sz);
            ctx.stroke();
          }

          ctx.shadowBlur = 0;
          ctx.restore();
        });

        ctx.restore();
      }

      // 中心のグロー
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60 + pointerDist * 0.1);
      const mainCol = hexToRgb(colors[0]);
      centerGlow.addColorStop(0, `rgba(${mainCol.r},${mainCol.g},${mainCol.b},0.2)`);
      centerGlow.addColorStop(1, `rgba(${mainCol.r},${mainCol.g},${mainCol.b},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, 60 + pointerDist * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';
    },

    onPointerDown() {},
    onPointerMove() {},
    onPointerUp() {},
    setParams(p) { currentPalette = p.palette; },
    destroy() { shapes = []; },
  };
}
