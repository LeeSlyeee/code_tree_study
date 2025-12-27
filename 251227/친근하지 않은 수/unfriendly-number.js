const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num = Number(input);

const result = [];

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (i % 3 === 0) {
        continue;
    } else if (i % 5 === 0) {
        continue;
    } else {
        result.push(i)
    }
}

console.log(result.length);