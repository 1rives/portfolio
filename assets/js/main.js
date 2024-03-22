document.addEventListener('DOMContentLoaded', () => {

    enableMobileNavbar();
    // Refreshing the page returns to the top
    //window.location.href = '#hero';
});

window.addEventListener('scroll', function () {
    toggleNavbarBackground();
});

