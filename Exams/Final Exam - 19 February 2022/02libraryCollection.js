class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }

    addBook(bookName, bookAuthor) {

        if (this.books.length === this.capacity) throw new Error("Not enough space in the collection.")

        this.books.push({ bookName, bookAuthor, payed: false })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        const findBook = this.books.find(x => x.bookName === bookName);
        if (findBook === undefined) throw new Error(`${bookName} is not in the collection.`);
        if (findBook.payed === true) throw new Error(`${bookName} has already been paid.`);
        findBook.payed = true
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        const findBook = this.books.find(x => x.bookName === bookName) 
        if(findBook === undefined) throw new Error ("The book, you're looking for, is not found.");
        if(findBook.payed === false) throw new Error(`${bookName} need to be paid before removing from the collection.`)

        const findIndex = this.books.findIndex(x=>x.bookName === bookName)
        this.books.splice(findIndex,1)
        return `${bookName} remove from the collection.`    
    }
    getStatistics(bookAuthor){

        if(!bookAuthor){
            let result = [`The book collection has ${this.capacity -this.books.length } empty spots left.`]
            let sortdeBooks = this.books.sort((a,b)=>a.bookName.localeCompare(b.bookName))
            sortdeBooks.forEach(book=> result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed? 'Has Paid':"Not Paid"}.`))
            return result.join("\n")
        }else{

            let findAuthor = this.books.find(x=>x.bookAuthor === bookAuthor)
            if(findAuthor === undefined){
                throw new Error (`${bookAuthor} is not in the collection.`)
            }else{
               return  `${findAuthor.bookName} == ${findAuthor.bookAuthor} - ${findAuthor.payed? 'Has Paid':"Not Paid"}.`
    
            }
        }
        
    }
}
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
