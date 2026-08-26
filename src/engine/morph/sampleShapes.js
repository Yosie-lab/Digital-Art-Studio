/**
 * メッシュ表面 / キャンバス形状から点群をサンプリング
 */

/** 花びら形状の点群（ワールド座標・原点中心） */
export function samplePetalCloud(count, scale = 90) {
  const positions = new Float32Array(count * 3);
  const petalCount = 6;
  for (let i = 0; i < count; i++) {
    const petal = i % petalCount;
    const angle = (petal / petalCount) * Math.PI * 2;
    const t = Math.random();
    const along = Math.pow(t, 0.65);
    const width = Math.sin(Math.PI * along) * (0.22 + Math.random() * 0.12);
    const side = (Math.random() - 0.5) * 2;
    const len = along * scale;
    const wx = Math.sin(angle) * len + Math.cos(angle) * side * width * scale;
    const wy = Math.cos(angle) * len - Math.sin(angle) * side * width * scale;
    const wz = (Math.random() - 0.5) * 18 * (1 - along);
    positions[i * 3] = wx;
    positions[i * 3 + 1] = wy;
    positions[i * 3 + 2] = wz;
  }
  return positions;
}

/** キャンバスに描いた文字の不透明画素から点群を作る */
export function sampleLetterCloud(letter, count, scale = 140) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `bold ${Math.floor(size * 0.72)}px "Outfit", "Noto Sans JP", sans-serif`;
  ctx.fillText(letter, size * 0.5, size * 0.54);

  const { data } = ctx.getImageData(0, 0, size, size);
  const hits = [];
  for (let y = 0; y < size; y += 2) {
    for (let x = 0; x < size; x += 2) {
      const a = data[(y * size + x) * 4 + 3];
      if (a > 40) hits.push(x, y);
    }
  }

  const positions = new Float32Array(count * 3);
  if (!hits.length) {
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * scale;
      positions[i * 3 + 1] = (Math.random() - 0.5) * scale;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * (hits.length / 2)) * 2;
    const x = hits[idx];
    const y = hits[idx + 1];
    const nx = (x / size - 0.5) * scale;
    const ny = (0.5 - y / size) * scale;
    positions[i * 3] = nx + (Math.random() - 0.5) * 1.5;
    positions[i * 3 + 1] = ny + (Math.random() - 0.5) * 1.5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  return positions;
}

/** 簡易クラゲシルエット（傘＋触手）— 後段用スタブ */
export function sampleJellyfishCloud(count, scale = 100) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    if (i < count * 0.55) {
      const u = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * scale * 0.55;
      positions[i * 3] = Math.cos(u) * r;
      positions[i * 3 + 1] = scale * 0.25 + Math.sin(Math.random() * Math.PI) * scale * 0.12;
      positions[i * 3 + 2] = Math.sin(u) * r * 0.55;
    } else {
      const tentacle = Math.floor(Math.random() * 8);
      const a = (tentacle / 8) * Math.PI * 2;
      const down = Math.random();
      positions[i * 3] = Math.cos(a) * scale * 0.28 + (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = scale * 0.15 - down * scale * 0.95;
      positions[i * 3 + 2] = Math.sin(a) * scale * 0.18 + (Math.random() - 0.5) * 6;
    }
  }
  return positions;
}

/** 砂時計シルエット — 後段用スタブ */
export function sampleHourglassCloud(count, scale = 110) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = (Math.random() * 2 - 1);
    const waist = 0.12 + Math.abs(t) * 0.55;
    const u = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * waist * scale * 0.5;
    positions[i * 3] = Math.cos(u) * r;
    positions[i * 3 + 1] = t * scale * 0.55;
    positions[i * 3 + 2] = Math.sin(u) * r;
  }
  return positions;
}

/** オタマジャクシシルエット — 後段用スタブ */
export function sampleTadpoleCloud(count, scale = 110) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    if (i < count * 0.45) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      const r = scale * 0.28 * Math.cbrt(Math.random());
      positions[i * 3] = Math.sin(v) * Math.cos(u) * r + scale * 0.2;
      positions[i * 3 + 1] = Math.sin(v) * Math.sin(u) * r * 0.8;
      positions[i * 3 + 2] = Math.cos(v) * r * 0.7;
    } else {
      const along = Math.random();
      positions[i * 3] = scale * 0.05 - along * scale * 0.9;
      positions[i * 3 + 1] = Math.sin(along * Math.PI) * (1 - along) * scale * 0.22 * (Math.random() - 0.5);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 * (1 - along);
    }
  }
  return positions;
}

/** 脳シルエット — 後段用スタブ */
export function sampleBrainCloud(count, scale = 100) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const side = Math.random() < 0.5 ? -1 : 1;
    const u = Math.random() * Math.PI * 2;
    const v = Math.acos(2 * Math.random() - 1);
    const r = scale * (0.35 + Math.random() * 0.2);
    const wrinkle = 1 + 0.08 * Math.sin(u * 8) * Math.sin(v * 6);
    positions[i * 3] = Math.sin(v) * Math.cos(u) * r * wrinkle * 0.75 + side * scale * 0.18;
    positions[i * 3 + 1] = Math.sin(v) * Math.sin(u) * r * wrinkle * 0.65;
    positions[i * 3 + 2] = Math.cos(v) * r * wrinkle * 0.7;
  }
  return positions;
}

/** 天使（翼シルエット）— 後段用スタブ */
export function sampleAngelCloud(count, scale = 130) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    if (i < count * 0.25) {
      const u = Math.random() * Math.PI * 2;
      const h = (Math.random() - 0.5) * scale * 0.7;
      const r = 8 + Math.random() * 14;
      positions[i * 3] = Math.cos(u) * r;
      positions[i * 3 + 1] = h;
      positions[i * 3 + 2] = Math.sin(u) * r * 0.5;
    } else {
      const side = Math.random() < 0.5 ? -1 : 1;
      const along = Math.random();
      const spread = Math.sin(along * Math.PI) * scale * (0.35 + Math.random() * 0.35);
      positions[i * 3] = side * (scale * 0.12 + along * scale * 0.7);
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.9 + scale * 0.1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - along * 10;
    }
  }
  return positions;
}
