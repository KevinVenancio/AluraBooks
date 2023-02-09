const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});