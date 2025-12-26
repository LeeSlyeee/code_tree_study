const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0])
let b = Number(input[1])

let result = ""

if (a < b) {
    result += "1" + " "
} else {
    result += "0" + " "
}

if (a === b) {
    result += "1"
} else {
    result += "0"
}

console.log(result)