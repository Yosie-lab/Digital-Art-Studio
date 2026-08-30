/** ポインタ状態と canvas イベントのバインド */
export function createPointerState() {
  return {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    isDown: false,
    velocity: 0,
  };
}

export function bindCanvasPointer(canvas, pointer, handlers) {
  const updatePointer = (x, y, resetVelocity = false) => {
    if (resetVelocity) {
      pointer.prevX = x;
      pointer.prevY = y;
      pointer.x = x;
      pointer.y = y;
      pointer.velocity = 0;
      return;
    }
    pointer.prevX = pointer.x;
    pointer.prevY = pointer.y;
    pointer.x = x;
    pointer.y = y;
    const dx = x - pointer.prevX;
    const dy = y - pointer.prevY;
    pointer.velocity = Math.sqrt(dx * dx + dy * dy);
  };

  canvas.addEventListener('mousemove', (e) => {
    updatePointer(e.clientX, e.clientY);
    handlers.onPointerMove?.(e.clientX, e.clientY, pointer);
  });

  canvas.addEventListener('mousedown', (e) => {
    pointer.isDown = true;
    updatePointer(e.clientX, e.clientY, true);
    handlers.onPointerDown?.(e.clientX, e.clientY, pointer);
  });

  window.addEventListener('mouseup', () => {
    pointer.isDown = false;
    handlers.onPointerUp?.(pointer);
  });

  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const t = e.touches[0];
    pointer.isDown = true;
    updatePointer(t.clientX, t.clientY, true);
    handlers.onPointerDown?.(t.clientX, t.clientY, pointer);
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const t = e.touches[0];
    updatePointer(t.clientX, t.clientY);
    handlers.onPointerMove?.(t.clientX, t.clientY, pointer);
  }, { passive: false });

  canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    pointer.isDown = false;
    handlers.onPointerUp?.(pointer);
  }, { passive: false });
}

/** hold 中 bloom へ pointer 速度・タップ座標を渡さない */
export function neutralHoldPointer(pointer) {
  if (!pointer) return pointer;
  return {
    ...pointer,
    velocity: 0,
    prevX: pointer.x,
    prevY: pointer.y,
  };
}
