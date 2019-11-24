const readlineSync = require("readline-sync");

let sum = 0;
let loopCounter = 0;
let average = 0;

console.log("");
do {
    input = Number(readlineSync.question("Non-negative integer: "));
    if (input > 0 && input <= Number.MAX_SAFE_INTEGER && (input % 1 == 0)) {
        sum += input;
        loopCounter++;
    }
    else {
        // intentionally empty
    }
} while (input >= 0 || input > Number.MAX_SAFE_INTEGER || (input < 0 && loopCounter == 0) || Number.isNaN(input) || (input % 1 != 0));

average = (sum/loopCounter);
console.log(`\n${average.toLocaleString('en-US', {minimumFractionDigits :3, maximumFractionDigits: 3})}.\n`);