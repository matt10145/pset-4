const readlineSync = require("readline-sync");

const LOWER_THRESHOLD = 3999999999999;
const UPPER_THRESHOLD = 9999999999999999;

let creditNumber = 0;
let creditNumberClone = 0;
let currentDigit = 0;
let leftmostDigit = 0;
let leftmostTwoDigits = 0;
let numberLength = 0;
let sum = 0;

console.log("");
do {
    creditNumber = Number(readlineSync.question("Number: "));
} while (creditNumber <= LOWER_THRESHOLD || creditNumber > UPPER_THRESHOLD || creditNumber % 1 != 0 || Number.isNaN(creditNumber));

creditNumberClone = creditNumber;
while (creditNumberClone >= 1) {
    creditNumberClone /= 10;
    numberLength += 1;
}

leftmostDigit = (creditNumber - (creditNumber % (10 ** (numberLength - 1))))/(10 ** (numberLength - 1));
leftmostTwoDigits = (creditNumber - (creditNumber % (10 ** (numberLength - 2))))/(10 ** (numberLength - 2));

for (let i = 1; i <= numberLength; i++) {
    currentDigit = creditNumber % 10;
    creditNumber = (creditNumber - currentDigit)/10;
    product = currentDigit * 2;

    if (i % 2 == 1) {
        if (product >= 10) {
            sum += (product % 10) + 1;
        }
        else if (product < 10) {
            sum += product;
        }
    }
    else {
        sum += currentDigit;
    }
}

if (sum/10 == 0) {
    console.log("\nInvalid.");
}
else if ((numberLength == 15) && (leftmostTwoDigits == 34 || leftmostTwoDigits == 37)) {
    console.log("\nAmex.");
}
else if ((numberLength == 16) && (leftmostTwoDigits > 50 && leftmostTwoDigits < 56 && leftmostTwoDigits % 1 == 0)) {
    console.log("\nMastercard.");
}
else if ((numberLength == 13 || numberLength == 16) && leftmostDigit == 4) {
    console.log("\nVisa.");
}
else {
    console.log("\nInvalid."); // a fall-through case for any numbers falling within the specified range 
                               // but not meeting any of the credit card requirements  
}
