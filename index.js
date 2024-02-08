function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = choices[Math.floor(Math.random() * choices.length)];
    return(randomIndex);
}



let playerSelection = prompt("Choose rock, paper, or scissors");
    console.log(playerSelection.toLowerCase());
let computerSelection = getComputerChoice();
    console.log(computerSelection);
playRound(playerSelection, computerSelection);


function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection)
        console.log("It's a tie!");
    else if ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock"))
        console.log('You won!') ;
    else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper"))
        console.log(`You lost.. ${computerSelection} beats ${playerSelection}`);
}

const choices = ['Rock', 'Paper', 'Scissors'];




