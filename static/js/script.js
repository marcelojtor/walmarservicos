// ================= MENU MOBILE =================
const toggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav ul');

toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        navMenu.classList.remove('active');

    });
});


// ================= ANIMAÇÃO AO ROLAR =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll('.section').forEach(section => {

    section.classList.add('hidden');
    observer.observe(section);

});


// ================= ANIMAÇÃO PREMIUM SEGMENTOS =================

// animação com delay progressivo + direção
const observerDetalhes = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const delay = entry.target.getAttribute('data-delay') || 0;

            setTimeout(() => {
                entry.target.classList.add('show');
            }, delay * 1000);

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll('.detalhe-box').forEach(box => {

    box.classList.add('hidden-detalhe');
    observerDetalhes.observe(box);

});


// ================= PARALLAX LEVE =================

window.addEventListener('scroll', () => {

    const imagens = document.querySelectorAll('.detalhe-box img');

    imagens.forEach(img => {

        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {

            const deslocamento = (rect.top / windowHeight) * 20;

            img.style.transform = `translateY(${deslocamento}px) scale(1.02)`;

        }

    });

});
