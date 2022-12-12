let computerGuess;
let userGuesses = []
let attempts = 0;
let maxGuess;

let low = 1;
let high = 100;

function updateRange(){
    const rangeOutput = document.getElementById("rangeOutput")
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + "%";
    rangeOutput.style.marginRight = 100 -  high + "%";
    rangeOutput.classList.add("flash")
    
    const  lowvalue = document.getElementById("low")
    lowvalue.style.flex = low + "%";
    lowvalue.style.background = "#ff793f";

    const  space = document.getElementById("space")
    space.style.flex = high - low + "%";
    space.style.background = "##33d9b2";

    const  highvalue = document.getElementById("high")
    highvalue.style.flex = 100 - high + "%";
    highvalue.style.background = "#ff793f";

}

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly")
}

function newGame() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
    document.getElementById("WelcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
    maxGuess = 10;
    startGameView();
}

function hardMode() {
    maxGuess = 5;
    startGameView();
}

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempts++
    document.getElementById("attempts").innerHTML = attempts;
    if (attempts < maxGuess) {
        if (userGuess > computerGuess) {
            if(userGuess< high) high = userGuess;
            document.getElementById("textOutput").innerHTML = "Your Guess is to high";
            document.getElementById("inputBox").value = "";
        } else if (userGuess < computerGuess) {
            if(userGuess > low) low = userGuess;
            document.getElementById("textOutput").innerHTML = "Your Guess is to Low";
            document.getElementById("inputBox").value = "";
        } else {
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts + " attempts";
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "YOU LOSE!, <br> The number was " + computerGuess;
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "YOU LOSE!, <br> The number was " + computerGuess;
            gameEnded();
        } else {
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts + " attempts";
            gameEnded();
        }
    }
    updateRange();
}