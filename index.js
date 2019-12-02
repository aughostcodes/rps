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
    function computerPlay() {
        const options = ['rock', 'paper', 'scissors'];
        let random = Math.floor(Math.random() * 3);
        return options[random];
    }

    let playerSelection = prompt('Choose: rock, paper, or scissors').toLowerCase();
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         return `You win! Rock beats scissors!`;
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//         return `You lose! Paper beats rock!`;
//     } else if (playerSelection === 'rock' && computerSelection === 'rock') {
//         return `You tie! Play again!`;
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         return `You lose! Scissors beats paper!`;
//     } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//         return `You tie! Play again!`;
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         return `You win! Paper beats rock!`;
//     } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//         return `You tie! Play again!`;
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         return `You win! Scissors beats paper!`;
//     } else {
//         return `You lose! Rock beats scissors!`;
//     }
// }

game();