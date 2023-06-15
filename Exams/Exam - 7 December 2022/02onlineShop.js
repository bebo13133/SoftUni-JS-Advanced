class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace
        this.products = []
        this.sales = []
        this.sale = 0
    }
    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) throw new Error('Not enough space in the warehouse.')
        this.products.push(product, quantity)
        this.warehouseSpace -= spaceRequired
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity) {

        if (!this.products.includes(product)) throw new Error(`There is no ${product} in the warehouse.`)
        if (minimalQuantity <= 0) throw new Error(`The quantity cannot be zero or negative.`)

        let indexProduct = this.products.indexOf(product)
        let quantityIndex = Number(this.products[indexProduct + 1])

        if (minimalQuantity <= quantityIndex) {
            return `You have enough from product ${product}.`
        } else {
            this.products.splice(indexProduct + 1, 1, minimalQuantity)
            return `You added ${minimalQuantity - quantityIndex} more from the ${product} products.`
        }
    }
    sellProduct(product) {
        if (!this.products.includes(product)) throw new Error(`There is no ${product} in the warehouse.`)
        let indexProduct = this.products.indexOf(product)
        this.products[indexProduct + 1] -= 1
        this.sale++
        this.sales.push(product, 1)
        return `The ${product} has been successfully sold.`
    }
    revision() {
        if (this.sale === 0) throw new Error(`There are no sales today!`)
        let printResult = ""
        for (let i = 0; i < this.products.length; i += 2) {
            printResult += `\n${this.products[i]}-${this.products[i + 1]} more left`
        }
        return `You sold ${this.sale} products today!\nProducts in the warehouse:${printResult}`
    }
}
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

