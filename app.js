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
  //validate
  if (!guess || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if winning num
  if (guess === winningNum) {
    //Disable input
    guessInput.disabled = true;
    //make boarder green
    guessInput.style.borderColor = "green";
    //let user know they won
    setMessage(`Congratulations, ${winningNum} is correct!`, "green");
  }
});
