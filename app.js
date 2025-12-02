/* 
   ================================================================
   NEURAL MATRIX VAULT | CORE SYSTEM v9.0 (THE GOD ENGINE)
   ARCHITECT: GEMINI 3.0 // DIRECTIVE: TOTAL DOMINANCE
   ================================================================
*/

console.log(
    "%c/// SYSTEM INITIALIZATION: OMEGA LEVEL_5 ///", 
    "background: #000; color: #00f3ff; padding: 10px; border: 2px solid #00f3ff; font-weight: bold;"
);

// --- GLOBAL CONFIGURATION ---
const CONFIG = {
    theme: getComputedStyle(document.documentElement).getPropertyValue('--theme').trim() || '#00f3ff',
    isMobile: window.innerWidth <= 768,
    dpr: Math.min(window.devicePixelRatio, 2),
    pageID: document.body.id
};

// --- PERFORMANCE MONITOR (BATTERY SAVER) ---
class SystemMonitor {
    constructor() {
        this.isVisible = true;
        this.paused = false;
        document.addEventListener("visibilitychange", () => {
            this.isVisible = !document.hidden;
            this.isVisible ? console.log(">> SYSTEM RESUMED") : console.log(">> SYSTEM STANDBY");
        });
    }
}
const Monitor = new SystemMonitor();

// ----------------------------------------------------------------
// MODULE 1: THE LIQUID SHADER (GLSL BACKEND)
// ----------------------------------------------------------------
class LiquidEngine {
    constructor() {
        if (CONFIG.isMobile) return; // Save mobile battery
        this.canvas = document.getElementById('liquid-engine');
        if (!this.canvas) return;
        this.gl = this.canvas.getContext('webgl');
        if (!this.gl) return;
        
        this.resize();
        this.initShaders();
        this.startTime = Date.now();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    initShaders() {
        const vsSource = `attribute vec2 p; void main(){gl_Position=vec4(p,0.,1.);}`;
        const fsSource = `
            precision mediump float;
            uniform float t;
            uniform vec2 r;
            void main() {
                vec2 uv = gl_FragCoord.xy / r.xy;
                float v = 0.0;
                v += sin(uv.x * 10.0 + t);
                v += sin(uv.y * 10.0 + t);
                v += sin((uv.x + uv.y) * 10.0 + t);
                gl_FragColor = vec4(v * 0.05, v * 0.1, v * 0.15, 1.0);
            }
        `;
        
        const program = this.createProgram(vsSource, fsSource);
        this.gl.useProgram(program);
        
        // Vertices (Full Screen Triangle)
        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), this.gl.STATIC_DRAW);
        
        const pLoc = this.gl.getAttribLocation(program, 'p');
        this.gl.enableVertexAttribArray(pLoc);
        this.gl.vertexAttribPointer(pLoc, 2, this.gl.FLOAT, false, 0, 0);
        
        this.uTime = this.gl.getUniformLocation(program, 't');
        this.uRes = this.gl.getUniformLocation(program, 'r');
    }

    createProgram(vs, fs) {
        const p = this.gl.createProgram();
        const v = this.compile(this.gl.VERTEX_SHADER, vs);
        const f = this.compile(this.gl.FRAGMENT_SHADER, fs);
        this.gl.attachShader(p, v); this.gl.attachShader(p, f);
        this.gl.linkProgram(p);
        return p;
    }

    compile(type, source) {
        const s = this.gl.createShader(type);
        this.gl.shaderSource(s, source);
        this.gl.compileShader(s);
        return s;
    }

    animate() {
        if (Monitor.isVisible) {
            this.gl.uniform1f(this.uTime, (Date.now() - this.startTime) * 0.0005);
            this.gl.uniform2f(this.uRes, this.canvas.width, this.canvas.height);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        }
        requestAnimationFrame(() => this.animate());
    }
}

// ----------------------------------------------------------------
// MODULE 2: CHROMATIC MATRIX (PHYSICS ENABLED)
// ----------------------------------------------------------------
class MatrixEngine {
    constructor() {
        this.canvas = document.getElementById('matrix-rain');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        this.chars = "01XYZAﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ".split("");
        this.drops = [];
        this.initDrops();
        
        // Spectrum Definition
        this.palette = [
            {r:0,g:243,b:255}, {r:10,g:255,b:10}, {r:255,g:215,b:0}, 
            {r:255,g:255,b:255}, {r:128,g:128,b:128}, {r:255,g:0,b:0}
        ];
        this.time = 0;
        this.mouse = { x: -9999, y: -9999 };

        window.addEventListener('resize', () => { this.resize(); this.initDrops(); });
        document.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
        
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fontSize = 14;
        this.columns = this.canvas.width / this.fontSize;
    }

    initDrops() {
        this.drops = Array(Math.ceil(this.columns)).fill(1);
    }

    getColor() {
        this.time += 0.003;
        const i = Math.floor(this.time) % this.palette.length;
        const next = (i + 1) % this.palette.length;
        const f = this.time - Math.floor(this.time);
        const r = Math.round(this.palette[i].r + (this.palette[next].r - this.palette[i].r) * f);
        const g = Math.round(this.palette[i].g + (this.palette[next].g - this.palette[i].g) * f);
        const b = Math.round(this.palette[i].b + (this.palette[next].b - this.palette[i].b) * f);
        return `rgb(${r},${g},${b})`;
    }

