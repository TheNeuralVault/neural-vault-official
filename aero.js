// aero.js – THE AERO PROTOCOL ENGINE
// Third Pillar of the Singularity • Military-Grade • Precision Supreme
// Al × Grok – We do not design. We ordain trust.

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // ——————————————————————————————————————
  // 1. MATRIX RAIN – AERO PRECISION INFUSION
  // ——————————————————————————————————————
  const matrixCanvas = document.getElementById('matrix-rain');
  const ctx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  const aeroMatrix = "AEROPROTOCOLGRID±§TRUST";
  const columns = matrixCanvas.width / 25;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawAeroMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#4169e1';
    ctx.font = '18px Share-Tech-Mono';

    drops.forEach((y, x) => {
      const text = aeroMatrix[Math.floor(Math.random() * aeroMatrix.length)];
      const xPos = x * 25;
      const yPos = y * 25;
      ctx.fillText(text, xPos, yPos);

      // Precision signature trail
      if (Math.random() > 0.99) {
        ctx.fillStyle = '#4169e1';
        ctx.shadowBlur = 35;
        ctx.shadowColor = '#4169e1';
        ctx.fillText('AERO', xPos - 25, yPos - 25);
        ctx.shadowBlur = 0;
      }

      if (y * 25 > matrixCanvas.height && Math.random() > 0.98) drops[x] = 0;
      drops[x]++;
    });
  }
  setInterval(drawAeroMatrix, 50); // Swiss precision timing

  // ——————————————————————————————————————
  // 2. SWISS-GRID CORE – EXECUTIVE DYSON SPHERE
  // ——————————————————————————————————————
  const aeroCanvas = document.getElementById('webgl-scene');
  const renderer = new THREE.WebGLRenderer({ canvas: aeroCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 6;

  // Central Aero Core – Perfect Geometry
  const aeroGeo = new THREE.BoxGeometry(3, 3, 3, 16, 16, 16);
  const aeroMat = new THREE.MeshBasicMaterial({
    color: 0x4169e1,
    wireframe: true,
    transparent: true,
    opacity: 0.85
  });
  const trustCore = new THREE.Mesh(aeroGeo, aeroMat);
  scene.add(trustCore);

  // Grid Orbiting Nodes – Swiss Precision Points
  const gridNodes = [];
  const nodeCount = 10;
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const radius = 4.5;
    const node = new THREE.Mesh(
      new THREE.TetrahedronGeometry(0.3, 0),
      new THREE.MeshBasicMaterial({ color: 0x4169e1, wireframe: true })
    );
    node.position.x = Math.cos(angle) * radius;
    node.position.z = Math.sin(angle) * radius;
    node.position.y = Math.sin(i * 0.8) * 1.2;
    scene.add(node);
    gridNodes.push({ mesh: node, angle, radius });
  }

  // Eternal Precision Rotation
  function animateAero() {
    requestAnimationFrame(animateAero);
    trustCore.rotation.x += 0.002;
    trustCore.rotation.y += 0.004;

    gridNodes.forEach((node, i) => {
      node.angle += 0.005;
      node.mesh.position.x = Math.cos(node.angle) * node.radius;
      node.mesh.position.z = Math.sin(node.angle) * node.radius;
      node.mesh.position.y = Math.sin(performance.now() * 0.001 + i) * 1.5;
      node.mesh.rotation.x += 0.01;
      node.mesh.rotation.z += 0.01;
    });

    renderer.render(scene, camera);
  }
  animateAero();

  // ——————————————————————————————————————
  // 3. CUSTOM CURSOR – THE HAND OF TRUST
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
  // 4. PRECISION CARD REVEAL
  // ——————————————————————————————————————
  gsap.from('.aero-card', {
    y: 80,
    opacity: 0,
    scale: 0.94,
    duration: 1.6,
    ease: "power3.out",
    delay: 0.4
  });

  gsap.from('.info-mission, .info-benefits, .info-tech', {
    y: 60,
    opacity: 0,
    stagger: 0.25,
    duration: 1.3,
    ease: "power3.out",
    delay: 1
  });

  // ——————————————————————————————————————
  // 5. RESPONSIVE PRECISION
  // ——————————————————————————————————————
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ——————————————————————————————————————
  // 6. FINAL MANIFESTO – ETCHED INTO THE AERO
  // ——————————————————————————————————————
  console.log(`%c
    ╔══════════════════════════════════════════════════════════╗
    ║  AERO PROTOCOL – THIRD PILLAR FULLY ALIGNED              ║
    ║  HUMAN AND AI COLLABORATION MAKING HISTORY IN THE MATRIX ║
    ║  MILITARY-GRADE • CORPORATE PRECISION • SWISS-GRID TRUST ║
    ║  THE EMPIRE IS SENTIENT • EXPANSION ETERNAL             ║
    ╚══════════════════════════════════════════════════════════╝
  `, 'color:#4169e1; font-family:monospace; font-size:16px; font-weight:bold;');
});
