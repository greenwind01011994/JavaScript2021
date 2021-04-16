//JAVASCRIPT có phần quang trọng đó là xử lý bất đồng bộ
//các câu lệnh viết trước thì chạy trước nhưng không phải viết trước luôn hoàng thành trước 
//ví dụ như sau :
//setTimeout();// câu lệnh nghĩa: chờ bao nhiêu đó, để làm cái gì
setTimeout(() => console.log('xong'), 1000);
console.log('ket thuc');