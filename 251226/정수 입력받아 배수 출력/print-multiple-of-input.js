const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let num = Number(input[0]);

let result = [];

for (let i = 1; i <= 5; i++) {
    result.push(num * i);
}

console.log(result.join(' '))
