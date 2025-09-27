function createSwiper(selector) {
  return new Swiper(selector, {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: selector + " .swiper-button-next",
      prevEl: selector + " .swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}

createSwiper(".aniversarios-swiper");
createSwiper(".namoro-swiper");
createSwiper(".casamento-swiper");
