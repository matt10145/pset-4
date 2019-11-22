const readlineSync = require("readline-sync");

let input = 0;
let quotient = 0;
let factors = "";
let formattedFactors = "";
let length = 0;

console.log("");
do {
    input = Number(readlineSync.question("Positive integer: "));
} while (input < 1 || input > Number.MAX_SAFE_INTEGER || input % 1 != 0 || Number.isNaN(input));

for (let i = 1; i <= Math.floor(Math.sqrt(input)); i++) {
    if (input % i == 0){
        quotient = input/i;
        if ((quotient == i )) {
            factors += (`${i}, `);
        }
        else {
            factors += (`${i}, ${quotient}, `);
        }
    }
    else {
        // intentionally empty
    }
}

// remove comma & space and add period
formattedFactors = factors.trim();
length = formattedFactors.length;
formattedFactors = formattedFactors.substring(0, (length - 1));
console.log(`\n${formattedFactors}.`);
