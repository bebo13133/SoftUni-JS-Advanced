const expect = require('chai').expect;
let isSymmetric = require('./05checkForSymmetry')


describe('Check array for Symetry', () => {
    



    it("Test 1. Return false if array is a incorrect", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it("Test 2. Return false if array is a incorrect", () => {
        expect(isSymmetric(1, 2, 2, 1)).to.be.false;
    });
    it("Test 3. Return false when 1 elemen is a string", () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    });
    it('Test 4 . Test array with odd element', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('Test 5 . Test array with only string  elements', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    it('Test 6 . Return true when is odd element but is a symetryc', ()=>{
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })
    it('Test 7: Return false if array is incorrect', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    });
})