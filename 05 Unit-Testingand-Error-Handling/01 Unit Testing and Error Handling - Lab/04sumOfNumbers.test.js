const chai = require ('chai');
 const sum= require('./04sumOfNumbers');



describe('Problem Sum Numbers Test', () => {

    it('Test 1: Works with array of numbers', () => {
        chai.expect(sum([1, 2, 3, 4, 5])).to.be .equal(15);
    });

    it('Test 2: Works with array of numbers as string', () => {
        chai.expect(sum(['1', '2', '3', '4', '5'])).to.be.equal(15);
    });
    
    it('Test 3: Return NaN when one element of array is string', () => {
        chai.expect(sum(['1','2','test','4','5'])).to.be.NaN;
    });
});