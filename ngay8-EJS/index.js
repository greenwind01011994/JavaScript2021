////*********************************************** */
///phần học từ đầu
const express = require('express');
// template engine
const app = express();

app.set('views', './views-ht'); //đang xét views là tên thuộc tính của nó chưa phải tên thu mục nên phải ghi đúng //
//đây là câu lệnh viết thừa khi đặt tên views-ht là views (mặc định), nên viết vào cho đủ nếu 2 cái ghi khác nhau
//app.set('view engine', 'ejs');  //chỉ chuyển đổi file đuôi html thành ejs
/*
    // khi chuyển đổi file đuôi html thành ejs thì ta không cần dùng views-ht/a.html
app.get('/', (req, res) => res.sendfile('./views-ht/a.html'));// truy cập vào file html
*/
app.get('/', (req, res) => res.render('home'));   //home là home.ejs ; render là gửi code thành giao diện
app.listen(3000, () => console.log('Server started'));
