const readlineSync = require("readline-sync");

let LOWER_BOUND = null;
let UPPER_BOUND = null;

do {
  LOWER_BOUND = readlineSync.question("\nLower bound: ");
  UPPER_BOUND = readlineSync.question("Upper bound: ");
  if ((LOWER_BOUND > Number.MAX_SAFE_INTEGER || LOWER_BOUND < Number.MIN_SAFE_INTEGER) || (UPPER_BOUND > Number.MAX_SAFE_INTEGER || UPPER_BOUND < Number.MIN_SAFE_INTEGER)) {
    console.log("Invalid.");
  }
} while (LOWER_BOUND > UPPER_BOUND);

let sum = 0;
for (let i = LOWER_BOUND; i <= UPPER_BOUND; i++) {
  if ((i % 2) == 0) {
    sum += i;
  }
  else {
    //intentionally empty
  }
}

console.log(sum.toLocaleString('en-US', {minimumFractionDigits :2, maximumFractionDigits: 2}));



//NOT DONE
