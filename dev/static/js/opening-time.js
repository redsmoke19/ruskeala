(function () {
  'use strict';

  //Sliders
  const breakpointDesktop = window.matchMedia('(min-width: 1000px)');
  let openTimeTabs;

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
        if (openTimeTabs !== undefined) openTimeTabs.destroy(true, true);
      } else if (breakpointDesktop.matches === false) {
        enableSubMenu();
      }
    }
  };

  const enableSubMenu = function () {
    openTimeTabs = new Swiper('.open-time-links', {
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

  // Tabs
  const scheduleLinks = document.querySelectorAll('.open-time-links__link');
  const scheduleContent = document.querySelectorAll('.schedule__item');

  for (let i = 0; i < scheduleLinks.length; i++) {
    scheduleLinks[i].addEventListener('click', () => {
      if (!scheduleLinks[i].classList.contains('_active')) {
        scheduleLinks.forEach((item, index) => {
          item.classList.remove('_active');
          scheduleContent[index].classList.remove('_active');
          // scheduleContent[index].style.maxHeight = null;
        });
        scheduleLinks[i].classList.add('_active');
        // scheduleContent[i].style.maxHeight = scheduleContent[i].scrollHeight + 'px';
        scheduleContent[i].classList.add('_active');
      }
    });
  }

})();
