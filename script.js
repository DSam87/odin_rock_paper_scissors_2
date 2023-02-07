


// Player starts game
// Player makes choice, then computer makes chice
// compare choice
// add winner score
// reset player and computer choice 
// wait for player to select another choice.


const choice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let playerChoice = "";
let computerChoice = "";


let playerButtons = document.querySelectorAll("button");

playerButtons.forEach((el, index) =>{
    el.addEventListener("click", (e)=>{
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
    let endGameMessage = compareChoices(playerChoice, computerChoice);

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
    }

    resetSelections();
}

function resetSelections(){
    playerChoice = null;
    computerChoice = null;
}

function game() {
    alert(`The winner is ${playerScore > computerScore ? "Player!" : playerScore < computerScore ? "Computer!" : "Nobody!"}`);
}

