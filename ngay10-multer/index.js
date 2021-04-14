const express = require('express');
const reload = require('reload');

const upload = require('./uploadConfig');// upload file qua
//const parser = require('body-parser').urlencoded({extended: false});


//tách file sang uploadConfig *********************************************************************************

//const multer = require('multer');
/*
const upload = multer({dest: './public'});// dest chỉ cho chúng ta lưu ở đâu, không cho ta quyền đặt tên file,..
*/
/*
const storage = multer.diskStorage({
    destination: (req,file, cb) => cb(null, './public'),// lưu ở đâu
    //filename: (req, file, cb) => cb(null, 'a.jpg')// để tên file không ghi đè lên nhau và không trùng 
    //filename: (req, file, cb) => cb(null, Date.now()+'.jpg'),
    //filename: (req, file, cb) => cb(null, req.body.email +'.jpg'),
    filename: (req, file, cb) => cb(null, file.originalname),//originalname là tên file trên máy của người dùng và nó có đuôi sẵn
    /*
    filename: (req, file, cb) => {
        console.log(file); // undefined, không phải giá trị, chưa có thuộc tính size
        if(file.size >102400) {
            return  cb(null, 'big-' + file.originalname)
        }
        cb(null, 'small-' + file.originalname)
    }////
    
});
*/

/*
const limits = {fileSize: 102400};
const upload = multer({storage, limits});
*/

/*
function fileFilter(req, file, cb) {
    if(file.mimetype === 'image/jpg' || file.mimetype)// thuộc tính mimetype
}
*/
// thay vì gõ 2 lần file.mimetype  thì ta khai báo mimetype ra trước rồi mới so sánh, sẽ đẹp hơn
/*function fileFilter(req, file, cb) {
    const {mimetype} = file;
    if(mimetype === 'image/jpg' || mimetype === 'image/png') { // thuộc tính mimetype
        return cb(null, true);
    } // chú ý file đuôi jpg có thể thực tế đuôi là jpeg
    cb(new Error('File khong dung dinh dang! '));
}


const upload = multer({storage, fileFilter}); // tối đa truyền 4 cái : 1. dest or storage; 2. fileFilter; 3. limits; 4. preservePath

const reload = require('reload');
*/

/*********************************************************************************************************************** */


const app = express();

app.set('views', './views');
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'));

/* khi ta khai báo : const parser = require('body-parser').urlencoded({extended: false}); thì ta dùng cái này
app.post('/signup', parser, (req,res) => { //thay vì parser thì ta thay upload 1 file
    res.send(req.body);
});
*/

//nên có đoạn này để upload file lên
app.post('/signup', upload.single('profileSingle'), (req,res) => { //upload.single('tên  của input file') => trả cho ta 1 function 3 tham số ; đừng hỏi tại sao truyền tên như vậy vì ta sử dụng thư viện, mà thư viện yêu cầu thì mình làm theo
    //res.send(req.body);
    res.send(req.file)
});


app.use((err, req, res, next) => { //phải truyền đủ 4 tham số // eslint-disable-line
    res.send(err.message);
});
app.get('*', (req, res) => res.send('Cannot find this link'));


reload(app);
app.listen(8080, () =>console.log('Server Started'));