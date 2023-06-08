// Computer options
const computerChoice = ["rock", "paper", "scissors"];
// Used for scoreboard
let pScore = 0;
let cScore = 0;
// Variables defined to start game
const start = document.querySelector('.intro-page button');
const introScreen = document.querySelector('.intro-page');
const matchScreen = document.querySelector('.match-container');
// Variables defind to play match
const optionButtons = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const result = document.querySelector('.result');
const pScoreElement = document.querySelector('.pScore');
const cScoreElement = document.querySelector('.cScore');

const game = () => {

    // Start the game, once the 'New Game button is clicked
    const startGame = () => {
        start.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            introScreen.classList.remove('fadeIn');
            matchScreen.classList.add('fadeIn');
        });
    };
    // Play match, once the player selects an option
    const playMatch = () => {
        optionButtons.forEach((button) => {
            button.addEventListener('click', function (e) {
                if (pScore >= 3 || cScore >= 3) {
                    result.textContent = 'Match end';
                    introScreen.classList.add('fadeIn');
                    introScreen.classList.remove('fadeOut');
                    matchScreen.classList.add('fadeOut');
                    matchScreen.classList.remove('fadeIn');

                    // reset score 
                    pScore = 0;
                    cScore = 0;
                    pScoreElement.textContent = pScore;
                    cScoreElement.textContent = cScore;
                } else {
                    const newHand = e.currentTarget.ariaLabel.toLowerCase();
                    playerHand.src = `assets/images/full-length-${newHand}.png`;
                    if (newHand === 'paper' || newHand === 'scissors') {
                        playerHand.style.transform = "rotate(90deg)";
                    } else {
                        playerHand.style.transform = "scaleX(-1)";
                    }
                    // Computer result
                    const randomNumber = Math.floor(Math.random() * 3);
                    const computerResult = computerChoice[randomNumber];
                    computerHand.src = `assets/images/full-length-${computerResult}.png`;
                    if (computerResult === 'paper' || computerResult === 'scissors') {
                        computerHand.style.transform = "rotate(-90deg)";
                    } else {
                        computerHand.style.transform = "rotate(0)";
                    }

                    compareSelection(newHand, computerResult);
                }
            });
        });
        const compareSelection = (playerResult, computerResult) => {
            switch (playerResult) {
                case "rock":
                    if (computerResult === 'scissors') {
                        result.textContent = 'You Win!';
                        pScoreElement.textContent = ++pScore;
                        return;
                    } else if (computerResult === 'paper') {
                        result.textContent = 'You lost this round!';
                        cScoreElement.textContent = ++cScore;
                        return;
                    } else {
                        result.textContent = 'It is a draw!';
                    }
                case "scissors":
                    if (computerResult === 'paper') {
                        result.textContent = 'You Win!';
                        pScoreElement.textContent = ++pScore;
                        return;
                    } else {
                        result.textContent = 'You lost this round!';
                        cScoreElement.textContent = ++cScore;
                        return;
                    }
                case "paper":
                    if (computerResult === 'rock') {
                        result.textContent = 'You Win!';
                        pScoreElement.textContent = ++pScore;
                        return;
                    } else {
                        result.textContent = 'You lost this round!';
                        cScoreElement.textContent = ++cScore;
                        return;
                    }
            };
        };
    };
    startGame();
    playMatch();
};
game();
