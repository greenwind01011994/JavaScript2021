function doSomethingWith1000(aFunc) {
    aFunc(1000);
}
doSomethingWith1000(console.log);

function multiplyWith2(x) {
    console.log(x * 2);
}
multiplyWith2(5);
//multiplyWith2 là giá trị
doSomethingWith1000(multiplyWith2);


//function tham số 1 function
//jequery
$(document).ready(function() {

})//function nhận tham số function()

//NodeJS
applicationCache.get('/', function(req, res) {

})