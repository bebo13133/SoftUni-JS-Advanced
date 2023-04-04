function townPopulation(dataCity){
    towns={}
for (let token of dataCity){
    let[name, population] = token.split(" <-> ")
    if(towns[name] ===undefined){
        towns[name] = 0
    }
    towns[name]+=Number(population)
}
console.log(Object
    .entries(towns)
    .map(([name, population]) => `${name} : ${population}`)
    .join("\n"))
}