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
    let reservedRoomsText = document.querySelector('.reserved-room__text');
    let sliderContainer = document.querySelector('.reserved-room__list');

    reservedRoomsButtons.forEach(item => {
      item.addEventListener('click', () => {
        let title = item.parentElement.querySelector('.rooms-hotel__name');
        reservedRoomsTitle.textContent = title.textContent;

        let text = item.parentElement.querySelector('.rooms-hotel__modal-text');
        reservedRoomsText.innerHTML = text.innerHTML;

        let pictureList = item.parentElement.querySelectorAll('picture');

        for (let i = 0; i < pictureList.length; i++) {
          let element = document.createElement('li');
          let picture = document.createElement('picture');
          let source = document.createElement('source');
          let img = document.createElement('img');

          let pictureSource = pictureList[i].querySelector('source');
          let pictureImg = pictureList[i].querySelector('img');

          element.classList.add('reserved-room__item', 'swiper-slide');
          picture.classList.add('reserved-room__picture');
          img.classList.add('reserved-room__img');

          source.media = pictureSource.media;
          source.srcset = pictureSource.dataset.srcset;
          img.src = pictureImg.dataset.src;
          img.srcset = pictureImg.dataset.srcset;
          img.width = 320;
          img.height = 270;
          img.alt = pictureImg.alt;
          img.loading = 'lazy';

          picture.append(source);
          picture.append(img);
          element.append(picture);
          sliderContainer.append(element);
        }
        reservedRoomsSlider.update();
        window.modalOpen(reservedRoomsModal, 'reserved-room--open', false);
      });
    });
    reservedRoomsClose.addEventListener('click', () => {
      reservedRoomsSlider.removeAllSlides();
      reservedRoomsSlider.update();
      window.modalClose(reservedRoomsModal, 'reserved-room--open');
    })

  }, false);
})();
