function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let play

    choice === 0 ? play = "Rock" : (
        choice === 1 ? play = "Scissors" : play = "Paper"
        
    )
    return play

}

console.log(getComputerChoice())