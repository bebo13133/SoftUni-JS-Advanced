class Contact {
    constructor(fName,lName, phone, email){
        this.firstName = fName;
        this.lastName = lName;
        this.phone = phone;
        this.email = email;
        this._online = false
    }
    get online(){
        return this._online
    }
    set online(value){
        if()
    }
}
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
