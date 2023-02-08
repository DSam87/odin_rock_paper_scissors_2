const choice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let playerChoice = "";
let computerChoice = "";

let roundIteration = 0;

let roundNumberElement = document.querySelector(".round-number-span");
let gameActionElement = document.querySelector(".game-action");
let computerScoreElement = document.querySelector(".computer-score-span");
let playerScoreElement = document.querySelector(".player-score-span");


let playerButtons = document.querySelectorAll(".player-choice button");

playerButtons.forEach((el, index) => {
    el.addEventListener("click", (e) => {

        if (checkIfGameIsOver()) {
            gameOver();
            return;
        }

        e.stopPropagation();
        playerChoice = +index;
        computerChoice = +getComputerChoice();
        playRound();
    })
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    return randomNumber;
}

function compareChoices(playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 2) {
        gameActionElement.textContent = `You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`;
        return (`You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`);
    } else if (playerSelection === 0 && computerSelection === 1) {
        gameActionElement.textContent = `You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`;
        return (`You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`);
    } else if (playerSelection === 1 && computerSelection === 0) {
        gameActionElement.textContent = `You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`;
        return (`You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`);
    } else if (playerSelection === 1 && computerSelection === 2) {
        gameActionElement.textContent = `You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`;
        return (`You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`);
    } else if (playerSelection === 2 && computerSelection === 1) {
        gameActionElement.textContent = `You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`;
        return (`You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`);
    } else if (playerSelection === 2 && computerSelection === 0) {
        gameActionElement.textContent = `You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`;
        return (`You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`);
    } else {
        gameActionElement.textContent = `A tie! ${choice[playerSelection]} is the same as ${choice[computerSelection]}`;
        return (`A tie! ${choice[playerSelection]} is the same as ${choice[computerSelection]}`);
    }
}

function playRound() {
    // check incoming string
    // if containes Win or Lose, increment the playerscore and computerscore
    let endGameMessage = compareChoices(playerChoice, computerChoice);

    ++roundIteration;

    if (endGameMessage.includes("Win")) {
        console.log("Win");
        ++playerScore;
    }

    if (endGameMessage.includes("Lose")) {
        console.log("Lose");
        ++computerScore;
    }

    if (endGameMessage.includes("Tie")) {
        console.log("Tie");
    }
    updateUi();
    resetSelections();
}

function resetSelections() {
    playerChoice = null;
    computerChoice = null;
}

function gameOver() {
    alert(`The winner is ${playerScore > computerScore ? "Player!" : playerScore < computerScore ? "Computer!" : "Tie!"}`);
    resetSelections();
    roundIteration = 0;
    computerScore = 0;
    playerScore = 0;
    roundIteration = 0;
    playerChoice = null;
    computerChoice = null;
    gameActionElement.textContent = "..."
    updateUi();
}

function checkIfGameIsOver() {
    if (roundIteration === 5) {

        return true;
    } else {
        return false;
    }
}

function updateUi() {
    roundNumberElement.textContent = roundIteration;
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;
}

