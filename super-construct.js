class Employee {
    constructor(firstName) { // jika ada construct di parent akan turun ke child nya
        this.firstName = firstName;
    }
    sayHello(name) {
        console.log(`Hello ${name} my name ${this.firstName}`);
     }
}

class Manager extends Employee {
    constructor(firstName,lastName) {
        super(firstName);
        this.lastName = lastName;
    }
    sayHello(name) {
        console.log(`Hello ${name} my name ${this.firstName} ${this.lastName}`);
    }
}

const satu = new Employee("Satu");
satu.sayHello("ONE");

const dua = new Manager("Dua","Two");
dua.sayHello("TWO");
