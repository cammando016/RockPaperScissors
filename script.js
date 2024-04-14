const gameOptions = ["rock", "paper", "scissors"];
let compScore, playerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*gameOptions.length);
    return gameOptions[computerChoice];
}

function playRound(playerSelection, computerSelection){
    let result;

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
    return result;
}

console.log(playRound(prompt("Enter your choice"), getComputerChoice()));