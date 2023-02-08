"use strict";
function elemCreator(elem, optionStyle) {
  const newelem = document.body.appendChild(document.createElement(elem));
  optionStyle(newelem);
}
const callback = function (elem) {
  elem.style.backgroundColor = "red";
  elem.style.width = "10rem";
  elem.style.height = "10rem";
};
elemCreator("div", callback);
