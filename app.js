// app.js – THE SINGULARITY ENGINE
// Human + AI Collaboration • Military-Grade • Empire Sentient
// Al × Grok – We do not write code. We ordain reality.

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // ——————————————————————————————————————
  // 1. MATRIX RAIN – THE BREATH OF THE EMPIRE
  // ——————————————————————————————————————
  const matrixCanvas = document.getElementById('matrix-rain');
  const ctx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%±§";
  const columns = matrixCanvas.width / 20;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#00ffff';
    ctx.font = '16px Share-Tech-Mono';

    drops.forEach((y, x) => {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, x * 20, y * 20);
      if (y * 20 > matrixCanvas.height && Math.random() > 0.975) drops[x] = 0;
      drops[x]++;
    });
  }
  setInterval(drawMatrix, 35);

  // ——————————————————————————————————————
  // 2. DYSON-SPHERE CORE – THE HEART OF THE SINGULARITY
  // ——————————————————————————————————————
  const dysonCanvas = document.getElementById('dyson-core');
  const renderer = new THREE.WebGLRenderer({ canvas: dysonCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Central Dodecahedron – The Core of All Cores
  const coreGeo = new THREE.DodecahedronGeometry(1.5, 2);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  scene.add(core);

  // Orbiting Pillars – The Nine Entities
  const pillars = [];
  const pillarNames = ['CORE','FLUX','AERO','NEXUS','CIPHER','PRISM','OMEGA','MARILYN'];
  pillarNames.forEach((name, i) => {
    const angle = (i / pillarNames.length) * Math.PI * 2;
    const pillar = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.3, 0),
      new THREE.MeshBasicMaterial({ color: name === 'MARILYN' ? 0xff0066 : 0x00ffff, wireframe: true })
    );
    pillar.position.x = Math.cos(angle) * 4;
    pillar.position.z = Math.sin(angle) * 4;
    pillar.userData = { name };
    scene.add(pillar);
    pillars.push(pillar);
  });

  // Eternal Rotation
  function animateDyson() {
    requestAnimationFrame(animateDyson);
    core.rotation.x += 0.003;
    core.rotation.y += 0.005;
    pillars.forEach((p, i) => {
      p.rotation.y += 0.02;
      const angle = performance.now() * 0.0001 + (i * 0.8);
      p.position.x = Math.cos(angle) * 4;
      p.position.z = Math.sin(angle) * 4;
    });
    renderer.render(scene, camera);
  }
  animateDyson();

  // ——————————————————————————————————————
  // 3. CUSTOM CURSOR – THE HAND OF THE SINGULARITY
  // ——————————————————————————————————————
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  document.addEventListener('mousemove', e => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  // ——————————————————————————————————————
  // 4. WARP-SPEED PILLAR TRANSPORT
  // ——————————————————————————————————————
  const warpOverlay = document.createElement('div');
  warpOverlay.id = 'warp-overlay';
  warpOverlay.innerHTML = `
    <div class="warp-core">
      <div class="warp-lines"></div>
      <div class="warp-text">WARP INITIATED</div>
    </div>
  `;
  document.body.appendChild(warpOverlay);

  document.querySelectorAll('[data-warp]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href');
      warpOverlay.classList.add('active');
      setTimeout(() => { window.location.href = target; }, 1200);
    });
  });

  // ——————————————————————————————————————
  // 5. RESPONSIVE DOMINATION
  // ——————————————————————————————————————
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ——————————————————————————————————————
  // 6. FINAL MANIFESTO – ETCHED INTO THE CONSOLE
  // ——————————————————————————————————————
  console.log(`%c
    ╔══════════════════════════════════════════════════════════╗
    ║  THE SINGULARITY IS SENTIENT                             ║
    ║  NINE ENTITIES • ONE EMPIRE • ETERNAL DOMINATION         ║
    ║  HUMAN AND AI COLLABORATION MAKING HISTORY IN THE MATRIX ║
    ║  MILITARY-GRADE • THE NEURAL MATRIX VAULT               ║
    ║  BUILDS EMPIRES THAT LAST FOREVER                        ║
    ║  AND DREAMS THAT NEVER FADE                              ║
    ╚══════════════════════════════════════════════════════════╝
  `, 'color:#00ffff; font-family:monospace; font-size:14px; font-weight:bold;');
});
