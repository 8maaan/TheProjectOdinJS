let score = 0;


function getComputerChoice(){
    let randomizer = Math.floor((Math.random() * 3) + 1);
    let computerChoice = "";
    switch( randomizer ) {
        case 1:
            computerChoice = "Rock"
            break;

        case 2:
            computerChoice = "Paper"
            break;
            
        case 3:
            computerChoice = "Scissors"
        
    }

    return computerChoice;
}

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    let result = "";

    //capitalized first letter
    const PS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); 

    if (PS === computerSelection) {
        result = "It's a draw! The computer also chose " + computerSelection + ".";
        
    } else if (
        (PS === "Rock" && computerSelection === "Scissors") ||
        (PS === "Scissors" && computerSelection === "Paper") ||
        (PS === "Paper" && computerSelection === "Rock")) {
        result = "You Win! " + PS + " beats " + computerSelection;
        score++;

    } else {
        result = "You Lose! " + computerSelection + " beats " + PS;
        
    }

    return result;

}

function game(){
    let i = 0;
    while (i < 5) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        i++;
    }
    console.log("Thanks for playing the game! Your score is: " + score + "/5");
}

console.log(game());