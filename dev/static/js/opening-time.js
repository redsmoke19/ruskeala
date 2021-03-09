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

})();
