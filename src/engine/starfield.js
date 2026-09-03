import * as THREE from 'three';

/** Spacey Bloom Fluid 準拠の宇宙星空 + 流れ星 + 背景波紋 */
const STAR_COLORS = [
  [255, 255, 255],
  [180, 195, 255],
  [120, 140, 255],
  [255, 182, 220],
  [160, 100, 255],
  [160, 255, 190],
  [255, 160, 160],
  [200, 170, 90],
  // 参照画像の電光青〜バイオレット
  [42, 92, 255],
  [26, 72, 255],
  [61, 106, 255],
  [48, 96, 255],
  [74, 56, 208],
  [90, 64, 224],
  [104, 136, 255],
];

const METEOR_TINTS = [
  [1, 1, 1],
  [0.85, 0.88, 1],
  [1, 0.92, 0.96],
  [0.75, 1, 0.82],
  [1, 0.72, 0.72],
  [0.9, 0.78, 0.4],
  [0.16, 0.36, 1],   // #2a5cff
  [0.1, 0.28, 1],    // #1a48ff
  [0.24, 0.42, 1],   // #3d6aff
  [0.29, 0.22, 0.82], // violet
  [0.35, 0.25, 0.88],
  [0.4, 0.53, 1],
];

const MAX_METEORS = 8;
/** Spacey Bloom 背景波紋（全プリセット共通） */
const MAX_BG_RIPPLES = 28;
/** Spacey より出現を少し遅め（間隔をさらに延ばす） */
const BG_RIPPLE_SPAWN_PER_SEC = 0.36;
/** 後から追加した背景波紋の輝度（1=当初） */
const BG_RIPPLE_BRIGHTNESS = 0.65;
const BG_RIPPLE_ALPHA0 = 0.8 * BG_RIPPLE_BRIGHTNESS;

