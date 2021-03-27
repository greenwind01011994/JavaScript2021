//null, false , 0 , ' ', undefined, NaN --> false(SAI)
if(-1){
    console.log('DUNG');
}else {
    console.log('SAI');
}

let a = 5;
console.log(a++);
console.log(a);

if(a>4 || --a>3) {
    console.log(a);
}

switch(a) {
    case 1:
        console.log('MOT');
    case 2:
        console.log('HAI');
    default:
        console.log('khong tim thay');
        break;
}

//while chặc chẽ hơn do while bởi vì vòng lặp đầu tiên đã kiểm tra điều kiện rồi.
//nếu muốn vòng lặp đầu tiên chưa kiểm tra điều kiện  ngay thì ta dùng do while

for(let i =1; i <= 4; i++) {
    console.log(i);
}

for(let i =1; true; i++){
    if(i > 5 ) break;
    console.log(i);
}

console.log('while');

let i = 1;
while ( i<= 2) console.log(i++);

console.log('do while');

do {
    console.log(i++);
} while (i <= 100);