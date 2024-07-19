document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    mobileMenu.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });
});