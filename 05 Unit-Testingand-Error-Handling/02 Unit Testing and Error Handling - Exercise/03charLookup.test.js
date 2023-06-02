const expect = require('chai').expect
const {lookupChar} = require('./03charLookup')


describe("Testing function with Valid and InValid inputs",()=>{
    it("Test1 -> Valid Inputs",()=>{
        expect(lookupChar("a",0)).to.eq('a')
        expect(lookupChar("ab",1)).to.eq("b")
    })
    it("Test 2 -> test with only numbers",()=>{
        expect(lookupChar(0,0)).to.be.undefined
    })
    it("Test 3 -> test with only strings",()=>{
        expect(lookupChar('0',"0")).to.be.undefined
    })
    it("Test 4 -> test with float point",()=>{
        expect(lookupChar('a',1.9)).to.be.undefined
    })
    it("Test 5 -> test with negative index",()=>{
        expect(lookupChar('a',-1)).to.eq("Incorrect index")
    })
    it("Test 5 -> test with  index out of bound",()=>{
        expect(lookupChar('a',1)).to.eq("Incorrect index")
    })
})