const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let strArr = input.split("");

strArr[1] = "a";
strArr[strArr.length - 2] = "a";

console.log(strArr.join(''))