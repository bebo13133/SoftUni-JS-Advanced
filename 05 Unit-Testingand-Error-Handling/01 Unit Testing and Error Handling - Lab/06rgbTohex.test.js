const expect = require('chai').expect;
const rgbToHexColor = require('./06rgbTohex');

describe('RGB Converter - Valid inputs', () => {
it('Test1: Test hight limit', ()=>{
    expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
})
it('Test: Lower limit', ()=>{
    expect(rgbToHexColor(0,0,0)).to.equal('#000000')
})
   it("Test 3: Random input", ()=>{
    expect(rgbToHexColor(24, 214, 255)).to.equal('#18D6FF')
   });

describe("RGB - InValid inputs", ()=>{
    it('Test1: Out of range', ()=>{
        expect(rgbToHexColor(256,0,0)).to.be.undefined
        expect(rgbToHexColor(255,3,257)).to.be.undefined
        expect(rgbToHexColor(0,256,0)).to.be.undefined
        expect(rgbToHexColor(255,257,254)).to.be.undefined
    })
    it('Test2: 1 or more element outside lower limit',()=>{
        expect(rgbToHexColor(-1,255,0)).to.be.undefined
        expect(rgbToHexColor(0,255,-2)).to.be.undefined
        expect(rgbToHexColor(255,-3,0)).to.be.undefined
    })
    it("Test3: ! or more elements is a string", ()=>{

        expect(rgbToHexColor('-1',255,0)).to.be.undefined
        expect(rgbToHexColor(-1,"d",0)).to.be.undefined
        expect(rgbToHexColor(-1,255,'0')).to.be.undefined
    })
    it('Test 4: Less elements', ()=>{
        expect(rgbToHexColor(255)).to.be.undefined
        expect(rgbToHexColor(255,0)).to.be.undefined
        expect(rgbToHexColor()).to.be.undefined
    })
})
});