const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].toString().trim().split(" ")
let newArr = arr

let doubled = [];

for (let i = 0; i < newArr.length; i++) {
    doubled.push(newArr[i] ** 2);
}

console.log(doubled.join(' '));


