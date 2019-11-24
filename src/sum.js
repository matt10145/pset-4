const readlineSync = require("readline-sync");

let LOWER_BOUND = 0;
let UPPER_BOUND = 0;

console.log("");
do {
	LOWER_BOUND = Number(readlineSync.question("Lower bound: "));
	UPPER_BOUND = Number(readlineSync.question("Upper bound: "));
} while (LOWER_BOUND > UPPER_BOUND || LOWER_BOUND > Number.MAX_SAFE_INTEGER || LOWER_BOUND < Number.MIN_SAFE_INTEGER || UPPER_BOUND > Number.MAX_SAFE_INTEGER || UPPER_BOUND < Number.MIN_SAFE_INTEGER);

let sum = 0;
for (let i = LOWER_BOUND; i <= UPPER_BOUND; i++) {
	if ((i % 2) == 0) {
		sum += i;
	}
	else {
		//intentionally empty
	}
}

console.log(`\n${sum.toLocaleString('en-US')}.\n`);
