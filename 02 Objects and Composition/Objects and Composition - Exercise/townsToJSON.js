function townsToJSON(input) {
    let result = []
    input.shift()
    input.forEach(x => {
        let [_, town, latitude, longitude] = x.split(/\s*\|\s*/g).map(y => isNaN(y) ? y : Number(y).toFixed(2))
        obj = { Town: town, Latitude: +latitude, Longitude: +longitude, }
        result.push(obj)
    })
    console.log(JSON.stringify(result))
}