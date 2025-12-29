const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let result = [];

for (let i = num1; i <= num2; i = i % 2 !== 0 ? i * 2 : i + 3 ) {
        result.push(i);
}

console.log(result.join(' '));