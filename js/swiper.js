const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  allowSlideNext: true,
  edgeSwipeDetection: true,
  // effect: 'coverflow',
  effect: 'slide',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-right',
    prevEl: '.swiper-btn-left',
  },
});