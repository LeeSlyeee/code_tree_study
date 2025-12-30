const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = input[0];
let num2 = input[1];


let result = "";

for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
        result += "* ";
    }
    result += "\n";
}

console.log(result);

