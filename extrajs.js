"use strict";

let CarLot = (function(oldCarLot) {
  oldCarLot.resetBorder = function() {
    let carsOnScreen = document.getElementByClassName("ClassCarCard");
    for (let i = 0; i < carsOnScreen.length; i++) {
      carsOnScreen[i].classList.remove("selected");
      carsOnScreen[i].style.borderWidth = "medium"
    }
  };
  oldCarLot.addBorder = function(clicked) {
    oldCarLot.resetBorder();
    clicked.classList.add("selected");
    clicked.style.borderWidth = "thick"
  }
  oldCarLot.editText = function() {
    let descriptionValue = document.getElementById("editDescription");
    let currentCar = document.getElementByClassName("selected")[0];
    let theParagraph = currentCar.getEleement
  }
})