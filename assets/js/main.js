document.addEventListener('DOMContentLoaded', () => {

    enableMobileNavbar();

    // Refreshing the page returns to the top
    window.location.href = '#hero';
});

/**
 * Changes the navbar background when a specified Y coordinate
 * is reached
 */
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 550) {
        navbar.classList.add('nav-bg');
    } else {
        navbar.classList.remove('nav-bg');
    }
});

