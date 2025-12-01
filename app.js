// --- SYSTEM START ---
console.log("%c/// NEURAL MATRIX VAULT: OPTIMIZED", "color:#00f3ff; font-weight:bold;");
try { lucide.createIcons(); } catch(e) {}

// --- 1. PERFORMANCE CONTROLLER (Save Battery when Tab is hidden) ---
let isPageVisible = true;
document.addEventListener("visibilitychange", () => {
    isPageVisible = !document.hidden;
});

// --- 2. CHROMATIC MATRIX RAIN ---
const mCanvas = document.getElementById('matrix-rain');
if (mCanvas) {
    const mCtx = mCanvas.getContext('2d');
    let mWidth = window.innerWidth;
    let mHeight = window.innerHeight;
    mCanvas.width = mWidth; mCanvas.height = mHeight;

    const chars = "010101XYZA0101".split("");
    const fontSize = 14;
    const columns = mWidth / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const palette = [
        { r: 0, g: 243, b: 255 }, { r: 10, g: 255, b: 10 }, { r: 255, g: 215, b: 0 },
        { r: 255, g: 255, b: 255 }, { r: 128, g: 128, b: 128 }, { r: 255, g: 0, b: 0 }
    ];
    let time = 0;

    function drawMatrix() {
        if (!isPageVisible) { requestAnimationFrame(drawMatrix); return; } // PAUSE IF HIDDEN

        mCtx.fillStyle = "rgba(5, 5, 5, 0.05)";
        mCtx.fillRect(0, 0, mWidth, mHeight);

        time += 0.005;
        const index = Math.floor(time) % palette.length;
        const nextIndex = (index + 1) % palette.length;
        const factor = time - Math.floor(time);
        
        const r = Math.round(palette[index].r + (palette[nextIndex].r - palette[index].r) * factor);
        const g = Math.round(palette[index].g + (palette[nextIndex].g - palette[index].g) * factor);
        const b = Math.round(palette[index].b + (palette[nextIndex].b - palette[index].b) * factor);
        
        mCtx.fillStyle = `rgb(${r},${g},${b})`;
        mCtx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > mHeight && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        requestAnimationFrame(drawMatrix);
    }
    drawMatrix();
}

// --- 3. 3D WEBGL GLOBE (MOBILE SAFE MODE) ---
if (window.innerWidth > 768) {
    try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-scene'), alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.BufferGeometry();
        const count = 3000;
        const posArray = new Float32Array(count * 3);
        for(let i = 0; i < count * 3; i++) { posArray[i] = (Math.random() - 0.5) * 20; }
        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({ size: 0.03, color: 0xbc13fe });
        const particleMesh = new THREE.Points(geometry, material);
        scene.add(particleMesh);
        camera.position.z = 5;

        function animate3D() {
            if (!isPageVisible) { requestAnimationFrame(animate3D); return; } // PAUSE IF HIDDEN
            
            particleMesh.rotation.y += 0.001;
            renderer.render(scene, camera);
            requestAnimationFrame(animate3D);
        }
        animate3D();
    } catch (e) { console.log("WebGL Disabled"); }
}

// --- 4. CURSOR (Desktop Only) ---
if (window.innerWidth > 768) {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(cursorCircle, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 });
    });
}
