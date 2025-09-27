function createSwiper(selector) {
  return new Swiper(selector, {
    slidesPerView: 3,
    spaceBetween: 30, // Espaço entre os slides (px)
    navigation: {
      nextEl: selector + " .swiper-button-next",
      prevEl: selector + " .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10, // Menos espaço no mobile
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4, // Se quiser mostrar mais em telas maiores
        spaceBetween: 40,
      },
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Suporte a responsividade de forma mais fluída
    observer: true,
    observeParents: true,
  });
}

// Espera o DOM carregar para garantir que o Swiper inicialize corretamente
document.addEventListener("DOMContentLoaded", function () {
  createSwiper(".aniversarios-swiper");
  createSwiper(".namoro-swiper");
  createSwiper(".casamento-swiper");
});
