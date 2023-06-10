





function changeRock(){
    console.log("rock")
    playerChoice = "rock"
    var image = document.getElementById("playerChoice");
    image.src="./images/rock.png"
    gameBoard(rpsGame(playerChoice, getComputerChoice()))
}
function changePaper(){
    console.log("paper")
    playerChoice = "paper"
    var image = document.getElementById("playerChoice");
    image.src="./images/paper.png"
    gameBoard(rpsGame(playerChoice, getComputerChoice()))
}

function changeScissors(){
    console.log("scissors")
    playerChoice = "scissors"
    var image = document.getElementById("playerChoice");
    image.src="./images/scissors.png"
    gameBoard(rpsGame(playerChoice, getComputerChoice()))
}

function gameBoard(winner){

    
    
    
    whoWon.textContent = winner

    
}
const whoWon = document.querySelector('.winner')
const scorePlayer = document.querySelector('.scorePlayer')
const scoreComputer = document.querySelector('.scoreComputer')
const roundCounter = document.querySelector('.roundCounter')
let playerChoice = ""



const rock = document.querySelector('#choiceRock');
const paper = document.querySelector('#choicePaper')
const scissors = document.querySelector('#choiceScissors')



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
    console.log(winner)
    return winner
}


 


/*

Rock beats Scissors
Paper beats Rock
Rock beats Scissors

*/
