class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.log(`Hello ${name} my name is ${this.name}`);
    }
}

const satu = new Person("Satu");
console.log(satu);
// console.log(satu.name);
satu.sayHello("One");

const dua = new Person("Dua");
console.log(dua);
// console.log(dua.name);
dua.sayHello("Two");