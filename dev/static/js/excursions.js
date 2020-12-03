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

  // Open Close Modal
  const modalToggle = function() {
    let buyTicketButtons = document.querySelectorAll('.excursions__buy');
    let buyTicketModal = document.querySelector('.excursions-ticket');
    let buyTicketModalClose = document.querySelector('.excursions-ticket__close');
    let ticketTitle = document.querySelector('.excursions-ticket__title');

    let modalOpen = function(element, className, title) {
      document.body.classList.add('overflow-hidden');
      wrapper.classList.add('overflow-hidden');
      element.classList.add(className);
    }
    let modalClose = function(element, className) {
      document.body.classList.remove('overflow-hidden');
      wrapper.classList.remove('overflow-hidden');
      element.classList.remove(className);
    }

    buyTicketButtons.forEach(item => {
      item.addEventListener('click', () => {
        ticketTitle.textContent = `"${item.dataset.excursionName}"`;
        modalOpen(buyTicketModal, 'excursions-ticket--open');
      });
    });
    buyTicketModalClose.addEventListener('click', () => {
      modalClose(buyTicketModal, 'excursions-ticket--open');
    })
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