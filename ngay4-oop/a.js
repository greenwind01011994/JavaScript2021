// Gom nhom cac thuoc tinh, phuong thuc mo ta 1 doi tuong
// Nguoi - name, age, height, soDuTaiKhoan - diLai, chaoHoi, kiemTien

// cach 1: khai bao truc tiep
// su dung function hoac class

const teo = { 
    name: 'Teo Nguyen', 
    age: 18,
    sayHello: function() {
        console.log('Xin chao');
    } 
};

// console.log(teo.name);
// teo.sayHello();

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi`);
    }
}

// console.log(Person());
const ti = new Person('Ti', 18);
const tun = new Person('Tun', 30);
// console.log(ti.name);
ti.sayHello();
tun.sayHello();