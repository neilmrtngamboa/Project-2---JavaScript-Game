//Below is the variables used for the scores and round no.
let userScore = 0;
let computerScore = 0;
let roundNo = 1;

//To make the computer/AI to roll a random dice number
function makeComputerChoice(){
    const choices = [1,2,3,4,5,6];
    const roll = choices[Math.floor(Math.random() * 6)];
    return(roll);

}
//To make the user roll a random dice number
function userChoice(){
    const userChoices = [1,2,3,4,5,6];
    const userRoll = userChoices[Math.floor(Math.random() * 6)];
    return(userRoll);
}

//This event listener is when you click the 'roll dice button'
document.querySelector('#rollButton').addEventListener('click', () => {
    document.querySelector('#roundNumber').innerHTML = roundNo; //To change the round no content in the webpage
    const diceRoll = document.querySelector('#snd1');
    diceRoll.play(); //This is where the dice roll sound will play after clicking the 'roll dice button'
    const computerRoll = makeComputerChoice(); // Converting function into variables
    const userRandomroll = userChoice();    // Converting function into variables
    let winSound = document.querySelector('#snd2');
    let loseSound = document.querySelector('#snd3');



    roundNo++;   // This is where will the round number will add 1 per round finish
    //Below is the conditon wherein the user will win or lose, after every roll, there is a condition that will show a modal and a sound will play
    if (userRandomroll > computerRoll){
        let winRound = new bootstrap.Modal(document.getElementById('roundModal'))
        document.querySelector('#roundResultMsg').innerHTML = `You have rolled ${userRandomroll} and the computer rolled ${computerRoll}. You win this round!`;
        winRound.show();
        winSound.play();
        userScore++; //This is where the score will add 1 after every round win

    } else if (computerRoll > userRandomroll){
        let loseRound = new bootstrap.Modal(document.getElementById('roundModal'))
        document.querySelector('#roundResultMsg').innerHTML = `You have rolled ${userRandomroll} and the computer rolled ${computerRoll}. You lose this round 🥺`;
        loseRound.show();
        loseSound.play();
        computerScore++; //This is where the score will add 1 after every round win
        
    } else if (userRandomroll == computerRoll){ // This condition is where the rolled dice by the user and computer is equal
        let drawRound = new bootstrap.Modal(document.getElementById('roundModal'))
        document.querySelector('#roundResultMsg').innerHTML = `The dice rolled both ${userRandomroll}, this round is a DRAW!`;
        drawRound.show();
    }

    
    updateScores(); //This is function where the scorecard will automatically update
    
});

// This function updates the scorecard between the user and computer
function updateScores(){
    document.querySelector('#userScore').innerHTML = userScore;
    document.querySelector('#computerScore').innerHTML = computerScore;
    let winner = document.querySelector('#snd4');

    if (userScore >= 5){
        winner.play(); 
        const winnerModal = new bootstrap.Modal(document.getElementById('resultModal'))
        winnerModal.show();
        document.querySelector('#newGame').addEventListener('click', () => {
            location.reload();
        })

    }else if (computerScore >= 5) {
        const loserModal = new bootstrap.Modal(document.getElementById('resultModal'))
        document.querySelector('#modalMsg').innerHTML = "You have lost the game! 😜";
        loserModal.show();
        document.querySelector('#newGame').addEventListener('click', () => {
            location.reload();
        })
    }
}

//This event listener and function contains where you can play the background music of the game.
document.querySelector('#soundOn').addEventListener('click', () => {
    document.querySelector('#bgMusic').play();
})

//This event listener and function contains where you can pause the background music of the game.
document.querySelector('#soundOff').addEventListener('click', () => {
    document.querySelector('#bgMusic').pause();
})






