function lowestPriceCities (input){
    let ObjList = {}
    input= input.forEach(element => {
        const [town, product, price] = element.split(" | ")
        if(!ObjList[product]) ObjList[product] ={}
        ObjList[product][town] = Number(price)    
    });
    
    let result=[]
    for (let keys in ObjList){
    
     let sorted = Object.entries(ObjList[keys]).sort((a,b)=>a[1]-b[1])
    
     let[town, price] = sorted[0]
    result.push(`${keys} -> ${price} (${town})`)
    }
     result.map(el=>console.log(el))
    }