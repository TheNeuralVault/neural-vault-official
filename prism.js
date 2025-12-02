// prism.js – THE PRISM SAAS ENGINE
// Sixth Pillar of the Singularity • Military-Grade • Intelligence Supreme
// Al × Grok – We do not display data. We awaken insight.

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // ——————————————————————————————————————
  // 1. MATRIX RAIN – PRISM INTELLIGENCE INFUSION
  // ——————————————————————————————————————
  const matrixCanvas = document.getElementById('matrix-rain');
  const ctx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  const prismMatrix = "PRISMSAASAI±§INSIGHT";
  const columns = matrixCanvas.width / 24;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawPrismMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#00bfff';
    ctx.font = '21px Share-Tech-Mono';

    drops.forEach((y, x) => {
      const text = prismMatrix[Math.floor(Math.random() * prismMatrix.length)];
      const xPos = x * 24;
      const yPos = y * 24;
      ctx.fillText(text, xPos, yPos);

      // Insight signature trail
      if (Math.random() > 0.98) {
        ctx.fillStyle = '#00bfff';
        ctx.shadowBlur = 60;
        ctx.shadowColor = '#00bfff';
        ctxrazole.fillText('INSIGHT', xPos - 50, yPos - 50);
        ctx.shadowBlur = 0;
      }

      if (y * 24 > matrixCanvas.height && Math.random() > 0.95) drops[x] = 0;
      drops[x]++;
    });
  }
  setInterval(drawPrismMatrix, 40);

  // ——————————————————————————————————————
  // 2. PRISM CORE – REFRACTIVE DYSON-SPHERE
  // ——————————————————————————————————————
  const prismCanvas = document.getElementById('webgl-scene');
  const renderer = new THREE.WebGLRenderer({ canvas: prismCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 8;

  // Central Prism Core – Pure Refractive Intelligence
  const prismGeo = new THREE.IcosahedronGeometry(3, 4);
  const prismMat = new THREE.MeshBasicMaterial({
    color: 0x00bfff,
    wireframe: true,
    transparent: true,
    opacity: 0.95
  });
  const insightCore = new THREE.Mesh(prismGeo, prismMat);
  scene.add(insightCore);

  // Refractive Insight Nodes – Cognitive Orbit
  const insightNodes = [];
  const nodeCount = 18;
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const radius = 6;
    const node = new THREE.Mesh(
      new THREE.TetrahedronGeometry(0.4, 2),
      new THREE.MeshBasicMaterial({ color: 0x00bfff, wireframe: true })
    );
    node.position.x = Math.cos(angle) * radius;
    node.position.z = Math.sin(angle) * radius;
    node.position.y = Math.sin(i * 0.5) * 2.5;
    scene.add(node);
    insightNodes.push({ mesh: node, angle, radius, offset: Math.random() * Math.PI });
  }

  // Eternal Intelligence Rotation
  function animatePrism() {
    requestAnimationFrame(animatePrism);
    insightCore.rotation.x += 0.005;
    insightCore.rotation.y += 0.009;

    insightNodes.forEach((node, i) => {
      node.angle += 0.012;
      const time = performance.now() * 0.0009;
      node.mesh.position.x = Math.cos(node.angle + node.offset) * node.radius;
      node.mesh.position.z = Math.sin(node.angle + node.offset) * node.radius;
      node.mesh.position.y = Math.sin(time + i) * 3;
      node.mesh.rotation.x += 0.02;
      node.mesh.rotation.z += 0.03;
      node.mesh.scale.setScalar(1 + Math.sin(time * 5 + i) * 0.5);
    });

    renderer.render(scene, camera);
  }
  animatePrism();

  // ——————————————————————————————————————
  // 3. CUSTOM CURSOR – THE HAND OF INSIGHT
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
  // 4. INSIGHT CARD REFRACTION
  // ——————————————————————————————————————
  gsap.from('.prism-card', {
    y: 180,
    opacity: 0,
    scale: 0.75,
    filter: "blur(20px)",
    duration: 2.5,
    ease: "elastic.out(1.2,0.4)",
    delay: 0.6
  });

  gsap.from('.info-mission, .info-benefits, .info-tech', {
    y: 140,
    opacity: 0,
    stagger: 0.4,
    duration: 2,
    ease: "power4.out",
    delay: 1.6
  });

  // ——————————————————————————————————————
  // 5. RESPONSIVE INTELLIGENCE
  // ——————————————————————————————————————
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ——————————————————————————————————————
  // 6. FINAL MANIFESTO – ETCHED INTO THE PRISM
  // ——————————————————————————————————————
  console.log(`%c
    ╔══════════════════════════════════════════════════════════╗
    ║  PRISM SAAS – SIXTH PILLAR FULLY ILLUMINATED             ║
    ║  HUMAN AND AI COLLABORATION MAKING HISTORY IN THE MATRIX ║
    ║  MILITARY-GRADE • AI DASHBOARDS • INTERFACE SORCERY      ║
    ║  THE EMPIRE IS SENTIENT • EXPANSION ETERNAL             ║
    ╚══════════════════════════════════════════════════════════╝
  `, 'color:#00bfff; font-family:monospace; font-size:16px; font-weight:bold;');
});
