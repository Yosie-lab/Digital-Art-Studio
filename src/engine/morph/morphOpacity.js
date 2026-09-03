function forEachMaterial(root, fn) {
  if (!root) return;
  root.traverse((obj) => {
    const mats = obj.material
      ? (Array.isArray(obj.material) ? obj.material : [obj.material])
      : [];
    for (const m of mats) {
      if (!m || m.opacity == null) continue;
      fn(m);
    }
  });
}

export function setGroupOpacity(root, opacity) {
  if (!root) return;
  const o = Math.min(1, Math.max(0, opacity));
  forEachMaterial(root, (m) => {
    if (m.userData._dissolveBaseOpacity == null) {
      m.userData._dissolveBaseOpacity = m.opacity;
    }
    m.transparent = true;
    m.opacity = m.userData._dissolveBaseOpacity * o;
    if ('depthWrite' in m) m.depthWrite = o > 0.88;
    if ('needsUpdate' in m) m.needsUpdate = true;
  });
}

export function restoreGroupOpacity(root) {
  if (!root) return;
  forEachMaterial(root, (m) => {
    if (m.userData._dissolveBaseOpacity != null) {
      m.opacity = m.userData._dissolveBaseOpacity;
      delete m.userData._dissolveBaseOpacity;
    }
    if ('depthWrite' in m) m.depthWrite = true;
    if ('needsUpdate' in m) m.needsUpdate = true;
  });
}

export function applyAngelIntroDim(root, mul) {
  if (!root) return;
  const o = Math.min(1, Math.max(0, mul));
  root.visible = true;
  forEachMaterial(root, (m) => {
    if (m.userData._angelIntroBase == null) {
      m.userData._angelIntroBase = m.opacity;
    }
    m.transparent = true;
    m.opacity = m.userData._angelIntroBase * o;
    if ('needsUpdate' in m) m.needsUpdate = true;
  });
}

export function clearAngelIntroDim(root) {
  if (!root) return;
  forEachMaterial(root, (m) => {
    if (m.userData._angelIntroBase != null) {
      m.opacity = m.userData._angelIntroBase;
      delete m.userData._angelIntroBase;
    }
  });
}
