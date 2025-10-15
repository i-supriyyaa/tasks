// booking submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('bookingMsg').style.display = 'block';
});

// nav toggle for smaller view
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primary-navigation');

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
        const isOpen = primaryNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}