console.log("hello world!")
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

function getHumanChoice(){
   return prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice){        
if (humanChoice==="rock" && computerChoice==="paper"){
    console.log("you lost! paper beats rock")
    computerScore+=1;
}else if (humanChoice==="rock" && computerChoice==="scissors"){
    console.log("congrats! you won sure do rock beats scissors")
    humanScore+=1;
}else if (humanChoice==="paper" && computerChoice==="rock"){
    console.log("congrats! you won sure do paper beats rock")
    humanScore+=1;
}else if (humanChoice==="paper" && computerChoice==="scissors"){
    console.log("you lost! scissors beats paper")
    computerScore+=1;
}else if (humanChoice==="scissors" && computerChoice==="rock"){
    console.log("you lost! rock beats scissors")
    computerScore+=1;
}else if (humanChoice==="scissors" && computerChoice==="paper"){
    console.log("congrats! you won sure do scissors beats paper")
    humanScore+=1;
}else if (humanChoice===computerChoice){
    console.log("it is a tie!")
}
}

function playGame(){
    let roundCount = 0;
    while(roundCount<5){
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice(); 
      const validChoices = ["rock", "paper", "scissors"];
        if (validChoices.includes(humanSelection)) { 
            playRound(humanSelection, computerSelection);
            console.log(`humanscore: ${humanScore} - computerscore: ${computerScore}`)
            roundCount+=1;
        }else{
              console.log("Invalid input. Please enter rock, paper, or scissors.");
        }    
    }
  
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();