const burger = document.querySelector('.burger-btn');
const blackout = document.querySelector('.blackout');
const headerNavigation = document.querySelector('.header__navigation');
const logo = document.querySelector('.logo');

if (burger) {
  burger.addEventListener("click", () => {
      document.body.classList.add('lock');
      burger.classList.add('burger-btn_active');
      blackout.classList.add('blackout_active');
      headerNavigation.classList.add('header__navigation_active');
      logo.classList.add('logo_active');
    });
}

blackout.addEventListener("click", () => {
  document.body.classList.remove('lock');
  burger.classList.remove('burger-btn_active');
  blackout.classList.remove('blackout_active');
  headerNavigation.classList.remove('header__navigation_active');
  logo.classList.remove('logo_active');
});

if (!document.body.classList.contains('lock')) {
  headerNavigation.addEventListener("click", () => {
    document.body.classList.remove('lock');
    burger.classList.remove('burger-btn_active');
    blackout.classList.remove('blackout_active');
    headerNavigation.classList.remove('header__navigation_active');
    logo.classList.remove('logo_active');
  });
  }