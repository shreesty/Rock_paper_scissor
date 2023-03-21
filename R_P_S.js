
// Get Computer's choice

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase(); // Make playerSelection case-insensitive

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// console.log(playRound(playerSelection,computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper, or scissors");
        console.log("User entered", playerSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer entered: ", computerSelection);
        const result = playRound(playerSelection, computerSelection);
        console.log("Result:", result);

        if (result.startsWith("You win!")) {
            playerScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congrats!. You win the game! by: ",playerScore);
    } else if (playerScore < computerScore) {
        console.log("Oppsss!. You lose the game! by: ",computerScore);
    } else {
        console.log("Both scored equal. The game is tied!");
    }
}

// Call the game function to start playing
game();







