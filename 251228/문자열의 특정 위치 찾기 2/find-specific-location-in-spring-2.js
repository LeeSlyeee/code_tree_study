const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const inputChar = input[0]; 

const words = ["apple", "banana", "grape", "blueberry", "orange"];

let count = 0;

for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    
    if (currentWord[2] === inputChar || currentWord[3] === inputChar) {
        console.log(currentWord);
        count++;
    }
}

console.log(count);