const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let countOfThree = 0;
let countOfFive = 0;

for (let i = 0; i < input.length; i++) {
    const num = input[i];

    if (num % 3 === 0) {
        countOfThree++;
    }

    if (num % 5 === 0) {
        countOfFive++;
    }
}

console.log(`${countOfThree} ${countOfFive}`);