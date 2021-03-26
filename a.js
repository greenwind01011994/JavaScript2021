// 00 - 99
// 93 -> lần thứ x thì mua được.
let soLanMua = 0;
let soMuaDuoc = -1;

while (soMuaDuoc !=93) {
    soMuaDuoc = Math.floor(Math.random()*100);
    const message = 'lan thu ' + ++soLanMua + ', mua duoc so ' + soMuaDuoc;
    console.log(message);
}