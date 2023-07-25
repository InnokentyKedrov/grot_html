const burger = document.querySelector(".burger-btn");
const blackout = document.querySelector(".blackout");
const headerNavigation = document.querySelector(".header__navigation");
const logo = document.querySelector(".logo");

if (burger) {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    burger.classList.toggle("burger-btn_active");
    blackout.classList.toggle("blackout_active");
    headerNavigation.classList.toggle("header__navigation_active");
    logo.classList.toggle("logo_active");
  });
}

blackout.addEventListener("click", () => {
  open();
});

if (!document.body.classList.contains("lock")) {
  headerNavigation.addEventListener("click", () => {
    open();
  });
}

const open = () => {
  document.body.classList.remove("lock");
  burger.classList.remove("burger-btn_active");
  blackout.classList.remove("blackout_active");
  headerNavigation.classList.remove("header__navigation_active");
  logo.classList.remove("logo_active");
};
