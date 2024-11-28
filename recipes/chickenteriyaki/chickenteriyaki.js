// chickenteriyaki.js

const options = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let roundCount = 1;
let totalRounds;

const userChoiceBtns = document.querySelectorAll('#choices button');
const roundCountElement = document.getElementById('round-count');
const totalRoundsElement = document.getElementById('total-rounds');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const gameStatusElement = document.getElementById('game-status');
const restartButton = document.getElementById('restart-btn');
const continueButton = document.getElementById('continue-btn');
const startButton = document.getElementById('start-btn');
const tile1 = document.getElementById('tile1');
const tile2 = document.getElementById('tile2');
const tile3 = document.getElementById('tile3');
const playerNameInput = document.getElementById('player-name');
const roundsInput = document.getElementById('rounds');
const roundTitle = document.getElementById('round-title');

// Function to get computer choice
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// Function to play a round
function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  // Display player's and computer's choices
  playerChoiceElement.innerHTML = 'Your choice: ' + capitalize(userChoice);
  computerChoiceElement.innerHTML = 'Computer is choosing...';

  setTimeout(() => {
    computerChoiceElement.innerHTML = 'Computer picked: ' + capitalize(computerChoice);
    
    // Determine winner
    if (userChoice === computerChoice) {
      resultElement.innerHTML = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      resultElement.innerHTML = 'You win this round!';
      userScore++;
    } else {
      resultElement.innerHTML = 'Computer wins this round!';
      computerScore++;
    }

    // Update scores and round count
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
    roundCountElement.textContent = ++roundCount;

    // Update the round title
    roundTitle.textContent = `Round: ${roundCount} / ${totalRounds}`;

    // End game logic
    if (roundCount > totalRounds) {
      setTimeout(() => {
        let winner = userScore > computerScore ? 'You win!' : 'Computer wins!';
        alert(`Game Over! ${winner} Final Score - You: ${userScore}, Computer: ${computerScore}`);
        resetGame();
      }, 1000);
    }
  }, 5000);  // Computer choice animation for 5 seconds
}

// Function to capitalize the first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  roundCount = 1;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  roundCountElement.textContent = roundCount;
  resultElement.innerHTML = '';
  playerChoiceElement.innerHTML = 'Your choice: ';
  computerChoiceElement.innerHTML = 'Computer is choosing...';
  roundTitle.textContent = `Round: ${roundCount} / ${totalRounds}`;

  tile1.style.display = 'block';
  tile2.style.display = 'none';
  tile3.style.display = 'none';
}

// Event listeners
userChoiceBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    if (roundCount <= totalRounds) {
      playRound(e.target.id);
    }
  });
});

startButton.addEventListener('click', () => {
  const name = playerNameInput.value.trim();
  totalRounds = parseInt(roundsInput.value.trim());

  if (name && totalRounds > 0) {
    tile1.style.display = 'none';
    tile2.style.display = 'block';
    tile3.style.display = 'block';

    totalRoundsElement.textContent = totalRounds;
    roundTitle.textContent = `Round: ${roundCount} / ${totalRounds}`;
  } else {
    alert('Please enter your name and number of rounds.');
  }
});
