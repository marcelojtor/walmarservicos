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