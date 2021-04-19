//bất đồng bộ -> sử dụng hoặc các tài nguyên nằm ngoài chương trình
//đồng bộ -> sử dụng các giá trị nằm trong chương trình

//để đọc file x.txt nằm ngoài chương trình 
//để đọc file này ra require đến 1 thư viện hay 1 modul có sẵn 
const fs = require('fs');//fs là thư viện có sẵn trong nodeJS

//đọc file thì
fs.readFile('./x.txt', 'utf8', (err,str) => {
    console.log(err, str);
});

/*
//cách dài ta viết 1 function không thể nào return ra được vì
//return function fs.readFile với return function read không liên quan đến nhau 
function read(filename) {
    fs.readFile(filename, 'utf8', (err, str) => {
        if(err) return null;
        return str; // return của function fs.readFile chứ không phải của function read
    });
}//nên function read return ra undefined
console.log(read('./x.txt'));
*/
function read(filename) {
    let x;// khai báo biến mà không gán giá trị thì sau dòng này x mang giá trị undefined
    fs.readFile(filename, 'utf8', (err, str) => {
        if(err) x = null;
        x = str; 
    });//==> function fs.readFile là bất đông bộ nên chưa chạy xong cái này thì nó trả lệnh return x rồi.
    return x;
}
console.log(read('./x.txt'));//===> sinh ra undefined

//sinh ra undefined rồi log x.txt
function read(filename) {
    let x;
    fs.readFile(filename, 'utf8', (err, str) => {
        console.log(str); 
    });
    return x;
}
console.log(read('./x.txt'));