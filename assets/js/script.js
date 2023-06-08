/** 
 * Declare constants for Dom elements
 * and possible choices
 */
const optionButtons = document.getElementsByClassName("option-image");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const playerImage = docment.getElementsByClassName("player-hand");
const computerImage = document.getElementsByClassName("computer-hand");
const result = document.getElementsByClassName("result");
const start = document.getElementById("start-game");
const scoreBoard = document.getElementById("score-board");
const help = document.getElementById("help");
const introScreen = document.getElementsByClassName("intro-page");
const gameScreen = document.getElementsByClassName("match-container");
const choices = ["rock", "paper", "sicssors"];



let pscore = 0;
let cScore = 0;

/**
 * Add a click event listener to new game button
 */
//Start the game
const startGame = () => {
    start.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        gameScreen.classList.add("fadeIn");
    });
};
