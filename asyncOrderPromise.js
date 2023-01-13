const fs = require('fs').promises;

console.log('Start');
fs.readFile('./readme2.txt')
    .then((data) => {
        console.log('No. 1', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('No. 2', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('No. 3', data.toString());
        console.log('End');
    })
    .catch((err) => {
        console.error(err);
    });
    
