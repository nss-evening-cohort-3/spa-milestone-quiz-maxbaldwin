var carCard = document.getElementById("carCardPlace");

function populatePage (inventory) {
  var carArray = inventory
  var buildString = " ";
  // Loop over the inventory and populate the page
  for (var i = 0; i < carArray.length; i++) {
    buildString //build the rest of the string here
  }

  carCard.innerHTML += buildString;
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();