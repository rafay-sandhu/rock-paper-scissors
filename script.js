function getComputerChoice() {
    rand_num = Math.random() * 100;
    if (rand_num < 33.33)
         return "Rock";
    else if (rand_num > 33.33 && rand_num < 66.66)
         return "Scissors";
    else return "Paper";
}

console.log(getComputerChoice());

function getHumanChoice() {

    let user_input = prompt("Please enter your choice: ");

    if (user_input == "rock") 
        return "Rock";
    else if (user_input == "scissors")
        return "Scissors";
    else return "Paper";  
}

console.log(getHumanChoice());