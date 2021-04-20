const fs = require('fs');
// Viet ra promise doc file

function read(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

read('./x.txt')
.then(text => console.log(text))
.catch(err => console.log(err.message));