function storeCatalogue(data){
    let catalog = {}
    data.forEach(line => {let [product,price]= line.split(" : ")
    let firstLetter = product[0]
    if(!catalog.hasOwnProperty(firstLetter))catalog[firstLetter] = {}
        catalog[firstLetter][product] = Number(price)
       
    });
    let sorted = Object.keys(catalog).sort((a,b)=> a.localeCompare(b)).forEach(keys=> {console.log(keys)
    let sortedProducts = Object.keys(catalog[keys]).sort((a,b)=> a.localeCompare(b)).forEach(product=> 
        console.log(`  ${product}: ${catalog[keys][product]}`))
    })
    }