class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer
        this.availableSmartphones = []
        this.soldSmartphones = []
        this.revenue = 0

    }

    addSmartphone(model, storage, price, condition) {
        if (model === '' || storage < 0 || price < 0 || condition === '') {
          throw new Error('Invalid smartphone!');
        }
    
        this.availableSmartphones.push({ model, storage, price, condition });
    
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
      }
    sellSmartphone(model, desiredStorage) {
        let soldPrice = 0;
        const findModel = this.availableSmartphones.find((x) => x.model === model);
    
        if (!findModel) {
          throw new Error(`${model} was not found!`);
        }
    
        if (findModel.storage >= desiredStorage) {
          soldPrice = findModel.price;
        } else if (Math.abs(findModel.storage - desiredStorage) <= 128) {
          soldPrice = findModel.price * 0.9;
        } else {
          soldPrice = findModel.price * 0.8;
        }
    
        this.soldSmartphones.push({
          model: findModel.model,
          storage: findModel.storage,
          soldPrice,
        });
    
        this.availableSmartphones.filter((x) => x.model != model);
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
      }
    upgradePhones() {
        if (this.availableSmartphones.length === 0) throw new Error("There are no available smartphones!")

        let printResult = "Upgraded Smartphones:"

        this.availableSmartphones.forEach(phone => printResult += `\n${phone.model} / ${phone.storage * 2} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`)
        return printResult
    }
    salesJournal(criteria) {
        let sorted = []
        if (criteria === "storage") {
            sorted = this.soldSmartphones.sort((a, b) => b.storage - a.storage)

        } else if (criteria === "model") {
            sorted = this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model))
        } else {
            throw new Error("Invalid criteria!")
        }
        let printResult = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`
        printResult += `\n${this.soldSmartphones.length} smartphones sold:`
        sorted.forEach(phone => printResult += `\n${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`)
        return printResult
    }
}
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
