let wins = 0;
let losses = 0;
let draws = 0;
    
function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*moves.length);
    return moves[randomIndex];
}

function playerSelection(){
    const rock = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rock.addEventListener("click", function() {
        playOneRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", function() {
        playOneRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", function() {
        playOneRound("scissors", getComputerChoice());
    });
}

function playOneRound(userInput, computerInput){
    let outcome; 

    const container = document.querySelector(".choice");
    // Clear previous choices
    container.innerHTML = '';
    
    if (userInput === "rock"){
        if (computerInput === "rock"){
            console.log("It's a draw! The computer chose rock!")
            outcome = "draw"
        } else if (computerInput === "paper"){
            console.log("You lose! The computer chose paper!")
            outcome = "lose"
        } else if (computerInput === "scissors"){
            console.log("You win! The Computer chose rock!")
            outcome = "win"
        }
    }

    if (userInput === "paper"){
        if (computerInput === "paper"){
            console.log("It's a draw! The computer chose paper!")
            outcome = "draw"
        } else if (computerInput === "rock"){
            console.log("You win! The computer chose rock!")
            outcome = "win"
        } else if (computerInput === "scissors"){
            console.log("You lose! The Computer chose scissors!")
            outcome = "lose"

        }
    }

    if (userInput === "scissors"){
        if (computerInput === "scissors"){
            console.log("It's a draw! The computer chose scissors!")
            outcome = "draw"
        } else if (computerInput === "rock"){
            console.log("You lose! The computer chose rock!")
            outcome = "lose"
        } else if (computerInput === "paper"){
            console.log("You win! The Computer chose paper!")
            outcome = "win"
        }
    }
    updateScore(outcome)
    displayChoices(userInput,computerInput)

    return outcome
}

function displayChoices(user, computer) {
    const container = document.querySelector(".choice");

    const divPlayer = document.createElement('div');
    divPlayer.classList.add('player-choice'); 

    const playerImage = document.createElement('img');
    divPlayer.textContent = `You chose ${user}`;
    playerImage.src = `${user}.jpg`;
    playerImage.alt = `Your choice: ${user}`;
    playerImage.classList.add('choice-image'); // Apply a CSS class for styling
    divPlayer.appendChild(playerImage); // Add the image as a child of the div

    
    container.appendChild(divPlayer);
    const divComputer = document.createElement('div');
    divComputer.classList.add('computer-choice'); 
    divComputer.textContent = `The computer chose ${computer}`;
    const computerImage = document.createElement('img');
    computerImage.src = `${computer}.jpg`;
    computerImage.alt = `Computer's choice: ${computer}`;
    computerImage.classList.add('choice-image'); // Apply a CSS class for styling
    container.appendChild(divComputer);
    divComputer.appendChild(computerImage); // Add the image as a child of the div
}


function updateScore(result) {
    if (result === "win"){
        wins += 1;
    }else if (result==="lose"){
        losses += 1;
    } else if (result === "draw"){
        draws += 1;
    }

    const counter = document.getElementById("counter");
    counter.textContent = `Wins: ${wins} | Losses: ${losses} | Draws:${draws} `;
    if (wins === 3 || losses === 3) {
        gameOver();
    }
}


function gameOver() {
document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;

if (wins > losses) {
    counter.textContent = `You win! You won ${wins} rounds and the computer won ${losses} rounds`;
} else if (losses > wins) {
    counter.textContent = `You lose! You won ${wins} rounds and the computer won ${losses} rounds`;
}
}

// This function initiates the game and only needs to be called once when the script runs
function playGame(){
    console.log("Let's play a best of three!");
    playerSelection(); // This sets up the event listeners
}

function resetGame(){
    wins = 0;
    losses = 0;
    draws = 0;

    const container = document.querySelector(".choice");
    // Clear previous choices
    container.innerHTML = '';
    
    const counter = document.getElementById("counter");
    counter.textContent = `Wins: ${wins} | Losses: ${losses} | Draws:${draws}`;

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

playGame();

document.getElementById("reset").addEventListener("click", function() {
    resetGame()
})
