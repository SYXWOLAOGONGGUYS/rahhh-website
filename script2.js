const button = document.getElementById("reactionButton");
const result = document.getElementById("result");

let startTime;
let timeout;

button.addEventListener("click", () => {
  if (button.classList.contains("green")) {
    const reactionTime = (Date.now() - startTime) / 1000;
    result.textContent = `Your reaction time: ${reactionTime} seconds!`;
    button.textContent = "Wait for Green";
    button.classList.remove("green");
  } else {
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
  const delay = Math.random() * 3000 + 2000;
  timeout = setTimeout(() => {
    button.classList.add("green");
    button.textContent = "Click Me!";
    startTime = Date.now();
  }, delay);
}

startGame();
