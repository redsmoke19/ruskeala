(function () {
  'use strict';
  document.addEventListener(
    'DOMContentLoaded',
    function () {
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

      // Modal
      let roadOpen = document.querySelectorAll('.road__button');
      let roadModal = document.querySelectorAll('.road-modal');
      let roadClose = document.querySelectorAll('.road-modal__close');
      for (let i = 0; i < roadOpen.length; i++) {
        roadOpen[i].addEventListener('click', function() {
          window.modalOpen(roadModal[i], '_active', true);
        });
        roadModal[i].addEventListener('click', function(e) {
          if (!e.target.closest('.road-modal__body')) {
            window.modalClose(roadModal[i], '_active');
          }
        });
        roadClose[i].addEventListener('click', function() {
          window.modalClose(roadModal[i], '_active');
        });
      }
    },
    false
  );
})();
