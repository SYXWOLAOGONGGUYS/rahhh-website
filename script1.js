function guessGame() {
  const number = Math.floor(Math.random() * 500) + 1; // Random number between 1 and 500
  let attempts = 0;

  const gameFeedback = document.getElementById('gameFeedback');
  const score = document.getElementById('score');
  const userGuessInput = document.getElementById('userGuess');
  const submitButton = document.getElementById('submitGuess');
  const guessHistoryList = document.getElementById('guessHistoryList');

  gameFeedback.innerHTML = "Guess a number between 1 and 500:";

  window.submitGuess = function() {
    const guess = userGuessInput.value;

    if (isNaN(guess) || guess === "") {
      gameFeedback.innerHTML = "BAHH ENTER A VALID NUMBERRR";
      return;
    }

    const guessedNumber = parseInt(guess, 10);
    attempts++;
    
let feedbackMessage = ' ';
    if (guessedNumber < number) {
      feedbackMessage = "NAww it's bigger than that";
    } else if (guessedNumber > number) {
      feedbackMessage = "Awman too big";
    } else {
      feedbackMessage = `Congrats!! You got it :)) Now here's a banana for you 🍌🍌<br>You guessed the number in ${attempts} attempts.`;
      score.innerHTML = `Total attempts: ${attempts}`;
      submitButton.disabled = true;
      gameFeedback.innerHTML = feedbackMessage;
      const historyItem = document.createElement('li');
    historyItem.innerHTML = `You guessed: ${guess} - ${feedbackMessage}`;
    guessHistoryList.appendChild(historyItem);
      
  if (guessedNumber === number){
      const playAgain = prompt("Wanna play again? (y/y) 🥺🥺:");
      if (playAgain.toLowerCase() === "y") {
        guessGame();
      } else {
        gameFeedback.innerHTML = "URGH BYE";
      }
    }
  });
}

guessGame();
