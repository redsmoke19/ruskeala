(function () {
  'use strict';
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      //Sliders
      const entertainmentSlidersArray = [];
      const entertainmentSliders = document.querySelectorAll(
        '.entertainment__images'
      );
      entertainmentSliders.forEach((item, index) => {
        let buttonPrev = item.querySelector('.entertainment__slider-button--prev');
        let buttonNext = item.querySelector('.entertainment__slider-button--next');
        console.log(buttonNext);
        let entertainmentSlid = new Swiper(entertainmentSliders[index], {
          direction: 'horizontal',
          slidesPerView: 1,
          grabCursor: true,
          preventClicks: true,
          preventClicksPropagation: true,
          navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
          },
        });
      });
      // const entertainmentKalevalaSlider = new Swiper('.entertainment__slider--kalevala', {
      //   direction: 'horizontal',
      //   slidesPerView: 1,
      //   grabCursor: true,
      //   preventClicks: true,
      //   preventClicksPropagation: true,
      //   navigation: {
      //     nextEl:
      //       '.entertainment__slider--kalevala .entertainment__slider-button--next',
      //     prevEl:
      //       '.entertainment__slider--kalevala .entertainment__slider-button--prev',
      //   },
      // });

      // const entertainmentBoatTripSlider = new Swiper(
      //   '.entertainment__slider--boat-trip',
      //   {
      //     direction: 'horizontal',
      //     slidesPerView: 1,
      //     grabCursor: true,
      //     preventClicks: true,
      //     preventClicksPropagation: true,
      //     navigation: {
      //       nextEl:
      //         '.entertainment__slider--boat-trip .entertainment__slider-button--next',
      //       prevEl:
      //         '.entertainment__slider--boat-trip .entertainment__slider-button--prev',
      //     },
      //   }
      // );

      // const entertainmentZipLineSlider = new Swiper(
      //   '.entertainment__slider--zip-line',
      //   {
      //     direction: 'horizontal',
      //     slidesPerView: 1,
      //     grabCursor: true,
      //     preventClicks: true,
      //     preventClicksPropagation: true,
      //     navigation: {
      //       nextEl:
      //         '.entertainment__slider--zip-line .entertainment__slider-button--next',
      //       prevEl:
      //         '.entertainment__slider--zip-line .entertainment__slider-button--prev',
      //     },
      //   }
      // );

      // const entertainmentSkatingSlider = new Swiper(
      //   '.entertainment__slider--skating',
      //   {
      //     direction: 'horizontal',
      //     slidesPerView: 1,
      //     grabCursor: true,
      //     preventClicks: true,
      //     preventClicksPropagation: true,
      //     navigation: {
      //       nextEl:
      //         '.entertainment__slider--skating .entertainment__slider-button--next',
      //       prevEl:
      //         '.entertainment__slider--skating .entertainment__slider-button--prev',
      //     },
      //   }
      // );

      // const entertainmentDivingSlider = new Swiper(
      //   '.entertainment__slider--diving',
      //   {
      //     direction: 'horizontal',
      //     slidesPerView: 1,
      //     grabCursor: true,
      //     preventClicks: true,
      //     preventClicksPropagation: true,
      //     navigation: {
      //       nextEl:
      //         '.entertainment__slider--diving .entertainment__slider-button--next',
      //       prevEl:
      //         '.entertainment__slider--diving .entertainment__slider-button--prev',
      //     },
      //   }
      // );

      // const entertainmentTarzanSlider = new Swiper(
      //   '.entertainment__slider--tarzan',
      //   {
      //     direction: 'horizontal',
      //     slidesPerView: 1,
      //     grabCursor: true,
      //     preventClicks: true,
      //     preventClicksPropagation: true,
      //     navigation: {
      //       nextEl:
      //         '.entertainment__slider--tarzan .entertainment__slider-button--next',
      //       prevEl:
      //         '.entertainment__slider--tarzan .entertainment__slider-button--prev',
      //     },
      //   }
      // );

      // Modal read more

      const modals = function () {
        let breakpoint = window.matchMedia('(min-width: 1280px)');
        let readMoreLink = document.querySelectorAll(
          '.entertainment__read-more'
        );
        let modal = document.querySelector('.entertainment-read-more');
        let modalTitle = document.querySelector(
          '.entertainment-read-more__title'
        );
        let modalImage = document.querySelector(
          '.entertainment-read-more__img'
        );
        let modalText = document.querySelector(
          '.entertainment-read-more__text'
        );
        let modalCloseButton = document.querySelector(
          '.entertainment-read-more__close'
        );

        let additionallyModal = document.querySelector('.excursions-add');
        let additionallyButtons = document.querySelectorAll(
          '.js-additionally-open'
        );
        let additionallyClose = document.querySelector(
          '.excursions-add__close'
        );
        let additionallyFullPrice = document.querySelector(
          '.excursions-add__price--full'
        );
        let additionallyStudentPrice = document.querySelector(
          '.excursions-add__price--student'
        );
        let additionallySchoolPrice = document.querySelector(
          '.excursions-add__price--school'
        );
        let additionallyRetireePrice = document.querySelector(
          '.excursions-add__price--retiree'
        );
        let additionallyTitleDiscount = document.querySelector(
          '.excursions-add__privileges--discounts'
        );
        let additionallyTitlePrivileges = document.querySelector(
          '.excursions-add__privileges--privileges'
        );
        let additionallyTitleNote = document.querySelector(
          '.excursions-add__note-title'
        );
        let additionallyTypeFull = document.querySelector(
          '.excursions-add__type--full'
        );
        let additionallyTypeStudents = document.querySelector(
          '.excursions-add__type--students'
        );
        let additionallyTypeSchool = document.querySelector(
          '.excursions-add__type--school'
        );
        let additionallyTypeRetiree = document.querySelector(
          '.excursions-add__type--retiree'
        );
        let additionallyTextDiscount = document.querySelector(
          '.excursions-add__text'
        );
        let additionallyTextPrivileges = document.querySelector(
          '.excursions-add__text--add'
        );
        let additionallyTextNote = document.querySelector(
          '.excursions-add__note'
        );

        let buyTicketButtons = document.querySelectorAll('.entertainment__buy');
        let buyTicketModal = document.querySelector('.excursions-ticket');
        let buyTicketModalClose = document.querySelector(
          '.excursions-ticket__close'
        );
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
            let itemTitle = item.parentElement.querySelector(
              '.entertainment__title'
            );
            let itemText = item.parentElement.querySelector(
              '.entertainment__full-text'
            );
            modalTitle.textContent = itemTitle.textContent;
            modalText.textContent = itemText.textContent;

            if (!breakpoint.matches) {
              modalImage.src = itemText.dataset.mobilesrc;
              modalImage.srcset = itemText.dataset.mobilesrcset;
            } else {
              modalImage.src = itemText.dataset.desktopsrc;
              modalImage.srcset = itemText.dataset.desktopsrcset;
            }
            modalCloseButton.addEventListener('click', closeModal);
          });
        });

        // Additionally modal
        additionallyButtons.forEach((item) => {
          item.addEventListener('click', () => {
            window.modalOpen(additionallyModal, 'excursions-add--open');
            additionallyFullPrice.textContent = item.dataset.full + ' руб.';
            additionallyStudentPrice.textContent =
              item.dataset.student + ' руб.';
            additionallySchoolPrice.textContent = item.dataset.school + ' руб.';
            additionallyRetireePrice.textContent =
              item.dataset.retiree + ' руб.';
            let additionallyContent = item.parentElement.querySelector(
              '.js-additionally__contenet'
            );
            function addTextContent(element, content) {
              element.textContent = additionallyContent.querySelector(
                content
              ).textContent;
            }
            addTextContent(
              additionallyTitleDiscount,
              '.js-additionally__discounts'
            );
            addTextContent(additionallyTypeFull, '.js-additionally__full');
            addTextContent(
              additionallyTypeStudents,
              '.js-additionally__students'
            );
            addTextContent(additionallyTypeSchool, '.js-additionally__school');
            addTextContent(
              additionallyTypeRetiree,
              '.js-additionally__retiree'
            );
            addTextContent(additionallyTextDiscount, '.js-additionally__note');
            addTextContent(
              additionallyTitlePrivileges,
              '.js-additionally__privileges'
            );
            addTextContent(
              additionallyTextPrivileges,
              '.js-additionally__privileges-text'
            );
            addTextContent(
              additionallyTitleNote,
              '.js-additionally__important'
            );
            addTextContent(
              additionallyTextNote,
              '.js-additionally__importatnt-text'
            );
          });
        });
        additionallyClose.addEventListener('click', () => {
          window.modalClose(additionallyModal, 'excursions-add--open');
        });

        // Buy tickets
        buyTicketButtons.forEach((item) => {
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
      const datePickers = function () {
        let currentDate = new Date();
        let ticketDate = document.querySelector(
          '.excursions-ticket__selected-date'
        );
        let customDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let customMonth = [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь',
        ];

        ticketDate.textContent = currentDate.toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        const enterTicketDatapicker = datepicker(
          '.excursions-ticket__datepicker',
          {
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
          }
        );
      };
      datePickers();
    },
    false
  );
})();
