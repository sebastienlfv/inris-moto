const navMobile = document.querySelector('.nav-mobile');
const buttonBurgerMobile = document.querySelector('.burger-mobile');

buttonBurgerMobile.addEventListener('click', () => {
  const navMobileStyle = window.getComputedStyle(navMobile);

  if (navMobileStyle.display === 'none') {
    navMobile.style.display = 'flex'; // si la div est masquée, l'afficher
  } else {
    navMobile.style.display = 'none'; // si la div est visible, la masquer
  }
});

const menuStageMobile = document.querySelector('.menu-stage-mobile')
const stageButton = document.querySelector('.stage-button')

stageButton.addEventListener('click', () => {
  const menuStageMobileStyle = window.getComputedStyle(menuStageMobile);

  if (menuStageMobileStyle.display === 'none') {
    menuStageMobile.style.display = 'flex'; // si la div est masquée, l'afficher
  } else {
    menuStageMobile.style.display = 'none'; // si la div est visible, la masquer
  }
});