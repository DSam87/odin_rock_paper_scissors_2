
const choice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
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
    return playerSelectionNumber;
}

function compareChoices(playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 2) {
        return (`You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`);
    } else if (playerSelection === 0 && computerSelection === 1) {
        return (`You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`);
    } else if (playerSelection === 1 && computerSelection === 0){
        return (`You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`);
    }else if (playerSelection === 1 && computerSelection === 2){
        return (`You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`);
    }else if (playerSelection === 2 && computerSelection === 1){
        return (`You Win! ${choice[playerSelection]} beats ${choice[computerSelection]}!`);
    }else if (playerSelection === 2 && computerSelection === 0){
        return (`You Lose! ${choice[computerSelection]} beats ${choice[playerSelection]}!`);
    } else {
        return ("Tie");
    }
}

function playRound() {
    // check incoming string
    // if containes Win or Lose, increment the playerscore and computerscore
    let endGameMessage = compareChoices(getPlayerChoice(), getComputerChoice());

    if (endGameMessage.includes("Win")) {
        console.log("Win");
        ++playerScore;
    }

    if (endGameMessage.includes("Lose")) {
        console.log("Lose");
        ++computerScore;
    }

    if(endGameMessage.includes("Tie"))
    {
        console.log("Tie");
        return;
    }


}


function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    alert(`The winner is ${playerScore > computerScore ? "Player!" : playerScore < computerScore ? "Computer!" : "Nobody!"}`);
}

game();