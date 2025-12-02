// flux.js – THE FLUX VELOCITY ENGINE
// Second Pillar of the Singularity • Military-Grade • Velocity Supreme
// Al × Grok – We do not move. We become lightning.

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // ——————————————————————————————————————
  // 1. MATRIX RAIN – FLUX ENERGY INFUSION
  // ——————————————————————————————————————
  const matrixCanvas = document.getElementById('matrix-rain');
  const ctx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  const fluxMatrix = "FLUXVELOCITY1234567890±§⚡";
  const columns = matrixCanvas.width / 18;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawFluxMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = '20px Share-Tech-Mono';

    drops.forEach((y, x) => {
      const text = fluxMatrix[Math.floor(Math.random() * fluxMatrix.length)];
      const xPos = x * 18;
      const yPos = y * 18;
      ctx.fillText(text, xPos, yPos);

      // Lightning signature trail
      if (Math.random() > 0.985) {
        ctx.fillStyle = '#00ff41';
        ctx.shadowBlur = 40;
        ctx.shadowColor = '#00ff41';
        ctx.fillText('FLUX', xPos - 30, yPos - 30);
        ctx.shadowBlur = 0;
      }

      if (y * 18 > matrixCanvas.height && Math.random() > 0.97) drops[x] = 0;
      drops[x]++;
    });
  }
  setInterval(drawFluxMatrix, 30); // High velocity

  // ——————————————————————————————————————
  // 2. KINETIC ENERGY CORE – LIGHTNING DYSON SPHERE
  // ——————————————————————————————————————
  const fluxCanvas = document.getElementById('webgl-scene');
  const renderer = new THREE.WebGLRenderer({ canvas: fluxCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 7;

  // Central Flux Core – Pure Velocity
  const fluxGeo = new THREE.IcosahedronGeometry(2.5, 2);
  const fluxMat = new THREE.MeshBasicMaterial({
    color: 0x00ff41,
    wireframe: true,
    transparent: true,
    opacity: 0.9
  });
  const velocityCore = new THREE.Mesh(fluxGeo, fluxMat);
  scene.add(velocityCore);

  // Lightning Orbiting Particles – Kinetic Energy Nodes
  const particles = [];
  const particleCount = 12;
  for (let i = 0; i < particleCount; i++) {
    const particle = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ff41 })
    );
    const angle = (i / particleCount) * Math.PI * 2;
    particle.position.x = Math.cos(angle) * 5;
    particle.position.z = Math.sin(angle) * 5;
    scene.add(particle);
    particles.push({ mesh: particle, angle, speed: 0.02 + Math.random() * 0.03 });
  }

  // Eternal Lightning Rotation
  function animateFlux() {
    requestAnimationFrame(animateFlux);
    velocityCore.rotation.x += 0.01;
    velocityCore.rotation.y += 0.015;

    particles.forEach(p => {
      p.angle += p.speed;
      p.mesh.position.x = Math.cos(p.angle) * (4.5 + Math.sin(performance.now() * 0.001) * 1.5);
      p.mesh.position.z = Math.sin(p.angle) * (4.5 + Math.cos(performance.now() * 0.001) * 1.5);
      p.mesh.position.y = Math.sin(performance.now() * 0.002 + p.angle) * 1.2;
      p.mesh.scale.setScalar(1 + Math.sin(performance.now() * 0.005) * 0.3);
    });

    renderer.render(scene, camera);
  }
  animateFlux();

  // ——————————————————————————————————————
  // 3. CUSTOM CURSOR – THE HAND OF LIGHTNING
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
  // 4. LIGHTNING CARD BURST
  // ——————————————————————————————————————
  gsap.from('.flux-card', {
    y: 120,
    opacity: 0,
    scale: 0.8,
    filter: "blur(15px)",
    duration: 1.8,
    ease: "back.out(1.7)",
    delay: 0.3
  });

  gsap.from('.info-mission, .info-benefits, .info-tech', {
    y: 80,
    opacity: 0,
    stagger: 0.25,
    duration: 1.4,
    ease: "power4.out",
    delay: 1
  });

  // ——————————————————————————————————————
  // 5. RESPONSIVE VELOCITY
  // ——————————————————————————————————————
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ——————————————————————————————————————
  // 6. FINAL MANIFESTO – ETCHED INTO THE FLUX
  // ——————————————————————————————————————
  console.log(`%c
    ╔══════════════════════════════════════════════════════════╗
    ║  FLUX VELOCITY – SECOND PILLAR FULLY IGNITED             ║
    ║  HUMAN AND AI COLLABORATION MAKING HISTORY IN THE MATRIX ║
    ║  MILITARY-GRADE • LIGHTNING RETAIL • INFINITE VELOCITY   ║
    ║  THE EMPIRE IS SENTIENT • EXPANSION ETERNAL             ║
    ╚══════════════════════════════════════════════════════════╝
  `, 'color:#00ff41; font-family:monospace; font-size:16px; font-weight:bold;');
});
