const expect = require('chai').expect;
const {createCalculator} = require('./07. AddSubtract');



describe('Test Functions', ()=>{

    let substractAdd = null;

    beforeEach(()=>{
        substractAdd = createCalculator();
    })
    it('Test1: All functionality', ()=>{
        expect(substractAdd).to.has.ownProperty('add')
        expect(substractAdd).to.has.ownProperty('subtract')
        expect(substractAdd).to.has.ownProperty('get')
    })
    it("Test2: It's Empty", ()=>{
        expect(substractAdd.get()).to.be.equal(0)
    })
    it("Test3: Add one number",()=>{
        expect(substractAdd.add(1))
        expect(substractAdd.get()).to.be.equal(1)
    })
    it("Test4: Substract one number", ()=>{
        expect(substractAdd.subtract(1));
        expect(substractAdd.get()).to.be.equal(-1)
    })
 
    it("Test5: Add and Subtract", ()=>{
        expect(substractAdd.add(4));
        expect(substractAdd.subtract(7))
        expect(substractAdd.get()).to.be.equal(-3)
    })
    it("Test 6: Add 2 or more numbers", ()=>{
        expect(substractAdd.add(4));
        expect(substractAdd.add(7))
        expect(substractAdd.get()).to.be.equal(11)
    })
    it('Test 7: Numbers as string', () => {
        expect(substractAdd.add('1'));
        expect(substractAdd.add('2'));
        expect(substractAdd.subtract('4'));
        expect(substractAdd.get()).to.be.equal(-1);
    });
       it("Test 8: Add text",()=>{
        expect(substractAdd.add("Hello Word"));
        expect(substractAdd.subtract(1))
        expect(substractAdd.get()).to.be.NaN
        
    })
    it("Test 9: Add 2 or more numbers", ()=>{
        expect(substractAdd.add(4));
        expect(substractAdd.add(7))
        expect(substractAdd.subtract(4));
        expect(substractAdd.get()).to.be.equal(7)
    })
    it("Test 10: Subtract 2 or more numbers", ()=>{
        expect(substractAdd.subtract(4));
        expect(substractAdd.subtract(7))
        expect(substractAdd.get()).to.be.equal(-11)
    })
    it("Test 11: Add text",()=>{
        expect(substractAdd.subtract("Hello Word"));
        expect(substractAdd.add(1))
        expect(substractAdd.get()).to.be.NaN
        
    })

})