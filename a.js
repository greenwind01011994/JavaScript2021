// 00 - 99
// 93 -> lần thứ x thì mua được.
let soLanMua = 0;
let soLanMuaDuoc = -1;

while (soLanMua !=93) {
    soLanMua = Math.floor(Math.random()*100);
    const message = 'lan thu ' + ++soLanMua + ', mua duoc so ' + soLanMuaDuoc;
    console.log(message);
}