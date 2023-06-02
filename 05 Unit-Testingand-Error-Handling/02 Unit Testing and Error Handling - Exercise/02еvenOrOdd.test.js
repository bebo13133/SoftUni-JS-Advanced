const { expect } = require('chai')
const  {isOddOrEven } = require("./02evenOrOdd")


describe("Test function Even or Odd",()=>{

    it("test1 -> input -> 'a' -> expect return Odd",()=>{
        expect(isOddOrEven('a')).to.eq('odd')
    });
    it('Test 2 -> Input-> "aa" -> must return Even', ()=>{
        expect(isOddOrEven('aa')).to.eq('even')
    });
    it("Test 3 -> Input be a Number -> return undefined", ()=>{

        expect(isOddOrEven(1)).to.be.undefined
    })


})