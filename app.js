document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.content');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    hero.style.transition = 'all 1s ease';

    setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});
