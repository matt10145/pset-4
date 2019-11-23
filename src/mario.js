const readlineSync = require("readline-sync");

let height = 0;
let rowLength = 0;
let hashtags = 2;
let pyramid = "";

console.log("");
do {
    height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || height % 1 != 0);

console.log("");
rowLength = height + 1;

for (let i = 0; i < height; i++) {
    for (let i = 1; i <= rowLength - hashtags; i++) {
        pyramid += " ";
    }

    for (let i = 1; i <= hashtags; i++) {
        pyramid += "#";
    }

    console.log(pyramid);
    pyramid = "";
    hashtags++;
}