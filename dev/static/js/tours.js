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

  const toursPearlSlider = new Swiper('.tours-park__slider--pearl', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.tours-park__slider--pearl .tours-park__slider-button--next',
      prevEl: '.tours-park__slider--pearl .tours-park__slider-button--prev',
    },
  });

  const toursPearlDaySlider = new Swiper('.tours-park__slider--pearl-day', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.tours-park__slider--pearl-day .tours-park__slider-button--next',
      prevEl: '.tours-park__slider--pearl-day .tours-park__slider-button--prev',
    },
  });

  const toursMiraclesSlider = new Swiper('.tours-park__slider--miracles', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.tours-park__slider--miracles .tours-park__slider-button--next',
      prevEl: '.tours-park__slider--miracles .tours-park__slider-button--prev',
    },
  });

})();