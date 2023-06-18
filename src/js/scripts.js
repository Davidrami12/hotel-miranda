// BURGER MENU
const mobileMenu = document.querySelector(".nav__menu");
const mobileMenuBurger = document.querySelector("#mobileMenuBurguer");

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

// Swiper for rooms sections (Home)
const swiper = new Swiper(".swiper", {
  // Necessary parameters
  effect: "default",
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// Swiper for features section (Home)
const swiperFeatures = new Swiper(".swiperFeatures", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiperFeatures-pagination",
    type: "bullets",
  },
});