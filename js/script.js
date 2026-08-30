// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Cube tilt on mouse move (hero only)
    const cube = document.querySelector('.cube');
    if (cube) {
        const updateCube = (e) => {
            const { innerWidth, innerHeight } = window;
            const xRot = ((e.clientY / innerHeight) - 0.5) * 30;
            const yRot = ((e.clientX / innerWidth) - 0.5) * -30;
            cube.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
        };
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mousemove', updateCube);
            hero.addEventListener('mouseleave', () => {
                cube.style.transform = '';
            });
        }
    }

    // Fix broken images – replace with a placeholder when they fail to load
    const fixBrokenImages = () => {
        const imgs = document.querySelectorAll('.card img');
        const placeholder = 'https://via.placeholder.com/600x400?text=No+Image';
        imgs.forEach(img => {
            img.onerror = () => {
                img.src = placeholder;
                img.alt = 'Image unavailable';
            };
        });
    };

    // Reveal-on-scroll for sections
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        { threshold: 0.1 }
    );
    reveals.forEach(el => observer.observe(el));

    // Run the image fixer
    fixBrokenImages();
});