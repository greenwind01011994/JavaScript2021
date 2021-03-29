function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
    }

    tangTuoi() {
        this.age++;
    }
}

// HinhVuong -> canhHinHVuong -> getPerimeter -> getSquare

const teo = new Person('Teo Nguyen', 18);
teo.sayHello();
teo.tangTuoi();
teo.sayHello();
console.log(teo);