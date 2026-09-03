export function smootherstep(t) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * x * (x * (x * 6 - 15) + 10);
}

export function dampToward(current, target, dt, rate) {
  const k = 1 - Math.exp(-Math.max(0, rate) * dt);
  return current + (target - current) * k;
}
