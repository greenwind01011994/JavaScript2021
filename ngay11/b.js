//ví dụ request lên 1 trang web
//https://www.jsontest.com/#ip
//http://ip.jsontest.com/
const request = require('request');

//câu lệnh request lên server khác lấy dữ liệu về
request('http://ip.jsontest.com/', (err, res, body) => {
    console.log(body);
    //console.log(res);
}); 

//
function getIp(cb) {
    request('http://ip.jsontest.com/', (err, res, body) => {
    cb(body);
    
    }); 
}
//getIp(x => console.log(x));
//getIp(x => console.log(x));//ở đây mình thích đặt tên là gì cũng đc cũng chỉ là ip

getIp(console.log);// tại sao nó vẫn log ra: getIp nhận vào 1 giá trị là 1 function và mình truyền contror.log  vào getIP(cb).
//nên cb(body) tương đương với console.log(body)
//chả khác gì khi getIp(x => console.log(x))