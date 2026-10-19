let num = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subm')
const inputGuess = document.querySelector('#guess')
const guesses = document.querySelector('.guesses')
const lastresult = document.querySelector('.lastresult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1;

let playGame = true;

if(playGame){
    addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(inputGuess.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)) {
        alert('please enter a valid number')
    } else if(guess < 1) {
        alert('please enter a number greater than 1')
    }  else if(guess > 100) {
        alert('please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuesses === 10) {
            displayGuess(guess)
            displayMessage(`Game over the random number was ${num}`)
            endGame()
        } else {
        displayGuess(guess)
        checkGuess(guess)
        } 
    }
}

function checkGuess(guess) {
    if(guess === num) {
        displayMessage(`you guessed the right number`)
        endGame()
    } else if(guess < num) {
        displayMessage(`number is too low`)
    } else if(guess > num) {
        displayMessage('number is too high')
    }
}

function displayGuess(guess){
    inputGuess.value = ''
    guesses.innerHTML += `${guess} `
    numGuesses++;
    lastresult.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    inputGuess.value = ''
    inputGuess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<button id="newGame">Start new game</button>'
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newG = document.querySelector('#newGame')
    newG.addEventListener('click', function(e){
    num = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuesses = 1
    lastresult.innerHTML = `${11- numGuesses}`
    inputGuess.removeAttribute('disabled')
    resultParas.removeChild(p)

        playGame = true
    })
}