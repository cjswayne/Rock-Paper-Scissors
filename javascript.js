





function changeRock(){
    console.log("rock")
    playerChoice = "rock"
    var image = document.getElementById("playerChoice");
    image.src="./images/rock.png"
    rpsGame(playerChoice, getComputerChoice())
}
function changePaper(){
    console.log("paper")
    playerChoice = "paper"
    var image = document.getElementById("playerChoice");
    image.src="./images/paper.png"
    rpsGame(playerChoice, getComputerChoice())
}

function changeScissors(){
    console.log("scissors")
    playerChoice = "scissors"
    var image = document.getElementById("playerChoice");
    image.src="./images/scissors.png"
    rpsGame(playerChoice, getComputerChoice())
}

function gameBoard(winner){
    
    if (winner = "tie"){
        whoWon.textContent = "Its a Tie!"
    }else if (winner == "win"){
        whoWon.textContent = "Congratulations, You Won this round!";
  
    } else{
        whoWon.textContent = "You lost :(";
    }
    roundCounter += 1
    roundCounterText.textContent = roundCounter 

    
    
    console.log(roundCounter)
    

    
}
const whoWon = document.querySelector('.winner')
const scorePlayerText = document.querySelector('.scorePlayer')
const scoreComputerText = document.querySelector('.scoreComputer')
const roundCounterText = document.querySelector('.roundCounter')
let scorePlayer = 0
let scoreComputer = 0
let roundCounter = 0
const playerArray = []
const computerArray = []




const rock = document.querySelector('#choiceRock');
const paper = document.querySelector('#choicePaper')
const scissors = document.querySelector('#choiceScissors')
const announcer = document.querySelector(".announcer")



rock.addEventListener('click', changeRock)
paper.addEventListener('click', changePaper)
scissors.addEventListener('click', changeScissors)


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let play

    choice === 0 ? play = "rock" : (
        choice === 1 ? play = "scissors" : play = "paper"
        
    )
    var image = document.getElementById("computerChoice");
    image.src=`./images/${play}.png`
    return play

}

function rpsGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner;

    playerSelection === computerSelection ? winner = "tie" : (
        playerSelection === "rock" && computerSelection === "paper" ? winner = "lose" :(
            playerSelection === "rock" && computerSelection === "scissors" ? winner = "win": (
                playerSelection === "paper" && computerSelection === "rock" ? winner = "win":(
                    playerSelection === "paper" && computerSelection === "scissors" ? winner = "lose":(
                        playerSelection === "scissors" && computerSelection === "paper" ? winner = "win":
                        playerSelection === "scissors" && computerSelection === "rock" ? winner = "lose":(
                            winner = "ERROR"
                        )
                    ) 
                )
            )

        )

    ) 

    if (winner == "lose"){
        whoWon.textContent = "You lost"
        scoreComputer += 1
    } else if (winner == "win"){
        whoWon.textContent = "You won"
        scorePlayer += 1
    } else if (winner == "tie"){
        whoWon.textContent = "Its a Tie"
    }else if (roundCounter == 5){
        if (scorePlayer < scoreComputer){
            announcer.textContent = "you lost the game"
        }else{
            announcer.textContent = "you won the game"
        }
    }
    roundCounter += 1
    scoreComputerText.textContent = scoreComputer
    scorePlayerText.textContent = scorePlayer
    roundCounterText.textContent = roundCounter

    return winner
}


 


/*

Rock beats Scissors
Paper beats Rock
Rock beats Scissors

*/
