let { expect } = require('chai')
let findNewApartment = require('./findApartment')

describe('test findAprtment functionality', ()=>{
    describe('test isGoodLocation method', ()=>{
        it('Test1: Invalid inputs',()=>{

            expect(()=> findNewApartment.isGoodLocation("Sofia", 1)).to.throw('Invalid input!')
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!')
            expect(() => findNewApartment.isGoodLocation(1, 11)).to.throw("Invalid input!")
            expect(findNewApartment.isGoodLocation('Haskovo', true)).to.equal('This location is not suitable for you.')
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.")
        })
        it('Test2: Valid inputs',()=>{
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!")

        })
    })
    describe('test isLargeEnough  method', ()=>{
        it('Test 3; Invalid inputs', ()=>{
            expect(()=> findNewApartment.isLargeEnough(40, 1)).to.throw('Invalid input!')
            expect(()=> findNewApartment.isLargeEnough([], 1)).to.throw('Invalid input!')
            expect(()=> findNewApartment.isLargeEnough([], 1,'')).to.throw('Invalid input!')
            expect(()=> findNewApartment.isLargeEnough([40], "1")).to.throw('Invalid input!')
        })
        it("Test4: Valid inputs", ()=>{
            expect(findNewApartment.isLargeEnough([40,50,60,120], 55)).to.equal('60, 120')
            expect(findNewApartment.isLargeEnough([40,50,55,30], 55)).to.equal('55')
            expect(findNewApartment.isLargeEnough([40,50,51,30], 55)).to.equal('')
        })

    })
    describe('test isItAffordable  method', ()=>{
            it("Test5 Invalid input", ()=>{
                expect(()=> findNewApartment.isItAffordable(-1,10)).to.throw('Invalid input!')
                expect(()=> findNewApartment.isItAffordable(1,-10)).to.throw('Invalid input!')
                expect(()=> findNewApartment.isItAffordable('Sofia',10)).to.throw('Invalid input!')
                expect(()=> findNewApartment.isItAffordable(1,"Sofia")).to.throw('Invalid input!')
                expect(()=> findNewApartment.isItAffordable(-1,-10)).to.throw('Invalid input!')
                expect(()=> findNewApartment.isItAffordable("Sofia",'Pleven')).to.throw('Invalid input!')
                expect(()=> findNewApartment.isItAffordable('',[])).to.throw('Invalid input!')
            })
            it("Test5 Invalid input", ()=>{
                expect(findNewApartment.isItAffordable(10, 11)).to.equal(`You can afford this home!`)
                expect(findNewApartment.isItAffordable(12, 11)).to.equal(`You don't have enough money for this house!`)
                
            })
    })

})