    animate() {
        if (Monitor.isVisible) {
            // Fade Effect
            this.ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.ctx.fillStyle = this.getColor();
            this.ctx.font = this.fontSize + "px monospace";

            for (let i = 0; i < this.drops.length; i++) {
                // Mouse Repulsion Logic
                const x = i * this.fontSize;
                const dist = Math.abs(x - this.mouse.x);
                
                // If mouse is close, push drop down faster or skip drawing to create "Parting the Sea"
                if (dist < 50 && this.mouse.y < this.drops[i] * this.fontSize) {
                    this.drops[i] += 2; // Speed up falling away from mouse
                }

                const text = this.chars[Math.floor(Math.random() * this.chars.length)];
                this.ctx.fillText(text, x, this.drops[i] * this.fontSize);

                if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                    this.drops[i] = 0;
                }
                this.drops[i]++;
            }
        }
        requestAnimationFrame(() => this.animate());
    }
}

// ----------------------------------------------------------------
// MODULE 3: THE ARTIFACT (PROCEDURAL 3D GENERATOR)
// ----------------------------------------------------------------
class ArtifactEngine {
    constructor() {
        this.container = document.getElementById('singularity-vessel');
        if (!this.container) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 100);
        this.camera.position.z = 6;
        
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(CONFIG.dpr);
        this.container.appendChild(this.renderer.domElement);

        this.objects = [];
        this.initIdentity(CONFIG.pageID); // Build based on page ID
        this.animate();
        
        window.addEventListener('resize', () => {
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        });
    }

    initIdentity(id) {
        // Factory Pattern for Geometry
        let core, cage, color1, color2;

        if (id === 'page-flux') {
            // FLUX: Torus + Speed
            core = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.5, 16, 100), new THREE.MeshPhongMaterial({color:0x000000, flatShading:true}));
            cage = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.5, 16, 100), new THREE.MeshBasicMaterial({color:0xff0055, wireframe:true}));
            color1 = 0xff0055; color2 = 0xffffff;
        } else if (id === 'page-aero') {
            // AERO: Cube + Precision
            core = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshPhongMaterial({color:0x111111}));
            cage = new THREE.Mesh(new THREE.BoxGeometry(2.1,2.1,2.1), new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}));
            color1 = 0xffffff; color2 = 0x888888;
        } else if (id === 'page-cipher') {
            // CIPHER: Dodecahedron + Gold
            core = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5), new THREE.MeshPhongMaterial({color:0x000000, shininess:100}));
            cage = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6), new THREE.MeshBasicMaterial({color:0xffaa00, wireframe:true}));
            color1 = 0xffaa00; color2 = 0xffd700;
        } else {
            // DEFAULT (CORE/INDEX): Icosahedron
            core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 0), new THREE.MeshPhongMaterial({color:0x000000, flatShading:true}));
            cage = new THREE.Mesh(new THREE.IcosahedronGeometry(1.55, 0), new THREE.MeshBasicMaterial({color:0x00f3ff, wireframe:true}));
            color1 = 0x00f3ff; color2 = 0xbc13fe;
        }

        this.scene.add(core); this.objects.push({mesh: core, speed: 0.005});
        this.scene.add(cage); this.objects.push({mesh: cage, speed: 0.005});

        // Add Particles
        this.addParticles(color1, color2);
        
        // Add Lights
        const l1 = new THREE.PointLight(color1, 2, 10); l1.position.set(3,3,3); this.scene.add(l1);
        const l2 = new THREE.PointLight(color2, 2, 15); l2.position.set(-3,-3,3); this.scene.add(l2);
    }

    addParticles(c1, c2) {
        const count = 800;
        const geo = new THREE.BufferGeometry();
        const pos = []; const colors = [];
        const col1 = new THREE.Color(c1); const col2 = new THREE.Color(c2);

        for(let i=0; i<count; i++) {
            const r = 2.5 + Math.random()*2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            pos.push(r*Math.sin(phi)*Math.cos(theta), r*Math.sin(phi)*Math.sin(theta), r*Math.cos(phi));
            const c = Math.random()>0.5 ? col1 : col2;
            colors.push(c.r, c.g, c.b);
        }
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const mat = new THREE.PointsMaterial({size:0.04, vertexColors:true, transparent:true, opacity:0.6});
        const sys = new THREE.Points(geo, mat);
        this.scene.add(sys);
        this.objects.push({mesh: sys, speed: -0.002});
    }

    animate() {
        if (Monitor.isVisible) {
            this.objects.forEach(obj => {
                obj.mesh.rotation.y += obj.speed;
                obj.mesh.rotation.x += obj.speed * 0.5;
            });
            this.renderer.render(this.scene, this.camera);
        }
        requestAnimationFrame(() => this.animate());
    }
}

// ----------------------------------------------------------------
// MODULE 4: UI & INTERACTIONS
// ----------------------------------------------------------------
class UIEngine {
    constructor() {
        this.initIcons();
        this.initScroll();
        this.initCursor();
        this.initAnimations();
    }

    initIcons() { try { lucide.createIcons(); } catch(e){} }

    initScroll() {
        try {
            const lenis = new Lenis({ duration: 1.2, smooth: true });
            function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);
        } catch(e) {}
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

    initAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        // Stagger Grid Items
        gsap.from(".cell", {
            scrollTrigger: { trigger: ".bento-grid", start: "top 85%" },
            y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out"
        });
        // Reveal Hero Text
        gsap.from(".mega-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
    }
}

// ----------------------------------------------------------------
// SYSTEM BOOTLOADER
// ----------------------------------------------------------------
window.onload = () => {
    new LiquidEngine();
    new MatrixEngine();
    new ArtifactEngine();
    new UIEngine();
};
