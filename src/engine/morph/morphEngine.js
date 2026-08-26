/**
 * 点群モーフィングエンジン
 * from → curl noise 拡散 → to へ吸着
 */

function hash(n) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function noise3(x, y, z) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fy = y - iy;
  const fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const uz = fz * fz * (3 - 2 * fz);
  const n000 = hash(ix + iy * 57 + iz * 113);
  const n100 = hash(ix + 1 + iy * 57 + iz * 113);
  const n010 = hash(ix + (iy + 1) * 57 + iz * 113);
  const n110 = hash(ix + 1 + (iy + 1) * 57 + iz * 113);
  const n001 = hash(ix + iy * 57 + (iz + 1) * 113);
  const n101 = hash(ix + 1 + iy * 57 + (iz + 1) * 113);
  const n011 = hash(ix + (iy + 1) * 57 + (iz + 1) * 113);
  const n111 = hash(ix + 1 + (iy + 1) * 57 + (iz + 1) * 113);
  const nx00 = n000 * (1 - ux) + n100 * ux;
  const nx10 = n010 * (1 - ux) + n110 * ux;
  const nx01 = n001 * (1 - ux) + n101 * ux;
  const nx11 = n011 * (1 - ux) + n111 * ux;
  const nxy0 = nx00 * (1 - uy) + nx10 * uy;
  const nxy1 = nx01 * (1 - uy) + nx11 * uy;
  return nxy0 * (1 - uz) + nxy1 * uz;
}

function curlNoise(x, y, z, t) {
  const e = 0.15;
  const n1 = noise3(x, y + e, z + t);
  const n2 = noise3(x, y - e, z + t);
  const n3 = noise3(x + e, y, z + t);
  const n4 = noise3(x - e, y, z + t);
  const n5 = noise3(x + t * 0.3, y, z + e);
  const n6 = noise3(x + t * 0.3, y, z - e);
  return {
    x: (n1 - n2) - (n5 - n6),
    y: (n5 - n6) - (n3 - n4),
    z: (n3 - n4) - (n1 - n2),
  };
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * @param {'swarm'|'trail'|'burst'} style
 */
export function morphPositions(out, from, to, progress, time, style = 'swarm') {
  const count = out.length / 3;
  const p = Math.min(1, Math.max(0, progress));
  const e = easeInOutCubic(p);
  // 中盤でノイズ最大
  const mid = 1 - Math.abs(p - 0.5) * 2;
  let noiseAmp = mid * 28;
  if (style === 'burst') noiseAmp = mid * 55;
  if (style === 'trail') noiseAmp = mid * 18;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const fx = from[i3];
    const fy = from[i3 + 1];
    const fz = from[i3 + 2];
    const tx = to[i3];
    const ty = to[i3 + 1];
    const tz = to[i3 + 2];

    const lx = fx + (tx - fx) * e;
    const ly = fy + (ty - fy) * e;
    const lz = fz + (tz - fz) * e;

    const n = curlNoise(lx * 0.02 + i * 0.001, ly * 0.02, lz * 0.02, time * 0.35);
    let nx = n.x * noiseAmp;
    let ny = n.y * noiseAmp;
    let nz = n.z * noiseAmp;

    if (style === 'trail') {
      ny += Math.sin(time * 2 + i * 0.05) * mid * 8;
      nx += (tx - fx) * mid * 0.08;
    } else if (style === 'burst') {
      const len = Math.sqrt(lx * lx + ly * ly + lz * lz) || 1;
      nx += (lx / len) * mid * 35;
      ny += (ly / len) * mid * 35;
      nz += (lz / len) * mid * 20;
    }

    out[i3] = lx + nx;
    out[i3 + 1] = ly + ny;
    out[i3 + 2] = lz + nz;
  }
}

export function holdPositions(out, target, time, breathe = 1.5) {
  const count = out.length / 3;
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const pulse = 1 + Math.sin(time * 1.2 + i * 0.01) * 0.012 * breathe;
    out[i3] = target[i3] * pulse;
    out[i3 + 1] = target[i3 + 1] * pulse;
    out[i3 + 2] = target[i3 + 2];
  }
}
