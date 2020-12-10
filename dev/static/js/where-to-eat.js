(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    let menuModal = document.querySelector('.eat-menu');
    let menuButtons = document.querySelectorAll('.js-eat-menu-open');
    let closeMenuModal = document.querySelector('.eat-menu__close');
    menuButtons.forEach(item => {
      item.addEventListener('click', () => {
        window.modalOpen(menuModal, 'eat-menu--open', true);
      });
    });
    closeMenuModal.addEventListener('click', () => {
      window.modalClose(menuModal, 'eat-menu--open');
    });
  }, false);
})();