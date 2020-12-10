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

  const toursProgramFirstSlider = new Swiper('.tour-programs__first-day', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
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
        allowTouchMove: false,
      },
    },
    scrollbar: {
      el: '.tour-programs__scrollbar--first',
      draggable: true,
      dragClass: 'scrollbar__drag',
      snapOnRelease: false,
    },
  });

  const toursProgramSecondSlider = new Swiper('.tour-programs__second-day', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
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
    scrollbar: {
      el: '.tour-programs__scrollbar--second',
      draggable: true,
      dragClass: 'scrollbar__drag',
      snapOnRelease: false,
    },
  });

  //Modal
  let tourDescriptionModal = document.querySelector('.tour-description');
  let tourDescriptionClose = document.querySelector('.tour-description__close-button');
  let tourDescriptionButtons = document.querySelectorAll('.js-tour-descr-open');
  let tourReservedModal = document.querySelector('.tour-reserved');
  let tourReservedClose = document.querySelector('.tour-reserved__close-button');
  let tourReservedButtons = document.querySelectorAll('.js-tour-reserv-open');

  tourDescriptionButtons.forEach(item => {
    item.addEventListener('click', () => {
      window.modalOpen(tourDescriptionModal, 'modal__closed--open', true);
    });
  });
  tourDescriptionClose.addEventListener('click', () => {
    window.modalClose(tourDescriptionModal, 'modal__closed--open');
  });

  tourReservedButtons.forEach(item => {
    item.addEventListener('click', () => {
      window.modalOpen(tourReservedModal, 'modal__closed--open', true);
    });
  });

  tourReservedClose.addEventListener('click', () => {
    window.modalClose(tourReservedModal, 'modal__closed--open');
  });

})();