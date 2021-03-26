const a = 5;
const b = 10;

if(a>b){
    console.log(a);
}else {
    console.log(b);
}

// ta có thể viết ngắn hơn. thay vì 5 dòng lệnh thì có thể sử dụng 
//toán tử ?, :

// Toán Tử Một Ngôi:
//nếu a đang là chuỗi(char) thì +a chuyển sang số
//nếu a đang là true(blood) thì !a chuyển sang fasle

// Toán tử 2 ngôi :
// a + b ,....

// ta chỉ có toán tử 3 ngôi duy nhất là (? , :)

const max = a > b ? a : b;
console.log(max);

// cách khác không cần khai báo biến max

a > b ? console.log(a) : console.log(b);