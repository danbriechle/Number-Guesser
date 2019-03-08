
  //randomly makes the correct number which the user will try and guess
  let increment = 0
  let min = 1
  let max = 10
  var correctNumber = numberCreator()

  function numberCreator() {
    return ((Math.floor(Math.random() * 1 + 1)) + increment);
  }

  function guessValidator(userGuess) {
    if (userGuess > max || userGuess < min) {
    document.getElementById('feedback').innerHTML = (`out of range`);
    return true;
  } else if (Number.isNaN(userGuess)){
    document.getElementById('feedback').innerHTML = (`Not a number`);
    return true;
  } else
    return false;
  }

  function checkGuess(userGuess) {
   if (userGuess === correctNumber) {
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
    document.getElementById('feedback').innerHTML = (`BOOM! That Is Correct!`);
  } else if (userGuess > correctNumber) {
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
    document.getElementById('feedback').innerHTML = (`That is too high!`);
  } else if (userGuess < correctNumber) {
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
    document.getElementById('feedback').innerHTML = (`That is too low!`);
  } else
    document.getElementById('feedback').innerHTML = (`please enter a valid value`);
  }


  //listens for a click on the guess button and checks the guess
  document.getElementById("guess").addEventListener("click", () => {
    let userGuess = parseInt(document.getElementById('guess-input').value, 10);
     if (guessValidator(userGuess)) { return true; }
     checkGuess(userGuess);
  });
