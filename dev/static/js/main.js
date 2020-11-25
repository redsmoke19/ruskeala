(function() {
  'use strict';
  // Sandwich
  const sandwichToggle = function() {
    let sandwichElements = document.querySelectorAll('.sandwich');
    let linksElements = document.querySelectorAll('.js-menu-link');
    sandwichElements.forEach((item) => {
      item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
      let targetId = this.getAttribute('data-target-id');
      let targetClassToggle = this.getAttribute('data-target-class-toggle');
      this.classList.toggle('sandwich-open');
      document.body.classList.toggle('overflow-hidden');
      if (targetId && targetClassToggle) {
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
      linksElements.forEach(item => {
        if (item.nextElementSibling.style.maxHeight) {
          item.nextElementSibling.style.maxHeight = null;
          item.nextElementSibling.classList.remove('menu-sub-nav--open');
          item.classList.remove('menu-nav__link--active');
        }
      });
    }
  };
  sandwichToggle();

  //Open Close Menu
  const menuToggle = function() {
    let linksElements = document.querySelectorAll('.js-menu-link');
    linksElements.forEach(item => {
      item.addEventListener('click', function() {
        item.nextElementSibling.classList.toggle('menu-sub-nav--open');
        item.classList.toggle('menu-nav__link--active');

        var subMenuElement = this.nextElementSibling;
        if (subMenuElement.style.maxHeight) {
          subMenuElement.style.maxHeight = null;
        } else {
          subMenuElement.style.maxHeight = subMenuElement.scrollHeight + 'px';
        };
      });
    });
  };
  menuToggle();

  //All sliders

  var subMenuMobileSlider = new Swiper('.sub-nav__list', {
    direction: 'horizontal',
    // spaceBetween: 40,
    slidesPerView: 1.6,
    centeredSlides: true,
    grabCursor: true,
  })

  // var mySwiper = document.querySelector('.swiper-container').swiper;
  // console.log(mySwiper);
})();
