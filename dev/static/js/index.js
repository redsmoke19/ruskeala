(function() {
  'use strict';
  //Sliders
  const sliders = function() {
    // https://medium.com/@networkaaron/swiper-how-to-destroy-swiper-on-min-width-breakpoints-a947491ddec8
    const breakpoint = window.matchMedia('(min-width: 1280px)');
    let chooseTicketSlider;

    const breakpointChecker = function() {
      let resizeTimeout;
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
        }, 100);
      }

      function actualResizeHandler() {
        if (breakpoint.matches === true) {
          if (chooseTicketSlider !== undefined) chooseTicketSlider.destroy(true, true);
        } else if (breakpoint.matches === false) {
          enableSwiper();
        }
      };
    };

    const enableSwiper = function() {
      chooseTicketSlider = new Swiper('.buy-ticket__slider', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetAfter: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();

    // let chooseTicketSlider = new Swiper('.buy-ticket__slider', {
    //   direction: 'horizontal',
    //   spaceBetween: 20,
    //   slidesPerView: 'auto',
    //   grabCursor: true,
    //   slidesOffsetAfter: 20,
    //   preventClicks: true,
    //   preventClicksPropagation: true,
    // });

    // if (window.matchMedia('(min-width: 1280px').matches) {
    //   chooseTicketSlider.destroy(false, true);
    // }

    const excursionsSlider = new Swiper('.excursions-index__wrapper', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',
      grabCursor: true,
      slidesOffsetAfter: 20,
      preventClicks: true,
      preventClicksPropagation: true,
    });

    const entertainmentSlider = new Swiper('.entertainment__list', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',
      grabCursor: true,
      slidesOffsetAfter: 20,
      preventClicks: true,
      preventClicksPropagation: true,
    });

    const foodSuverirsSlider = new Swiper('.food-souvenirs__list', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',
      grabCursor: true,
      slidesOffsetAfter: 20,
      preventClicks: true,
      preventClicksPropagation: true,
    });

    const galleyRuskealaSlider = new Swiper('.gallery-ruskeala__inner', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',
      grabCursor: true,
      slidesOffsetAfter: 20,
      preventClicks: true,
      preventClicksPropagation: true,
    });

    const feedbackTextSlider = new Swiper('.feedback', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: '.feedback__button--next',
        prevEl: '.feedback__button--prev',
      },
      preventClicks: true,
      preventClicksPropagation: true,
    });
    const feedbackImagesSlider = new Swiper('.reviews__images', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      preventClicks: true,
      preventClicksPropagation: true,
    });
    feedbackTextSlider.controller.control = feedbackImagesSlider;
    feedbackImagesSlider.controller.control = feedbackTextSlider;

    const mediaFeedbackTextSlider = new Swiper('.media-reviews__list', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: '.media-reviews__button--next',
        prevEl: '.media-reviews__button--prev',
      },
      preventClicks: true,
      preventClicksPropagation: true,
    });
    const mediaFeedbackImageSlider = new Swiper('.media-reviews__images', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      preventClicks: true,
      preventClicksPropagation: true,
    });
    mediaFeedbackTextSlider.controller.control = mediaFeedbackImageSlider;
    mediaFeedbackImageSlider.controller.control = mediaFeedbackTextSlider;

    const ourPartnersSlider = new Swiper('.our-partners__list', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      pagination: {
        el: '.our-partners__pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  };
  sliders();

  //DatePicker
  const datePicker = function() {
    let currentDate = new Date();
    let buyTicketMonth = document.querySelector('.buy-ticket__month');
    let customDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let customMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    buyTicketMonth.textContent = customMonth[currentDate.getMonth()];

    const buyTicketDatapicker = datepicker('.buy-ticket__datepicker', {
      formatter: (input, date, instance) => {
        input.value = date.toLocaleDateString();
      },
      onSelect: (instance, date) => {
        buyTicketMonth.textContent = customMonth[date.getMonth()];
      },
      startDay: 1,
      customDays: customDays,
      customMonths: customMonth,
      overlayButton: 'Выбрать',
      overlayPlaceholder: 'Введите год',
      dateSelected: new Date(),
    });
  }
  datePicker();

  // (function() {
  //   window.addEventListener('resize', resizeThrottler, false);
  //   let resizeTimeout;

  //   function resizeThrottler() {
  //     if (!resizeTimeout) {
  //       resizeTimeout = setTimeout(function() {
  //         resizeTimeout = null;
  //         actualResizeHandler();
  //       }, 66);
  //     }
  //   }

  //   function actualResizeHandler() {
  //     if (window.matchMedia('(min-width: 1280px)').matches) {}
  //     if (window.matchMedia('(max-width: 1279px)').matches) {
  //       console.log('< 1280');
  //     }
  //   }
  // })();
})();
