(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    let menuRuskolkaModal = document.querySelector('.eat-menu--ruskolka');
    let menuRuskolkaOpenButton = document.querySelector('.js-ruskolka-menu-open');
    let menuRuskolkaCloseButton = document.querySelector('.eat-menu__close--ruskolka');
    let menuBurgersModal = document.querySelector('.eat-menu--burgers');
    let menuBurgersOpenButton = document.querySelector('.js-burgers-menu-open');
    let menuBurgersCloseButton = document.querySelector('.eat-menu__close--burgers');

    menuRuskolkaOpenButton.addEventListener('click', function() {
      window.modalOpen(menuRuskolkaModal, 'eat-menu--open', true);
    });
    menuRuskolkaCloseButton.addEventListener('click', function() {
      window.modalClose(menuRuskolkaModal, 'eat-menu--open');
    });

    menuBurgersOpenButton.addEventListener('click', function() {
      window.modalOpen(menuBurgersModal, 'eat-menu--open', true);
    });
    menuBurgersCloseButton.addEventListener('click', function() {
      window.modalClose(menuBurgersModal, 'eat-menu--open');
    });
  }, false);
})();