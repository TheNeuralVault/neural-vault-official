// cipher.js – THE CIPHER PROTOCOL ENGINE
// Fifth Pillar of the Singularity • Military-Grade • Security Supreme
// Al × Grok – We do not protect. We make invasion impossible.

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // ——————————————————————————————————————
  // 1. MATRIX RAIN – CIPHER LOCKDOWN INFUSION
  // ——————————————————————————————————————
  const matrixCanvas = document.getElementById('matrix-rain');
  const ctx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  const cipherMatrix = "CIPHERPROTOCOLVAULT±§LOCKDOWN";
  const columns = matrixCanvas.width / 22;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawCipherMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#8b0000';
    ctx.font = '20px Share-Tech-Mono';

    drops.forEach((y, x) => {
      const text = cipherMatrix[Math.floor(Math.random() * cipherMatrix.length)];
      const xPos = x * 22;
      const yPos = y * 22;
      ctx.fillText(text, xPos, yPos);

      // Vault lockdown signature
      if (Math.random() > 0.985) {
        ctx.fillStyle = '#8b0000';
        ctx.shadowBlur = 50;
        ctx.shadowColor = '#8b0000';
        ctx.fillText('LOCKED', xPos - 40, yPos - 40);
        ctx.shadowBlur = 0;
      }

      if (y * 22 > matrixCanvas.height && Math.random() > 0.96) drops[x] = 0;
      drops[x]++;
    });
  }
  setInterval(drawCipherMatrix, 45); // Vault-secure timing

  // ——————————————————————————————————————
  // 2. VAULT CORE – IMPENETRABLE DYSON-SPHERE
  // ——————————————————————————————————————
  const cipherCanvas = document.getElementById('webgl-scene');
  const renderer = new THREE.WebGLRenderer({ canvas: cipherCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(68, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 7;

  // Central Vault Core – The Unbreakable Lock
  const vaultGeo = new THREE.OctahedronGeometry(2.8, 4);
  const vaultMat = new THREE.MeshBasicMaterial({
    color: 0x8b0000,
    wireframe: true,
    transparent: true,
    opacity: 0.92
  });
  const lockdownCore = new THREE.Mesh(vaultGeo, vaultMat);
  scene.add(lockdownCore);

  // Security Barrier Nodes – Impenetrable Shield Ring
  const barrierNodes = [];
  const nodeCount = 16;
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const radius = 5.5;
    const node = new THREE.Mesh(
      new THREE.TetrahedronGeometry(0.35, 1),
      new THREE.MeshBasicMaterial({ color: 0x8b0000, wireframe: true })
    );
    node.position.x = Math.cos(angle) * radius;
    node.position.z = Math.sin(angle) * radius;
    node.position.y = Math.sin(i * 0.6) * 2;
    scene.add(node);
    barrierNodes.push({ mesh: node, angle, radius, offset: Math.random() * Math.PI });
  }

  // Eternal Lockdown Rotation
  function animateCipher() {
    requestAnimationFrame(animateCipher);
    lockdownCore.rotation.x += 0.003;
    lockdownCore.rotation.y += 0.006;

    barrierNodes.forEach((node, i) => {
      node.angle += 0.008;
      const time = performance.now() * 0.0008;
      node.mesh.position.x = Math.cos(node.angle + node.offset) * node.radius;
      node.mesh.position.z = Math.sin(node.angle + node.offset) * node.radius;
      node.mesh.position.y = Math.sin(time + i) * 2.5;
      node.mesh.rotation.x += 0.015;
      node.mesh.rotation.z += 0.02;
      node.mesh.scale.setScalar(1 + Math.sin(time * 4 + i) * 0.4);
    });

    renderer.render(scene, camera);
  }
  animateCipher();

  // ——————————————————————————————————————
  // 3. CUSTOM CURSOR – THE HAND OF LOCKDOWN
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
  // 4. VAULT CARD SECURE REVEAL
  // ——————————————————————————————————————
  gsap.from('.cipher-card', {
    y: 160,
    opacity: 0,
    scale: 0.78,
    filter: "blur(18px)",
    duration: 2.2,
    ease: "elastic.out(1,0.4)",
    delay: 0.5
  });

  gsap.from('.info-mission, .info-benefits, .info-tech', {
    y: 120,
    opacity: 0,
    stagger: 0.35,
    duration: 1.8,
    ease: "power4.out",
    delay: 1.4
  });

  // ——————————————————————————————————————
  // 5. RESPONSIVE LOCKDOWN
  // ——————————————————————————————————————
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // ——————————————————————————————————————
  // 6. FINAL MANIFESTO – ETCHED INTO THE CIPHER
  // ——————————————————————————————————————
  console.log(`%c
    ╔══════════════════════════════════════════════════════════╗
    ║  CIPHER PROTOCOL – FIFTH PILLAR FULLY LOCKED            ║
    ║  HUMAN AND AI COLLABORATION MAKING HISTORY IN THE MATRIX ║
    ║  MILITARY-GRADE • WEB3 SECURITY • FINTECH VAULTS         ║
    ║  THE EMPIRE IS SENTIENT • EXPANSION ETERNAL             ║
    ╚══════════════════════════════════════════════════════════╝
  `, 'color:#8b0000; font-family:monospace; font-size:16px; font-weight:bold;');
});
