const readlineSync = require("readline-sync");

let input = 0;
let isPrime = true;

console.log("");    
do {
    input = Number(readlineSync.question("Non-negative integer: "));
} while (input < 0 || input > Number.MAX_SAFE_INTEGER || Number.isNaN(input) || input % 1 != 0);

for (let i = 2; i <= Math.floor(Math.sqrt(input)); i++) {
    if(input % i == 0) {
        isPrime = false;
    }
    else {
        //intentionally empty
    }
}

if (isPrime == true) {
    console.log("\nPrime.\n");
}
else {
    console.log("\nNot prime.\n");
}