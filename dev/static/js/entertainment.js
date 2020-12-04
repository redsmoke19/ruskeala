(function() {
  'use strict';

  //Sliders

  const entertainmentKalevalaSlider = new Swiper('.entertainment__slider--kalevala', {
    direction: 'horizontal',
    slidesPerView: 1,
    grabCursor: true,
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.entertainment__slider--kalevala .entertainment__slider-button--next',
      prevEl: '.entertainment__slider--kalevala .entertainment__slider-button--prev',
    },
  });

  const entertainmentBoatTripaSlider = new Swiper('.entertainment__slider--boat-trip', {
    direction: 'horizontal',
    slidesPerView: 1,
    grabCursor: true,
    preventClicks: true,
    preventClicksPropagation: true,
    navigation: {
      nextEl: '.entertainment__slider--boat-trip .entertainment__slider-button--next',
      prevEl: '.entertainment__slider--boat-trip .entertainment__slider-button--prev',
    },
  });
})();
