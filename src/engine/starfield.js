import * as THREE from 'three';

/** Spacey Bloom Fluid 準拠の宇宙星空 + 流れ星背景 */
const STAR_COLORS = [
  [255, 255, 255],
  [224, 242, 254],
  [200, 220, 255],
  [255, 182, 220],
  [192, 132, 252],
  [160, 255, 190], // 淡緑
  [255, 160, 160], // 淡赤
  [210, 180, 100], // 淡黄（さらに控えめ）
  [80, 120, 220],  // 紺
  [40, 60, 160],   // 深い紺
  [30, 50, 140],   // より深い紺
  [60, 90, 200],   // 紺
  [100, 160, 255], // 明るい青
  [50, 110, 230],  // 青
];

const METEOR_TINTS = [
  [1, 1, 1],
  [0.88, 0.94, 1],
  [1, 0.92, 0.96],
  [0.75, 1, 0.82],   // 緑寄り
  [1, 0.72, 0.72],   // 赤寄り
  [0.95, 0.82, 0.45], // 黄寄り（控えめ）
  [0.45, 0.55, 1],   // 紺
  [0.28, 0.35, 0.85], // 深い紺
  [0.2, 0.28, 0.75],  // より深い紺
  [0.35, 0.45, 0.95], // 紺
  [0.4, 0.65, 1],    // 明るい青
  [0.25, 0.5, 0.95], // 青
];

const MAX_METEORS = 8;

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
    scene.remove(meteorMesh, glowMesh, bgMesh);
    meteorGeo.dispose();
    meteorMat.map?.dispose();
    meteorMat.dispose();
    glowMat.dispose();
    bgMesh.geometry.dispose();
    bgMat.dispose();
  }

  return {
    bgColor: 0x000510,
    resize(w, h) { rebuild(w, h); },
    update,
    render,
    dispose,
  };
}
