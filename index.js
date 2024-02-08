function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = choices[Math.floor(Math.random() * choices.length)];
    return(randomIndex);
}

const choices = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
        return 0;}
    else if ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock"))
        {console.log(`You won! ${playerSelection} beats ${computerSelection}.`)
        return 1;}
    else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper"))
        {console.log(`You lost.. ${computerSelection} beats ${playerSelection}.`);
        return -1;}
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper, or scissors");
        console.log(playerSelection.toLowerCase());
    let computerSelection = getComputerChoice();
        console.log(computerSelection);
    let setup = playRound(playerSelection, computerSelection);
    console.log(setup);

    if (setup == 1) {
        playerScore++;}
    else if (setup == -1) {
        computerScore++;}
    }
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore > computerScore){
        console.log("You have won!");}
    else if (playerScore < computerScore) {
        console.log("You have lost!");}
    }


playGame();









