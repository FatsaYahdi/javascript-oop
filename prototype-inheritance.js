function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

// Manager.prototype = Employee.prototype; SALAH
Manager.prototype = Object.create(Employee.prototype);


Manager.prototype.sayHello = function (name) {
    console.log(`Hello ${name} my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function (name) {
    console.log(`Hello ${name} my name is Employee ${this.name}`);
}

const employee = new Employee("Awok");
employee.sayHello("Satu");

const manager = new Manager("Kekw");
manager.sayHello("Dua");

console.info(employee);
console.info(manager);