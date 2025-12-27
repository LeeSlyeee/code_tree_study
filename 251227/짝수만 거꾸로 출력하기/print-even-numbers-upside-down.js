const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let num = Number(input[0]);
let arr = input[1].split(' ').reverse();

const result = [];

for (let i = 0; i < num; i++) {
    if (arr[i] % 2 === 0) {
        result.push(arr[i]);
    }
}

console.log(result.join(" "));