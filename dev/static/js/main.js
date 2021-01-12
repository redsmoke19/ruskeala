(function() {
  'use strict';
  window.initMap = function() {
    let map = new google.maps.Map(document.querySelector('.map__frame'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    });
    let exmap = new google.maps.Map(document.querySelector('.interactive-map__map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    });
  };

  document.addEventListener('DOMContentLoaded', function() {

    let wrapper = document.querySelector('.wrapper');
    // Sandwich
    const sandwichToggle = function() {
      let sandwichElements = document.querySelectorAll('.sandwich');
      let linksElements = document.querySelectorAll('.js-menu-link');
      sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
      });

      function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id');
        let targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('sandwich-open');
        document.body.classList.toggle('overflow-hidden');
        // wrapper.classList.toggle('overflow-hidden');
        if (targetId && targetClassToggle) {
          document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
        linksElements.forEach(item => {
          if (item.nextElementSibling.style.maxHeight) {
            item.nextElementSibling.style.maxHeight = null;
            item.nextElementSibling.classList.remove('menu-sub-nav--open');
            item.classList.remove('menu-nav__link--active');
          }
        });
      }
    };
    sandwichToggle();

    // Open Close Modal
    const modalToggle = function() {
      window.modalOpen = function(element, className, wrap) {
        document.body.classList.add('overflow-hidden');
        element.classList.add(className);
        if (!wrap) wrapper.classList.add('overflow-hidden');
      }
      window.modalClose = function(element, className) {
        document.body.classList.remove('overflow-hidden');
        wrapper.classList.remove('overflow-hidden');
        element.classList.remove(className);
      }

      let buyTicketButtons = document.querySelectorAll('.js-buyticket-open');
      let buyTicketModal = document.querySelector('.enter-ticket');
      let buyTicketModalClose = document.querySelector('.enter-ticket__close');

      buyTicketButtons.forEach(item => {
        item.addEventListener('click', () => {
          modalOpen(buyTicketModal, 'enter-ticket--open');
        });
      });
      buyTicketModalClose.addEventListener('click', () => {
        modalClose(buyTicketModal, 'enter-ticket--open');
      })
    };
    modalToggle();

    //Open Close Menu
    const menuToggle = function() {
      let linksElements = document.querySelectorAll('.js-menu-link');
      linksElements.forEach(item => {
        item.addEventListener('click', function() {
          item.nextElementSibling.classList.toggle('menu-sub-nav--open');
          item.classList.toggle('menu-nav__link--active');

          let subMenuElement = this.nextElementSibling;
          if (subMenuElement.style.maxHeight) {
            subMenuElement.style.maxHeight = null;
          } else {
            subMenuElement.style.maxHeight = subMenuElement.scrollHeight + 'px';
          }
          // document.addEventListener('click', menuClosed);
        });
        // let menuClosed = function(e) {
        //   console.log(e);
        //   if (!e.target.closest('.menu-sub-nav')) {
        //     item.nextElementSibling.classList.remove('menu-sub-nav--open');
        //     item.classList.remove('menu-nav__link--active');
        //     item.nextElementSibling.style.maxHeight = null;
        //     document.removeEventListener('click', menuClosed);
        //   }
        // }
      });
    };
    menuToggle();

    // Select enter ticket
    const select = function() {
      let selectCurrent = document.querySelectorAll('.select-time__header');
      let selectItem = document.querySelectorAll('.select-time__item');
      selectCurrent.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.currentTarget.parentElement.classList.toggle('is-open');
        })
      });
      selectItem.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.currentTarget.closest('.select-time').querySelector('.select-time__current').innerHTML = e.currentTarget.innerHTML;
          e.currentTarget.closest('.select-time').classList.remove('is-open');
        })
      });
    };
    select();

    //Sliders
    const breakpointDesktop = window.matchMedia('(min-width: 1280px)');
    let subMenuMobileSlider;
    let tourPriceSlider;

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
          if (subMenuMobileSlider !== undefined) subMenuMobileSlider.destroy(true, true);
          if (tourPriceSlider !== undefined) tourPriceSlider.destroy(true, true);
        } else if (breakpointDesktop.matches === false) {
          enableSubMenu();
        }
      }
    };

    const enableSubMenu = function() {
      tourPriceSlider = new Swiper('.tour-price__slider', {
        direction: 'horizontal',
        spaceBetween: 10,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });

      subMenuMobileSlider = new Swiper('.sub-nav__wrapper', {
        direction: 'horizontal',
        spaceBetween: 15,
        slidesPerView: 'auto',
        grabCursor: true,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        preventClicks: true,
        preventClicksPropagation: true,
      });
    }

    breakpointDesktop.addListener(breakpointChecker);
    breakpointChecker();

    //DatePicker
    const datePickers = function() {
      let currentDate = new Date();
      let ticketDate = document.querySelector('.enter-ticket__selected-date');
      let customDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
      let customMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

      ticketDate.textContent = currentDate.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });


      const enterTicketDatapicker = datepicker('.enter-ticket__datepicker', {
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
