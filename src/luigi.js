const readlineSync = require("readline-sync");

let height = 0;
let baseLength = 0;
let hashtagsLeft = 2;
let hashtagsRight = 2;
let pyramidLeft = "";
let pyramidRight = "";

console.log("");
do {
    height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || height % 1 != 0);

console.log("");
baseLength = height + 1;

for (let i = 0; i < height; i++) {
    for (let i = 1; i <= baseLength - hashtagsLeft; i++) {
        pyramidLeft += " ";
    }

    for (let i = 1; i <= hashtagsLeft; i++) {
        pyramidLeft += "#";
    }

    for (let i = 1; i <= hashtagsRight; i++) {
        pyramidRight += "#";
    }

    for (let i = 1; i <= baseLength - hashtagsRight; i++) {
        pyramidRight += " ";
    }

    console.log(`${pyramidLeft}  ${pyramidRight}`);
    pyramidLeft = "";
    pyramidRight = "";
    hashtagsLeft++;
    hashtagsRight++;
}
console.log("");
