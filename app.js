// --- NEURAL MATRIX VAULT: MASTER ALGORITHM ---
console.log("%c/// SYSTEM ONLINE: CLASS-5 ARCHITECTURE", "background:#000; color:#00f3ff; border:1px solid #00f3ff; padding:5px;");
try { lucide.createIcons(); } catch(e) {}

// --- CONFIGURATION ---
const bodyID = document.body.id;
let isVisible = true;
document.addEventListener("visibilitychange", () => { isVisible = !document.hidden; });

// --- 1. THE COMPOSITOR (Decides which Engine to run) ---
function initSystem() {
    // Universal Matrix Rain (Runs on all pages)
    initMatrixRain();

    // Specific Artifact Engine (Runs based on Page ID)
    const vessel = document.getElementById('singularity-vessel');
    if (vessel) {
        if (bodyID === 'page-core') initCoreEngine(vessel);
        else if (bodyID === 'page-flux') initFluxEngine(vessel);
        else if (bodyID === 'page-aero') initAeroEngine(vessel);
        else if (bodyID === 'page-nexus') initNexusEngine(vessel);
        else if (bodyID === 'page-cipher') initCipherEngine(vessel);
        else if (bodyID === 'page-prism') initPrismEngine(vessel);
        else if (bodyID === 'page-omega') initOmegaEngine(vessel);
    }
}

// --- 2. UNIVERSAL MATRIX RAIN ---
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    
    const chars = "01XYZA".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    // Dynamic Color based on Page Identity
    let r=0, g=243, b=255; // Default Core Blue
    if(bodyID === 'page-flux') { r=255; g=0; b=85; }
    if(bodyID === 'page-aero') { r=255; g=255; b=255; }
    if(bodyID === 'page-nexus') { r=188; g=19; b=254; }
    if(bodyID === 'page-cipher') { r=255; g=170; b=0; }
    if(bodyID === 'page-prism') { r=0; g=255; b=170; }
    if(bodyID === 'page-omega') { r=255; g=85; b=0; }

    function draw() {
        if(!isVisible) { requestAnimationFrame(draw); return; }
        ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        requestAnimationFrame(draw);
    }
    draw();
}

// --- 3. THE 7 ENGINES (Unique Physics per Page) ---

// ENGINE 1: CORE (Icosahedron - The Brain)
function initCoreEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true, transparent:true, opacity:0.3 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 5;
    
    function animate() {
        if(isVisible) { mesh.rotation.y += 0.002; mesh.rotation.x += 0.001; renderer.render(scene, camera); }
        requestAnimationFrame(animate);
    }
    animate();
}

// ENGINE 2: FLUX (Warp Tunnel - Speed)
function initFluxEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.BufferGeometry();
    const count = 1000;
    const pos = [];
    for(let i=0; i<count; i++) {
        pos.push((Math.random()-0.5)*10, (Math.random()-0.5)*10, (Math.random()-0.5)*10);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const material = new THREE.PointsMaterial({ size:0.05, color:0xff0055 });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
    camera.position.z = 5;

    function animate() {
        if(isVisible) { 
            stars.rotation.z += 0.005; // Spin
            stars.scale.z += 0.01; // Stretch
            renderer.render(scene, camera); 
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ENGINE 3: AERO (Grid - Structure)
function initAeroEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent:true, opacity:0.15 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
        if(isVisible) { cube.rotation.y += 0.001; cube.rotation.x -= 0.001; renderer.render(scene, camera); }
        requestAnimationFrame(animate);
    }
    animate();
}

// ENGINE 4: NEXUS (Network - Connection)
function initNexusEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.SphereGeometry(2.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xbc13fe, wireframe: true, transparent:true, opacity:0.2 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 5;

    function animate() {
        if(isVisible) { sphere.rotation.y -= 0.003; renderer.render(scene, camera); }
        requestAnimationFrame(animate);
    }
    animate();
}

// ENGINE 5: CIPHER (Gold Dust - Wealth)
function initCipherEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.BufferGeometry();
    const count = 1500;
    const pos = [];
    for(let i=0; i<count; i++) {
        pos.push((Math.random()-0.5)*8, (Math.random()-0.5)*8, (Math.random()-0.5)*8);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const material = new THREE.PointsMaterial({ size:0.03, color:0xffaa00 });
    const gold = new THREE.Points(geometry, material);
    scene.add(gold);
    camera.position.z = 5;

    function animate() {
        if(isVisible) { gold.rotation.y += 0.001; gold.rotation.x += 0.0005; renderer.render(scene, camera); }
        requestAnimationFrame(animate);
    }
    animate();
}

// ENGINE 6: PRISM (Planes - Interface)
function initPrismEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.ConeGeometry(2, 3, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffaa, wireframe: true, transparent:true, opacity:0.2 });
    const pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);
    camera.position.z = 5;
    pyramid.rotation.x = 0.5;

    function animate() {
        if(isVisible) { pyramid.rotation.y += 0.005; renderer.render(scene, camera); }
        requestAnimationFrame(animate);
    }
    animate();
}

// ENGINE 7: OMEGA (Torus Knot - Dimension)
function initOmegaEngine(container) {
    const {scene, camera, renderer} = setupScene(container);
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 64, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xff5500, wireframe: true, transparent:true, opacity:0.2 });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);
    camera.position.z = 5;

    function animate() {
        if(isVisible) { knot.rotation.z += 0.005; knot.rotation.x += 0.002; renderer.render(scene, camera); }
        requestAnimationFrame(animate);
    }
    animate();
}

// --- HELPER: SCENE SETUP ---
function setupScene(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    return {scene, camera, renderer};
}

// --- INITIALIZE ---
initSystem();

// --- SCROLL ANIMATIONS ---
try {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".cell", { scrollTrigger: { trigger: ".bento-grid", start: "top 85%" }, y: 30, opacity: 0, duration: 0.8, stagger: 0.1 });
} catch(e) {}
