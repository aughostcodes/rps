// function capitalize(word){
//     word = word.toLowerCase().split('');
//     let first = word[0].toUpperCase();
//     let final = word.join('').replace(word[0], first);
//     return final;
// }

// capitalize('fart');
// console.log("TCL: capitalize('fart');", capitalize('fart'));

// function lastLetter(input){
//     input = input.split('');
//     for (let i = 0; i < input.length; i++) {
//         if (i === input.length - 1) {
//             return input[i];
//         }
//     }
// }

// console.log("TCL: lastLetter('abcd');", lastLetter('abcd'));
// lastLetter('abcd');


// ROCK, PAPER, SCISSORS PROJECT



function game() {

    let playerScore = 0;
    let computerScore = 0;
    let winCounter = 0;
    let computerSelection = Math.floor(Math.random() * 3);
    let playerSelection = prompt('Choose: rock, paper, or scissors').toLowerCase();

    function computer() {
        switch (computerSelection) {
            case 0:
                return 0;
                break;
            case 1:
                return 1;
                break;
            case 2:
                return 2;
                break;
            default:
                console.log('Something went wrong. Try again.');
        }
    }

    function player() {
        switch (playerSelection) {
            case 'rock':
                return 0;
                break;
            case 'paper':
                return 1;
                break;
            case 'scissors':
                return 2;
                break;
            default:
                console.log('Must pick rock, paper, or scissors to play!');
        }
    }

    function playRound(computer, player) {
        while (winCounter < 4) {


            if (computerSelection === playerSelection) {
                console.log('Tie. Try again.');
            } else if (computerSelection === 0 && playerSelection === 1) {
                console.log('You win! Paper beats rock.');
                playerScore++;
                console.log(playerScore);
            } else if (computerSelection === 0 && playerSelection === 2) {
                console.log('You lose! Rock beats scissors!');
                computerScore++;
                console.log(computerScore);
            } else if (computerSelection === 1 && playerSelection === 0) {
                console.log('You lose! Paper beats rock!');
                computerScore++;
            } else if (computerSelection === 1 && playerSelection === 2) {
                console.log('You win! Scissors beats paper!');
            }


        }
    }



}

game();