// ROCK, PAPER, SCISSORS PROJECT

let options = ['rock', 'paper', 'scissors'];
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let bestOfInput = document.querySelector('.best-of-input');
let playerChoiceSpan = document.querySelector('.player-choice');
let computerSelectionText = document.querySelector('.computer-selection');
let computerChoiceSpan = document.querySelector('.computer-choice');
let resultText = document.querySelector('.result-text');
let playerWinCounter = document.querySelector('.player-counter');
let computerWinCounter = document.querySelector('.computer-counter');
let tieCounter = document.querySelector('.tie-counter');
let gameOver = document.querySelector('.game-over');




bestOfInput.addEventListener('change', function () {
    if (bestOfInput.value % 2 === 0) {
        console.log('Please select an odd number for the game.')
    }
    console.log(bestOfInput.value);
});

rock.addEventListener('click', function () {
    playerChoiceSpan.innerText = 'rock';
    computerChoiceSpan.innerText = options[computerSelection()];
    computerSelectionText.classList.remove('hidden');
    determineWinner();

});

paper.addEventListener('click', function () {
    playerChoiceSpan.innerText = 'paper';
    computerChoiceSpan.innerText = options[computerSelection()];
    computerSelectionText.classList.remove('hidden');
    determineWinner();
});

scissors.addEventListener('click', function () {
    playerChoiceSpan.innerText = 'scissors';
    computerChoiceSpan.innerText = options[computerSelection()];
    computerSelectionText.classList.remove('hidden');
    determineWinner();
});





function gameIsOver() {
    if ((Number(playerWinCounter.innerText) + Number(computerWinCounter.innerText)) === Number(bestOfInput.value)) {
        console.log('GAME HAS COMPLETED')
    }
}
gameIsOver();



function computerSelection() {
    return Math.floor(Math.random() * 3);
}

function determineWinner() {
    if (playerChoiceSpan.innerText === 'rock' && computerChoiceSpan.innerText === 'paper') {
        resultText.innerText = 'lost';
    } else if (playerChoiceSpan.innerText === 'rock' && computerChoiceSpan.innerText === 'scissors') {
        resultText.innerText = 'won';
    } else if (playerChoiceSpan.innerText === 'paper' && computerChoiceSpan.innerText === 'rock') {
        resultText.innerText = 'won';
    } else if (playerChoiceSpan.innerText === 'paper' && computerChoiceSpan.innerText === 'scissors') {
        resultText.innerText = 'lost';
    } else if (playerChoiceSpan.innerText === 'scissors' && computerChoiceSpan.innerText === 'rock') {
        resultText.innerText = 'lost';
    } else if (playerChoiceSpan.innerText === 'scissors' && computerChoiceSpan.innerText === 'paper') {
        resultText.innerText = 'won';
    } else {
        resultText.innerText = 'tied';
    }
    countRounds();
}

function countRounds() {
    if (resultText.innerText === 'won') {
        playerWinCounter.innerText = Number(playerWinCounter.innerText) + 1;
    } else if (resultText.innerText === 'lost') {
        computerWinCounter.innerText = Number(computerWinCounter.innerText) + 1;
    } else {
        tieCounter.innerText = Number(tieCounter.innerText) + 1;
    }
}




// function game() {

//     function player() {
//         let playerSelection = 'rock';
//         // prompt('Choose: rock, paper, or scissors').toLowerCase()

//         switch (playerSelection) {
//             case 'rock':
//                 return 0;
//             case 'paper':
//                 return 1;
//             case 'scissors':
//                 return 2;
//             default:
//                 console.log('Must pick rock, paper, or scissors to play!');
//         }
//     }

//     // returns:
//     //    1 if player wins
//     //    -1 if player loses (computer wins)
//     //    0 if tie
//     function playRound(computer, player) {
//         if (computer === 0 && player === 1) {
//             console.log('You win! Paper beats rock.');
//             return 1;
//         } else if (computer === 0 && player === 2) {
//             console.log('You lose! Rock beats scissors.');
//             return -1;
//         } else if (computer === 1 && player === 0) {
//             console.log('You lose! Paper beats rock.');
//             return -1;
//         } else if (computer === 1 && player === 2) {
//             console.log('You win! Scissors beats paper.');
//             return 1;
//         } else if (computer === 2 && player === 0) {
//             console.log('You win! Rock beats scissors.');
//             return 1;
//         } else if (computer === 2 && player === 1) {
//             console.log('You lose! Scissors beats paper.');
//             return -1;
//         } else if (player !== 0 && player !== 1 && player !== 2) {
//             console.log('Type your selection carefully.');
//             return 0;
//         } else {
//             console.log('Tie! Try again.');
//             return 0;
//         }
//     }

//     // set up variables to start all rounds
//     let winCounter = 0;
//     let playerScore = 0;
//     let computerScore = 0;

//     while (playerScore < 3 && computerScore < 3) {
//         // computer's turn
//         let computerInputNum = computerSelection();

//         // player's turn
//         let playerInputNum = player();

//         let result = playRound(computerInputNum, playerInputNum);

//         switch (result) {
//             case 1:
//                 playerScore++;
//                 winCounter++;
//                 break;
//             case -1:
//                 computerScore++;
//                 winCounter++;
//                 break;
//         }
//     }

//     console.log('Game completed!');
//     console.log('Player got: ' + playerScore);
//     console.log('Computer got: ' + computerScore);
// }

// game();