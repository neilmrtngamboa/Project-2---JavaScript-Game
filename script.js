let userScore = 0;
let computerScore = 0;

function makeComputerChoice(){
    const choices = [1,2,3,4,5,6];
    const choice = choices[Math.floor(Math.random() * 7)];
    return(choice);

}