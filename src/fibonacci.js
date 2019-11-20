const readlineSync = require("readline-sync");

const UPPER_THRESHOLD = 78;
let previousNumber = 1;
let previousNumber2 = 1;
let input = 0;
let sum = 0;

console.log("");
do {
    input = Number(readlineSync.question("Positive integer: "));
} while (input < 1 || input > UPPER_THRESHOLD || Number.isNaN(input) || input % 1 != 0)

if (input == 1 || input == 2) {
    sum = 1;
}
else if (input > 2) {
    for (let i = 1; i <= input - 2; i++) {
        sum = previousNumber + previousNumber2;
        previousNumber2 = previousNumber;
        previousNumber = sum;
    }
}

console.log(`\n${sum.toLocaleString('en-US')}.`);
