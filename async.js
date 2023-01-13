const fs = require('fs');

console.log('Start');
fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
        return err;
    }
    console.log('Number 1', data.toString());
})
fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
        return err;
    }
    console.log('Number 2', data.toString());
})
fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
        return err;
    }
    console.log('Number 3', data.toString());
})
fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
        return err;
    }
    console.log('Number 4', data.toString());
})
console.log('End');