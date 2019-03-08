  var correctNumber = 0
  var min = 0
  var max = 0

  function numberCreator() {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function guessValidator(userGuess) {
    if (userGuess > max || userGuess < min) {
    document.getElementById('feedback').innerHTML = (`Out of range`);
    document.getElementById("guess").disabled = false;
    return true;
  } else if (Number.isNaN(userGuess)) {
    document.getElementById('feedback').innerHTML = (`Not a number`);
    document.getElementById("guess").disabled = false;
    return true;
  }  else
    return false;
  }

  function rangeValidator(input) {
    if (Number.isNaN(input)){
    document.getElementById('feedback').innerHTML = (`please specify a valid range to play`);
    document.getElementById("range-button").disabled = false;
    return true;
  } else if (Number.isNaN(input)){
    document.getElementById('feedback').innerHTML = (`please specify a valid range to play`);
    document.getElementById("range-button").disabled = false;
    return true;
  } else
    return false;
  }

  function checkGuess(userGuess) {
   if (userGuess === correctNumber) {
    min = (min -10)
    max += 10
    document.getElementById('guess-was').innerHTML = (`Your last guess was`);
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
    document.getElementById('feedback').innerHTML = (`BOOM! That Is Correct!`);
    document.getElementById('range-info').innerHTML = (`Click New Round to continue! Your new range is`);
    document.getElementById("min-range-input").value = (`${min}`);
    document.getElementById("max-range-input").value = (`${max}`);
    document.getElementById("range-button").disabled = true;
    document.getElementById("guess").disabled = true;
    document.getElementById("clear").disabled = true;
    document.getElementById("reset-button").disabled = false;
    document.getElementById('reset-button').style.display='block';
    document.getElementById('new-game').style.display='block';
  } else if (userGuess > correctNumber) {
    document.getElementById('guess-was').innerHTML = (`Your last guess was`);
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
    document.getElementById('feedback').innerHTML = (`That is too high!`);
    document.getElementById('new-game').style.display='block';
  } else if (userGuess < correctNumber) {
    document.getElementById('guess-was').innerHTML = (`Your last guess was`);
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
    document.getElementById('feedback').innerHTML = (`That is too low!`);
    document.getElementById('new-game').style.display='block';
  } else
    document.getElementById('feedback').innerHTML = (`please enter a valid range to play`);
    document.getElementById("range-button").disabled = false;
  }

  document.getElementById("guess").addEventListener("click", () => {
    let userGuess = parseInt(document.getElementById('guess-input').value, 10);
    if (guessValidator(userGuess)) { return true; }
    checkGuess(userGuess);
    document.getElementById("range-button").disabled = true;
  });

  document.getElementById("range-button").addEventListener("click", () => {
    min += parseInt(document.getElementById('min-range-input').value, 10);
    max += parseInt(document.getElementById('max-range-input').value, 10);
    if (rangeValidator(min)) { return true;}
    if (rangeValidator(max)) { return true;}
    correctNumber += numberCreator();
    document.getElementById("range-button").disabled = true;
  });

  document.getElementById("clear").addEventListener("click", () => {
     document.getElementById('guess-input').value = ''
     document.getElementById("clear").disabled = true;
  });

  document.getElementById("reset-button").addEventListener("click", () => {
     document.getElementById('last-guess').innerHTML = ('');
     document.getElementById('guess-was').innerHTML = ('');
     document.getElementById('guess-input').value = ('');
     document.getElementById('feedback').innerHTML = ('');
     correctNumber = numberCreator();
     document.getElementById("reset-button").disabled = true;
     document.getElementById("range-button").disabled = true;
     document.getElementById("guess").disabled = false;
  });

  document.getElementById("new-game").addEventListener("click", () => {
     location.reload(true);
  });

  document.getElementById('new-game').style.display='none';
  document.getElementById('reset-button').style.display='none';
