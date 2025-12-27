const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num = Number(input);

let count = 0;

for (let i = 0; i < num; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
        continue;
    } else {
        count++;
    }
}

console.log(count);