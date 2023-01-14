class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const satu = new Customer("Satu","One");
// satu.balance = 1200; acces balance
console.info(satu);