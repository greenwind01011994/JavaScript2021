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

// log ra mang cua cac phan tu co tuoi > 14 va chieu cao > 160
console.log(arr.filter(p => p.age > 14 && p.height > 160));

console.log(arr.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    return a.height - b.height;
}));