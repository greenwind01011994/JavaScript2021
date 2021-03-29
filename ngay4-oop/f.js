class Company {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Person {
    constructor(name, age, company) {
        this.name = name;
        this.age = age;
        this.company = company;
    }

    sayHello() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
    }

    tangTuoi() {
        this.age++;
    }
}

const kpTraining = new Company('KP Training', '92 LTR');
const khoa = new Person('Khoa Pham', 30, kpTraining);

console.log(khoa.company.name);