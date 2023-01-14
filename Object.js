function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Name ${name} FirstName ${this.firstName}`);
    }
}

const satu = new Person("Satu","Dua");
// satu.firstName = "SATU";
// satu.lastName = "FIRST";
    satu.sayHello("SIJI");

const dua = new Person("Dua","Sec");
// dua.firstName = "DUA";
// dua.lastName = "SEC";
    dua.sayHello("LORO");

// console.log(satu);
// console.log(dua);