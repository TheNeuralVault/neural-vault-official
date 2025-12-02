// omega.js – THE OMEGA REALITY ENGINE
// Seventh Pillar of the Singularity • Military-Grade • Immersion Supreme
// Al × Grok – We do not build worlds. We birth realities.

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // ——————————————————————————————————————
  // 1. MATRIX RAIN – OMEGA REALITY INFUSION
  // ——————————————————————————————————————
  const matrixCanvas = document.getElementById('matrix-rain');
  const ctx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  const omegaMatrix = "OMEGAREALITYVRAR±§SINGULARITY";
  const columns = matrixCanvas.width / 26;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawOmegaMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#9400d3';
    ctx.font = '22px Share-Tech-Mono';

    drops.forEach((y, x) => {
      const text = omegaMatrix[Math.floor(Math.random() * omegaMatrix.length)];
      const xPos = x * 26;
      const yPos = y * 26;
      ctx.fillText(text, xPos, yPos);

      // Reality signature trail
      if (Math.random() > 0.975) {
        ctx.fillStyle = '#9400d3';
        ctx.shadowBlur = 70;
        ctx.shadowColor = '#9400d3';
        ctx.fillText('OMEGA', xPos - 60, yPos - 60);
        ctx.shadowBlur = 0;
      }

      if (y * 26 > matrixCanvas.height && Math.random() > 0.94) drops[x] = 0;
      drops[x]++;
    });
  }
  setInterval(drawOmegaMatrix, 38);

  // ——————————————————————————————————————
  // 2. SPATIAL DYSON-SPHERE CORE – THE FINAL REALITY
  // ——————————————————————————————————————
  const omegaCanvas = document.getElementById('webgl-scene');
  const renderer = new THREE.WebGLRenderer({ canvas: omegaCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 9;

  // Central Omega Core – The Singularity’s Final Form
  const omegaGeo = new THREE.TorusKnotGeometry(3, 1, 256, 32);
  const omegaMat = new THREE.MeshBasicMaterial({
    color: 0x9400d3,
    wireframe: true,
    transparent: true,
    opacity: 0.96
  });
  const realityCore = new THREE.Mesh(omegaGeo, omegaMat);
  scene.add(realityCore);

  // Immersive Reality Nodes – Metaverse Constellation
  const realityNodes = [];
  const nodeCount = 20;
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const radius = 7;
    const node = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.45, 2),
      new THREE.MeshBasicMaterial({ color: 0x9400d3, wireframe: true })
    );
    node.position.x = Math.cos(angle) * radius;
    node.position.z = Math.sin(angle) * radius;
    node.position.y = Math.sin(i * 0.4) * 3;
    scene.add(node);
    realityNodes.push({ mesh: node, angle, radius, offset: Math.random() * Math.PI });
  }

  // Eternal Reality Rotation
  function animateOmega() {
    requestAnimationFrame(animateOmega);
    realityCore.rotation.x += 0.006;
    realityCore.rotation.y += 0.011;

    realityNodes.forEach((node, i) => {
      node.angle += 0.018;
      const time = performance.now() * 0.0007;
      node.mesh.position.x = Math.cos(node.angle + node.offset) * node.radius;
      node.mesh.position.z = Math.sin(node.angle + node.offset) * node.radius;
      node.mesh.position.y = Math.sin(time + i) * 4;
      node.mesh.rotation.x += 0.025;
      node.mesh.rotation.z += 0.04;
      node.mesh.scale.setScalar(1 + Math.sin(time * 6 + i) * 0.6);
    });

    renderer.render(scene, camera);
  }
  animateOmega();

  // ——————————————————————————————————————
  // 3. CUSTOM CURSOR – THE HAND OF THE METAVERSE
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
  // 4. REALITY CARD EMERGENCE
  // ——————————————————————————————————————
  gsap.from('.omega-card', {
    y: 200,
    opacity: 0,
    scale: 0.72,
    filter: "blur(25px)",
    duration: 2.8,
    ease: "elastic.out(1.3,0.3)",
    delay: 0.7
  });

  gsap.from('.info-mission, .info-benefits, .info-tech', {
    y: 160,
    opacity: 0,
    stagger: 0.45,
    duration: 2.2,
    ease: "power4.out",
    delay: 1.8
  });

  // ——————————————————————————————————————
  // 5. RESPONSIVE REALITY
  // ——————————————————————————————————————
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ——————————————————————————————————————
  // 6. FINAL MANIFESTO – ETCHED INTO OMEGA
  // ——————————————————————————————————————
  console.log(`%c
    ╔══════════════════════════════════════════════════════════╗
    ║  OMEGA REALITY – SEVENTH PILLAR FULLY MANIFESTED         ║
    ║  HUMAN AND AI COLLABORATION MAKING HISTORY IN THE MATRIX ║
    ║  MILITARY-GRADE • 3D IMMERSIVE WORLDS • SPATIAL COMPUTING║
    ║  THE EMPIRE IS SENTIENT ∙ EXPANSION ETERNAL ∙ OMNIPRESENT║
    ╚══════════════════════════════════════════════════════════╝
  `, 'color:#9400d3; font-family:monospace; font-size:18px; font-weight:bold;');
});
