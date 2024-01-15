"use strict";

const player0Element = document.querySelector(".player-0");
const player1Element = document.querySelector(".player-1");

const totalScore0Element = document.querySelector(".totalScore-0");
const totalScore1Element = document.querySelector(".totalScore-1");
const current0Element = document.querySelector(".current-0");
const current1Element = document.querySelector(".current-1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

let scores, currentScore, activePlayer, playingGame;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playingGame = true;

  totalScore0Element.textContent = 0;
  totalScore1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add("hidden");
  player0Element.classList.remove("player-winner");
  player1Element.classList.remove("player-winner");
  player0Element.classList.add("player-active");
  player1Element.classList.remove("player-active");
};
init();

const switchPlayer = function () {
  document.querySelector(`.current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player-active");
  player1Element.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (playingGame) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove("hidden");
    diceElement.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`.current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playingGame) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.totalScore-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playingGame = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    }

    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
