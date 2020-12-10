(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    //Sliders
    const hotelMainSlider = new Swiper('.hotel-park__images', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.hotel-park__slider-button--next',
        prevEl: '.hotel-park__slider-button--prev',
      },
    });

    const reservedRoomsSlider = new Swiper('.reserved-room__images', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.reserved-room__slider-button--next',
        prevEl: '.reserved-room__slider-button--prev',
      },
    });

    //DatePicker
    let customDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let customMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    const hotelDataIn = datepicker('.reserved-room--in__datepicker', {
      formatter: (input, date, instance) => {
        input.value = date.toLocaleDateString();
      },
      startDay: 1,
      customDays: customDays,
      customMonths: customMonth,
      overlayButton: 'Выбрать',
      overlayPlaceholder: 'Введите год',
      dateSelected: new Date(),
    });

    const hotelDataOut = datepicker('.reserved-room--out__datepicker', {
      formatter: (input, date, instance) => {
        input.value = date.toLocaleDateString();
      },
      startDay: 1,
      customDays: customDays,
      customMonths: customMonth,
      overlayButton: 'Выбрать',
      overlayPlaceholder: 'Введите год',
      dateSelected: new Date(),
    });

    // Modals Toggle
    let reservedRoomsModal = document.querySelector('.reserved-room');
    let reservedRoomsButtons = document.querySelectorAll('.js-reserved-room-open');
    let reservedRoomsClose = document.querySelector('.reserved-room__close');
    let reservedRoomsTitle = document.querySelector('.reserved-room__title');

    reservedRoomsButtons.forEach(item => {
      item.addEventListener('click', () => {
        let title = item.parentElement.querySelector('.rooms-hotel__name');
        reservedRoomsTitle.textContent = title.textContent;
        window.modalOpen(reservedRoomsModal, 'reserved-room--open', false);
      });
    });
    reservedRoomsClose.addEventListener('click', () => {
      window.modalClose(reservedRoomsModal, 'reserved-room--open');
    })
  }, false);
})();
