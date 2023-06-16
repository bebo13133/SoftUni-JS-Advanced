const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};
let newArr = carService
// console.log(newArr.discount(0,100))
// console.log(newArr.discount(1,100))
// console.log(newArr.discount(2,100))
// console.log(newArr.discount(7,100))
// console.log(newArr.discount(8,100))
// console.log(newArr.discount(20,100))
console.log(newArr.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"]))

console.log(newArr.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],["blowoff valve", "injectors"]))
console.log(newArr.partsToBuy([],["blowoff valve", "injectors"]))
console.log(newArr.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],["injectors"]))
console.log(newArr.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],[]))


module.exports = carService