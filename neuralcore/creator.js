// /// CREATOR: LIQUID CHROMATIC ENGINE ///

class LiquidGallery {
    constructor() {
        this.container = document.getElementById('gl');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 600;
        this.camera.fov = 2 * Math.atan((window.innerHeight / 2) / 600) * (180 / Math.PI);

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.clock = new THREE.Clock();
        this.scroll = { current: 0, target: 0, last: 0, speed: 0 };
        this.meshItems = [];

        this.initImages();
        this.initScroll();
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        
        // Start Loop
        this.render();
    }

    initImages() {
        const images = [...document.querySelectorAll('img')];
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');

        // Preload Logic
        let loadedCount = 0;
        const total = images.length;
        const loaderBar = document.querySelector('.loader-bar');

        images.forEach((img, index) => {
            loader.load(img.src, (texture) => {
                loadedCount++;
                loaderBar.style.width = `${(loadedCount / total) * 100}%`;
                
                if(loadedCount === total) {
                    document.body.classList.add('loaded');
                }

                const geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        uTime: { value: 0 },
                        uTexture: { value: texture },
                        uOffset: { value: new THREE.Vector2(0, 0) },
                        uAlpha: { value: 1 }
                    },
                    // VERTEX SHADER: WARPS GEOMETRY
                    vertexShader: `
                        uniform vec2 uOffset;
                        varying vec2 vUv;
                        void main() {
                            vUv = uv;
                            vec3 newPosition = position;
                            // Algorithmic Wave Distortion
                            newPosition.x += sin(uv.y * 3.14) * uOffset.x * 0.5;
                            newPosition.y += sin(uv.x * 3.14) * uOffset.y * 0.5;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                        }
                    `,
                    // FRAGMENT SHADER: CHROMATIC ABERRATION
                    fragmentShader: `
                        uniform sampler2D uTexture;
                        uniform vec2 uOffset;
                        varying vec2 vUv;

                        void main() {
                            // RGB Split based on velocity
                            float r = texture2D(uTexture, vUv + uOffset * 0.02).r;
                            float g = texture2D(uTexture, vUv).g;
                            float b = texture2D(uTexture, vUv - uOffset * 0.02).b;
                            gl_FragColor = vec4(r, g, b, 1.0);
                        }
                    `,
                    transparent: true
                });

                const mesh = new THREE.Mesh(geometry, material);
                this.scene.add(mesh);
                
                this.meshItems.push({
                    mesh,
                    img,
                    material
                });
            });
        });
    }

    initScroll() {
        this.lenis = new Lenis({ duration: 1.2, smooth: true });
        this.lenis.on('scroll', (e) => {
            this.scroll.target = e.scroll;
        });
    }

    updateMeshes() {
        this.meshItems.forEach(({ mesh, img, material }) => {
            const bounds = img.getBoundingClientRect();
            
            // Sync Size
            mesh.scale.set(bounds.width, bounds.height, 1);
            
            // Sync Position
            mesh.position.x = bounds.left - window.innerWidth / 2 + bounds.width / 2;
            mesh.position.y = -bounds.top + window.innerHeight / 2 - bounds.height / 2;

            // Pass Velocity to Shader
            material.uniforms.uOffset.value.set(
                0, 
                (this.scroll.current - this.scroll.last) * 0.05
            );
        });
    }

    render() {
        // Physics Loop
        this.scroll.current = this.lenis.scroll;
        this.scroll.speed = this.scroll.current - this.scroll.last;
        
        this.updateMeshes();
        this.renderer.render(this.scene, this.camera);
        
        this.scroll.last = this.scroll.current;
        this.lenis.raf(Date.now());
        
        requestAnimationFrame(() => this.render());
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.fov = 2 * Math.atan((window.innerHeight / 2) / 600) * (180 / Math.PI);
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

window.onload = () => {
    new LiquidGallery();
};
