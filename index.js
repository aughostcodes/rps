// ROCK, PAPER, SCISSORS PROJECT

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let bestOfInput = document.querySelector('.best-of-input');

rock.addEventListener('click', function() {
    console.log('you selected rock');
});

paper.addEventListener('click', function() {
    console.log('you selected paper');
});

scissors.addEventListener('click', function() {
    console.log('you selected scissors');
});

bestOfInput.addEventListener('change', function() {
    if (bestOfInput.value % 2 === 0) {
        console.log('Please select an odd number for the game.')
    }
    console.log(bestOfInput.value);
});






















// function game() {

//     function player() {
//         // let playerSelection = prompt('Choose: rock, paper, or scissors').toLowerCase()

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
//         let computerSelection = Math.floor(Math.random() * 3);

//         // player's turn
//         let playerInputNum = player();

//         let result = playRound(computerSelection, playerInputNum);

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