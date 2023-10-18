// Computer chooses a number from 0-3
// 0 = Rock, 1 = Paper, 2 = Scissors
// create win variable (True for player win, False for player lost)
let win = 0;
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    return randNum;
}

// write function declaration for playRound()
function playRound(playerSelection, computerSelection) {
    // write parameters as playerSelection, computerSelection
    let player = playerSelection.toUpperCase();
    // compare the parameters
        // playerSelection is Rock
        if (player === "ROCK" ) {
            // computerSelection is Paper
            if (computerSelection === 1){
                win = false;
                return "You lose! Paper beats rock!";
            // computerSelection is Scissors
            } else if (computerSelection === 2){
                win = true;
                return "You win! Rock beats scissors!";
            } else {
                return "It's a tie!";
            }
        // playerSelection is Paper
        } else if (player === "PAPER"){
            if (computerSelection === 0){
                win = true;
                return "You win! Paper beats rock!";
            } else if (computerSelection === 2){
                win = false;
                return "You lose! Scissors beats rock!";
            } else {
                return "It's a tie.";
            }
        // playerSelection is Scissors
        } else if (player === "SCISSORS"){
            if (computerSelection === 0){
                win = false;
                return "You lost! Rock beats scissors!";
            } else if (computerSelection === 1){
                win = true;
                return "You won! Scissors beats paper!";
            } else {
                return "It's a tie.";
            }
        } else {
            return "Not a valid value.";
        }
    // return who won
}

// user choices events
const buttons = document.getElementsByTagName("button");
let userChoice;
let playerWins = 0;
let botWins = 0;
let whoWon = document.createElement("div");
const buttonPressed = e => {
    whoWon.remove();
    userChoice = e.target.id;
    console.log(typeof userChoice);
    if (userChoice.toUpperCase() == 'ROCK'){
        console.log(playRound('rock', getComputerChoice()));
    } else if (userChoice.toUpperCase() == 'PAPER'){
        console.log(playRound('paper', getComputerChoice()));
    } else if (userChoice.toUpperCase() == 'SCISSORS'){
        console.log(playRound('scissors', getComputerChoice()));
    } else {
        console.log("How did you even get here.");
    }
    const playerCounter = document.getElementById("player-counter");
    const botCounter = document.getElementById("bot-counter");
    if (win == true){
        playerWins++;
        console.log(playerWins);
        playerCounter.innerHTML = playerWins;
    } else if (win == false){
        botWins++;
        console.log(botWins);
        botCounter.innerHTML = botWins;
    }
    whoWon = document.createElement("div");

    if(playerWins == 5){
        whoWon.appendChild(document.createTextNode('You won!'));
        document.body.appendChild(whoWon);
        playerWins = 0;
        botWins = 0;
    } else if (botWins == 5){
        whoWon.appendChild(document.createTextNode('The bot won!'));
        document.body.appendChild(whoWon);
        playerWins = 0;
        botWins = 0;
    }
  }
for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}





