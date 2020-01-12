'use strict';

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
let finalResult = document.querySelector('.final-result');

window.onload = checkForOdd();

bestOfInput.addEventListener('change', function () {
    checkForOdd();
});

function checkForOdd() {
    if (Number(bestOfInput.value) % 2 !== 0) {
        rock.addEventListener('click', rockEvent);
        paper.addEventListener('click', paperEvent);
        scissors.addEventListener('click', scissorsEvent);
    } else if (Number(bestOfInput.value) % 2 === 0) {
        console.log('Please select an odd number to play.');
        rock.removeEventListener('click', rockEvent);
        paper.removeEventListener('click', paperEvent);
        scissors.removeEventListener('click', scissorsEvent);
    }
};

function rockEvent() {
    playerChoiceSpan.innerText = 'rock';
    computerChoiceSpan.innerText = options[computerSelection()];
    computerSelectionText.classList.remove('hidden');
    determineWinner();
    gameIsOver();
};

function paperEvent() {
    playerChoiceSpan.innerText = 'paper';
    computerChoiceSpan.innerText = options[computerSelection()];
    computerSelectionText.classList.remove('hidden');
    determineWinner();
    gameIsOver();
};

function scissorsEvent() {
    playerChoiceSpan.innerText = 'scissors';
    computerChoiceSpan.innerText = options[computerSelection()];
    computerSelectionText.classList.remove('hidden');
    determineWinner();
    gameIsOver();
};

function computerSelection() {
    return Math.floor(Math.random() * 3);
};

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
};

function countRounds() {
    if (resultText.innerText === 'won') {
        playerWinCounter.innerText = Number(playerWinCounter.innerText) + 1;
    } else if (resultText.innerText === 'lost') {
        computerWinCounter.innerText = Number(computerWinCounter.innerText) + 1;
    } else {
        tieCounter.innerText = Number(tieCounter.innerText) + 1;
    }
};

function gameIsOver() {
    if (Number(playerWinCounter.innerText) === Math.ceil(Number(bestOfInput.value) / 2) || Number(computerWinCounter.innerText) === Math.ceil(Number(bestOfInput.value) / 2)) {
        if (Number(playerWinCounter.innerText) > Number(computerWinCounter.innerText)) {
            finalResult.innerText = 'won. Well done';
        } else if (Number(computerWinCounter.innerText) > Number(playerWinCounter.innerText)) {
            finalResult.innerText = 'lost. Try again';
        }
        gameOver.classList.remove('hidden');
        gameOver.addEventListener('click', function () {
            reset();
        })
        rock.removeEventListener('click', rockEvent);
        paper.removeEventListener('click', paperEvent);
        scissors.removeEventListener('click', scissorsEvent);
    }
};

function reset() {
    playerWinCounter.innerText = 0;
    computerWinCounter.innerText = 0;
    tieCounter.innerText = 0;
    playerChoiceSpan.innerText = '___';
    resultText.innerText = '___';
    gameOver.classList.add('hidden');
    computerSelectionText.classList.add('hidden');
    rock.addEventListener('click', rockEvent);
    paper.addEventListener('click', paperEvent);
    scissors.addEventListener('click', scissorsEvent);
    checkForOdd();
};



// to run in console only:

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