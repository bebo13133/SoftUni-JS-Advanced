let { expect } = require('chai')
let rentCar=require('./rentCar')

describe('Tests rent Car functionality',()=>{
    describe('Test searchCar method',()=>{
        it("Test invalid inputs",()=>{
            expect(()=> rentCar.searchCar("","")).to.throw("Invalid input!")
            expect(()=> rentCar.searchCar([],1)).to.throw("Invalid input!")
            expect(()=> rentCar.searchCar([],undefined)).to.throw("Invalid input!")
            expect(()=> rentCar.searchCar(undefined,"")).to.throw("Invalid input!")
            expect(()=> rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Citroen')).to.throw("There are no such models in the catalog!")
        })

        it('Test valid inputs',()=>{
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'BMW')).to.equal('There is 1 car of model BMW in the catalog!')
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'BMW','Audi')).to.equal('There is 1 car of model BMW in the catalog!')
        })
    })

    describe('Test calculatePriceOfCar method',()=>{
        it("Test invalid inpust",()=>{
            expect(()=>rentCar.calculatePriceOfCar(1,1)).to.throw("Invalid input!")
            expect(()=>rentCar.calculatePriceOfCar("","")).to.throw("Invalid input!")
            expect(()=>rentCar.calculatePriceOfCar([],1)).to.throw("Invalid input!")
            expect(()=>rentCar.calculatePriceOfCar(1,"")).to.throw("Invalid input!")
        })

        it('Test valid inputs',()=>{
             expect(rentCar.calculatePriceOfCar('BMW',1)).to.equal(`You choose BMW and it will cost $45!`)
             expect(rentCar.calculatePriceOfCar('Audi',3)).to.equal(`You choose Audi and it will cost $108!`)
             expect(()=>rentCar.calculatePriceOfCar('Citroen',3)).to.throw('No such model in the catalog!')
        })
    })

    describe("Test checkBudget", ()=>{
        it("test invalid inputs",()=>{
            expect(()=>rentCar.checkBudget('',1,2)).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget(2,'',1)).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget('','','')).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget(2,2,'')).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget(0,'',0)).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget([],{},2)).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget(undefined,[],{})).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget(undefined,2,{})).to.throw("Invalid input!")
            expect(()=>rentCar.checkBudget(undefined,-1,{})).to.throw("Invalid input!")



        })

        it('Test valid inputs',()=>{
            expect(rentCar.checkBudget(1,5,6)).to.equal("You rent a car!")
expect(rentCar.checkBudget(1,5,4)).to.equal("You need a bigger budget!")
expect(rentCar.checkBudget(10,15,26)).to.equal("You need a bigger budget!")
expect(rentCar.checkBudget(10,5,66)).to.equal("You rent a car!")
expect(rentCar.checkBudget(1,5,-6)).to.equal("You need a bigger budget!")
expect(rentCar.checkBudget(9,1,9)).to.equal("You rent a car!")
expect(rentCar.checkBudget(9,1,8)).to.equal("You need a bigger budget!")


        })
    })
})