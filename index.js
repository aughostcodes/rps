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
        // console.log(computerSelection);
        switch (computerSelection) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                console.log('Something went wrong. Try again.');
        }
    }

    function player() {
        // console.log(playerSelection);
        switch (playerSelection) {
            case 'rock':
                return 0;
            case 'paper':
                return 1;
            case 'scissors':
                return 2;
            default:
                console.log('Must pick rock, paper, or scissors to play!');
        }
    }

    function playRound(computer, player) {
        if (computer === 0 && player === 1) {
            console.log('You win! Paper beats rock.');
            playerScore++;
            winCounter++;
            console.log("TCL: game -> winCounter", winCounter)
            console.log(playerScore);
        } else if (computer === 0 && player === 2) {
            console.log('You lose! Rock beats scissors!');
            computerScore++;
            winCounter++;
            console.log("TCL: game -> winCounter", winCounter)
            console.log(computerScore);
        } else if (computer === 1 && player === 0) {
            console.log('You lose! Paper beats rock!');
            computerScore++;
            winCounter++;
            console.log("TCL: game -> winCounter", winCounter)
        } else if (computer === 1 && player === 2) {
            console.log('You win! Scissors beats paper!');
            playerScore++;
            winCounter++;
            console.log("TCL: game -> winCounter", winCounter)
        } else console.log('Tie. Try again.');
    }
    playRound();
}


game();