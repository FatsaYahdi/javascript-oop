function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Name ${name} FirstName ${this.firstName}`);
    }
}

Person.prototype.sayBye = function () {
    console.log("Good Bye");
}

Person.prototype.run = function () {
    console.info(`${this.firstName} is running`);
}

const satu = new Person("Satu","First");

const dua = new Person("Dua","Second");

console.log(satu);
console.log(dua);

satu.sayBye();
satu.run();

dua.sayBye();
dua.run();

//