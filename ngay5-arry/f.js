const numbers = [1, 5, 3, 7, 9, 7, 4, 2, 1, 7, 2];

// console.log(numbers.indexOf(7, 4));

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

// console.log(arr.find(e => e.age === 15));
// console.log(arr.findIndex(e => e.age === 15));

// arr.forEach((e, index) => console.log(index + 1 + ': ' + e.name));
// console.log(arr.push(1000));
// arr2 = arr.push(1000);