const computerPlay = () => {

      const random = Math.random();
      if (random < 0.333) return 'Rock';
      else if (random < 0.666) return 'Paper';
      else return 'Scissors';

}

const playRound = (playerSelection, computerSelection) => {
      const player = playerSelection.trim().toLowerCase();
      const computer = computerSelection.toLowerCase();

      if (player !== 'rock' && player !== 'paper' && player !== 'scissors') {
            return 'Invalid selection. Please enter Rock, Paper, or Scissors.';

      } else if (player === computer) {
            return `It's a Tie! You both chose ${computerSelection}. No points awarded!`;

      } else if (player === 'rock' && computer === 'scissors') {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;

      } else if (player === 'paper' && computer === 'rock') {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;

      } else if (player === 'scissors' && computer === 'paper') {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;

      } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
      }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


const game = () => {
  console.log('===========================================');
  console.log('   ⚔️  ROCK, PAPER, SCISSORS OF DESTINY ⚔️  ');
  console.log('===========================================');

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`\n🎮 ROUND ${i + 1} OF 5`);
    console.log(`Score → You: ${playerScore} | Branko: ${computerScore}`);

    let result = 'INVALID';

    while (result === 'INVALID') {
      const playerSelection = prompt(
        `Round ${i + 1} of 5\nScore → You: ${playerScore} | Branko: ${computerScore}\n\nEnter Rock, Paper, or Scissors:`
      );

      if (playerSelection === null) {
        console.log('You fled the battlefield. Branko wins by default. Coward! 🏳️');
        return;
      }

      const computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);

      if (result.startsWith('Invalid')) {
        console.log(`❌ "${playerSelection}" is not a valid move. Branko laughs at your confusion!`);
        result = 'INVALID';
      } else {
        console.log(`Branko chose... ${computerSelection}!`);
        console.log(result);

        if (result.startsWith('You Win')) playerScore++;
        else if (result.startsWith('You Lose')) computerScore++;
      }
    }
  }

  console.log('\n===========================================');
  console.log(`       FINAL SCORE: You ${playerScore} - ${computerScore} Branko`);
  console.log('===========================================');

  if (playerScore > computerScore) {
    console.log('🎉 YOU DEFEATED BRANKO! The world is saved!');
    console.log('Branko retreats into the shadows... for now.');
  } else if (computerScore > playerScore) {
    console.log('💀 BRANKO WINS! The world is doomed!');
    console.log('Branko laughs maniacally into the night...');
  } else {
    console.log('🤝 A DRAW! The battle rages on another day.');
    console.log('Neither hero nor villain can claim victory.');
  }

  console.log('===========================================');
};

game();