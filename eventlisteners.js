"use strict";

let CarLot = (function(oldCarLot) {
  oldCarLot.activateEvents = function() {
    let carArray = document.getElementByClassName("ClassCarCard");
    for (let i = 0; i < carArray.length; i++) {
      carArray[i].addEventListener("click", function(e, color) {
        let clickedItem = e.currentTarget;
        oldCarLot.addBorder(clickedItem);
        textChangeUp(clickedItem);
      })
    }

    function textChangeUp(selectedCar) {
      let currentCar = selectedCar;
      let textInput = document.getElementById("editCarDescript");
      textInput.focus();
      textInput.value = "";
      textInput.addEventListener("keyup", function(e, currentCar) {
        CarLot.editText();
      })
    }
  }
  return oldCarLot
}(Carlot || {}));