function evenPosition(input) {
    let result = input.reduce((acc, el, i) => {
        if (i % 2 === 0) acc += (`${el} `)
        return acc
    }, []); return (result)
}
evenPosition(['20', '30', '40', '50', '60'])

//Друг Вариант 

/*
function evenPosition(input) {
    const result = input.filter((x,i) => i % 2 === 0)
    console.log(result.join(" "))
}
evenPosition(['20', '30', '40', '50', '60'])
*/