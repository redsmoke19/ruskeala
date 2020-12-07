(function() {
  'use strict';

  //Sliders
  const hotelMainSlider = new Swiper('.hotel-park__images', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.hotel-park__slider-button--next',
      prevEl: '.hotel-park__slider-button--prev',
    },
  });
})();
