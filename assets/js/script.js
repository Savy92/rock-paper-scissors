const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const start = document.querySelector('.intro-page button');
        const introScreen = document.querySelector('.intro-page');
        const matchScreen = document.querySelector('.match-container');

        start.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };
    // Play match
    const playMatch = () => {
        const optionButtons = document.querySelectorAll('.options button');
        const playerHand = document.querySelector | ('.player-hand');
        const computerHand = document.querySelector | ('.computer-hand');

        // Computer options
        const choices = ["rock", "paper", "sicssors"];

        let computerChoice = Math.floor(Math.random() * 3);
    };

    startGame();
    playMatch();
};

game();
