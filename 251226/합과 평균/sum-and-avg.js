const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');


let tmp1 = Number(input[0]) + Number(input[1])
let tmp2 = (Number(input[0]) + Number(input[1])) / 2

console.log(`${tmp1} ${tmp2.toFixed(1)}`)