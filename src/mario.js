const readlineSync = require("readline-sync");

let height = 0;
let length = 0;
let pyramid = "";

console.log("");
do {
    height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || height % 1 != 0);

length = height + 1;
for (let i = 0; i < length; i++) {
    for (let h = 1; h < )
}

 // on the right track.
 // the outer loop produces the rows
 // the inner loops do the spacing and hashtags
 // find a pattern that determines the number of spaces of hashtags based on the row
 // e.g. the last row is all hashtags, no spaces, second to last row is one space, 7 hashtags, etc
