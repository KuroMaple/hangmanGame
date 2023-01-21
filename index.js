var testText = ["w", "o", "r", "d"]; // hardcoded dummy word
var guessedText = ["_" , "_", "_", "_"];

//open game.html
function playClicked(){
  window.location.pathname = "/html/game.html";
  var displayText = "";
  for (let i = 0; i < 4; i++){ //hardcoding for loop for hard coded word
    displayText = displayText + " " + guessedText[i]; //generates the current dash sequence
  }
  document.getElementById('wordField').innerHTML = displayText; //reflecting sequence in display
}

//Clears the textfield and adds to the user's guess
function submitGuess() {
  var guessText = document.getElementById('guess');
  document.getElementById('guess') = '';
}