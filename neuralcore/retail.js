// /// RETAIL LOGIC ///

const lenis = new Lenis();
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// CART INTERACTION
const btn = document.querySelector('.buy-btn');
const cart = document.querySelector('.cart');

btn.addEventListener('click', (e) => {
    // Ripple effect or simple feedback
    btn.innerHTML = "ADDED TO CART";
    btn.style.background = "#00ff00";
    btn.style.color = "#000";
    
    cart.innerHTML = "CART (1)";
    
    setTimeout(() => {
        // Redirect to payment
        window.location.href = btn.getAttribute('href');
    }, 500);
    
    e.preventDefault(); // Delay for effect
});
