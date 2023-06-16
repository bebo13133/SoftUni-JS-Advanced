let { expect } = require('chai')
let motorcycleRider = require('./motorcycleRider')

describe('Test motorcycleRider functionality', ()=>{
    describe("Test 1: licenseRestriction  method", ()=>{
        it('Test Invalid inputs', ()=>{
            expect(()=> motorcycleRider.licenseRestriction("B2")).to.throw("Invalid Information!")
            expect(()=> motorcycleRider.licenseRestriction("A3")).to.throw("Invalid Information!")
            expect(()=> motorcycleRider.licenseRestriction("")).to.throw("Invalid Information!")


        })
        it('Test Valid inputs',()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.")
       
        })

    })
    describe("Test 2: •	motorcycleShowroom   method", ()=>{
        it("Test Invalid inputs", ()=>{
            expect(()=> motorcycleRider.motorcycleShowroom([],50)).to.throw("Invalid Information!")
            expect(()=> motorcycleRider.motorcycleShowroom([],51)).to.throw("Invalid Information!")
            expect(()=> motorcycleRider.motorcycleShowroom("50,60,70",50)).to.throw("Invalid Information!")
            expect(()=> motorcycleRider.motorcycleShowroom([50,60,70],49)).to.throw("Invalid Information!")
            expect(()=> motorcycleRider.motorcycleShowroom([50,60,70],"50")).to.throw("Invalid Information!")
        })
               it("Test valid input",()=>{
            expect(motorcycleRider.motorcycleShowroom([125,250,600],625)).to.equal(`There are 3 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom([125,250,600,"two"],120)).to.equal(`There are 0 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom([125,250,600],300)).to.equal(`There are 2 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom([125,250,600],125)).to.equal(`There are 1 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom(['125','250','600','six','-100'],125)).to.equal(`There are 1 available motorcycles matching your criteria!`)
        
        })
    })
    describe("Test 3: otherSpendingsmethod", ()=>{
        it("Tets invalid input",()=>{
            expect(()=> motorcycleRider.otherSpendings("",[],true)).to.throw('Invalid Information!')
            expect(()=> motorcycleRider.otherSpendings("jacked",[],true)).to.throw('Invalid Information!')
            expect(()=> motorcycleRider.otherSpendings(["jacked"],"jacked",true)).to.throw('Invalid Information!')
            expect(()=> motorcycleRider.otherSpendings(["jacked"],"engine oil",true)).to.throw('Invalid Information!')

        })
        it("Test valid",()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], true)).to.equal('You spend $450.00 for equipment and consumables with 10% discount!'); 
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], false)).to.equal('You spend $500.00 for equipment and consumables!'); 
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'], true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!'); 
            expect(motorcycleRider.otherSpendings([],['engine oil','oil filter'], false)).to.equal('You spend $100.00 for equipment and consumables!'); 
            expect(motorcycleRider.otherSpendings([],['engine oil','oil filter'], true)).to.equal('You spend $90.00 for equipment and consumables with 10% discount!'); 
        })
    })

})