// sets correctNumber var so it can be passed an manipulated between functions
  var correctNumber = 0
// sets min var so it can be passed an manipulated between functions
  var min = 0
// sets max var so it can be passed an manipulated between functions
  var max = 0
// names the number creator function
  function numberCreator() {
// sets the cieling (without this myrandom picker wasnt staying inside the range)
    min = Math.ceil(min);
// sets the floor
    max = Math.floor(max)
// generates a random number within the range
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// names the guess validator function
  function guessValidator(userGuess) {
// checks if its outside the range
    if (userGuess > max || userGuess < min) {
// gives appropriate feedback
    document.getElementById('feedback').innerHTML = (`Out of range`);
// reneables the guess button so user can guess again
    document.getElementById("guess").disabled = false;
// returns true so function can end one level up
    return true;
// checks if number is not a number (I can only pass the e key in here)
  } else if (Number.isNaN(userGuess)) {
// gives appropriate feedback
    document.getElementById('feedback').innerHTML = (`Not a number`);
// reneables the guess button so user can guess again
    document.getElementById("guess").disabled = false;
// returns true so function can end one level up
    return true;
  }  else
// returns false so function can continue one level up
    return false;
  }
// names the range validator function
  function rangeValidator(input) {
// checks if number is not a number (I can only pass the e key in here)
    if (Number.isNaN(input)){
// gives appropriate feedback
    document.getElementById('feedback').innerHTML = (`please specify a valid range to play`);
// reneables the submit range button so user can try to enter a valid input again
    document.getElementById("range-button").disabled = false;
// returns true so function can end one level up
    return true;
  } else
// returns false so function can continue one level up
    return false;
  }
// names the guess checker function
  function checkGuess(userGuess) {
// sets up win condition
   if (userGuess === correctNumber) {
// increases min range (it was doing strange things when i -= 10 this seamed to fix that )
    min = (min -10)
// increases the max range
    max += 10
// gives appropriate feedback
    document.getElementById('guess-was').innerHTML = (`Your last guess was`);
// gives appropriate feedback
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
// gives appropriate feedback
    document.getElementById('feedback').innerHTML = (`BOOM! That Is Correct!`);
// gives appropriate feedback
    document.getElementById('range-info').innerHTML = (`Click New Round to continue! Your new range is`);
// shows min range (this was kinda neat how it persited until reset)
    document.getElementById("min-range-input").value = (`${min}`);
// same thing as above
    document.getElementById("max-range-input").value = (`${max}`);
// disables range button so user cannot try to change the range and cheat
    document.getElementById("range-button").disabled = true;
// dissables the guess button so they can choose to go another round or start over
    document.getElementById("guess").disabled = true;
// dissables the clear button so they can choose to go another round or start over
    document.getElementById("clear").disabled = true;
// enables the reset button
    document.getElementById("reset-button").disabled = false;
// displayes the reset button
    document.getElementById('reset-button').style.display='block';
// displays the new game button
    document.getElementById('new-game').style.display='block';
// sets up the too high conditon
  } else if (userGuess > correctNumber) {
// gives appropriate feedback
    document.getElementById('guess-was').innerHTML = (`Your last guess was`);
// gives appropriate feedback
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
// gives appropriate feedback
    document.getElementById('feedback').innerHTML = (`That is too high!`);
// displays the new game button so user can give up and start over
    document.getElementById('new-game').style.display='block';
// sets up the too high conditon
  } else if (userGuess < correctNumber) {
// gives appropriate feedback
    document.getElementById('guess-was').innerHTML = (`Your last guess was`);
// gives appropriate feedback
    document.getElementById('last-guess').innerHTML = (`${userGuess}`);
// gives appropriate feedback
    document.getElementById('feedback').innerHTML = (`That is too low!`);
// displays the new game button so user can give up and start over
    document.getElementById('new-game').style.display='block';
// i set this catch all initialy to debug and havent taken it out
  } else
// i hot swapped the text here alot to find out what was acctually what when console.log wasnt giving me enough info
    document.getElementById('feedback').innerHTML = (`please enter a valid range to play`);
// this shouldnt be here (guess thats why we do the line by line hahaha)
    // document.getElementById("range-button").disabled = false;
  }
// listens on the document for a click on the guess button
  document.getElementById("guess").addEventListener("click", () => {
// sets and parses the value from the guess input (i used let as that seamed to be what the cool kids were doing when I was looking up this kinda stuff
// still not super clear on the nuances between es5 vs es 6, will research that more sunday)
    let userGuess = parseInt(document.getElementById('guess-input').value, 10);
// if the guess is invalid the true from above is passed up and the function ends
    if (guessValidator(userGuess)) { return true; }
// passes the guess to the checkguess function
    checkGuess(userGuess);
// disables range button
    document.getElementById("range-button").disabled = true;
  });
// listens on the document for a click on the range button
  document.getElementById("range-button").addEventListener("click", () => {
// I had alot of trouble getting this to cooperate with me as far as the order of the next 4 lines
// This parses and adds the range value for min and max (were 126 lines deep so im gonna just use one line to explain these two)
    min += parseInt(document.getElementById('min-range-input').value, 10);
    max += parseInt(document.getElementById('max-range-input').value, 10);
// this checks the range (after?) its been added, forsome reason this works for me not the other way though
    if (rangeValidator(min)) { return true;}
    if (rangeValidator(max)) { return true;}
// sets the correctnumber
    correctNumber += numberCreator();
// disables the range button
    document.getElementById("range-button").disabled = true;
  });
// listens on the doccument for a click on the clear button
  document.getElementById("clear").addEventListener("click", () => {
// resets value guess input value
     document.getElementById('guess-input').value = ''
// disables the clear button
     document.getElementById("clear").disabled = true;
  });
// listens the document for a click on the reset button (new round if user would like to continue playing)
  document.getElementById("reset-button").addEventListener("click", () => {
// resets feedback
     document.getElementById('last-guess').innerHTML = ('');
// resets feedback
     document.getElementById('guess-was').innerHTML = ('');
// resets feedback
     document.getElementById('guess-input').value = ('');
// resets feedback
     document.getElementById('feedback').innerHTML = ('');
// creates a new number using incremented min max from above
     correctNumber = numberCreator();
// disables reset button
     document.getElementById("reset-button").disabled = true;
// disables range button
     document.getElementById("range-button").disabled = true;
// reneables guess button so user can keep playing
     document.getElementById("guess").disabled = false;
  });
// listens on the doccument for a click on the new game button (start over)
  document.getElementById("new-game").addEventListener("click", () => {
// reloads the whole document
     location.reload(true);
  });
// sets the default page load to not display the new game button since the user is just starting out
  document.getElementById('new-game').style.display='none';
// sets the default page load to not display the reset button since the user is just starting out
  document.getElementById('reset-button').style.display='none';
