const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let temperture = Number(input[0]);

if (temperture <= 0) {
    console.log('ice');
} else if (temperture > 100) {
    console.log('vapor');
} else {
    console.log('water')
}