function capitalize(word){
    word = word.toLowerCase().split('');
    let first = word[0].toUpperCase();
    let final = word.join('').replace(word[0], first);
    return final;
}

capitalize('fart');
console.log("TCL: capitalize('fart');", capitalize('fart'));

function lastLetter(input){
    input = input.split('');
    for (let i = 0; i < input.length; i++) {
        if (i === input.length - 1) {
            return input[i];
        }
    }
}

console.log("TCL: lastLetter('abcd');", lastLetter('abcd'));
lastLetter('abcd');