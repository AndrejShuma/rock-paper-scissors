
const array = ["rock", "paper", "scissors"];

function getComputerChoice (){
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
}

let computerPoints =0;
let playerPoints =0;

function playRound(playerChoice, computerChoice) {
    let result = "Invalid input";
    if(playerChoice === "rock"){
        
        if(computerChoice === "rock"){
            result = "It's a draw";
        }
        else if(computerChoice === "paper"){
            result = "Computer Wins - Paper beats Rock";
            
        }
        else if(computerChoice === "scissors"){
            result = "You Win - Rock beats Scissors";
            
        }
    }
    if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            result = "You Win - Paper beats Rock";
            
                }
        else if(computerChoice === "paper"){
            result = "It's a draw";
                }
        else if(computerChoice === "scissors"){
            result = "Computer Wins - Scissors beat Paper ";   
            
                }
    }
    if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            result = "Computer Wins - Rock beats Scissors ";  
            
        }
        else if(computerChoice === "paper"){
            result = "You Win - Scissors beat Paper";
            
        }
        else if(computerChoice === "scissors"){
            result = "It's a draw";
        }
    }
    return result;
  }

  function playGame(){
    for(let i=0;i<5;i++){
        let playerChoice = window.prompt("Your choice: ");
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        let rez=playRound(playerChoice, computerChoice);
        console.log(rez);
        if(rez[0]==='Y') playerPoints++;
        else if(rez[0]==="C")computerPoints++;
    }
  }
  playGame();
  console.log(`The score is ${playerPoints} : ${computerPoints}`);
  if (playerPoints === computerPoints) console.log("Draw");
  else if(playerPoints > computerPoints) console.log("You win");
  else console.log("Computer wins");
 