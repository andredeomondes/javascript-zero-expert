let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayNumber = function (number) {
  document.querySelector(".number").textContent = number
}

displayNumber("?");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage("🎉 Você acertou!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    //When player wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🎲 Muito alto!" : "🎲 Muito baixo!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("❌ Você perdeu meu belevolente!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // Restart score values
  score = 20;
  document.querySelector(".score").textContent = score;

  // Restart secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;

  // Restart initial screen
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  // Restart guess value e text
  document.querySelector(".guess").value = "";
  displayMessage("Tente descobrir...")

  // put ?
  displayNumber("?");
});
