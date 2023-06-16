const mobileMenu = document.querySelector(".nav__menu");
const mobileMenuBurger = document.getElementById("mobileMenuBurguer");

const handleClick = () => {
  if (mobileMenu.classList.contains("nav__menu--closed")) {
    mobileMenu.classList.remove("nav__menu--closed");
    mobileMenu.classList.add("nav__menu");
  } else {
    mobileMenu.classList.add("nav__menu--closed");
  }
};

mobileMenuBurger.addEventListener("click", handleClick);