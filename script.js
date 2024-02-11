function game() {
    let playerScore = 0;
    let computerScore = 0; 
    const btns = document.querySelectorAll('button');

    function getComputerChoice () {
        let choice = Math.floor(Math.random()*3+1);
        if (choice == 1) {
            return string = "Rock";
        } else if (choice == 2) {
            return string = "Paper";
        } else if (choice == 3) {
            return string = "Scissors";
        }
    }

    function gameRound(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) {
            return result = "It's a tie!";
        } else if (playerChoice == "Rock" && computerChoice == "Paper") {
            return result = "You lose! Paper beats rock.";
        } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
            return result = "You win! Rock beats scissors.";
        } else if (playerChoice == "Paper" && computerChoice == "Rock") {
            return result = "You win! Paper beats rock.";
        } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
            return result = "You lose! Scissors beat paper.";
        } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
            return result = "You lose! Rock beats scissors.";
        } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
            return result = "You win! Scissors beat paper.";
        }
    }

    function buttonPlay(callback) {
        btns.forEach((button) => {
        button.addEventListener('click', () => {
                let playerChoice = button.textContent;
                let computerChoice = getComputerChoice();
                let result = gameRound(playerChoice, computerChoice);
                let displayPlayerChoice = document.querySelector('#playerChoice');
                let displayComputerChoice = document.querySelector('#computerChoice');
                let displayPlayerScore = document.querySelector('#playerScore');
                let displayComputerScore = document.querySelector('#computerScore');
                let Player = document.querySelector('#Player');
                let Computer = document.querySelector('#Computer');
                let displayResults = document.querySelector('#results');   
                displayResults.setAttribute("background-color","lightgray");
                displayResults.setAttribute("border-radius","24px");
                displayResults.setAttribute("border","solid black");
                Player.textContent = "Player:";
                Computer.textContent = "Computer:";
                displayPlayerChoice.textContent = playerChoice;
                displayComputerChoice.textContent = computerChoice;
            if (result.substring(4,7) == "win") {
                playerScore += 1;
                displayPlayerScore.textContent = playerScore;
            } else if (result.substring(4,8) == "lose") {
                computerScore += 1;
                displayComputerScore.textContent = computerScore;
            }
            
        if (playerScore == 5){
            console.log("You won!");
            computerScore = 0;
            playerScore = 0;
            location.reload(true);
        } else if (computerScore == 5) {
            console.log("You lost!");
            computerScore = 0;
            playerScore = 0;
            location.reload(true);
        }
        });
    })
    }

    buttonPlay();
}

game();