const expect = require('chai').expect
const { mathEnforcer } = require("./04mathEnforcer")


describe('Testing math calculat object',()=>{
    describe('Test AddFive method', ()=>{
        it("test with valid input -> positive Number -> ",()=>{
            expect(mathEnforcer.addFive(5)).to.eq(10)
        })
        it("test with valid input -> positive Number -> ",()=>{
            expect(mathEnforcer.addFive(0)).to.eq(5)
        })
        it("test with valid input -> negative Number -> ",()=>{
            expect(mathEnforcer.addFive(-1)).to.eq(4)
        })
        it("test with valid input ->float positive -> ",()=>{
            expect(mathEnforcer.addFive(3.5)).to.eq(8.5,0.01)
        })
        it("test with valid input ->float negative -> ",()=>{
            expect(mathEnforcer.addFive(-3.5)).to.closeTo(1.5,0.01)
        })

        it("test with InValid input ->string -> ",()=>{
            expect(mathEnforcer.addFive('a')).to.be.undefined
        })
    })
    describe('Test subtractTen method', ()=>{
        it("test with valid input -> positive Number -> ",()=>{
            expect(mathEnforcer.subtractTen(5)).to.eq(-5)
        })
        it(`valid input positive Integer -> (10) -> 0`, () => {
            expect(mathEnforcer.subtractTen(10)).to.eq(0)
        })
        it("test with valid input -> positive Number -> ",()=>{
            expect(mathEnforcer.subtractTen(0)).to.eq(-10)
        })
        it("test with valid input -> negative Number -> ",()=>{
            expect(mathEnforcer.subtractTen(-1)).to.eq(-11)
        })
        it("test with valid input ->float positive -> ",()=>{
            expect(mathEnforcer.subtractTen(3.5)).to.closeTo(-6.5,0.01)
        })
        it("test with InValid input ->string -> ",()=>{
            expect(mathEnforcer.subtractTen('a')).to.be.undefined
        })

    })

    describe('Test sum method', ()=>{
        it("test with valid input -> positive Number -> ",()=>{
            expect(mathEnforcer.sum(5,6)).to.eq(11)
        })
        it("test with valid input -> null-> ",()=>{
            expect(mathEnforcer.sum(0,0)).to.eq(0)
        })
        it("test with valid input -> negative Number -> ",()=>{
            expect(mathEnforcer.sum(-1,6)).to.eq(5)
        })
        it("test with valid input ->float positive -> ",()=>{
            expect(mathEnforcer.sum(3.5,-3.5)).to.closeTo(0,0.01)
        })
        it(`valid input float -> (1.1,2.2) -> 3.3`, () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01)
        })
        it(`valid input negative Integers-> (-1,-1) -> -2`, () => {
            expect(mathEnforcer.sum(-1, -1)).to.eq(-2)
        })
        it("test with InValid input ->string -> ",()=>{
            expect(mathEnforcer.sum(3, '3.5')).to.be.undefined
        })    
        it("test with InValid input ->string -> ",()=>{
            expect(mathEnforcer.sum('a',3)).to.be.undefined
        })
        it("test with InValid input ->string -> ",()=>{
            expect(mathEnforcer.sum(3,'a')).to.be.undefined
        })
    })
} )