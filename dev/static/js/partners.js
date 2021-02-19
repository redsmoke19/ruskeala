(function () {
  'use strict';

  //Sliders
  const breakpointDesktop = window.matchMedia('(min-width: 420px)');
  let partnersTabs;

  const breakpointChecker = function () {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        resizeHandlerDesktop();
      }, 100);
    }

    function resizeHandlerDesktop() {
      if (breakpointDesktop.matches === true) {
        if (partnersTabs !== undefined) partnersTabs.destroy(true, true);
      } else if (breakpointDesktop.matches === false) {
        enableSubMenu();
      }
    }
  };

  const enableSubMenu = function () {
    partnersTabs = new Swiper('.tabs-partners__header', {
      direction: 'horizontal',
      spaceBetween: 15,
      slidesPerView: 'auto',
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      preventClicks: true,
      preventClicksPropagation: true,
    });
  };

  breakpointDesktop.addListener(breakpointChecker);
  breakpointChecker();

  let tabButtons = document.querySelectorAll('.tabs-partners__name');
  let tabText = document.querySelectorAll('.tabs-partners__text');

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', () => {
      if (!tabButtons[i].classList.contains('active')) {
        tabButtons.forEach((item, index) => {
          item.classList.remove('active');
          tabText[index].classList.remove('active');
        });
        tabButtons[i].classList.add('active');
        tabText[i].classList.add('active');
      }
    })
  }
})();
