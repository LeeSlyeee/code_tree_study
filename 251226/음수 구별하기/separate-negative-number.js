const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let num1 = Number(input[0])

if (num1 < 0) {
    console.log(num1)
    console.log('minus')
}


