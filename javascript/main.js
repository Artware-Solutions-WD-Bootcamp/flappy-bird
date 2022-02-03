// * GLOBAL VARIABLES
let splashScreenDOM = document.querySelector("#splash-screen");
let gameOverScreenDOM = document.querySelector("#gameover-screen");
let canvasDOM = document.querySelector("#my-canvas");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let ctx = canvasDOM.getContext("2d");
let newGame;

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  // hacer desaparecer splash screen y aparecer canvas
  splashScreenDOM.style.display = "none";
  canvasDOM.style.display = "flex";
  // ejecutar el juego
  newGame = new Game();
  // console.log(newGame);
  newGame.gameLoop();
};

const restartGame = () => {
  // hacer desaparecer splash screen y aparecer canvas
  splashScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";
  canvasDOM.style.display = "flex";
  // ejecutar el juego
  newGame = new Game();
  // console.log(newGame);
  newGame.gameLoop();
};

// * ADD EVENT LISTENERS

startButton.addEventListener("click", startGame);
canvasDOM.addEventListener("click", () => {

  newGame.pollo.polloJump();
});

restartButton.addEventListener("click", restartGame);
canvasDOM.addEventListener("click", () => {

  newGame.pollo.polloJump();
});
