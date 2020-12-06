(function() {
  'use strict';

  const aboutEventsSlider = new Swiper('.events-park__wrapper', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    breakpoints: {
      1280: {
        slidesOffsetBefore: 167,
        slidesOffsetAfter: 167,
      },
      1600: {
        slidesOffsetBefore: 208,
        slidesOffsetAfter: 208,
      },
      1920: {
        slidesOffsetBefore: 250,
        slidesOffsetAfter: 250,
      },
    },
    preventClicksPropagation: true,
    scrollbar: {
      el: '.events-park__scrollbar',
      draggable: true,
      dragClass: 'scrollbar__drag',
      snapOnRelease: false,
    },
  });

  const aboutGallerySlider = new Swiper('.gallery-park__wrapper', {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: false,
    breakpoints: {
      1280: {
        centeredSlides: true,
      }
    },
    preventClicksPropagation: true,
    pagination: {
      el: '.gallery-park__pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const aboutAwardsImagesSlider = new Swiper('.awards-park__images', {
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    breakpoints: {
      1280: {
        allowTouchMove: false,
      }
    },
  });

  const aboutAwardsTextSlider = new Swiper('.awards-park__wrapper', {
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    navigation: {
      nextEl: '.awards-park__slider-button--next',
      prevEl: '.awards-park__slider-button--prev',
    },
    breakpoints: {
      1280: {
        allowTouchMove: false,
      }
    },
  });
  aboutAwardsImagesSlider.controller.control = aboutAwardsTextSlider;
  aboutAwardsTextSlider.controller.control = aboutAwardsImagesSlider;
})();