// Question 4
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(attempt) {
    let input;
    do {
        input = prompt(`Attempt ${attempt}/10: Please enter a number between 1 and 100:\n\nType "quit" to exit the game.`);

        if (input === null || input.toLowerCase() === "quit") {
            const confirmQuit = confirm("Are you sure you want to quit the game?");
            if (confirmQuit) {
                return null;
            } else {
                continue; 
            }
        }

    } while (isNaN(input) || input < 1 || input > 100);

    return parseInt(input);
}

function checkGuess(guess, target) {
    if (guess < target) {
        return "Too low! Try again.";
    } else if (guess > target) {
        return "Too high! Try again.";
    } else {
        return "Correct!";
    }
}

function game() {
    alert(
        "🎮 Welcome to the Number Guessing Game!\n\n" +
        "📖 HOW TO PLAY:\n" +
        "  • A random number between 1 and 100 has been generated.\n" +
        "  • You have 10 attempts to guess the correct number.\n" +
        "  • After each guess, you'll be told if your guess was too high or too low.\n" +
        "  • The fewer attempts you use, the higher your score!\n\n" +
        "🏆 SCORING:\n" +
        "  • 1 attempt   → 100 points\n" +
        "  • 2–3 attempts → 90 points\n" +
        "  • 4–5 attempts → 75 points\n" +
        "  • 6–7 attempts → 50 points\n" +
        "  • 8–10 attempts → 25 points\n\n" +
        "Good luck! Press OK to start playing. 🚀"
    );

    const targetNumber = generateRandomNumber();
    let attempts = 1;
    let result;

    while (attempts <= 10) {
        const guess = getPlayerGuess(attempts);

        if (guess === null) {
            alert("👋 Thanks for playing! See you next time.");
            return;
        }

        result = checkGuess(guess, targetNumber);
        alert(result);

        if (result === "Correct!") {
            alert(`🎉 You won in ${attempts} attempt(s)!`);
            alert(scoringSystem(attempts));
            return;
        }

        attempts++;
    }

    alert(`💀 Game Over! The number was ${targetNumber}. Better luck next time!`);
}

function provideFeedback(guess, target) {
    if (guess < target) {
        return "Too low!";
    } else if (guess > target) {
        return "Too high!";
    } else {
        return "Correct!";
    }
}

function scoringSystem(attempts) {
    let points;
    switch (true) {
        case attempts === 1:
            points = 100;
            return `Excellent! You guessed the number in ${attempts} attempt.\nYour score is ${points} points.`;
        case attempts <= 3:
            points = 90;
            return `Good job! You guessed the number in ${attempts} attempts.\nYour score is ${points} points.`;
        case attempts <= 5:
            points = 75;
            return `Not bad! You guessed the number in ${attempts} attempts.\nYour score is ${points} points.`;
        case attempts <= 7:
            points = 50;
            return `Keep trying! You guessed the number in ${attempts} attempts.\nYour score is ${points} points.`;
        case attempts <= 10:
            points = 25;
            return `You can do better! You guessed the number in ${attempts} attempts.\nYour score is ${points} points.`;
        default:
            points = 0;
            return `Keep practicing! You can do better. Don't give up!`;
    }
}

game();
