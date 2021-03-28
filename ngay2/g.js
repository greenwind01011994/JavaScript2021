//function là 1 giá trị
//chỉ có javascrip
const a = console.log;
a(10);

function getlog() {
    return console.log;
}
getlog()(4);

//higher order function, 
function addWithX(x) {
    return function (y) {
        return x + y;
    }
}

const result = addWithX(10)(5);// function(y){return 10 + y}
console.log(result);

//
const addWith10 = addWithX(10);

function addWith11(x) {
    return x + 11;
}
function addWith12(x) {
    return x + 12;
}
//để mô hình hoá cao hơn thì để in giá trị function đến 100 thì ta return function

console.log(console.log);
console.log(console.log(5));

