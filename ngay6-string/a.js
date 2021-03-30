const str = 'Khoa Pham Training';
// console.log(str.indexOf('a', 4));
// console.log(str.replace('a', 'A'));

String.prototype.replaceAll = function(sub, newSub) {
    let a = this.toString();
    while(a.includes(sub)) {
        a = a.replace(sub, newSub);
    }
    return a;
}

const result = str.replaceAll('a', 'A');
console.log(result);