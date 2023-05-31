let { expect } = require('chai')
let isSymmetric = require('../05 Unit-Testingand-Error-Handling/01 Unit Testing and Error Handling - Lab/05checkForSymmetry')


describe('Check array for Symetry', () => {
    let arr1 = isSymmetric([1, 2, 2, 1]) //симетричен - да върне true
    let arr2 = isSymmetric('Hello Word') // да ли е масив - false
    let arr3 = isSymmetric([1, 2, '2', 1]) // ако единият елемент е стринг - да върне falsei
    let arr4 = isSymmetric([1, 2, 3])// нечетен брой - false
    let arr5 = isSymmetric(["a", "b", "b", "a"]) // само стринг -true
    let arr6 = isSymmetric([1, 2, 1]) // при нечетен брой да е симетричен-true
    let result = isSymmetric();
    it("Test 1. Return true if array is symmetric", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    });
    it("Test 2. Return false if array is a incorrect", () => {
        expect(isSymmetric(arr2)).to.be.false;
    });
    it("Test 3. Return false when 1 elemen is a string", () => {
        expect(isSymmetric(arr3)).to.be.false;
    })


})