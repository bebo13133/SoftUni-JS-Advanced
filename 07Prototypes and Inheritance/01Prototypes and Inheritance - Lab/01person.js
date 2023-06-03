// CLASS CONSTRUCTOR
class Person {
    constructor(name,lastName){
        this.firstName=name;
        this.lastName = lastName
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(input){
        let dataLine = input.split(" ")
        this.firstName = dataLine[0]
        this.lastName = dataLine[1]
    }
}

// ВАРИАНТ 2 - fUNCTION CONSTRUCTOR
function Person (name, last){
    this.firstName = name;
    this.lastName = last;
    Object.defineProperty(this,"fullName", {
        get: function(){
            return `${this.firstName} ${this.lastName}`
        },
        set: function(input){
            let dataLine = input.split(" ")
            this.firstName = dataLine[0]
            this.lastName = dataLine[1]
        } 
    })
};




let person = new Person("Peter", "Ivanov");

 console.log(person.fullName); 
  person.firstName = "George"; 
  console.log(person.fullName); 
 person.lastName = "Peterson"; 
 console.log(person.fullName); 