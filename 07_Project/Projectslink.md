# Project related to DOM
# codesandbox.io
# stackblitz.com
## Project Link

[Stackblitz project link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 Solution

```javascript
console.log("Nishant")

var buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',
    function (e) {
      console.log(e);
      console.log(e.target);
      if(e.target.id == 'grey'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id == 'white'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id == 'blue'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id == 'yellow'){
        body.style.backgroundColor = e.target.id
      }
    }
  )
});


```


## Project 2 Solution

```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    // result.innerHTML = `<span>${BMI}</span>`;
    console.log(result.innerHTML);
    if (BMI < 18.6) {
      result.innerHTML = `<span>${BMI}</span> <br /> Under Weight`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      result.innerHTML = `<span>${BMI}</span> <br /> Normal Weight`;
    } else if (BMI > 24.9) {
      result.innerHTML = `<span>${BMI}</span> <br /> Overweight`;
    }
  }
});


```


## Project 3 Solution

```javascript

const clock = document.getElementById('clock');
const clock1 = document.querySelector('#clock');

const date = new Date();
console.log(date.toLocaleTimeString());

// cronjob will use in server but setInterval is used to run any function concurrently at particular interval.
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 Solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
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
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Ramdom number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
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

function displayGuess(guess) {
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
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```