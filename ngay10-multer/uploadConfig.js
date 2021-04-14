const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file, cb) => cb(null, './public'),
    filename: (req, file, cb) => cb(null, file.originalname),
});
function fileFilter(req, file, cb) {
    const {mimetype} = file;
    if(mimetype === 'image/jpg' || mimetype === 'image/png') { 
        return cb(null, true);
    } 
    cb(new Error('File khong dung dinh dang! '));
}


const upload = multer({storage, fileFilter});

module.exports = upload; // chuyển code file qua