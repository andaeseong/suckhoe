// script.js
// Simple interaction: apply slight rotation based on mouse position for the cube.
document.addEventListener('DOMContentLoaded', function () {
    const cube = document.querySelector('.cube');
    if (!cube) return;
    const updateCube = (e) => {
        const { innerWidth, innerHeight } = window;
        const xRot = ((e.clientY / innerHeight) - 0.5) * 30; // up/down tilt
        const yRot = ((e.clientX / innerWidth) - 0.5) * -30; // left/right tilt
        cube.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
    };
    // Add mousemove listener on the hero section only
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', updateCube);
        // Reset on mouse leave
        hero.addEventListener('mouseleave', () => {
            cube.style.transform = '';
        });
    }
});
