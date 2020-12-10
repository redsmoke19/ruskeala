(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    //Sliders

    const entertainmentKalevalaSlider = new Swiper('.entertainment__slider--kalevala', {
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.entertainment__slider--kalevala .entertainment__slider-button--next',
        prevEl: '.entertainment__slider--kalevala .entertainment__slider-button--prev',
      },
    });

    const entertainmentBoatTripSlider = new Swiper('.entertainment__slider--boat-trip', {
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.entertainment__slider--boat-trip .entertainment__slider-button--next',
        prevEl: '.entertainment__slider--boat-trip .entertainment__slider-button--prev',
      },
    });

    const entertainmentZipLineSlider = new Swiper('.entertainment__slider--zip-line', {
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.entertainment__slider--zip-line .entertainment__slider-button--next',
        prevEl: '.entertainment__slider--zip-line .entertainment__slider-button--prev',
      },
    });

    const entertainmentSkatingSlider = new Swiper('.entertainment__slider--skating', {
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.entertainment__slider--skating .entertainment__slider-button--next',
        prevEl: '.entertainment__slider--skating .entertainment__slider-button--prev',
      },
    });

    const entertainmentDivingSlider = new Swiper('.entertainment__slider--diving', {
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.entertainment__slider--diving .entertainment__slider-button--next',
        prevEl: '.entertainment__slider--diving .entertainment__slider-button--prev',
      },
    });

    const entertainmentTarzanSlider = new Swiper('.entertainment__slider--tarzan', {
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.entertainment__slider--tarzan .entertainment__slider-button--next',
        prevEl: '.entertainment__slider--tarzan .entertainment__slider-button--prev',
      },
    });

    // Modal read more

    const modals = function() {
      let breakpoint = window.matchMedia('(min-width: 1280px)');
      let readMoreLink = document.querySelectorAll('.entertainment__read-more');
      let modal = document.querySelector('.entertainment-read-more');
      let modalTitle = document.querySelector('.entertainment-read-more__title');
      let modalImage = document.querySelector('.entertainment-read-more__img');
      let modalText = document.querySelector('.entertainment-read-more__text');
      let modalCloseButton = document.querySelector('.entertainment-read-more__close');
      let mobileSrc = ['./static/images/content/entertainment/kavevala-1-mobile@1x.png', 'static/images/content/entertainment/boat-trip-1-mobile@1x.png'];
      let mobileSrcSet = ['./static/images/content/entertainment/kavevala-1-mobile@2x.png', 'static/images/content/entertainment/boat-trip-1-mobile@2x.png'];
      let desktopSrc = ['./static/images/content/entertainment/kavevala-1-desktop@1x.png', 'static/images/content/entertainment/boat-trip-1-desktop@1x.png'];
      let desktopSrcSet = ['./static/images/content/entertainment/kavevala-1-desktop@2x.png', 'static/images/content/entertainment/boat-trip-1-desktop@2x.png'];
      let additionallyModal = document.querySelector('.excursions-add');
      let additionallyButtons = document.querySelectorAll('.js-additionally-open');
      let additionallyClose = document.querySelector('.excursions-add__close');

      let buyTicketButtons = document.querySelectorAll('.entertainment__buy');
      let buyTicketModal = document.querySelector('.excursions-ticket');
      let buyTicketModalClose = document.querySelector('.excursions-ticket__close');
      let ticketTitle = document.querySelector('.excursions-ticket__title');

      function openModal() {
        document.body.classList.add('overflow-hidden');
        modal.classList.add('entertainment-read-more--open');
      }

      function closeModal() {
        document.body.classList.remove('overflow-hidden');
        modal.classList.remove('entertainment-read-more--open');
        modalCloseButton.removeEventListener('click', closeModal);
      }

      readMoreLink.forEach((item, index) => {
        item.addEventListener('click', () => {
          openModal();
          let itemTitle = item.parentElement.querySelector('.entertainment__title');
          let itemText = item.parentElement.querySelector('.entertainment__full-text');
          modalTitle.textContent = itemTitle.textContent;
          modalText.textContent = itemText.textContent;

          if (!breakpoint.matches) {
            modalImage.src = mobileSrc[index];
            modalImage.srcset = mobileSrcSet[index];
          } else {
            modalImage.src = desktopSrc[index];
            modalImage.srcset = desktopSrcSet[index];
          }
          modalCloseButton.addEventListener('click', closeModal);
        });
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
    };
    modals();

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
