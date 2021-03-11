(function () {
  'use strict';
  // Append
  const container = document.querySelector('._js-container');
  const wrapper = document.querySelector('.road__wrapper');
  const map = document.querySelector('.road__map--wrap');

  const getMobileMap = function () {
    container.append(map);
  };

  const getDesktopMap = function () {
    wrapper.append(map);
  };

  // if (window.matchMedia('(max-width: 1279px)').matches) {
  //   getMobileMap();
  // }

  if (window.matchMedia('(min-width: 1280px)').matches) {
    getDesktopMap();
  }

  (function () {
    window.addEventListener('resize', resizeThrottler, false);

    var resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      if (window.matchMedia('(max-width: 1279px)').matches) {
        getMobileMap();
      }

      if (window.matchMedia('(min-width: 1280px)').matches) {
        getDesktopMap();
      }
    }
  })();
})();
