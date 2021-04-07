////*********************************************** */
///phần học từ đầu
const express = require('express');
const reload = require('reload');   //eslint-disable-line

//5. ta có mảng arryPeople    ****chú ý ta không thể viết mảng ở đây được sẽ sinh lỗi, phải viết sau : const app = express(); vì không có biến app để gọi
/*const arrPeople = [
    { name: 'Ti', age: 10 },
    { name: 'Teo', age: 11},
    { name: 'Tun', age: 12},
];*/
//ta có cách truyền thứ nhất để bên learn.ejs hiểu arrPeople ở đâu
//app.locals.arrPeople = arrPeople; //bên này app.locals.Têngi thì bên kia có tên đó

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


const arrX = [
    { name: 'Ti', age: 10 },
    { name: 'Teo', age: 11},
    { name: 'Tun', age: 12},
];
//app.locals.arrPeople = arrX;// không phải cứ tên biên là arryPeople thì gi là arrypeople

//6. 
const arrSubjects = ['Node' , 'Angular', 'Mongo', 'Express'];



app.get('/', (req, res) => res.render('home')); // render ra file    //home là home.ejs ; render là gửi code thành giao diện

//3. tạo ra 1 rout mới
//app.get('/learn', (req, res) => res.render('learn'));

//5. cách truyền thứ 2, câu lênh render có 2 tham số, tham số thứ 2 là 1 oject có thuộc tính username thì bên ejs sẽ thành tên biến username 
//app.get('/learn', (req, res) => res.render('learn', { username: 'phong'}));
app.get('/learn', (req, res) =>{
    res.render('learn', { username: 'phong1', arrSubjects,arrX });//muốn render các mảng môn học thì arrSubjects: arrySubjects. khi tên thuộc tính = tên giá trị thì ta rút gọn thành arrSubjects
});
//còn cách 1 : app.locals. phù hợp các thông tin mà người dùng đều dùng chung

//4.truyền app để reload 
reload(app);

app.listen(3000, () => console.log('Server started'));
