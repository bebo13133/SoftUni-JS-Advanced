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
        this._online = value;

        if (this.divTitle) {
          this._online
            ? this.divTitle.classList.toggle('online')
            : this.divTitle.classList.toggle('online');
        }
    
    }


    render(id){

        this.article = document.createElement('article');
        this.divTitle = document.createElement('div');
        this.divInfo = document.createElement('div');
        this.spanPhone = document.createElement('span');
        this.spanEmail = document.createElement('span');
        this.button = document.createElement('button');
        this.divTitle.className = this._online ? 'title online' : 'title';
    
        this.divInfo.classList.add('info');
        this.divInfo.style.display = 'none';
    
        this.button.innerHTML = '&#8505;';
        this.spanPhone.innerHTML = '&phone; ' + this.phone;
        this.spanEmail.innerHTML = '&#9993; ' + this.email;
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
    
        this.button.addEventListener('click', () => {
          if (this.divInfo.style.display == 'none') {
            this.divInfo.style.display = 'block';
          } else {
            this.divInfo.style.display = 'none';
          }
        });
    
        this.divTitle.appendChild(this.button);
        this.divInfo.appendChild(this.spanPhone);
        this.divInfo.appendChild(this.spanEmail);
        this.article.appendChild(this.divTitle);
        this.article.appendChild(this.divInfo);
    
        document.getElementById(id).appendChild(this.article);
      }
// <article>
// <div class="title">{firstName lastName}<button>&#8505;</button></div>
// <div class="info">
// <span>&phone; {phone}</span>
// <span>&#9993; {email}</span>
// </div>
// </article>



}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
