// Toggle mobile menu
const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.close');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.navbar');
const header = document.querySelector('.header-positionner');

burger.addEventListener('click', () => {
  burger.style.display = 'none';
  logo.style.display = 'none';
  closeMenu.style.display = 'block';
  header.style.backgroundColor = 'white';
  nav.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  burger.style.display = 'block';
  logo.style.display = 'block';
  closeMenu.style.display = 'none';
  header.style.backgroundColor = 'transparent';
  nav.style.display = 'none';
});
