let { expect } = require('chai')
let chooseYourCar = require('./chooseYourCar')
describe("Tests chooseYourCar",()=>{
    describe("test 1 choosingType method",()=>{
        it("Test Invalid Inputs", ()=> {
            expect(()=> chooseYourCar.choosingType("Sedan", "red", 2099)).to.throw ("Invalid Year!")
            expect(()=> chooseYourCar.choosingType("sedan", "red", 1901)).to.throw ("This type of car is not what you are looking for.")
            expect(()=> chooseYourCar.choosingType("Sedan", "red", 1899)).to.throw ("Invalid Year!")
        })
        it("Test Invalid Inputs", ()=> {
            expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal("This red Sedan meets the requirements, that you have.")
            expect(chooseYourCar.choosingType("Sedan", "red", 2020)).to.equal("This red Sedan meets the requirements, that you have.")
            expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal("This Sedan is too old for you, especially with that red color.")

        })
    })
    describe("Test brandName method", ()=>{
        it("Test invalid inputs",()=>{
            expect(()=>chooseYourCar.brandName(['Citroen', "Mercedes"], "1")).to.throw ("Invalid Information!")
            expect(()=>chooseYourCar.brandName(['Citroen', "Mercedes"], 3)).to.throw ("Invalid Information!")
            expect(()=>chooseYourCar.brandName(['Citroen', "Mercedes"], -2)).to.throw ("Invalid Information!")
            expect(()=>chooseYourCar.brandName(['Citroen', "Mercedes"], "c")).to.throw ("Invalid Information!")
            
            expect(()=>chooseYourCar.brandName('Citroen', "Mercedes", 1)).to.throw ("Invalid Information!")
            expect(()=>chooseYourCar.brandName('Citroen', "Mercedes", 1)).to.throw ("Invalid Information!")
        })
        it("Test invalid inputs",()=>{
            expect(chooseYourCar.brandName(['Citroen', "Mercedes"], 1)).to.equal("Citroen")
            expect(chooseYourCar.brandName(['Citroen', 'Honda', 'Kamaz'], 1)).to.equal('Citroen, Kamaz');
        })
    })
    describe("Test CarFuelConsumption", ()=> {
        it('Test Invalid',()=>{
            expect(()=>chooseYourCar.carFuelConsumption("a",2)).to.throw("Invalid Information!")
            expect(()=>chooseYourCar.carFuelConsumption(3,"c")).to.throw("Invalid Information!")
            expect(()=>chooseYourCar.carFuelConsumption(-1,2)).to.throw("Invalid Information!")
            expect(()=>chooseYourCar.carFuelConsumption(3,-2)).to.throw("Invalid Information!")
        })
        it('Test Invalid',()=>{
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
            expect(chooseYourCar.carFuelConsumption(50,4)).to.equal('The car burns too much fuel - 8.00 liters!')
            expect(chooseYourCar.carFuelConsumption(50,3)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.')
            expect(chooseYourCar.carFuelConsumption(100,10)).to.equal('The car burns too much fuel - 10.00 liters!')

        })

    })
})