function getComputerChoice() {
    rand_num = Math.random() * 100;
    if (rand_num < 33.33)
         return "Rock";
    else if (rand_num > 33.33 && rand_num < 66.66)
         return "Scissors";
    else return "Paper";
}

function getHumanChoice() {

    let user_input = prompt("Please enter your choice: ");
    user_input = user_input.toLowerCase();

    if (user_input == "rock") 
        return "Rock";
    else if (user_input == "scissors")
        return "Scissors";
    else return "Paper";  
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("It's a tie!");
    }
    else if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("It's a tie!");
    }
    else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("It's a tie!");
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("The computer wins!");
        computerScore++;
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("The human wins!");
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("The human wins!");
        humanScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("The computer wins!");
        computerScore++;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("The computer wins!");
        computerScore++;
    }
    else {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("The human wins!");
        humanScore++;
    }
}

humanScore = 0;
computerScore = 0;

function playGame() {
    h_score = 0
    c_score = 0

    playRound(getHumanChoice(), getComputerChoice());

    humanScore += h_score;
    computerScore += c_score;

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

for (let i = 0; i < 5; i++){
    playGame();
}