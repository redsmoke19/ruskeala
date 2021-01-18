(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
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
      let breakpoint = window.matchMedia('(min-width: 1280px)');
      let buyTicketButtons = document.querySelectorAll('.excursions__buy');
      let buyTicketModal = document.querySelector('.excursions-ticket');
      let buyTicketModalClose = document.querySelector('.excursions-ticket__close');
      let ticketTitle = document.querySelector('.excursions-ticket__title');

      let additionallyModal = document.querySelector('.excursions-add');
      let additionallyButtons = document.querySelectorAll('.js-additionally-open');
      let additionallyClose = document.querySelector('.excursions-add__close');
      let additionallyFullPrice = document.querySelector('.excursions-add__price--full');
      let additionallyStudentPrice = document.querySelector('.excursions-add__price--student');
      let additionallySchoolPrice = document.querySelector('.excursions-add__price--school');
      let additionallyRetireePrice = document.querySelector('.excursions-add__price--retiree');
      let additionallyTitleDiscount = document.querySelector('.excursions-add__privileges--discounts');
      let additionallyTitlePrivileges = document.querySelector('.excursions-add__privileges--privileges');
      let additionallyTitleNote = document.querySelector('.excursions-add__note-title');
      let additionallyTypeFull = document.querySelector('.excursions-add__type--full');
      let additionallyTypeStudents = document.querySelector('.excursions-add__type--students');
      let additionallyTypeSchool = document.querySelector('.excursions-add__type--school');
      let additionallyTypeRetiree = document.querySelector('.excursions-add__type--retiree');
      let additionallyTextDiscount = document.querySelector('.excursions-add__text');
      let additionallyTextPrivileges = document.querySelector('.excursions-add__text--add');
      let additionallyTextNote = document.querySelector('.excursions-add__note');

      let routeModal = document.querySelector('.excursions-route');
      let routeButtons = document.querySelectorAll('.js-route-open');
      let routeClose = document.querySelector('.excursions-route__close');
      let routeImage = document.querySelector('.excursions-route__img');

      let interactiveMapModal = document.querySelector('.interactive-map');
      let interactiveMapButtons = document.querySelectorAll('.js-interactive-map');
      let interactiveMapClose = document.querySelector('.interactive-map__close-button');


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
          additionallyFullPrice.textContent = item.dataset.full + ' руб.';
          additionallyStudentPrice.textContent = item.dataset.student + ' руб.';
          additionallySchoolPrice.textContent = item.dataset.school + ' руб.';
          additionallyRetireePrice.textContent = item.dataset.retiree + ' руб.';
          let additionallyContent = item.parentElement.querySelector('.js-additionally__contenet');
          function addTextContent(element, content) {
            element.textContent = additionallyContent.querySelector(content).textContent;
          }
          addTextContent(additionallyTitleDiscount, '.js-additionally__discounts');
          addTextContent(additionallyTypeFull, '.js-additionally__full');
          addTextContent(additionallyTypeStudents, '.js-additionally__students');
          addTextContent(additionallyTypeSchool, '.js-additionally__school');
          addTextContent(additionallyTypeRetiree, '.js-additionally__retiree');
          addTextContent(additionallyTextDiscount, '.js-additionally__note');
          addTextContent(additionallyTitlePrivileges, '.js-additionally__privileges');
          addTextContent(additionallyTextPrivileges, '.js-additionally__privileges-text');
          addTextContent(additionallyTitleNote, '.js-additionally__important');
          addTextContent(additionallyTextNote, '.js-additionally__importatnt-text');
        });
      });
      additionallyClose.addEventListener('click', () => {
        window.modalClose(additionallyModal, 'excursions-add--open');
      });

      // Route modal
      routeButtons.forEach(item => {
        item.addEventListener('click', () => {
          window.modalOpen(routeModal, 'excursions-route--open', true);
          if (!breakpoint.matches) {
            routeImage.src = item.dataset.mobilesrc;
            routeImage.srcset = item.dataset.mobilesrcset;
          } else {
            routeImage.src = item.dataset.desktopsrc;
            routeImage.srcset = item.dataset.desktopsrcset;
          }
        });
      });
      routeClose.addEventListener('click', () => {
        window.modalClose(routeModal, 'excursions-route--open');
      });

      //Interactive Map
      interactiveMapButtons.forEach(item => {
        item.addEventListener('click', () => {
          window.modalOpen(interactiveMapModal, 'modal__closed--open');
        });
        interactiveMapClose.addEventListener('click', () => {
          window.modalClose(interactiveMapModal, 'modal__closed--open');
        })
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
  }, false);
})();