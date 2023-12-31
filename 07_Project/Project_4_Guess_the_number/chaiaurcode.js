let randomNumber = parseInt(Math.random() * 100 + 1);
 
const submitButton = document.querySelector('#submitInput');
const userInput = document.querySelector('#guessField');
const previousGuesses = document.querySelector('.previousGuesses');
const guessesRemaining = document.querySelector('.guessesRemaining');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');
// let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // this function will only validate the value is between 1 to 100
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    //prevGuess.push(guess);
    if (numGuess > 10) {
      cleanup(guess);
      displayMessage(`Game Over. Ramdom number was ${randomNumber}`);
      endGame();
    } else {
      cleanup(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // this function will check that value is equal to random number.
  if (guess == randomNumber) {
    displayMessage('You guessed it right.');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low.');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high.');
  }
}

function cleanup(guess) {
  // this function will clear the value and also update the previous guess and remaining guess.
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame"> Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    lowOrHi.innerHTML = ''
    // prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
