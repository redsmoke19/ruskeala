(function() {
  'use strict';
  let wrapper = document.querySelector('.wrapper');
  //Sliders
  const sliders = function() {
    const excursionCanyonSlider = new Swiper('.excursions__slider--canyon', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__item--canyon .excursions__slider-button--next',
        prevEl: '.excursions__item--canyon .excursions__slider-button--prev',
      },
    });

    const excursionMasterSlider = new Swiper('.excursions__slider--master', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__item--master .excursions__slider-button--next',
        prevEl: '.excursions__item--master .excursions__slider-button--prev',
      },
    });

    const excursionUnderRuskealaSlider = new Swiper('.excursions__slider--under-ruskeala', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.excursions__item--under-ruskeala .excursions__slider-button--next',
        prevEl: '.excursions__item--under-ruskeala .excursions__slider-button--prev',
      },
    });
  };
  sliders();

  // Open Close Modals
  const modalToggle = function() {
    let buyTicketButtons = document.querySelectorAll('.excursions__buy');
    let buyTicketModal = document.querySelector('.excursions-ticket');
    let buyTicketModalClose = document.querySelector('.excursions-ticket__close');
    let ticketTitle = document.querySelector('.excursions-ticket__title');
    let additionallyModal = document.querySelector('.excursions-add');
    let additionallyButtons = document.querySelectorAll('.js-additionally-open');
    let additionallyClose = document.querySelector('.excursions-add__close');
    let routeModal = document.querySelector('.excursions-route');
    let routeButtons = document.querySelectorAll('.js-route-open');
    let routeClose = document.querySelector('.excursions-route__close');


    // Buy tickets
    buyTicketButtons.forEach(item => {
      item.addEventListener('click', () => {
        ticketTitle.textContent = `"${item.dataset.excursionName}"`;
        window.modalOpen(buyTicketModal, 'excursions-ticket--open');
      });
    });
    buyTicketModalClose.addEventListener('click', () => {
      window.modalClose(buyTicketModal, 'excursions-ticket--open');
    });

    // Additionally modal
    additionallyButtons.forEach(item => {
      item.addEventListener('click', () => {
        window.modalOpen(additionallyModal, 'excursions-add--open');
      });
    });
    additionallyClose.addEventListener('click', () => {
      window.modalClose(additionallyModal, 'excursions-add--open');
    });

    // Route modal
    routeButtons.forEach(item => {
      item.addEventListener('click', () => {
        window.modalOpen(routeModal, 'excursions-route--open', true);
      });
    });
    routeClose.addEventListener('click', () => {
      window.modalClose(routeModal, 'excursions-route--open');
    });
  };
  modalToggle();

  //DatePicker
  const datePickers = function() {
    let currentDate = new Date();
    let ticketDate = document.querySelector('.excursions-ticket__selected-date');
    let customDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let customMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    ticketDate.textContent = currentDate.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });


    const enterTicketDatapicker = datepicker('.excursions-ticket__datepicker', {
      formatter: (input, date, instance) => {
        input.value = date.toLocaleDateString();
      },
      onSelect: (instance, date) => {
        ticketDate.textContent = date.toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      },
      startDay: 1,
      customDays: customDays,
      customMonths: customMonth,
      overlayButton: 'Выбрать',
      overlayPlaceholder: 'Введите год',
      dateSelected: new Date(),
    });
  }
  datePickers();
})();