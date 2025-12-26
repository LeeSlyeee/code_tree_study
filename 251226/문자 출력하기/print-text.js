const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let result = ''

for (let i = 0; i < 8; i++) {
    result += input[0]
}
console.log(result)
