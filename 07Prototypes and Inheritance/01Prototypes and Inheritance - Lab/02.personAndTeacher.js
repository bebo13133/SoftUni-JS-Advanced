
function personAndTeacher() {

    class Person {
        constructor(name, mail) {
            this.name = name;
            this.email = mail;
        }
    }
    class Teacher extends Person {
        constructor(name, mail, subject) {
            super(name, mail);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher
    }
}