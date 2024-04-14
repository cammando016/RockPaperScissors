const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*gameOptions.length);
    return gameOptions[computerChoice];
}

function playRound(playerSelection, computerSelection){
    let result;
    let winner;

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
    return winner;
}

//console.log(playRound(prompt("Enter your choice"), getComputerChoice()));

function playGame(){
    for (i = 0; i < 5; i++){
        let roundWinner = playRound(prompt("Enter your choice"), getComputerChoice());
        if(roundWinner == "Computer"){
            compScore++;
        }
        else if (roundWinner == "Player") {
            playerScore++;
        }

        console.log(`Score\nPlayer: ${playerScore}\nComputer: ${compScore}`);
    }
}

function checkWinner(compScore, playerScore){
    if (compScore > playerScore){
        return "Final Winner: Computer";
    }
    else if(compScore < playerScore){
        return "Final Winner: You!";
    }
    else{
        return "Final Result: It's a tie";
    }
}

playGame();
console.log(checkWinner(compScore, playerScore));