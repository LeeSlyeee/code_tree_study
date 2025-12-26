const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let record = Number(input[0])

if (record >= 90) {
    console.log('A')
} else if (record >= 80) {
    console.log('B')
} else if (record >= 70) {
    console.log('C')
} else if (record >= 60) {
    console.log('D')
} else {
    console.log('F')
}