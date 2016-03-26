"use strict";
let CarLot = (function () {
  let inventory = [];
  return {
    
    // getInventory: function () {
    // },
    
    loadInventory: function (callBackToInvoke) {
      let inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      loader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).inventory;
      callBTI(inventory); 
      });
    }
  };
})();
