const menu = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.ham-icon');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('rotate');
})