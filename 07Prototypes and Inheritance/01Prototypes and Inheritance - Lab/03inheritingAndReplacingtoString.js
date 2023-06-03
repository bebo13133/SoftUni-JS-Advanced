function toStringExtension() {
    class Person {
        constructor(name, email){
            Object.assign(this, {name, email})
        }
        toString(){
            let result = []
        Object.entries(this).forEach( ([key, value]) => {
            result.push(`${key}: ${value}`)
        });

        return `${this.constructor.name} (${result.join(', ')})`
        }
    }
    class Student extends Person {
        constructor(name, mail, course) {
            super(name, mail);
            this.course = course;
        }
    }
    class Teacher extends Person {
        constructor(name, mail, subject) {
            super( name, mail);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher,
        Student,
    }
}

// const { Person, Teacher, Student } = toStringExtension();
// const teacher = new Teacher('Ivan', 'Ivan@abv.bg', 'Mat');
// const student = new Student('Stamat', 'Stamat@abv.bg', 'Geography');
// const person = new Person('Bobi', 'bobi@dir.bg');
// console.log(teacher.toString());
// console.log(student.toString());
// console.log(person.toString());