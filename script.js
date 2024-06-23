const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
let gameOver = false;

const playerScoreLabel = document.querySelector("#player-score");
const compScoreLabel = document.querySelector("#comp-score");

playerScoreLabel.textContent = playerScore;
compScoreLabel.textContent = compScore;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*gameOptions.length);
    return gameOptions[computerChoice];
}

let playerChoice = document.querySelector("#playerChoice");
playerChoice.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            playerSelection = target.id;
            break;
        case "paper":
            playerSelection = target.id;
            break;
        case "scissors":
            playerSelection = target.id;
            break;
    }

    console.log(playerSelection);

    playRound(playerSelection, getComputerChoice());
})

function playRound(playerSelection, computerSelection){
    let result;
    let winner;
    gameOver = false;

    console.log(`Player Choice: ${playerSelection}`);
    console.log(`Computer Choice: ${computerSelection}`);

    if (playerSelection === computerSelection){
        result = "It's a tie";
    }
    else if (playerSelection === "rock"){
        switch(computerSelection){
            case "paper":
                result = "You lose, paper covers rock";
                break; 
            case "scissors":
                result = "You win, rock crushes scissors";
                break;
        }
    }
    else if (playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                result = "You win, paper covers rock";
                break;
            case "scissors":
                result = "You lose, scissors cut paper";
                break;
        }
    }
    else {
        switch(computerSelection){
            case "rock":
                result = "You lose, rock crushes scissors";
                break;
            case "paper":
                result = "You win, scissors cut paper";
                break;
        }
    }
    console.log(result);
    if (result.charAt(4) === "l"){
        winner = "Computer";

    }
    else if (result.charAt(4) === "w"){
        winner = "Player";
    }
    else {winner = "Tie";}

    updateScore(winner);
    checkWinner(playerScore, compScore);

    if(gameOver){
        resetScores();
    }
}

function checkWinner(playerScore, compScore) {
    if (playerScore === 5){
        alert("You Win!");
        gameOver = true;
    }
    if (compScore === 5){
        alert("You lose :(");
        gameOver = true;
    }
}

function resetScores() {
    playerScore = 0;
    compScore = 0;
    playerScoreLabel.textContent = "0";
    compScoreLabel.textContent = "0";
}

function updateScore(winner) {
    if (winner === "Player") {
        playerScore++;
        playerScoreLabel.textContent = playerScore;
    }
    else if (winner === "Computer") {
        compScore++;
        compScoreLabel.textContent = compScore;
    }
}