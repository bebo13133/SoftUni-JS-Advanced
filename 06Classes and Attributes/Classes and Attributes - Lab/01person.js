class Person {

    constructor(fName, lName, age, mail) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.email = mail;

    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
let infoPerson = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(infoPerson.toString())