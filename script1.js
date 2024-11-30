function guessGame() {
  const number = Math.floor(Math.random() * 500) + 1;
  let attempts = 0;
  
  console.log("哟西 welcome to the gaaaameeeee");
  
  while (true) {
    const guess = prompt("Guess a number between 1 and 500:");
    
    if (isNaN(guess)) {
      console.log("BAHH ENTER A VALID NUMBERRR");
      continue;
    }

    const guessedNumber = parseInt(guess, 10);
    attempts++;

    if (guessedNumber < number) {
      console.log("NAww it's bigger than that");
    } else if (guessedNumber > number) {
      console.log("Awman too big");
    } else {
      console.log(`Congrats!! You got it :)) Now here's a banana for you 🍌🍌\n\nYou guessed the number in ${attempts} attempts.`);
      break;
    }
  }

  const playAgain = prompt("Wanna play again? (y/n) 🥺🥺:").toLowerCase();
  if (playAgain === "y") {
    guessGame();
  } else {
    console.log("URGH BYE 😤");
  }
}

guessGame();
