const request = require('request');

function cong(a, b) {
    
}

request('http://localhost:8080/tinh/CONG/4/5', (err, res, body) => {
    console.log(body);
});