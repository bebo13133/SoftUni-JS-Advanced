let { expect } = require('chai')
let bookSelection = require("./bookSelection")

describe("Test bookSelection functionality",()=>{
    describe('Test isGenreSuitable',()=>{
        it('Test valid inputs',()=>{
            expect(bookSelection.isGenreSuitable("Thriller",12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable("Horror",12)).to.equal('Books with Horror genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable("Thriller",11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age')
            expect(bookSelection.isGenreSuitable("Horror",11)).to.equal('Books with Horror genre are not suitable for kids at 11 age')
            expect(bookSelection.isGenreSuitable("Horror",13)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable("Thriller",13)).to.equal('Those books are suitable')
          
        })
    })
    describe('Test isItAffordable method',()=>{
        it('Test Invalid inputs', ()=>{
            expect(()=> bookSelection.isItAffordable(1,"1")).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable(1,"v")).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable("1",1)).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable("a",1)).to.throw("Invalid input")
        })
        it('Test valid Inputs',()=>{
            expect(bookSelection.isItAffordable(2,4)).to.equal("Book bought. You have 2$ left")
            expect(bookSelection.isItAffordable(5,4)).to.equal("You don't have enough money")
            expect(bookSelection.isItAffordable(4,4)).to.equal("Book bought. You have 0$ left")
            expect(bookSelection.isItAffordable(1,2)).to.equal("Book bought. You have 1$ left")
        })
    })
    describe('Test suitableTitles method',()=>{
        it("Test Invalid inputs",()=>{
            expect(()=> bookSelection.suitableTitles({ title: "The Da Vinci Code", genre: "Thriller" }, 1 )).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles([], 1 )).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles( "title: The Da Vinci Code, genre: Thriller" , 1 )).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles( "title: The Da Vinci Code, genre: Thriller" , {} )).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles( "title: The Da Vinci Code, genre: Thriller" , null )).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles( null , "" )).to.throw("Invalid input")

        })

        it('Test valid ',()=>{
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", gener: "Thriller" }], "Thriller")).to.deep.equal([])
         
        })
    })
})