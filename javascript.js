



function changeImage(){
    console.log("hey gfuck")
    var image = document.getElementById("computerChoice");
    image.src="./images/scissors.png"
}

function changeRock(){
    console.log("rock")
    playerChoice = "rock"
}
function changePaper(){
    console.log("Paper")
    playerChoice = "Paper"
}

function changeScissors(){
    console.log("Paper")
    playerChoice = "Paper"
}

let playerChoice = ""



const rock = document.querySelector('#choiceRock');
const paper = document.querySelector('#choicePaper')

const test = document.querySelector('#btn')

rock.addEventListener('click', () => {
    var image = document.getElementById("computerChoice");
    image.src="./images/scissors.png"
});

test.addEventListener('click', changePaper)







 













/*
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let play

    choice === 0 ? play = "rock" : (
        choice === 1 ? play = "scissors" : play = "paper"
        
    )
    return play

}

function rpsGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner;

    playerSelection === computerSelection ? winner = "Its a Tie" : (
        playerSelection === "rock" && computerSelection === "paper" ? winner = "You lose! Paper beats Rock!" :(
            playerSelection === "rock" && computerSelection === "scissors" ? winner = "You win! Rock beats Scissors": (
                playerSelection === "paper" && computerSelection === "rock" ? winner = "You win! Paper beats Rock":(
                    playerSelection === "paper" && computerSelection === "scissors" ? winner = "You lose! Scissors beats Paper":(
                        playerSelection === "scissors" && computerSelection === "paper" ? winner = "You win! Scissors beats Paper":
                        playerSelection === "scissors" && computerSelection === "rock" ? winner = "You lose! Rock beats scissors":(
                            winner = "something is wrong"
                        )
                    ) 
                )
            )

        )

    ) 

    return winner
    
    (
        playerSelection === "rock" || computerSelection === "paper" ? 

    )
}

let computerChoice = getComputerChoice()
let playerChoice = prompt("Enter either rock, paper or scissors")
 
console.log(rpsGame(playerChoice, computerChoice))
}


Rock beats Scissors
Paper beats Rock
Rock beats Scissors

*/
