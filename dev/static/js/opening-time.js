(function () {
  'use strict';

  //Sliders
  const breakpointDesktop = window.matchMedia('(min-width: 1280px)');
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

  // Scroll
  const links = document.querySelector('.open-time-links');

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header').offsetHeight;
    const timeWrapper = document.querySelector('.open-time__wrapper');
    console.log(header);
    if (window.pageYOffset > header + 40 && window.pageYOffset < (timeWrapper.offsetHeight / 2) + header) {
      links.classList.add('_sticky');
      links.style.top = header + 'px';
      timeWrapper.style.paddingTop = links.offsetHeight + 'px';
    } else {
      links.classList.remove('_sticky');
      links.style.top = 0;
      timeWrapper.style.paddingTop = 0;
    }
  })

})();
