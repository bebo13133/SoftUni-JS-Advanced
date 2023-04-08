function sumTable() {
    let sumElement = Array.from(document.querySelectorAll("tr td:nth-of-type(2):not(#sum)"))
        .reduce((acc, x) => {
            return acc + Number(x.textContent)
        }, 0)
    document.getElementById('sum').textContent = sumElement

    
}