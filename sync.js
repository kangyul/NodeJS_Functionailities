const fs = require('fs');

let data = fs.readFileSync('./readme2.txt');
console.log('No. 1', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('No. 2', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('No. 3', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('No. 4', data.toString());