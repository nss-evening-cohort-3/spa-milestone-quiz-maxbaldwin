"use strict";
let CarLot = (function () {
  let inventory = [];
  return {
    loadInventory: function(callBackToFunction) {
      let myInventoryRequest = new XMLHttpRequest; 
      myInventoryRequest.open("GET", "inventory.json");
      myInventoryRequest.send();
      myInventoryRequest.addEventListener("load", inventoryLoaded);
      myInventoryRequest.addEventListener("failed", inventoryFailed);
      function inventoryFailed() {
        alert("Inventory Page failed, please try again.")
      };
      function inventoryLoaded() {
        inventory = JSON.parse(this.responseText);
        callBackToFunction();
      };
    }, 
    getCarInventory: function() {
      return inventory;
    }
  }
}());