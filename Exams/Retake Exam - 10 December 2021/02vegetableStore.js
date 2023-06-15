class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

    }

    loadingVegetables(vegetables) {

        let unique = []
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ')
            quantity = Number(quantity)
            price = Number(price)
            let product = this.availableProducts.find(x => x.type === type)
            if (product === undefined) {
                this.availableProducts.push({ type, quantity, price })
                unique.push(type)
            } else {
                product.quantity += quantity
                if (price > product.price) {
                    product.price = price
                }
            }

        });
        return `Successfully added ${unique.join(', ')}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0
        selectedProducts.forEach(products => {
            let [type, quantity] = products.split(' ')
            quantity=Number(quantity)
            let findProduct = this.availableProducts.find(x=>x.type === type)
            if (findProduct === undefined) throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)

            if (quantity > findProduct.quantity) throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            totalPrice+=quantity*findProduct.price
            findProduct.quantity-=quantity
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable (type, quantity){
        const findType = this.availableProducts.find(x=>x.type === type)
        if(findType === undefined) throw new Error(`${type} is not available in the store.`)
        if(quantity>findType.quantity){
            findType.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }else{
            findType.quantity-=quantity
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision (){
        let result = ["Available vegetables:"]
        let sortedProducts = this.availableProducts.sort((a,b)=>a.price - b.price)
        sortedProducts.forEach(product=>result.push(`\n${product.type}-${product.quantity}-$${product.price}`))
        result.push(`\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`)
    return result.join('')
    }
}
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
