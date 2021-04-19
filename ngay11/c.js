const request = require('request');

/*
function cong(a, b, cb) {
    request(`http://localhost:8080/tinh/CONG/${a}/${b}`, (err, res, body) => {
        cb(err, body);
    });
}
cong(4,5, (err, kq) => {
    if(err) return console.log(err.message);
    console.log('ket qua: ' + kq);
});
*/
function cong(a, b, cb) {
    request(`http://localhost:8080/tinh/CONG/${a}/${b}`, (err, res, body) => {
        cb(err, body);
    });
}
cong(4,5, (err, kq) => {
    if(err) return console.log(err.message);
    console.log('ket qua: ' + kq);
});