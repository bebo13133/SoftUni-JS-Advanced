let { expect } = require('chai')
let lottery = require('./Lottery')

describe("Test functionality lottary",()=>{
    describe('Test buyLotteryTicket method ', ()=>{
        it("Test Invalid inputs",()=>{
            expect(()=>lottery.buyLotteryTicket(3,3,false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket(-1,3,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket("a",3,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket("a","a",true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(-1,"",true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(-1,-3,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket('',-3,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(3,"3",false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket('',3,false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket(-1,3,false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket([],"a",true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket("a",{},true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(null,{},true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(0,0,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket('',0,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(0,'',true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(1,0,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(0,1,true)).to.throw("Invalid input!")
            expect(()=>lottery.buyLotteryTicket(1,1,false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket(1,1,false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket(1.1,1,false)).to.throw("Unable to buy lottery ticket!")
            expect(()=>lottery.buyLotteryTicket(1,1.1,false)).to.throw("Unable to buy lottery ticket!")

            

        })
        it("test valid input",()=>{
            expect(lottery.buyLotteryTicket(1,1,true)).to.equal("You bought 1 tickets for 1$.")
            expect(lottery.buyLotteryTicket(1,10,true)).to.equal("You bought 10 tickets for 10$.")
            expect(lottery.buyLotteryTicket(3,10,true)).to.equal("You bought 10 tickets for 30$.")
            expect(lottery.buyLotteryTicket(2,2,true)).to.equal("You bought 2 tickets for 4$.")
            expect(lottery.buyLotteryTicket(30,1,true)).to.equal("You bought 1 tickets for 30$.")    
            expect(lottery.buyLotteryTicket(30,1,true)).to.equal("You bought 1 tickets for 30$.")    

        })

    })
    describe("Test checkTicket method",()=>{
        it('Test Invalid inputs',()=>{
            expect(()=> lottery.checkTicket({},["v"])).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket(null,[])).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket([],'')).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket('',["v"])).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket(undefined,"")).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket({},undefined)).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket("","v")).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket(1,["v"])).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket(1.2,2)).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket(0,2)).to.throw("Invalid input!")
            expect(()=> lottery.checkTicket("",0)).to.throw("Invalid input!")
            expect(()=>lottery.checkTicket([1,2,3,4,5],[6,7,8,9,10])).to.throw("Invalid input!")
            expect(()=>lottery.checkTicket([1,2,3,4,5],[0,1,8,9,10])).to.throw("Invalid input!")
            expect(()=>lottery.checkTicket([1,2,3],[6,7,8,9,10])).to.throw("Invalid input!")
            expect(()=>lottery.checkTicket([1,2,3,4,5],[5,4,9,10])).to.throw("Invalid input!")
            expect(()=>lottery.checkTicket([1,2,3,4,5],[1,2,10])).to.throw("Invalid input!")
            //  expect(()=>lottery.checkTicket([1,2,3,4,5],[2,1,8,9,10])).to.throw("Invalid input!")   
            //  expect(()=>lottery.checkTicket([1,2,3,4,5,6],[11,11,31,41,5,6])).to.throw("Invalid input!")   
            //  expect(()=>lottery.checkTicket([1,2,3,4,5,6],[11,21,31,41,15,6])).to.throw("Invalid input!")   
              expect(()=>lottery.checkTicket([1,2,3,4,5,7.6],[11,21,31,41,15,6,7])).to.throw("Invalid input!")   
              expect(()=>lottery.checkTicket([1,2,3,4,5,6,7],[11,21,31,41,15,6])).to.throw("Invalid input!")   

            expect(() => lottery.checkTicket("", [1, 2.2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1.3, 2, 3, 4, 5, 6], "")).to.throw("Invalid input!");
         
        })
        it("Test valid inpus",()=>{
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal("You win the JACKPOT!!!")
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,11,13,4,5,7])).to.equal("Congratulations you win, check your reward!")
            expect(lottery.checkTicket([1,2.2,3,4,5,6],[1,21,3,4,5,6])).to.equal("Congratulations you win, check your reward!")
            expect(lottery.checkTicket([1,2.2,3,4,5,6],[1,2.1,3,4,5,7])).to.equal("Congratulations you win, check your reward!")

        })
    })

    describe("test secondChance method ",()=>{
        it('Test Invalid Inputs',()=>{
            expect(()=> lottery.secondChance("",[])).to.throw("Invalid input!")
            expect(()=> lottery.secondChance(1,"")).to.throw("Invalid input!")
            expect(()=> lottery.secondChance(null,[])).to.throw("Invalid input!")
            expect(()=> lottery.secondChance({},[])).to.throw("Invalid input!")
            expect(()=> lottery.secondChance("",{})).to.throw("Invalid input!")
            expect(()=> lottery.secondChance("",1)).to.throw("Invalid input!")
            expect(()=> lottery.secondChance("","")).to.throw("Invalid input!")
            expect(()=> lottery.secondChance(2,2)).to.throw("Invalid input!")
         
          expect(()=> lottery.secondChance("-1",-1)).to.throw("Invalid input!")
           
            expect(() => lottery.secondChance("a", [1, 2, 3, 4, 5, 6,7,7.6])).to.throw("Invalid input!");
            expect(() => lottery.secondChance("v", [1, 2, 3, 4, 5, 6,7,7.6])).to.throw("Invalid input!");
            expect(() => lottery.secondChance("a", [1, 2, 3, 4, 5, 6,])).to.throw("Invalid input!");

            expect(() => lottery.secondChance("a", [1, 2, 3, 4, 5, 6,7,7.6])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(123.7, "b")).to.throw("Invalid input!");

        })
        it("test valid inputs",()=>{
expect(lottery.secondChance(244,[390, 244, 123])).to.equal("You win our second chance prize!")
expect(lottery.secondChance(100,[456, 789])).to.equal("Sorry, your ticket didn't win!")
expect(lottery.secondChance(100,[100, 789, 100])).to.equal("You win our second chance prize!")
expect(lottery.secondChance(120,[119, 244, 121])).to.equal("Sorry, your ticket didn't win!")


        })
    })
})