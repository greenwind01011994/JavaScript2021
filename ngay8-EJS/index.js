////*********************************************** */
///phần học từ đầu
const express = require('express');
const reload = require('reload');   //eslint-disable-line
// template engine
const app = express();

//1. thư mục các file views nằm ở views-ht
app.set('views', './views-ht'); //đang xét views là tên thuộc tính của nó chưa phải tên thu mục nên phải ghi đúng //
//đây là câu lệnh viết thừa khi đặt tên views-ht là views (mặc định), nên viết vào cho đủ nếu 2 cái ghi khác nhau
//2. view engine để thao tác các mã html, ta dùng ejs
app.set('view engine', 'ejs');  ///
//chỉ chuyển đổi file đuôi html thành ejs
/*
    // khi chuyển đổi file đuôi html thành ejs thì ta không cần dùng views-ht/a.html
app.get('/', (req, res) => res.sendfile('./views-ht/a.html'));// truy cập vào file html
*/
app.get('/', (req, res) => res.render('home')); // render ra file    //home là home.ejs ; render là gửi code thành giao diện
//3. tạo ra 1 rout mới
app.get('/learn', (req, res) => res.render('learn'));

//4.truyền app để reload 
reload(app);
app.listen(3000, () => console.log('Server started'));
