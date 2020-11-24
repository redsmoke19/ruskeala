(function() {
  'use strict';

  const sandwichToggle = function() {
    let sandwichElements = document.querySelectorAll('.sandwich');
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
    }
  };
  sandwichToggle();
})();