alert("Welcome to Rock, Paper, Scissors! Get ready to play!");

let computerScore=0;
let userScore=0;

let numRounds = parseInt(prompt("How many Rounds"));

for (i=1; i<=numRounds; i++) {

let userChoice= prompt ("What's your choice").toLowerCase();
if (userChoice ==='r') userChoice = 'rock';
else if (userChoice ==='p') userChoice = 'paper';
else if (userChoice ==='s') userChoice = 'scissors';

while (!['rock', 'paper', 'scissors'].includes(userChoice)){

    userChoice = prompt ("What's your choice").toLowerCase();
    if (userChoice ==='r') userChoice = 'rock';
    else if (userChoice ==='p') userChoice = 'paper';
    else if (userChoice ==='s') userChoice = 'scissors';
    
}

let computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];

if (computerChoice === userChoice) alert(`Computer ${computerChoice} vs User ${userChoice} \n it's a tie`);
else if (( computerChoice === 'rock' && userChoice === 'scissors') 
    ||  ( computerChoice === 'scissors' && userChoice === 'paper') 
    ||  ( computerChoice === 'paper' && userChoice === 'rock') )
    
    { alert(`Computer ${computerChoice} vs User ${userChoice} \n Computer wins`); computerScore++;}

    else alert(`Computer ${computerChoice} vs User ${userChoice} \n user wins`); userScore++;

            console.log(`End of round ${i}`);

}


    // Display current scores
    console.log(`\n Final score after ${i} round(s) \n Score: You - ${userScore}, Computer - ${computerScore}`);