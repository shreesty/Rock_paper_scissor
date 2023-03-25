
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let playerSelection;
let computerSelection=getComputerChoice();
let result;


choiceBtn.forEach(button => button.addEventListener("click", () => {

    playerSelection= button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = playRound();
}));

function getComputerChoice() 
{
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function playRound(){
    if (playerSelection == computerSelection) {
        return "Draw! It's a tie!";
    }
    else if ((playerSelection == 'ROCK' && computerSelection == 'SCISSOR') || (playerSelection == 'PAPER' && computerSelection == 'ROCK') || (playerSelection == 'SCISSOR' && computerSelection == 'PAPER')) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}





// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//         const result = playRound(playerSelection, computerSelection);
//         console.log("Result:", result);

//         if (result.startsWith("You win!")) {
//             playerScore++;
//         } else if (result.startsWith("You lose!")) {
//             computerScore++;
//         }

//     if (playerScore > computerScore) {
//         return("Congrats!. You win the game!");
//     } else if (playerScore < computerScore) {
//         return("Oppsss!. You lose the game!");
//     } else {
//         return("Both scored equal.The game is tied!");
//     }
// }

// // Call the game function to start playing
// game();