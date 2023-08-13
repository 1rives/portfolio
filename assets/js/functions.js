
/**
 * Enables the mobile navbar by toggling the "is-active" class 
 * on the navbar burger and menu elements when the burger is clicked.
 */
function enableMobileNavbar() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( navButton => {
        navButton.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = navButton.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        navButton.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        });
    });
}