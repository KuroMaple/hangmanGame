var testText = ["w", "o", "r", "d"]; // hardcoded dummy word
var guessedText = ["_" , "_", "_", "_"];

//open game.html
function playClicked(){
  window.location.pathname = "/html/game.html";
}

function updateText(){
  document.getElementById("wordField").textContent = "Word";
}

//Clears the textfield and adds to the user's guess
function submitGuess() {
  var guessText = document.getElementById('guess');
  document.getElementById('guess') = '';
}