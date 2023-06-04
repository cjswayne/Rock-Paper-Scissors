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
    
    /*(
        playerSelection === "rock" || computerSelection === "paper" ? 

    )*/
}


let x = getComputerChoice()
console.log(x)
console.log(rpsGame("ROCK", x))

/* 
Rock beats Scissors
Paper beats Rock
Rock beats Scissors

*/
