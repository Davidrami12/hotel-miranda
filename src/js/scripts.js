const mobileMenu = document.querySelector(".nav__menu");
const mobileMenuBurger = document.getElementById("mobileMenuBurguer");

const handleClick = () => {
  if (mobileMenu.classList.contains("nav__menu--closed")) {
    mobileMenu.classList.remove("nav__menu--closed");
    mobileMenu.classList.add("nav__menu");
    mobileMenuBurger.src = "src/assets/icons/menu.svg";
  } else {
    mobileMenu.classList.add("nav__menu--closed");
    mobileMenuBurger.src = "src/assets/icons/cross.svg";
  }
};

mobileMenuBurger.addEventListener("click", handleClick);