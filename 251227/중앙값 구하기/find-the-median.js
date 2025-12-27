const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0]
let b = input[1]
let c = input[2]


let median;

if (a >= b) {
    if (b >= c) {
        median = b;
    } else {
        if (a >= c) {
            median = c;
        } else {
            median = a;
        }
    }
} else {
    if (a >= c) {
        median = a;
    } else {
        if (b >= c) {
            median = c;
        } else {
            median = b;
        }
    }
}

console.log(median)