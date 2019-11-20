const readlineSync = require("readline-sync");

let input = 0;

console.log("");
do {
    input = Number(readlineSync.question("Positive integer: "));
} while (input < 1 || input > Number.MAX_SAFE_INTEGER || input % 1 != 0 || Number.isNaN(input));

for (let i = 1; i <= input; i++) {
    if ()
}
