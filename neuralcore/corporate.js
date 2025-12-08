// /// CORPORATE LOGIC ///

const lenis = new Lenis();
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// 1. STAT COUNTER ANIMATION
const stats = document.querySelectorAll('.num');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-val');
            gsap.to(entry.target, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
            observer.unobserve(entry.target);
        }
    });
});
stats.forEach(stat => observer.observe(stat));

// 2. ACCORDION LOGIC
const items = document.querySelectorAll('.acc-item');
items.forEach(item => {
    item.addEventListener('click', () => {
        // Close others
        items.forEach(i => {
            if(i !== item) i.classList.remove('active');
        });
        // Toggle current
        item.classList.toggle('active');
    });
});
