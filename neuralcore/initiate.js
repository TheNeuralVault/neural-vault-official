// /// INITIATE VISUALIZER LOGIC ///

const container = document.getElementById('preview-container');
const title = document.getElementById('demo-title');
const sub = document.getElementById('demo-sub');
const templateInput = document.getElementById('selected-template');
const btns = document.querySelectorAll('.switch-btn');

// DATA FOR TEMPLATES
const content = {
    creator: {
        title: "THE<br>VISIONARY.",
        sub: "High-fidelity portfolio architecture for photographers, designers, and artists. Dark mode native.",
        class: "mode-creator"
    },
    corporate: {
        title: "Global<br>Trust.",
        sub: "Clean, serif-based typography for law firms, consultancies, and agencies. White space dominance.",
        class: "mode-corporate"
    },
    retail: {
        title: "HYPER<br>SALE.",
        sub: "Aggressive, high-conversion layout for product drops and e-commerce. Speed focused.",
        class: "mode-retail"
    }
};

// SWITCH LOGIC
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mode = btn.getAttribute('data-mode');
        const data = content[mode];

        // GSAP Transition
        gsap.to(container, {opacity: 0, duration: 0.2, onComplete: () => {
            // Update Classes
            container.className = "";
            container.classList.add(data.class);
            
            // Update Text
            title.innerHTML = data.title;
            sub.innerHTML = data.sub;
            
            // Update Form Data
            templateInput.value = mode.toUpperCase();

            // Fade In
            gsap.to(container, {opacity: 1, duration: 0.3});
        }});
    });
});

// MODAL LOGIC
const modal = document.getElementById('modal');
const deployBtn = document.getElementById('deployBtn');
const closeBtn = document.getElementById('closeBtn');

deployBtn.onclick = () => {
    modal.style.display = 'flex';
    gsap.fromTo(".form-box", {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.3});
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
};
