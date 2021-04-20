// biệt lệ - lỗi (Error), không do cá nhân(code sai) ví dụ bị rớt mạng, server bên kia viết sai dẫn đên bạn sai 
//console.log(a);// lỗi chưa khai báo a
//ta xử lý chỉ xử lý biệt lệ, còn lỗi cá nhân thì ta debug
//viết 1 đoạn chưa trình để request lên 1 server khác
//console.log(100); //dong trên lỗi nên dưới không in ra được

//khi không may log(a) lỗi thì ta vẫn muốn dòng sau tiếp tục chạy

try {
    console.log(a);
} catch (error) {
    console.log(error.message);// có thể không cần ghi đoạn này
}
console.log(100);