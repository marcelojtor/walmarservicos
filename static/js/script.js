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
