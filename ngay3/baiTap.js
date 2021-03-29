// BÀI 1 : cho 2 số a và b, viết code log ra màn hình 
//A = 5
//B = 3
//A + B = 8
//A - B = 2
//A X B = 15
//A / B = 1.6666666667
//A % B = 2
/*
const a = 5;
const b = 10;

if(a > b) {
    console.log(a);
}else {
    console.log(b);
}
*/
//BÀI 2  : cho n = 87531, tìm xem có bao nhiêu số từ 0 đến n chia hết cho 154, in các số đó ra màn hình
//

///// 1.........100
// in ra các số chia hết cho 2 trong khoảng đó
//in ra các số chia hết cho 3
//in ra các số chia hết cho 5 dư 1
//in ra các số chính phương -> x => Math.sqrt(x) % 1

function inSoChiaHetChoXDuY(x, y) {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = (i % x === y);
        if (dieuKien) console.log(i);
    }
}

// inSoChiaHetChoXDuY(5, 1);
function inSoChiaHetCho2() {
    for(let i = 1; i <= 100; i++) {
        const dieukien = (i % 2 === 0);
        if(dieukien) console.log(i);
    }
}
//inSoChiaHetCho2();

function inSoChiaHetCho3() {
    for(let i = 1; i <= 100; i++) {
        const dieukien = (i % 3 === 0);
        if(dieukien) console.log(i);
    }
}
//inSoChiaHetCho3();

function inSoChiaHetCho5Du1() {
    for(let i = 1; i <= 100; i++) {
        const dieukien = (i % 5 === 1);
        if(dieukien) console.log(i);
    }
}
//inSoChiaHetCho5Du1();

function inSoChinhPhuong() {
    for(let i = 1; i <= 100; i++) {
        const dieukien = (Math.sqrt(i) % 1 ===0);
        if(dieukien) console.log(i);
    }
}

function inSo(checkNumber) {
    for(let i = 1; i <= 100; i++) {
        const dieukien = checkNumber(i);
        if(dieukien) console.log(i);
    }
}

function kiemTraChiaHetCho2(i) {
    return 1 % 2 === 0 ;
}

function kiemTraChiaHetCho3(i) {
    return i % 3 === 0;
}

function kiemTraChia5Du1(i) {
    return i % 5 === 1;
}

function kiemTraChinhPhuong(i) {
    return Math.sqrt(i) % 1 === 0;
}

const kiemTra2 = i => Math.sqrt(i) % 1 === 0;

console.log(kiemTra2(100));

inSo(kiemTra2);

//arrow
