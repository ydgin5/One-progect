"use strict";
document.addEventListener("click", documentActions);
function documentActions(e) {
    const  targetElement = e.target;
   if(targetElement.closest('[data-goto]')) {
const goto = targetElement.closest('[data-goto]');


   }
}
