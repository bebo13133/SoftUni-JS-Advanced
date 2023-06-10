class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (spaceRequired > this.spaceAvailable) throw new Error("Not enough space in the garden.")

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 })
        this.spaceAvailable -= spaceRequired

        return `The ${plantName} has been successfully planted in the garden.`

    }

    ripenPlant(plantName, quantity) {
        let plantsNames = this.plants.find(x => x.plantName === plantName)

        if (plantsNames === undefined) throw new Error(`There is no ${plantName} in the garden.`);

        if (plantsNames.ripe === true) throw new Error(`The ${plantName} is already ripe.`);

        if (quantity <= 0) throw new Error(`The quantity cannot be zero or negative.`);

        plantsNames.ripe = true

        plantsNames.quantity += quantity
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName) {
        let plantsNames = this.plants.find(x => x.plantName === plantName)
        if (plantsNames === undefined) throw new Error(`There is no ${plantName} in the garden.`);
        if (plantsNames.ripe === false) throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);

        this.plants = this.plants.filter(x => x.plantName !== plantName);

        this.storage.push({plantName, quantity:plantsNames.quantity})
        this.spaceAvailable += plantsNames.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.`];
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(x => x.plantName).join(", ");
        let plantPrint = `Plants in the garden: ${sortedPlants}`
        result.push(plantPrint);
       
       let storageString = this.storage
       .map(x => `${x.plantName} (${x.quantity})`)
       .join(", ");
        let storageLength = this.storage.length === 0 ?  `Plants in storage: The storage is empty.` : `Plants in storage: ${storageString}`
        result.push(storageLength)
        return result.join('\n')


    }
}
const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 200));

console.log(myGarden.addPlant('raspberry', 10));

console.log(myGarden.ripenPlant('apple', 10));

console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange')); 
console.log(myGarden.generateReport());
