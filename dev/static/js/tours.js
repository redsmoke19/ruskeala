(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    const toursWeekendSlider = new Swiper('.tours-park__slider--weekend', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.tours-park__slider--weekend .tours-park__slider-button--next',
        prevEl: '.tours-park__slider--weekend .tours-park__slider-button--prev',
      },
    });

    const toursPearlSlider = new Swiper('.tours-park__slider--pearl', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.tours-park__slider--pearl .tours-park__slider-button--next',
        prevEl: '.tours-park__slider--pearl .tours-park__slider-button--prev',
      },
    });

    const toursPearlDaySlider = new Swiper('.tours-park__slider--pearl-day', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.tours-park__slider--pearl-day .tours-park__slider-button--next',
        prevEl: '.tours-park__slider--pearl-day .tours-park__slider-button--prev',
      },
    });

    const toursMiraclesSlider = new Swiper('.tours-park__slider--miracles', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      navigation: {
        nextEl: '.tours-park__slider--miracles .tours-park__slider-button--next',
        prevEl: '.tours-park__slider--miracles .tours-park__slider-button--prev',
      },
    });

    const toursProgramFirstSlider = new Swiper('.tour-programs__first-day', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      breakpoints: {
        1280: {
          slidesOffsetBefore: 167,
          slidesOffsetAfter: 167,
        },
        1600: {
          slidesOffsetBefore: 208,
          slidesOffsetAfter: 208,
        },
        1920: {
          slidesOffsetBefore: 250,
          slidesOffsetAfter: 250,
          allowTouchMove: false,
        },
      },
      scrollbar: {
        el: '.tour-programs__scrollbar--first',
        draggable: true,
        dragClass: 'scrollbar__drag',
        snapOnRelease: false,
      },
    });

    const toursProgramSecondSlider = new Swiper('.tour-programs__second-day', {
      direction: 'horizontal',
      preventClicks: true,
      preventClicksPropagation: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      breakpoints: {
        1280: {
          slidesOffsetBefore: 167,
          slidesOffsetAfter: 167,
        },
        1600: {
          slidesOffsetBefore: 208,
          slidesOffsetAfter: 208,
        },
        1920: {
          slidesOffsetBefore: 250,
          slidesOffsetAfter: 250,
        },
      },
      scrollbar: {
        el: '.tour-programs__scrollbar--second',
        draggable: true,
        dragClass: 'scrollbar__drag',
        snapOnRelease: false,
      },
    });

    //Modal
    let tourDescriptionModal = document.querySelector('.tour-description');
    let tourDescriptionClose = document.querySelector('.tour-description__close-button');
    let tourDescriptionButtons = document.querySelectorAll('.js-tour-descr-open');
    let tourDescriptionTitle = document.querySelector('.tour-description__title');
    let tourDescriptionCostContainer = document.querySelector('.tour-cost__list');

    let tourReservedModal = document.querySelector('.tour-reserved');
    let tourReservedClose = document.querySelector('.tour-reserved__close-button');
    let tourReservedButtons = document.querySelectorAll('.js-tour-reserv-open');

    const createCostElement = function(description) {
      let item = document.createElement('li');
      let text = document.createElement('p');
      let svg = document.createElement('svg');
      svg.innerHTML = '<svg class="tour-cost__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.33332V21.3333C4 22.804 5.196 24 6.66667 24H11.448L16 28.552L20.552 24H25.3333C26.804 24 28 22.804 28 21.3333V5.33332C28 3.86266 26.804 2.66666 25.3333 2.66666H6.66667C5.196 2.66666 4 3.86266 4 5.33332ZM6.66667 5.33332H25.3333V21.3333H19.448L16 24.7813L12.552 21.3333H6.66667V5.33332Z"/><path d="M22.9423 9.60933L21.057 7.724L14.6663 14.1147L11.609 11.0573L9.72363 12.9427L14.6663 17.8853L22.9423 9.60933Z"/></svg>';
      item.classList.add('tour-cost__item');
      text.classList.add('tour-cost__text');
      text.textContent = description;
      item.append(svg);
      item.append(text);
      tourDescriptionCostContainer.append(item);
    }

    tourDescriptionButtons.forEach(item => {
      item.addEventListener('click', () => {
        let tourModalTitle = item.parentElement.querySelector('.js-tour-title');
        let tourModalCostList = item.parentElement.querySelectorAll('.js-tour-cost-list span');
        for (let i = 0; i < tourModalCostList.length; i++) {
          createCostElement(tourModalCostList[i].textContent);
        }
        tourDescriptionTitle.innerHTML = tourModalTitle.innerHTML;
        window.modalOpen(tourDescriptionModal, 'modal__closed--open', true);
      });
    });
    tourDescriptionClose.addEventListener('click', () => {
      let tourCostItems = tourDescriptionCostContainer.querySelectorAll('.tour-cost__item');
      if (tourCostItems) {
        tourCostItems.forEach(item => {
          item.remove();
        })
      }
      window.modalClose(tourDescriptionModal, 'modal__closed--open');
    });

    tourReservedButtons.forEach(item => {
      item.addEventListener('click', () => {
        window.modalOpen(tourReservedModal, 'modal__closed--open', true);
      });
    });

    tourReservedClose.addEventListener('click', () => {
      window.modalClose(tourReservedModal, 'modal__closed--open');
    });
  }, false);

})();