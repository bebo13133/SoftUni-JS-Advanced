class WineSelection {
    constructor(space) {

        this.space = space
        this.wines = []
        this.bill = 0
    }
    reserveABottle(wineName, wineType, price) {

        if (this.wines.length === this.space) throw new Error('Not enough space in the cellar.')

        this.wines.push({ wineName, wineType, price, paid: false })
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        let wineSpace = this.wines.find(x => x.wineName === wineName)
        if (wineSpace === undefined) throw new Error(`${wineName} is not in the cellar.`)

        if (wineSpace.paid === true) throw new Error(`${wineName} has already been paid.`)
        wineSpace.paid = true

        this.bill += price
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let wineSpace = this.wines.find(x => x.wineName === wineName)
        if (wineSpace === undefined) throw new Error(`The wine, you're looking for, is not found.`)
        if (wineSpace.paid === false) throw new Error(`${wineName} need to be paid before open the bottle.`)


        let wineIndex = this.wines.findIndex(x => x.wineName === wineName)
        this.wines.splice(wineIndex, 1)
        return `You drank a bottle of ${wineName}.`

    }
    cellarRevision(wineType) {

        if (!wineType) {
            let emptySpace = this.space - this.wines.length
            let printresult = [`You have space for ${emptySpace} bottles more.`]
            printresult.push(`You paid ${this.bill}$ for the wine.`)

            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))
            sortedWines.forEach(x => {
                x.paid === true ? "Has Paid" : "Not Paid"
                printresult.push(`${x.wineName} > ${x.wineType} - ${x.paid === true ? "Has Paid" : "Not Paid"}.`)
            })
            return printresult.join("\n")
        } else {
            let findWine = this.wines.find(wine => wine.wineType === wineType)
            if (findWine === undefined) throw new Error(`There is no ${wineType} in the cellar.`)

          
            return `${findWine.wineName} > ${findWine.wineType} - ${findWine.paid === true ? 'Has Paid' : 'Not Paid'}.`

        }
    }

}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


