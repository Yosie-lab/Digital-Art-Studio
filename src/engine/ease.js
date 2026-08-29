export function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export function easeOutBack(u) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
}

export function expSmooth(current, target, dt, rate) {
  return current + (target - current) * (1 - Math.exp(-rate * dt));
}

export function lerpAngle(current, target, t) {
  let d = target - current;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return current + d * t;
}
