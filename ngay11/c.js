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
    if(typeof a !== 'number' || typeof b !== 'number') {
        return cb(new Error('type error')) //ta return để chương trình dừng nếu trùng điều kiện if
        //cb (,) 2 tham số mà truyền 1 tham số thì mặc định là undefined or null
    }
    const url = `http://localhost:8080/tinh/CONG/${a}/${b}`
    request( url, (err, res, body) => {
        cb(err, body);
    });
}
cong(4,5, (err, kq) => {
    if(err) return console.log(err.message);
    console.log('ket qua: ' + kq);
});


function nhan(a, b, cb) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return cb(new Error('Type error'));
    }
    const url = `http://localhost:8080/tinh/NHAN/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    });
}
nhan(4,5, (err, kq) => {
    if(err) return console.log(err.message);
    console.log('ket qua: ' + kq);
});

function chia(a, b, cb) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return cb(new Error('Type error'));
    }
    if(b === 0) return cb(new Error('Divide by zero'));
    const url = `http://localhost:8080/tinh/CHIA/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    });
}
chia(4,5, (err, kq) => {
    if(err) return console.log(err.message);
    console.log('ket qua: ' + kq);
});

// (a + b) * h / 2

function tinhDienTich(a, b, h, cb) {
    cong(a, b, (errCong, tong) => {
        if (errCong) return cb(errCong);
        nhan(+tong, h, (errNhan, tich) => {
            if (errNhan) return cb(errNhan);
            chia(+tich, 2, (errChia, kq) => {
                if (errChia) return cb(errChia);
                cb(null, kq);
            });
        });
    });
}

tinhDienTich(4, 5, 6, (err, kq) => {
    if (err) return console.log(err.message);
    console.log(kq);
})