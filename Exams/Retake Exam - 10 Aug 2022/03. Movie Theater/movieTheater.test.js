let { expect } = require('chai')
let movieTheater = require('./movieTheater')

describe("Tests functionality movieTheater",()=>{
    describe("Test ageRestrictions method",()=>{
        it("Test negative ",()=>{
            expect(movieTheater.ageRestrictions("GPGR")).to.equal('There are no age restrictions for this movie')
        })
        it("Positive test",()=>{
            expect(movieTheater.ageRestrictions("G")).to.equal("All ages admitted to watch the movie")
            expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers")
            expect(movieTheater.ageRestrictions("R")).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian")
            expect(movieTheater.ageRestrictions('NC-17')).to.equal("No one under 17 admitted to watch the movie")

        })
        
    })
    describe("Test moneySpent method",()=>{

        it("Test invalid input",()=>{
            expect(()=>movieTheater.moneySpent("s",["Nachos"],["Water"])).to.throw("Invalid input")
            expect(()=>movieTheater.moneySpent(10,"Nachos",["Water"])).to.throw("Invalid input")
            expect(()=>movieTheater.moneySpent(10,["Nachos"],"Water")).to.throw("Invalid input")
            expect(()=>movieTheater.moneySpent(["s"],["Nachos"],["Water"])).to.throw("Invalid input")
            expect(()=>movieTheater.moneySpent(10,["Nachos"],3)).to.throw("Invalid input")
            expect(()=>movieTheater.moneySpent(10,3,["Water"])).to.throw("Invalid input")
            expect(()=>movieTheater.moneySpent([10],["Nachos"],["Water","Soda"])).to.throw("Invalid input")
      })
      it("Test functionality",()=>{
expect(movieTheater.moneySpent(1,['Nachos','Popcorn'],['Soda', 'Water'])).to.equal("The total cost for the purchase is 29.50")
expect(movieTheater.moneySpent(52,['Nachos','Popcorn'],['Soda', 'Water'])).to.equal("The total cost for the purchase with applied discount is 635.60")
expect(movieTheater.moneySpent(-1,['Nachos','Popcorn'],['Soda', 'Water'])).to.equal("The total cost for the purchase is -0.50")
expect(movieTheater.moneySpent(1,['Nachos','Popcorn'],['Soda', 'Water'])).to.equal("The total cost for the purchase is 29.50")
expect(movieTheater.moneySpent(1,['Nachos'],['Soda', 'Water'])).to.equal("The total cost for the purchase is 25.00")
expect(movieTheater.moneySpent(3,['Nachos','Popcorn'],['Soda'])).to.equal("The total cost for the purchase with applied discount is 46.40")
expect(movieTheater.moneySpent(1,['Nachos'],['Water'])).to.equal("The total cost for the purchase is 22.50")
expect(movieTheater.moneySpent(51,['Nachos'],['Water'])).to.equal("The total cost for the purchase with applied discount is 618.00")
      })
    })
    describe('Test reservation method',()=>{
        it("Test invalid input",()=>{
            expect(()=>movieTheater.reservation([],"s")).to.throw("Invalid input")
            expect(()=>movieTheater.reservation([],"5")).to.throw("Invalid input")
            expect(()=>movieTheater.reservation({rowNumber:1},6)).to.throw("Invalid input")
            expect(()=>movieTheater.reservation("rowNumber:1",10)).to.throw("Invalid input")


        })
        it("Test valid inputs",()=>{
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }],2)).to.equal(1)
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }],0)).to.equal(1)
            expect(movieTheater.reservation([{ rowNumber: 2, freeSeats: 5 }],2)).to.equal(2)
            expect(movieTheater.reservation([{ rowNumber: 7, freeSeats: 5 },{ rowNumber: 7, freeSeats: 5 }],2)).to.equal(7)
            
        })
    })

})