// JavaScript for toggling the menu on smaller screens
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');
});
