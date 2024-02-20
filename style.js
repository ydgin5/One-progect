"use strict";
document.addEventListener("click", documentActions);
function documentActions(e) {
  if (targetElement.closest(".ico")){

  }
  const targetElement = e.target;
  if (targetElement.closest("[data-goto]")) {
    const goto = targetElement.closest("[data-goto]");
    const gotoElement = document.querySelector(goto);
    const headerHeight = document.querySelector(".header").offsetHeight;
    if (gotoElement) {
        window.scrollTo({
            top:gotoElement.offsetTop - (headerHeight + 15),
            behavior:"smooth"
        });
    }
    e.preventDefault();
  }
}
