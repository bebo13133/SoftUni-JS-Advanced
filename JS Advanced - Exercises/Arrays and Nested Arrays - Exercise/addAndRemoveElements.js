function addAndRemoveElements(arr) {
    let result = []
    counter = 1
    for (let el of arr) {
        el === "add" ? result.push(counter++) : result.pop(counter++)
    }
    (!result.length) ? console.log('Empty') : console.log(result.join("\n"))
}

//  Идеалнa за reduce 