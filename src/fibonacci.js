const readlineSync = require("readline-sync");

let previousNumber = 1;
let previousNumber2 = 0;
let sum = 0;

do {
    let input = readlineSync.question("Positive integer: ");
} while (input < 1 || input > 78 || Number.isNaN(input) || input % 1 != 0)

for (let i = 1; i <= input; i++) {
    if (prime)
}
