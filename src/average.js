const readlineSync = require("readline-sync");

let sum = 0;
let loopingCounter = 0;

console.log("");
do {
    input = Number(readlineSync.question("Non-negative integer: "));
    if (input > 0 && input <= Number.MAX_SAFE_INTEGER && (input % 1 == 0)) {
        sum += input;
        loopingCounter++;
    }
    else {
        // intentionally empty
    }
} while (input > 0 || input > Number.MAX_SAFE_INTEGER || Number.isNaN(input) || (input % 1 != 0));

let average = sum/loopingCounter;
console.log(`\n${average.toLocaleString('en-US', {minimumFractionDigits :3, maximumFractionDigits: 3})}.`);