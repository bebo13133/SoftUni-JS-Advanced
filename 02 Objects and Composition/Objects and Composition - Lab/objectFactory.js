function objectfactory(library, orders) {
    let result = []
    orders.forEach(temp => {
        let newObject = Object.assign({}, temp.template)
        for (let parts of temp.parts) {
            newObject[parts] = library[parts]
        }
        result.push(newObject)
    });
    return result

}