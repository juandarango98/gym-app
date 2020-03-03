"use strict";
const getHistory = (day) => {
  document.querySelector(".number.selected").classList.toggle("selected");
  day.classList.toggle("selected");
  resum.innerHTML = "";
  let load = document.createElement("li");
  load.classList.add("list-group-item");
  load.textContent = "loading";
  resum.append(load);
  fetch(`/historicals/get/?user=5e5d9f054b929500175edae0&date=${day.textContent}/3/2020`).then(res => res.json()).then((list) => {
    resum.innerHTML = "";
    console.log(list);
    list.forEach(element => {
      let display = document.createElement("li");
      display.classList.add("list-group-item");
      display.textContent = element.event + ": " + element.data;
      resum.append(display);
    });
  });

};
const resum = document.getElementById("infoHistory");
