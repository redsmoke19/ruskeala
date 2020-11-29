(function() {
  'use strict';
  //Sliders
  const sliders = function() {
    const excursionCanyonSlider = new Swiper('.excursions__slider--canyon', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__slider-button--next',
        prevEl: '.excursions__slider-button--prev',
      },
    });
  };
  sliders();
})();