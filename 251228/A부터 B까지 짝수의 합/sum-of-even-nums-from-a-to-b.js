const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let result = 0;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        result += i
    }
}

console.log(result)