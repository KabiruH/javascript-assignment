// Question 4
// Generates a random number between 1 and 100 
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Prompts the user to enter a number to guess the correct one 
function getPlayerGuess(attempt) {
    let input;

    do {
        input = prompt(`Attempt ${attempt}: Please enter a number between 1 and 100:`);
    } while (isNaN(input) || input < 1 || input > 100);
   
    return parseInt(input);
}

// Checks to see if the player's guess is correct 
function checkGuess(guess, target) {
    if (guess < target) {
        return "Too low! Try again.";
    } else if (guess > target) {
        return "Too high! Try again.";
    } else {
        return "Correct!";
    }
}

// Implements the main game logic 
function game1() {

     alert(
      `🎯 NUMBER GUESSING GAME\n` +
      `====================\n` +
      `The AI has picked a secret number between 1 and 100.\n\n` +
      `⚠️ You only have 10 attempts — don't waste them!\n` +
      `Good luck! 🍀`
    );
    
    const targetNumber = generateRandomNumber();
    let attempts = 1;
    let result;

    while (attempts <= 10) {
        const guess = getPlayerGuess(attempts);
        if (guess === null) return;

        result = checkGuess(guess, targetNumber);
        alert(result);

        if (result === "Correct!") {
            alert(`You won in ${attempts} attempts!`);
            alert(scoringSystem(attempts));
            return;
        }
        attempts++;
    }
    alert(`You lost! The number was ${targetNumber}`);
}


/* Function 5 */
// Provides feedback to the player based on their guess 
function provideFeedback(guess, target) {
    if (guess < target) {
        return "Too low!";
    } else if (guess > target) {
        return "Too high!";
    } else {
        return "Correct!";
    }
}

/* Function 6 */
// Implements a scoring system (based on the speed of the player's correct guesses) 
function scoringSystem(attempts) {
    let points;

    switch (true) {
        case attempts === 1:
            points = 100;
            return `Excellent! You guessed the number in ${attempts} attempts.
            Your score is ${points} points.`;
           
        case attempts <= 3:
            points = 90;
            return `Good job! You guessed the number in ${attempts} attempts or less.
            Your score is ${points} points.`;

        case attempts <= 5:
            points = 75;
            return `Not bad! You guessed the number in ${attempts} attempts or less.
            Your score is ${points} points.`;

        case attempts <= 7:
            points = 50;
            return `Keep trying! You guessed the number in ${attempts} attempts or less.
            Your score is ${points} points.`;

        case attempts <= 10:
            points = 25;
            return `You can do better! You guessed the number in ${attempts} attempts or less.
            Your score is ${points} points.`;

        default:
            points = 0;
            return `Keep practicing! You can do better. Don't give up!`;
    }
}

// Question 5
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

function menu() {
  let choice = null;

  while (choice !== '3') {
    choice = prompt(
      `🎮 GAME MENU\n` +
      `====================\n` +
      `1. Number Guessing Game\n` +
      `2. Rock, Paper, Scissors\n` +
      `3. Exit\n` +
      `====================\n` +
      `Enter 1, 2, or 3:`
    );

    if (choice === null || choice === '3') {
      console.log('Thanks for playing! Goodbye. 👋');
      return;
    } else if (choice === '1') {
      game1();
    } else if (choice === '2') {
      game();
    } else {
      console.log(`❌ "${choice}" is not a valid option. Please enter 1, 2, or 3.`);
    }
  }
}

menu();
