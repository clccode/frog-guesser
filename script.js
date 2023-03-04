const guess = document.getElementById('guess')
const guessBtn = document.getElementById('guess-btn')
const resetBtn = document.getElementById('reset-btn')
const numGuessed = document.getElementById('num-guessed')
const frogs = document.getElementById('frogs')

frogs.textContent = ''
resetBtn.hidden = true

guessBtn.addEventListener('click', guessFrogs)
resetBtn.addEventListener('click', reset)

function guessFrogs() {
    guess.value > 1 ? numGuessed.textContent = `You guessed ${guess.value} frogs` 
    : numGuessed.textContent = `You guessed ${guess.value} frog`

    setTimeout(() => {
        frogs.innerHTML = displayFrogs()
        resetBtn.hidden = false
    }, 1000)
}

function getRandomFrogs() {
    return new Array(Math.floor(Math.random() * 10) + 1).fill('🐸')
}

function displayFrogs() {
    return getRandomFrogs().map(function(frog) {
        return `<div class="frog">${frog}</div>`
    }).join('')
}

function reset() {
    guess.value = 0
    numGuessed.textContent = ''
    frogs.textContent = ''
    resetBtn.hidden = true
}