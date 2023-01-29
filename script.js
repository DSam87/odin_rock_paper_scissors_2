console.log("Hello world");

const choice = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    let stringChoice = choice[randomNumber];
    console.log(stringChoice);

    return randomNumber;
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
    let playerSelectionNumber;

    for (let i = 0; i < playerSelection.length; i++) {
        if (choice[i] === playerSelection) {
            playerSelectionNumber = i;
        }
        else {
            continue;
        }
    }
}

function compareChoices(playerSelection, computerSelection) {

    // compare

    // call anouse winner with 
}

compareChoices(getPlayerChoice(), getComputerChoice());