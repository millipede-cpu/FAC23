//NAVBAR

const mobileButton = document.querySelector('#mobile-btn');
const navMenu = document.querySelector('.nav-menu');

mobileButton.addEventListener('click', function() {
  mobileButton.classList.toggle('is-active');
   navMenu.classList.toggle('active');
});