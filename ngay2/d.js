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
