const readlineSync = require("readline-sync");

let input = 0;
let sum = 0;
let digit = 0;

console.log("");
do {
    input = Number(readlineSync.question("Positive integer: "));
} while (input < 1 || input > Number.MAX_SAFE_INTEGER || input % 1 != 0 || Number.isNaN(input));

do {
	digit = input % 10;
	input = (input - digit)/10
	if (digit % 2 != 0) {
        sum += digit;
    }
} while (input > 0); 

console.log(`\n${sum}.\n`);