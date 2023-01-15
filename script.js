// Retrieve from DOM :
let gameboardGrid = document.getElementById("gameboardGrid");

const playerFactory = (name, symbol) => {
  let score = 0;
  let addPoint = function () {
    score += 1;
  };
  let winnerMessage = `${name} has won the game!`;
  return { name, score, addPoint, winnerMessage };
};

let startNewGame = function () {
  let playerName = prompt("What's your name?");
  let playerSymbol = prompt(
    "Choose a symbol. Type the letter X or the letter O."
  );
  let player = playerFactory(playerName, playerSymbol);
  console.log(player);
};

let checkIfGrid = 0;

let gameboardModule = (function () {
  const createGameboard = function () {
    if (checkIfGrid === 0) {
    checkIfGrid += 1;
    let gameboardArray = [];
    gameboardArray.length = 9;
    let lastPlayer = "";
    for (let i = 0; i < gameboardArray.length; i++) {
      const boxContent = document.createElement("div");
      boxContent.id = "gameboardBox";
      boxContent.addEventListener("click", function () {
        if (gameboardArray[i] === undefined) {
          console.log(lastPlayer);
            if (lastPlayer === "X") {
            gameboardArray[i] = "O";
            this.innerHTML = gameboardArray[i];
            lastPlayer = "O";
            if (((gameboardArray[0] && gameboardArray[3] && gameboardArray[6]) === ("X" || "O")) || ((gameboardArray[1] && gameboardArray[4] && gameboardArray[7]) === ("X" || "O")) || ((gameboardArray[2] && gameboardArray[5] && gameboardArray[8]) === ("X" || "O")) || ((gameboardArray[0] && gameboardArray[1] && gameboardArray[2]) === ("X" || "O")) || ((gameboardArray[3] && gameboardArray[4] && gameboardArray[5]) === ("X" || "O")) || ((gameboardArray[6] && gameboardArray[7] && gameboardArray[8]) === ("X" || "O")) || ((gameboardArray[0] && gameboardArray[4] && gameboardArray[8]) === ("X" || "O")) || ((gameboardArray[2] && gameboardArray[4] && gameboardArray[6]) === ("X" || "O"))) {
                console.log("Somebody won");
            }
          } else if (lastPlayer === "" || "O") {
            gameboardArray[i] = "X";
            this.innerHTML = gameboardArray[i];
            lastPlayer = "X";
            if (((gameboardArray[0] && gameboardArray[3] && gameboardArray[6]) === ("X" || "O")) || ((gameboardArray[1] && gameboardArray[4] && gameboardArray[7]) === ("X" || "O")) || ((gameboardArray[2] && gameboardArray[5] && gameboardArray[8]) === ("X" || "O")) || ((gameboardArray[0] && gameboardArray[1] && gameboardArray[2]) === ("X" || "O")) || ((gameboardArray[3] && gameboardArray[4] && gameboardArray[5]) === ("X" || "O")) || ((gameboardArray[6] && gameboardArray[7] && gameboardArray[8]) === ("X" || "O")) || ((gameboardArray[0] && gameboardArray[4] && gameboardArray[8]) === ("X" || "O")) || ((gameboardArray[2] && gameboardArray[4] && gameboardArray[6]) === ("X" || "O"))) {
                console.log("Somebody won");
            }
          }
      }
    });
      gameboardGrid.appendChild(boxContent);
    }
  } else {
    console.log("I can't put anything more on this page, the grid is already here");
  };
}

  function logGameboard() {
    createGameboard();
  }
  return {
    returnGameboard: function () {
      logGameboard();
    },
  };
})();

// DOM Manipulation :
document.getElementById("startButton").addEventListener("click", startNewGame);
document
  .getElementById("buttonGameboard")
  .addEventListener("click", gameboardModule.returnGameboard);
