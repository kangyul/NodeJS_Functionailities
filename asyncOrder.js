const fs = require('fs');

console.log('Start');
fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('No. 1', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log('No. 2', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if(err) {
                throw err;
            }
            console.log('No. 3', data.toString());
            console.log('End');
        });
    });
});


