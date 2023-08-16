
/**
 * Enables the mobile navbar by toggling the "is-active" class 
 * on the navbar burger and menu elements when the burger is clicked.
 */
function enableMobileNavbar() {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach( navButton => {
        navButton.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = navButton.dataset.target;
        const $target = document.getElementById(target);

        navButton.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        });
    });
}

/**
 * Changes the navbar background when a specified Y coordinate
 * is reached
 */
function toggleNavbarBackground() {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 350) {
        navbar.classList.add('nav-bg');
    } else {
        navbar.classList.remove('nav-bg');
    }
}
