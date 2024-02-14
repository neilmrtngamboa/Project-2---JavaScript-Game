let userScore = 0;
let computerScore = 0;

function makeComputerChoice(){
    const choices = [1,2,3,4,5,6];
    const roll = choices[Math.floor(Math.random() * 6)];
    return(roll);

}

function userChoice(){
    const userChoices = [1,2,3,4,5,6];
    const userRoll = userChoices[Math.floor(Math.random() * 6)];
    return(userRoll);
}

document.querySelector('#rollButton').addEventListener('click', () => {

    const computerRoll = makeComputerChoice();
    const userRandomroll = userChoice();

    if (userRandomroll > computerRoll){
        alert(`You have rolled ${userRandomroll} and the computer rolled ${computerRoll}. You win this round!`);
    } else if (computerRoll > userRandomroll){
        alert(`You have rolled ${userRandomroll} and the computer rolled ${computerRoll}. You lose this round 🥺`);
    }
    
});


