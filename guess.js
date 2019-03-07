
  //randomly makes the correct number which the user will try and guess
  var correctNumber = (Math.floor(Math.random() * 1 + 1));


  var checkGuess = function() {
   var user_guess = parseInt(document.getElementById('guess-input').value, 10);
   if (user_guess === correctNumber) {
    document.getElementById('last-guess').innerHTML = (`${user_guess}`);
    document.getElementById('feedback').innerHTML = (`BOOM! That Is Correct!`);
  } else if (user_guess > correctNumber) {
    document.getElementById('last-guess').innerHTML = (`${user_guess}`);
    document.getElementById('feedback').innerHTML = (`That is too high!`);
  } else if (user_guess < correctNumber) {
    document.getElementById('last-guess').innerHTML = (`${user_guess}`);
    document.getElementById('feedback').innerHTML = (`That is too low!`);
  } else
    document.getElementById('feedback').innerHTML = (`please enter a valid value`);
  }

  //listens for a click on the guess button and checks the guess
  document.getElementById("guess").addEventListener("click", checkGuess)
