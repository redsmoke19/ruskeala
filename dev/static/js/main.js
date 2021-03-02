(function() {
  'use strict';
  window.initMap = function() {
    let globalMap = document.querySelector('.map__frame');
    let interactiveMap = document.querySelector('.interactive-map__map');
    let partnersMap = document.querySelector('.office-partners__map');
    if (globalMap) {
      let map = new google.maps.Map(globalMap, {
        center: {lat: 61.944186, lng: 30.581297},
        zoom: 10,
      });
    };
    if (interactiveMap) {
      let exmap = new google.maps.Map(interactiveMap, {
        center: {lat: 61.944186, lng: 30.581297},
        zoom: 8,
      });
    };
    if (partnersMap) {
      let partMap = new google.maps.Map(partnersMap, {
        center: {lat: 61.944186, lng: 30.581297},
        zoom: 8,
      });
    };
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
      });
    };
    modalToggle();
    
    //Open Close Menu
    const menuToggle = function() {
      let currentTarget;
      let menuClickHandler = (e) => {
        let menuItem = e.target.nextElementSibling;
        if (menuItem && menuItem.matches('.menu-sub-nav--open')) {
          menuItem.previousElementSibling.classList.remove('menu-nav__link--active');
          menuItem.classList.remove('menu-sub-nav--open');
          menuItem.style.maxHeight = null;
          menuItem.style.height = 'auto';
          return;
        }
        if (currentTarget) {
          if (!e.target.closest('.menu-sub-nav--open')) {
            currentTarget.previousElementSibling.classList.remove('menu-nav__link--active');
            currentTarget.classList.remove('menu-sub-nav--open');
            currentTarget.style.maxHeight = null;
            currentTarget.style.height = 'auto';
          }
        }
        if (menuItem && menuItem.matches('.menu-sub-nav')) {
          menuItem.previousElementSibling.classList.add('menu-nav__link--active');
          menuItem.classList.add('menu-sub-nav--open');
          menuItem.style.maxHeight = menuItem.scrollHeight + 'px';
          menuItem.style.height = menuItem.scrollHeight + 'px';
          currentTarget = menuItem;
        }
      };
      document.body.addEventListener('click', menuClickHandler);
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
        } else if (breakpointDesktop.matches === false) {
          enableSubMenu();
        }
      }
    };

    const enableSubMenu = function() {
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
    };

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