export function createStarfield() {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const bgMat = new THREE.ShaderMaterial({
    uniforms: {
      colorA: { value: new THREE.Color('#000510') },
      colorB: { value: new THREE.Color('#001830') },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 colorA;
      uniform vec3 colorB;
      varying vec2 vUv;
      void main() {
        float t = (vUv.x + (1.0 - vUv.y)) * 0.5;
        gl_FragColor = vec4(mix(colorA, colorB, clamp(t, 0.0, 1.0)), 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMat);
  bgMesh.frustumCulled = false;
  scene.add(bgMesh);

  let stars = [];
  let width = 1;
  let height = 1;
  let points = null;
  let positions = null;
  let colors = null;

  // --- 流れ星（Spacey Bloom Fluid 準拠） ---
  let meteors = [];
  let lastShootingStarTime = performance.now();
  let nextShootingStarDelay = 1500 + Math.random() * 2500;
  const meteorDummy = new THREE.Object3D();
  const meteorColor = new THREE.Color();

  function meteorTexture() {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 32;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 256, 0);
    // 頭（右）が明るく、尾（左）が透明 — Spacey の白→透明グラデ
    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(0.35, 'rgba(242,246,255,0.55)');
    grd.addColorStop(0.7, 'rgba(255,255,255,0.9)');
    grd.addColorStop(1, 'rgba(255,255,255,1)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 256, 32);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  const meteorGeo = new THREE.PlaneGeometry(1, 1);
  const meteorMat = new THREE.MeshBasicMaterial({
    map: meteorTexture(),
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const meteorMesh = new THREE.InstancedMesh(meteorGeo, meteorMat, MAX_METEORS);
  meteorMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_METEORS * 3), 3);
  meteorMesh.frustumCulled = false;
  meteorMesh.renderOrder = 2;
  scene.add(meteorMesh);

  // グロー用（少し太い半透明）
  const glowMat = new THREE.MeshBasicMaterial({
    map: meteorMat.map,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const glowMesh = new THREE.InstancedMesh(meteorGeo, glowMat, MAX_METEORS);
  glowMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_METEORS * 3), 3);
  glowMesh.frustumCulled = false;
  glowMesh.renderOrder = 1;
  scene.add(glowMesh);

  // --- 背景波紋（Spacey Bloom Fluid 準拠・全プリセット共通） ---
  // Torus は OrthoCamera(near=0) で Z クリップされるため、XY 平面の Ring を使う
  let bgRipples = [];
  const rippleDummy = new THREE.Object3D();
  const rippleColor = new THREE.Color();
  // Spacey: lineWidth 3.2 / グロー 6.4 相当の細いリング
  const rippleGeo = new THREE.RingGeometry(0.972, 1.0, 96);
  const rippleMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const rippleMesh = new THREE.InstancedMesh(rippleGeo, rippleMat, MAX_BG_RIPPLES);
  rippleMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_BG_RIPPLES * 3), 3);
  rippleMesh.frustumCulled = false;
  rippleMesh.renderOrder = 0.5;
  scene.add(rippleMesh);

  const rippleGlowGeo = new THREE.RingGeometry(0.945, 1.02, 96);
  const rippleGlowMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const rippleGlowMesh = new THREE.InstancedMesh(rippleGlowGeo, rippleGlowMat, MAX_BG_RIPPLES);
  rippleGlowMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_BG_RIPPLES * 3), 3);
  rippleGlowMesh.frustumCulled = false;
  rippleGlowMesh.renderOrder = 0.45;
  scene.add(rippleGlowMesh);

  for (let i = 0; i < MAX_BG_RIPPLES; i++) {
    rippleDummy.position.set(0, 0, 10);
    rippleDummy.scale.set(0.001, 0.001, 0.001);
    rippleDummy.rotation.set(0, 0, 0);
    rippleDummy.updateMatrix();
    rippleMesh.setMatrixAt(i, rippleDummy.matrix);
    rippleGlowMesh.setMatrixAt(i, rippleDummy.matrix);
    rippleMesh.setColorAt(i, rippleColor.setRGB(0, 0, 0));
    rippleGlowMesh.setColorAt(i, rippleColor.setRGB(0, 0, 0));
  }
  rippleMesh.instanceMatrix.needsUpdate = true;
  rippleGlowMesh.instanceMatrix.needsUpdate = true;
  if (rippleMesh.instanceColor) rippleMesh.instanceColor.needsUpdate = true;
  if (rippleGlowMesh.instanceColor) rippleGlowMesh.instanceColor.needsUpdate = true;

  function hslToRgb(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n) => {
      const k = (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };
    return [f(0), f(8), f(4)];
  }

  function bgRippleAlpha(radius, maxR) {
    return BG_RIPPLE_ALPHA0 * (1 - radius / maxR);
  }

  function createBackgroundRipple(x, y) {
    if (bgRipples.length >= MAX_BG_RIPPLES) bgRipples.shift();
    const hue = 185 + Math.random() * 25;
    bgRipples.push({
      x,
      y,
      r: 0,
      maxR: 90 + Math.random() * 70,
      speed: (1.5 + Math.random() * 0.8) * 60,
      alpha: BG_RIPPLE_ALPHA0,
      rgb: hslToRgb(hue, 0.7, 0.72),
    });
  }

  function hideRippleInstance(i) {
    rippleDummy.position.set(0, 0, 10);
    rippleDummy.scale.set(0.001, 0.001, 0.001);
    rippleDummy.rotation.set(0, 0, 0);
    rippleDummy.updateMatrix();
    rippleMesh.setMatrixAt(i, rippleDummy.matrix);
    rippleGlowMesh.setMatrixAt(i, rippleDummy.matrix);
    rippleMesh.setColorAt(i, rippleColor.setRGB(0, 0, 0));
    rippleGlowMesh.setColorAt(i, rippleColor.setRGB(0, 0, 0));
  }

  function updateBgRipples(dt) {
    if (width < 2 || height < 2) return;

    if (Math.random() < BG_RIPPLE_SPAWN_PER_SEC * dt) {
      createBackgroundRipple(Math.random() * width, Math.random() * height);
    }

    for (let i = bgRipples.length - 1; i >= 0; i--) {
      const r = bgRipples[i];
      r.r += r.speed * dt;
      r.alpha = bgRippleAlpha(r.r, r.maxR);
      if (r.r >= r.maxR || r.alpha <= 0) bgRipples.splice(i, 1);
    }

    for (let i = 0; i < MAX_BG_RIPPLES; i++) {
      const r = bgRipples[i];
      if (!r || r.r < 1) {
        hideRippleInstance(i);
        continue;
      }

      const mid = toNdc(r.x, r.y);
      const scaleX = (r.r / width) * 2;
      const scaleY = (r.r / height) * 2;
      const a = Math.max(0, r.alpha);
      const [cr, cg, cb] = r.rgb;

      rippleDummy.position.set(mid.x, mid.y, 0);
      rippleDummy.rotation.set(0, 0, 0);
      rippleDummy.scale.set(Math.max(scaleX, 0.001), Math.max(scaleY, 0.001), 1);
      rippleDummy.updateMatrix();
      rippleMesh.setMatrixAt(i, rippleDummy.matrix);
      // Spacey より少し控えめな輝度
      rippleMesh.setColorAt(
        i,
        rippleColor.setRGB(cr * a * 0.36, cg * a * 0.36, cb * a * 0.36),
      );

      rippleDummy.updateMatrix();
      rippleGlowMesh.setMatrixAt(i, rippleDummy.matrix);
      rippleGlowMesh.setColorAt(
        i,
        rippleColor.setRGB(cr * a * 0.09, cg * a * 0.09, cb * a * 0.09),
      );
    }

    rippleMesh.instanceMatrix.needsUpdate = true;
    rippleGlowMesh.instanceMatrix.needsUpdate = true;
    if (rippleMesh.instanceColor) rippleMesh.instanceColor.needsUpdate = true;
    if (rippleGlowMesh.instanceColor) rippleGlowMesh.instanceColor.needsUpdate = true;
  }

  function starTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    g.fillStyle = '#ffffff';
    g.fillRect(24, 24, 16, 16);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function toNdc(x, y) {
    return {
      x: (x / width) * 2 - 1,
      y: 1 - (y / height) * 2,
    };
  }

  function spawnShootingStar(isSuper = false) {
    if (meteors.length >= MAX_METEORS) return;
    const startFromLeft = Math.random() < 0.5;
    let startX;
    let startY;
    if (startFromLeft) {
      startX = -150;
      startY = Math.random() * height * 0.4;
    } else {
      startX = Math.random() * width * 0.5;
      startY = -150;
    }
    const angle = (18 + Math.random() * 22) * Math.PI / 180;
    const speed = (isSuper ? 24 : 14) + Math.random() * 6;
    const tint = METEOR_TINTS[Math.floor(Math.random() * METEOR_TINTS.length)];
    meteors.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      speed,
      angle,
      length: (isSuper ? 380 : 120) + Math.random() * 120,
      width: (isSuper ? 3.0 : 1.0) + Math.random() * 0.8,
      alpha: 0,
      fadeSpeed: isSuper ? 0.28 : 0.18,
      targetAlpha: (isSuper ? 0.45 : 0.52) + Math.random() * 0.12,
      maxLife: (isSuper ? 45 : 20) + Math.random() * 15,
      life: 0,
      tint,
    });
  }

  function updateMeteors(dt) {
    const frame = Math.max(dt * 60, 0.001);
    const now = performance.now();
    if (now - lastShootingStarTime >= nextShootingStarDelay) {
      spawnShootingStar();
      lastShootingStarTime = now;
      nextShootingStarDelay = 4000 + Math.random() * 9000;
    }

    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      m.x += m.vx * frame;
      m.y += m.vy * frame;
      m.life += frame;

      if (m.life > m.maxLife * 0.6) {
        m.alpha = m.targetAlpha * (1 - (m.life - m.maxLife * 0.6) / (m.maxLife * 0.4));
      } else if (m.alpha < m.targetAlpha) {
        m.alpha = Math.min(m.targetAlpha, m.alpha + m.fadeSpeed * frame);
      }

      if (
        m.life >= m.maxLife
        || m.x < -m.length
        || m.x > width + m.length
        || m.y < -m.length
        || m.y > height + m.length
      ) {
        meteors.splice(i, 1);
      }
    }

    // NDC 空間での描画サイズ計算
    for (let i = 0; i < MAX_METEORS; i++) {
      const m = meteors[i];
      if (!m) {
        meteorDummy.position.set(0, 0, 10);
        meteorDummy.scale.set(0.001, 0.001, 0.001);
        meteorDummy.rotation.set(0, 0, 0);
        meteorDummy.updateMatrix();
        meteorMesh.setMatrixAt(i, meteorDummy.matrix);
        glowMesh.setMatrixAt(i, meteorDummy.matrix);
        meteorMesh.setColorAt(i, meteorColor.setRGB(0, 0, 0));
        glowMesh.setColorAt(i, meteorColor.setRGB(0, 0, 0));
        continue;
      }

      const tailX = m.x - m.vx * (m.length / m.speed);
      const tailY = m.y - m.vy * (m.length / m.speed);
      const midX = (m.x + tailX) * 0.5;
      const midY = (m.y + tailY) * 0.5;
      const head = toNdc(m.x, m.y);
      const tail = toNdc(tailX, tailY);
      const mid = toNdc(midX, midY);

      const dx = head.x - tail.x;
      const dy = head.y - tail.y;
      const lenNdc = Math.sqrt(dx * dx + dy * dy) || 0.001;
      const angle = Math.atan2(dy, dx);

      // 幅: 画面ピクセル → NDC（縦方向基準）
      const widthNdc = (m.width / height) * 2;
      const a = Math.max(0, m.alpha);
      const [tr, tg, tb] = m.tint || [1, 1, 1];

      meteorDummy.position.set(mid.x, mid.y, 0);
      meteorDummy.rotation.set(0, 0, angle);
      meteorDummy.scale.set(lenNdc, Math.max(widthNdc, 0.002), 1);
      meteorDummy.updateMatrix();
      meteorMesh.setMatrixAt(i, meteorDummy.matrix);
      meteorMesh.setColorAt(i, meteorColor.setRGB(a * tr, a * tg, a * tb));

      meteorDummy.scale.set(lenNdc, Math.max(widthNdc * 1.5, 0.003), 1);
      meteorDummy.updateMatrix();
      glowMesh.setMatrixAt(i, meteorDummy.matrix);
      glowMesh.setColorAt(i, meteorColor.setRGB(a * 0.35 * tr, a * 0.35 * tg, a * 0.4 * tb));
    }

    meteorMesh.instanceMatrix.needsUpdate = true;
    glowMesh.instanceMatrix.needsUpdate = true;
    if (meteorMesh.instanceColor) meteorMesh.instanceColor.needsUpdate = true;
    if (glowMesh.instanceColor) glowMesh.instanceColor.needsUpdate = true;
  }

  function rebuild(w, h) {
    width = Math.max(1, w);
    height = Math.max(1, h);

    if (points) {
      scene.remove(points);
      points.geometry.dispose();
      points.material.map?.dispose();
      points.material.dispose();
      points = null;
    }

    const count = Math.max(120, Math.floor((width * height) / 1800));
    stars = [];
    for (let i = 0; i < count; i++) {
      const col = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.4 + Math.random() * 2.0,
        baseAlpha: 0.25 + Math.random() * 0.65,
        twinkleSpeed: 0.004 + Math.random() * 0.014,
        phase: Math.random() * Math.PI * 2,
        rgb: col,
      });
    }

    positions = new Float32Array(count * 3);
    colors = new Float32Array(count * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 3.5,
      map: starTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      sizeAttenuation: false,
      fog: false,
      toneMapped: false,
    });

    points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    points.renderOrder = 0;
    scene.add(points);
    syncStars(0, null);

    // 起動直後にも波紋を出しておく（全プリセット共通背景）
    bgRipples = [];
    for (let i = 0; i < 3; i++) {
      createBackgroundRipple(Math.random() * width, Math.random() * height);
      const r = bgRipples[bgRipples.length - 1];
      r.r = Math.random() * 40;
      r.alpha = bgRippleAlpha(r.r, r.maxR);
    }
  }

  function syncStars(dt, pointer) {
    if (!points || !stars.length) return;

    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const active = pointer && (pointer.velocity > 0.4 || pointer.isDown);
    const deltaX = active ? (pointer.x - centerX) / Math.max(centerX, 1) : 0;
    const deltaY = active ? (pointer.y - centerY) / Math.max(centerY, 1) : 0;

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.phase += star.twinkleSpeed * (dt * 60 || 1);
      const twinkle = Math.sin(star.phase);
      const alpha = Math.max(0.15, star.baseAlpha + twinkle * 0.22);

      const offsetX = deltaX * -18 * (star.size / 2);
      const offsetY = deltaY * -18 * (star.size / 2);
      const ndc = toNdc(star.x + offsetX, star.y + offsetY);

      positions[i * 3] = ndc.x;
      positions[i * 3 + 1] = ndc.y;
      positions[i * 3 + 2] = 0;

      colors[i * 3] = (star.rgb[0] / 255) * alpha;
      colors[i * 3 + 1] = (star.rgb[1] / 255) * alpha;
      colors[i * 3 + 2] = (star.rgb[2] / 255) * alpha;
    }

    points.geometry.attributes.position.needsUpdate = true;
    points.geometry.attributes.color.needsUpdate = true;
    points.material.size = Math.max(2.5, Math.min(5.5, 2.2 * (window.devicePixelRatio || 1)));
  }

  function update(dt, pointer, w, h) {
    if (w !== width || h !== height || !points) rebuild(w, h);
    syncStars(dt, pointer);
    updateMeteors(dt);
    updateBgRipples(dt);
  }

  function render(renderer) {
    renderer.render(scene, camera);
  }

  function dispose() {
    if (points) {
      scene.remove(points);
      points.geometry.dispose();
      points.material.map?.dispose();
      points.material.dispose();
      points = null;
    }
    scene.remove(meteorMesh, glowMesh, bgMesh, rippleMesh, rippleGlowMesh);
    meteorGeo.dispose();
    meteorMat.map?.dispose();
    meteorMat.dispose();
    glowMat.dispose();
    rippleGeo.dispose();
    rippleGlowGeo.dispose();
    rippleMat.dispose();
    rippleGlowMat.dispose();
    bgMesh.geometry.dispose();
    bgMat.dispose();
    bgRipples = [];
  }

  return {
    bgColor: 0x000510,
    resize(w, h) { rebuild(w, h); },
    update,
    render,
    dispose,
  };
}
