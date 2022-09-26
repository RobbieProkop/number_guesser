/*
Game RUles:
- player must guess a number between min and max
- player gets certain amount of guesses
- notify player of guesses remaining
- let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  //set message
  const setMessage = (msg, color) => {
    message.style.color = color;
    message.textContent = msg;
  };

  const gameOver = (won) => {
    let color = won ? "green" : "red";
    let message = won
      ? `Congratulations, ${winningNum} is correct!`
      : `Game over. The correct number was ${winningNum}`;
    //Disable input
    guessInput.disabled = true;
    //Disable BTN
    guessBtn.disabled = true;
    //make boarder green
    guessInput.style.borderColor = color;
    //let user know they won
    setMessage(message, color);
    //Clear input
    guessInput.value = "";
  };
  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    return setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if winning num
  if (guess === winningNum) {
    //Game over, WON
    gameOver(true);
  } else {
    // wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game over - lost
      return gameOver(false);
    }

    // game continues
    guessInput.style.borderColor = "red";

    //Clear input
    guessInput.value = "";
    // tell user answer is incorrect
    setMessage(
      `${guess} is not correct, ${guessesLeft} guesses remaining`,
      "red"
    );
  }
});
