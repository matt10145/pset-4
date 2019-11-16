const readlineSync = require("readline-sync");

let input = 0;
let reversed = 0;
let digit = 0;

console.log("");
do {
    input = Number(readlineSync.question("Positive integer: "));
} while (input < 1 || input > Number.MAX_SAFE_INTEGER || input % 1 != 0 || Number.isNaN(input));

do {
	digit = input % 10;
	input = (input - digit)/10
	reversed = reversed + digit + ", ";
} while (input >= 10); 

reversed = reversed + input + ".";
console.log(`\n${reversed}\n`);