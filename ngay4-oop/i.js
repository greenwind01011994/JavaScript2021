class Company {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

// mo rong truc tiep 
// extends

Company.prototype.sayHello = function() {
    console.log('Xin chao, ' + this.name);
}

Company.compare = function() {
    console.log('Bang nhau');
}

const kpt = new Company('KPTraining', '92 LTR');
const kpt2 = new Company('KPTraining', '92 LTR');

// kpt.sayHello();
Company.compare();