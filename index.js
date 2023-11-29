const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  const imageForPayOne = document.getElementById("player-one-move__img");
  imageForPayOne.src = `./images/${moveOne}.png`;

  const imageForPayTwo = document.getElementById("player-two-move__img");
  imageForPayTwo.src = `./images/${moveTwo}.png`;

  const nameForPayOne = document.getElementById("player-one-move__name");
  nameForPayOne.textContent = `${moveOne}`;

  const nameForPayTwo = document.getElementById("player-two-move__name");
  nameForPayTwo.textContent = `${moveTwo}`;

  const resultElement = document.createElement("p");
  resultElement.setAttribute("id", "outcome");

  const textContentForResultElement = document.createTextNode(outcome);
  // add the text node to the newly created div
  resultElement.appendChild(textContentForResultElement);

  // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById(".container");
  // document.body.insertBefore(resultElement, currentDiv);
  document.body.appendChild(resultElement);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
