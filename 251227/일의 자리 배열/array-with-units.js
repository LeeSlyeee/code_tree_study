const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let result = [num1, num2];

for (let i = 0; i < 8; i++) {
    const prevPrev = result[result.length - 2];
    const prev = result[result.length - 1];
    
    const nextValue = (prevPrev + prev) % 10;
    
    result.push(nextValue);
}

console.log(result.join(" "));

