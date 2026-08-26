import * as THREE from 'three';

/** Spacey Bloom Fluid 準拠の宇宙星空背景 */
const STAR_COLORS = [
  [255, 255, 255],
  [224, 242, 254],
  [253, 244, 245],
  [255, 182, 220],
  [192, 132, 252],
];

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

  function starTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    g.fillStyle = '#ffffff';
    // Spacey Bloom と同じく小さな四角い星
    g.fillRect(24, 24, 16, 16);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
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
    scene.add(points);
    sync(0, null);
  }

  function toNdc(x, y) {
    return {
      x: (x / width) * 2 - 1,
      y: 1 - (y / height) * 2,
    };
  }

  function sync(dt, pointer) {
    if (!points || !stars.length) return;

    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const active = pointer && (pointer.velocity > 0.4 || pointer.isDown);
    const deltaX = active ? (pointer.x - centerX) / Math.max(centerX, 1) : 0;
    const deltaY = active ? (pointer.y - centerY) / Math.max(centerY, 1) : 0;

    let maxSize = 1;
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
      maxSize = Math.max(maxSize, star.size);
    }

    points.geometry.attributes.position.needsUpdate = true;
    points.geometry.attributes.color.needsUpdate = true;
    // 画面解像度に合わせて見やすいサイズ（Spacey の 0.3–2.1px より少し大きめ）
    points.material.size = Math.max(2.5, Math.min(5.5, 2.2 * (window.devicePixelRatio || 1)));
  }

  function update(dt, pointer, w, h) {
    if (w !== width || h !== height || !points) rebuild(w, h);
    sync(dt, pointer);
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
    scene.remove(bgMesh);
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
