let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

// let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame){

  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert('Please enter a valid number')
  }
  else {
    // prevGuess.push(guess)
    if(numGuesses >= 10) {
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage('You guessed it right!')
  }
  else if(guess < randomNumber){
    displayMessage('Number is too low')
  }
  else{
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuesses++
  remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) { // interacts with DOM directly
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame" style="color: green; cursor: pointer;"> Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newgame = document.querySelector('#newGame')
  newgame.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    // prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuesses}`
    userInput.removeAttribute('disable')
    startOver.removeChild(p)
    playGame = true
  })
}