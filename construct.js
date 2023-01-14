function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.log(`Hello ${name} FirstName ${this.firstName}`);
    }
}

function Manager(firstaName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstaName);
}

const satu = new Manager("Satu","Dua");
console.log(satu);
