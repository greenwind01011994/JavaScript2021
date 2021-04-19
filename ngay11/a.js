//bất đồng bộ -> sử dụng hoặc các tài nguyên nằm ngoài chương trình
//đồng bộ -> sử dụng các giá trị nằm trong chương trình

//để đọc file x.txt nằm ngoài chương trình 
//để đọc file này ra require đến 1 thư viện hay 1 modul có sẵn 
const fs = require('fs');//fs là thư viện có sẵn trong nodeJS

//đọc file thì
fs.readFile('./x.txt', 'utf8', (err,str) => {
    console.log(err, str);
});