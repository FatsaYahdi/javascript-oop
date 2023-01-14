class Employee {
    sayHello(name) {
        console.log(`Hello ${name} my name ${this.name}`);
     }
}

class Manager extends Employee {
    // sayHello(name) {
    //     console.log(`Hello ${name} my name ${this.name}`);
    // }
}

const satu = new Employee();
satu.name = "Satu";
satu.sayHello("ONE");

const dua = new Manager();
dua.name = "Dua";
dua.sayHello("TWO");

console.info(satu);
console.info(dua);