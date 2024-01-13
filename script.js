"use strict";

const totalScore0Element = document.querySelector(".totalScore-0");
const totalScore1Element = document.querySelector(".totalScore-1");
const current0Element = document.querySelector(".current-0");
const current1Element = document.querySelector(".current-1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

totalScore0Element.textContent = 0;
totalScore1Element.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.current-${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`.current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
