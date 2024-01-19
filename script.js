const grid = document.querySelector(".grid");
const stack = document.querySelector(".stack");
const scoreCounter = document.querySelector(".score-counter");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainBtn = document.querySelector(".play-again");

//create game grid
//0 - empty cell
//1 - bar-segment
const gridMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0], // This is our starting currentRowIndex (see below)
];

//game tracking variables
let currentRowIndex = gridMatrix.length - 1;
let barDirection = "right";
let varSize = 3;
let isGameOver = false;
let score = 0;

function draw() {
  grid.innerHTML = "";

  gridMatrix.forEach(function (rowContent) {
    rowContent.forEach(function (cellContent) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (cellContent === 1) {
        cell.classList.add("bar");
      }

      grid.appendChild(cell);
    });
  });
}
function moveRight(currentRow) {
  currentRow.pop();
  currentRow.unshift(0);
}

function moveLeft(currentRow) {
  currentRow.shift();
  currentRow.push(0);
}

//game logic and controls

function moveBar() {
  const currentRow = gridMatrix[currentRowIndex];

  if (barDirection === "right") {
    moveRight(currentRow);

    const lastElement = currentRow[currentRow.length - 1];
    if (lastElement === 1) {
      barDirection = "left";
    }
  } else {
    moveLeft(currentRow);

    const firstElement = currentRow[0];
    if (firstElement === 1) {
      barDirection = "right";
    }
  }
}

draw();
//moves the bar
function main() {
  moveBar();
  draw();
}

const gameInterval = setInterval(main, 600);
