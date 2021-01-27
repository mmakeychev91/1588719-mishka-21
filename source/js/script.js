    const buttons_modal = document.querySelectorAll(".button-modal");
    const button_menu = document.querySelector(".header__button");
    const modal = document.querySelector(".modal");
    const header = document.querySelector(".container--header");
    const nav = document.querySelector(".nav");
    const toning = document.querySelector(".toning");
    button_menu.addEventListener("click", function(evt) {
      header.classList.toggle("container--header-closed-menu");
      header.classList.toggle("container--header-opened-menu");
      nav.classList.toggle("nav--closed-menu");
      nav.classList.toggle("nav--opened-menu");
    });
    for (let button_modal of buttons_modal) {
      button_modal.addEventListener("click", function(evt) {
        modal.classList.toggle("modal--off");
        modal.classList.toggle("modal--on");
        toning.classList.toggle("toning--off");
        toning.classList.toggle("toning--on");
      });
    }
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 27) {
        if (modal.classList.contains("modal--on")) {
          e.preventDefault();
          modal.classList.toggle("modal--on");
          modal.classList.toggle("modal--off");
          toning.classList.toggle("toning--on");
          toning.classList.toggle("toning--off");
        }
      }
    });
