let x = 1000;

function incr(a) {
    return a++;
}

let p = { age: 18 };

function incrAge(person) {
    return person.age++;
}

incrAge(p);

console.log(p);