(function() {
  'use strict';
  //Sliders
  const sliders = function() {
    // https://medium.com/@networkaaron/swiper-how-to-destroy-swiper-on-min-width-breakpoints-a947491ddec8
    const breakpointDesktop = window.matchMedia('(min-width: 1280px)');
    let chooseTicketSlider;
    let excursionsSlider;
    let entertainmentSlider;
    let foodSuverirsSlider;

    const breakpointChecker = function() {
      let resizeTimeout;
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          resizeHandlerDesktop();
        }, 100);
      }

      function resizeHandlerDesktop() {
        if (breakpointDesktop.matches === true) {
          if (chooseTicketSlider !== undefined) chooseTicketSlider.destroy(true, true);
          if (excursionsSlider !== undefined) excursionsSlider.destroy(true, true);
          if (entertainmentSlider !== undefined) entertainmentSlider.destroy(true, true);
          if (foodSuverirsSlider !== undefined) foodSuverirsSlider.destroy(true, true);
        } else if (breakpointDesktop.matches === false) {
          enableSwiperDesktop();
        }
      }
    };

    const enableSwiperDesktop = function() {
      chooseTicketSlider = new Swiper('.buy-ticket__slider', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetAfter: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });

      excursionsSlider = new Swiper('.excursions-index__wrapper', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetAfter: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });

      entertainmentSlider = new Swiper('.entertainment-index__slider', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetAfter: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });

      foodSuverirsSlider = new Swiper('.food-souvenirs__slider', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetAfter: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });
    };

    breakpointDesktop.addListener(breakpointChecker);
    breakpointChecker();

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
      breakpoints: {
        1280: {
          autoHeight: false,
          allowTouchMove: false,
        }
      },
    });
    const feedbackImagesSlider = new Swiper('.reviews__images', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      preventClicks: true,
      preventClicksPropagation: true,
      breakpoints: {
        1280: {
          autoHeight: false,
          allowTouchMove: false,
        }
      },
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
      breakpoints: {
        1280: {
          autoHeight: false,
          allowTouchMove: false,
        }
      },
    });
    const mediaFeedbackImageSlider = new Swiper('.media-reviews__images', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      preventClicks: true,
      preventClicksPropagation: true,
      breakpoints: {
        1280: {
          autoHeight: false,
          allowTouchMove: false,
        }
      },
    });
    mediaFeedbackTextSlider.controller.control = mediaFeedbackImageSlider;
    mediaFeedbackImageSlider.controller.control = mediaFeedbackTextSlider;

    const ourPartnersSlider = new Swiper('.our-partners__slider', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      pagination: {
        el: '.our-partners__pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1280: {
          slidesPerView: 'auto',
          spaceBetween: 40,
        },
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
