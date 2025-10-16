const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    600: {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
    },

    900: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
