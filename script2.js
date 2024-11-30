const button = document.getElementById("reactionButton");
const result = document.getElementById("result");

let startTime;
let timeout;

button.addEventListener("click", () => {
  if (button.classList.contains("green")) {
    // Calculate reaction time
    const reactionTime = (Date.now() - startTime) / 1000; // in seconds
    result.textContent = `Your reaction time: ${reactionTime} seconds!`;
    button.textContent = "Wait for Green";
    button.classList.remove("green");
  } else {
    // User clicked too early
    clearTimeout(timeout);
    result.textContent = "Too early! Wait for green!";
    button.textContent = "Wait for Green";
    button.classList.remove("green");
    startGame();
  }
});

function startGame() {
  result.textContent = "";
  button.textContent = "Wait for Green";
  button.classList.remove("green");

  // Random delay before turning green
  const delay = Math.random() * 3000 + 2000; // Between 2 to 5 seconds
  timeout = setTimeout(() => {
    button.classList.add("green");
    button.textContent = "Click Me!";
    startTime = Date.now();
  }, delay);
}

// Start the game
startGame();
