"use strict";
function change() {
  document.getElementsByName("changer").forEach(ele => {
    ele.classList.toggle("d-none");
  });
}