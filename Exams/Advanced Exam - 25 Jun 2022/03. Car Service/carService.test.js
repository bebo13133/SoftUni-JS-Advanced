let { expect } = require('chai')
let carService=require('./carService')
describe("Tests functionality carService",()=>{
    describe("Test isItExpensive method",()=>{
        it('Tests inputs and result',()=>{
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('Hello Word')).to.equal('The overall price will be a bit cheaper')
          
        })
    
    })
    describe('Test discount method',()=>{
        it('Test invalid inputs',()=>{
            expect(()=>carService.discount(5,"a")).to.throw("Invalid input")
            expect(()=>carService.discount(5,"5")).to.throw("Invalid input")
            expect(()=>carService.discount("5",1)).to.throw("Invalid input")
            expect(()=>carService.discount("5","a")).to.throw("Invalid input")
        })
        it('Test valid inputs', ()=>{
expect(carService.discount(0,100)).to.equal("You cannot apply a discount")
expect(carService.discount(3,100)).to.equal("Discount applied! You saved 15$")
expect(carService.discount(1,100)).to.equal("You cannot apply a discount")
expect(carService.discount(2,100)).to.equal("You cannot apply a discount")
expect(carService.discount(7,100)).to.equal("Discount applied! You saved 15$")
expect(carService.discount(8,100)).to.equal("Discount applied! You saved 30$")
expect(carService.discount(20,100)).to.equal("Discount applied! You saved 30$")
        })
    })
    describe("Test partsToBuy method",()=>{
        it('Test invalid inputs',()=>{
            expect(()=>carService.partsToBuy({ part: "coil springs", price: 230 } ,["blowoff valve", "injectors"])).to.throw("Invalid input")
            expect(()=>carService.partsToBuy({ part: "coil springs", price: 230 } ,"blowoff valve", "injectors")).to.throw("Invalid input")
            expect(()=>carService.partsToBuy([{ part: "coil springs", price: 230 }] ,"blowoff valve", "injectors")).to.throw("Invalid input")
            expect(()=>carService.partsToBuy([{ part: "coil springs", price: 230 },{ part: "coil springs", price: 230 }] ,"blowoff valve", "injectors")).to.throw("Invalid input")
            expect(()=>carService.partsToBuy( "part: coil springs", "price: 230" , "part: coil springs", "price: 230" ,["blowoff valve", "injectors"])).to.throw("Invalid input")
           
        })
        it("Test valid inputs",()=>{
expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145)
expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],["blowoff valve", "injectors"])).to.equal(375)
expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equal(0)
expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],["injectors"])).to.equal(230)
expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],[])).to.equal(0)
        })
    })
})