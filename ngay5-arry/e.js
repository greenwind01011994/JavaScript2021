class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arr = [
    new Person('Ti', 10, 150),
    new Person('Teo', 19, 180),
    new Person('Tun', 15, 190)
];

// Kiem tra xem trong mang arr Person co ton tai phan tu nao co chieu cao > 185 ko

// console.log(arr.some(e => e.height > 185));
// console.log(arr.every(e => e.height > 170));

function checkEvery(arr, fnCheck) {
    for(let i = 0; i < arr.length; i++) {
        if (!fnCheck(arr[i])) return false;
    }
    return true;
}

console.log(checkEvery(arr, e => e.height > 140));