let humanScore=0; 
let computerScore=0;

function getComputerChoice() {
   num = Math.floor(Math.random()*3);
   if(num===0){
    return "rock";
   }else if (num===1){
    return "paper"
   }else{
    return "scissors"
   }
}


function playRound(humanChoice){ 
    const computerChoice = getComputerChoice();   
    let resultMessage ="";

if (humanChoice==="rock" && computerChoice==="paper"){
    resultMessage = "you lost! paper beats rock"
    computerScore+=1;
}else if (humanChoice==="rock" && computerChoice==="scissors"){
    resultMessage = "congrats! you won sure do rock beats scissors"
    humanScore+=1;
}else if (humanChoice==="paper" && computerChoice==="rock"){
    resultMessage = "congrats! you won sure do paper beats rock"
    humanScore+=1;
}else if (humanChoice==="paper" && computerChoice==="scissors"){
    resultMessage = "you lost! scissors beats paper"
    computerScore+=1;
}else if (humanChoice==="scissors" && computerChoice==="rock"){
    resultMessage = "you lost! rock beats scissors"
    computerScore+=1;
}else if (humanChoice==="scissors" && computerChoice==="paper"){
    resultMessage = "congrats! you won sure do scissors beats paper"
    humanScore+=1;
}else if (humanChoice===computerChoice){
    resultMessage = "it is a tie!"
}

updateScore(resultMessage);
checkWinner();
}
function updateScore(message){
    const scoreDisplay = document.querySelector("#score");
    const messageDisplay = document.querySelector("#message");

    scoreDisplay.textContent =`Score: Human ${humanScore} - Computer ${computerScore}`
    messageDisplay.textContent = message;
}

function checkWinner() {
    const messageDisplay = document.querySelector("#message");

    if (humanScore === 5) {
        messageDisplay.textContent = "You won the game! 🎉";
        disableButtons();
    } else if (computerScore === 5) {
        messageDisplay.textContent = "You lost the game. 😢";
        disableButtons();
    }
}
function disableButtons() {
    document.querySelectorAll(".buttons button").forEach(button => {
        button.disabled = true;
    });
}

const btnOne = document.querySelector("#rock");
btnOne.addEventListener("click", () => playRound("rock"));
const btnTwo = document.querySelector("#paper")
btnTwo.addEventListener("click", () => playRound("paper"));
const btnThree = document.querySelector("#scissors")
btnThree.addEventListener("click", () => playRound("scissors"));
