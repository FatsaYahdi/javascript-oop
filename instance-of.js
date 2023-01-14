class Employee {

}
class Manager extends Employee{

}

const satu = new Employee();
const dua = new Manager();

/*
console.log(typeof satu);
console.log(typeof dua);
result is object
*/

console.log(satu instanceof Employee);  // True Karena Satu instance Employee           // True 
console.log(satu instanceof Manager);   // False Karena Satu bukan instance Manager     // False
console.log(dua instanceof Employee);   // False Karena Dua bukan instance Employee     // True Jika Extends 
console.log(dua instanceof Manager);    // True Karena Dua instance Manager             // True