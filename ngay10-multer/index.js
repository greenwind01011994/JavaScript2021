const express = require('express');
//const parser = require('body-parser').urlencoded({extended: false});

const multer = require('multer');
/*
const upload = multer({dest: './public'});// dest chỉ cho chúng ta lưu ở đâu, không cho ta quyền đặt tên file,..
*/
const storage = multer.diskStorage({
    destination: (req,file, cb) => cb(null, './public'),// lưu ở đâu
    filename: (req, file, cb) => cb(null, 'a.jpg')
});

const upload = multer({storage});

const reload = require('reload');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'));

/* khi ta khai báo : const parser = require('body-parser').urlencoded({extended: false}); thì ta dùng cái này
app.post('/signup', parser, (req,res) => { //thay vì parser thì ta thay upload 1 file
    res.send(req.body);
});
*/
/* khi khai báo const multer, upload;
app.post('/signup', upload.single('profileSingle'), (req,res) => { //upload.single('tên  của input file') => trả cho ta 1 function 3 tham số ; đừng hỏi tại sao truyền tên như vậy vì ta sử dụng thư viện, mà thư viện yêu cầu thì mình làm theo
    res.send(req.body);
});
*/
reload(app);
app.listen(8080, () =>console.log('Server Started'));