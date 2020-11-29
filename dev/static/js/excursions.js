(function() {
  'use strict';
  //Sliders
  const sliders = function() {
    const excursionCanyonSlider = new Swiper('.excursions__slider--canyon', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__slider--canyon .excursions__slider-button--next',
        prevEl: '.excursions__slider--canyon .excursions__slider-button--prev',
      },
    });

    const excursionMasterSlider = new Swiper('.excursions__slider--master', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__slider--master .excursions__slider-button--next',
        prevEl: '.excursions__slider--master .excursions__slider-button--prev',
      },
    });

    const excursionUnderRuskealaSlider = new Swiper('.excursions__slider--under-ruskeala', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__slider--under-ruskeala .excursions__slider-button--next',
        prevEl: '.excursions__slider--under-ruskeala .excursions__slider-button--prev',
      },
    });
  };
  sliders();
})();