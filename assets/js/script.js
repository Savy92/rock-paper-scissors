// Computer options
const computerChoice = ["rock", "paper", "scissors"];

let pScore = 0;
let cScore = 0;

const game = () => {

    // Start the game, once the 'New Game button is clicked
    const startGame = () => {
        const start = document.querySelector('.intro-page button');
        const introScreen = document.querySelector('.intro-page');
        const matchScreen = document.querySelector('.match-container');

        start.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };
    // Play match, once the player selects an option
    const playMatch = () => {
        const optionButtons = document.querySelectorAll('.options button');
        const playerHand = document.querySelector | ('.player-hand');
        const computerHand = document.querySelector | ('.computer-hand');
        const result = document.querySelector('.result');

        optionButtons.forEach((button) => {
            button.addEventListener('click', function () {
                // Computer result
                const randomNumber = Math.floor(Math.random() * 3);
                const computerResult = computerChoice[randomNumber];

            });
        });

        const compareSelection = (playerResult, computerResult) => {
            if (playerResult === computerResult) {
                result.textContent = 'Draw!';
                return;
            }

            if (playerResult === 'rock') {
                if (computerResult === 'scissors') {
                    result.textContent = 'You Win!';
                    return;
                } else {
                    result.textContent = 'You lost this round!';
                    return;
                }
            }

            if (playerResult === 'paper') {
                if (computerResult === 'rock') {
                    result.textContent = 'You Win!';
                    return;
                } else {
                    result.textContent = 'You lost this round!';
                    return;
                }
            }

            if (playerResult === 'scissors') {
                if (computerResult === 'paper') {
                    result.textContent = 'You Win!';
                    return;
                } else {
                    result.textContent = 'You lost this round!';
                    return;
                }
            }
        };
    };

    startGame();
    playMatch();
};

game();
