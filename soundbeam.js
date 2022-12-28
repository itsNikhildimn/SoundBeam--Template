const hamburger = document.querySelector('.hamb');
const navbar = document.querySelector('.togglebar')
hamburger.addEventListener('click', () => { 
hamburger.classList.toggle("change")
navbar.classList.toggle("active")
});