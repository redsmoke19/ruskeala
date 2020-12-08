(function() {
  'use strict';

  const toursWeekendSlider = new Swiper('.tours-park__slider--weekend', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.tours-park__slider--weekend .tours-park__slider-button--next',
      prevEl: '.tours-park__slider--weekend .tours-park__slider-button--prev',
    },
  });

})();