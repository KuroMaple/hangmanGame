//open game.html
function playClicked(){
  window.location.pathname = "/html/game.html";
}

//Clears the textfield and adds to the user's guess
function submitGuess() {
  var guessText = document.getElementById('guess');
  document.getElementById('guess') = '';
}