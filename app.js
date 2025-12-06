/* 
   ================================================================
   NEURAL MATRIX VAULT | CORE SYSTEM v9.0
   ARCHITECT: MAGNUS OPUS
   DIRECTIVE: UNCOMPROMISING FIDELITY
   ================================================================
*/

console.log("%c/// SYSTEM INITIALIZATION: GOD MODE ///", "background:#000; color:#00f3ff; padding:10px; border:1px solid #00f3ff;");

// --- CONFIGURATION ---
const CONFIG = {
    isMobile: window.innerWidth <= 768,
    dpr: Math.min(window.devicePixelRatio, 2),
    colors: {
        blue: {r:0,g:243,b:255},
        green: {r:0,g:255,b:0},
        white: {r:255,g:255,b:255},
        grey: {r:128,g:128,b:128},
        red: {r:255,g:0,b:0}
    }
};

// --- MODULE 1: CHROMATIC MATRIX ENGINE ---
class MatrixEngine {
    constructor() {
        this.canvas = document.getElementById('matrix-rain');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        this.chars = "01XYZA".split("");
        this.drops = [];
        this.initDrops();
        
        // The 5-Color Cycle Palette
        this.palette = [
            CONFIG.colors.blue,
            CONFIG.colors.green,
            CONFIG.colors.white,
            CONFIG.colors.grey,
            CONFIG.colors.red
        ];
        this.time = 0;
        
        window.addEventListener('resize', () => { this.resize(); this.initDrops(); });
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fontSize = 14;
        this.columns = this.canvas.width / this.fontSize;
    }

    initDrops() {
        this.drops = Array(Math.floor(this.columns)).fill(1);
    }

    getColor() {
        // Algorithmic Color Cycling
        this.time += 0.005;
        const idx = Math.floor(this.time) % this.palette.length;
        const c = this.palette[idx];
        return `rgb(${c.r},${c.g},${c.b})`;
    }

    animate() {
        // Trail Effect
        this.ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = this.getColor();
        this.ctx.font = this.fontSize + "px monospace";

        for (let i = 0; i < this.drops.length; i++) {
            const text = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        requestAnimationFrame(() => this.animate());
    }
}

// --- MODULE 2: SINGULARITY ENGINE (3D PBR) ---
class SingularityEngine {
    constructor() {
        this.container = document.getElementById('singularity-vessel');
        if (!this.container) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 100);
        this.camera.position.z = 6;

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !CONFIG.isMobile });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(CONFIG.dpr);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping; // Cinematic Tone Mapping
        this.container.appendChild(this.renderer.domElement);

        this.initLights();
        this.initArtifact();
        this.animate();

        window.addEventListener('resize', () => this.handleResize());
    }

    initLights() {
        const ambient = new THREE.AmbientLight(0x222222);
        this.scene.add(ambient);

        const l1 = new THREE.PointLight(0x00f3ff, 2, 20);
        l1.position.set(3, 3, 3);
        this.scene.add(l1);

        const l2 = new THREE.PointLight(0xff0055, 2, 20);
        l2.position.set(-3, -3, 3);
        this.scene.add(l2);
    }

    initArtifact() {
        // PBR Material for Titanium Look
        const geometry = new THREE.IcosahedronGeometry(1.5, 1); // Subdivided for detail
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x111111,
            metalness: 0.9,
            roughness: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            flatShading: true
        });
        this.core = new THREE.Mesh(geometry, material);
        this.scene.add(this.core);

        // Wireframe Cage
        const wireGeo = new THREE.IcosahedronGeometry(1.6, 1);
        const wireMat = new THREE.MeshBasicMaterial({ 
            color: 0x00f3ff, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.15 
        });
        this.cage = new THREE.Mesh(wireGeo, wireMat);
        this.scene.add(this.cage);
        
        // Quaternion for Rotation Axis
        this.axis = new THREE.Vector3(0, 1, 0).normalize();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Algorithmic Rotation using Quaternions (Implicit in Three.js rotation helpers)
        this.core.rotation.y += 0.004;
        this.core.rotation.x -= 0.002;
        this.cage.rotation.y -= 0.002;
        
        this.renderer.render(this.scene, this.camera);
    }

    handleResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}

// --- MODULE 3: INTERFACE CONTROLLER ---
class InterfaceController {
    constructor() {
        this.initScroll();
        this.initIcons();
        this.initAnimations();
        this.initCursor();
    }

    initScroll() {
        try {
            const lenis = new Lenis({ duration: 1.2, smooth: true });
            function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);
        } catch(e) {}
    }

    initIcons() {
        try { lucide.createIcons(); } catch(e) {}
    }

    initAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        
        // Staggered Entrance for Pillars
        gsap.from(".cell", {
            y: 60, 
            opacity: 0, 
            duration: 1, 
            stagger: 0.1, 
            ease: "power3.out", 
            delay: 0.2
        });
    }

    initCursor() {
        if (!CONFIG.isMobile) {
            const dot = document.querySelector('.cursor-dot');
            const circ = document.querySelector('.cursor-circle');
            document.addEventListener('mousemove', (e) => {
                gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
                gsap.to(circ, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 });
            });
        }
    }
}

// --- SYSTEM BOOT ---
window.onload = () => {
    new MatrixEngine();
    new SingularityEngine();
    new InterfaceController();
};

// --- GLOBAL UTILS ---
window.prefill = function(product) {
    const field = document.getElementById('product-field');
    const form = document.getElementById('contact');
    if(field && form) {
        field.value = product;
        form.scrollIntoView({ behavior: 'smooth' });
    }
};
