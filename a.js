// 00 - 99
// 93 -> lần thứ x thì mua được.
let soLanMua = 0;
let soMuaDuoc = -1;

/*while (soMuaDuoc !=93) {
    soMuaDuoc = Math.floor(Math.random()*100);
    const message = 'lan thu ' + ++soLanMua + ', mua duoc so ' + soMuaDuoc;
    console.log(message);
}*/
// có quá nhiều dấu cộng, nếu mình không muốn thì mình có thể làm như sau :
// $ là sintag
while (soMuaDuoc !=93) {
    soMuaDuoc = Math.floor(Math.random()*100);
    const message = `lan thu  ${ ++soLanMua } mua duoc so ${ soMuaDuoc}`;
    console.log(message);
}
console.log(eval('4 + 5'));//không nên lạm dụng dễ bị hack nếu truyền thêm toán tử random, ngoại trừ cộng trừ nhân chia

/*for (; soMuaDuoc !=93; ) {
    soMuaDuoc = Math.floor(Math.random()*100);
    const message = 'lan thu ' + ++soLanMua + ', mua duoc so ' + soMuaDuoc;
    console.log(message);
    
}*/
// mình muốn in ra dấu ' ' ;