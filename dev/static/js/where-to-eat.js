(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    const menuModal = document.querySelectorAll('.eat-menu');
    const menuOpenButtons = document.querySelectorAll('.js-eat-menu-open');
    const menuCloseButton = document.querySelectorAll('.eat-menu__close');

    menuOpenButtons.forEach((item, i) => {
      item.addEventListener('click', () => {
        window.modalOpen(menuModal[i], 'eat-menu--open', true);
      })
    })

    menuCloseButton.forEach((item, i) => {
      item.addEventListener('click', () => {
        window.modalClose(menuModal[i], 'eat-menu--open', true);
      })
    })
  }, false);
})();