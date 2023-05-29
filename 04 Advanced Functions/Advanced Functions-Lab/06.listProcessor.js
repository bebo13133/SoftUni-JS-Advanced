
// // ------------- sol1-----------------//

function listProccesor(dataCommands) {

    let result = []

    const procesing = () => {
        const add = (str) => result.push(str);
        const remove = (str) => result = result.filter((y) => y !== str);
        const print = () => console.log(result)
        return { add, remove, print }
    }
    dataCommands.forEach(element => {
        const [commands, str] = element.split(' ')
        let funCall = procesing.call()
        funCall[commands](str)
    });
}

// ------------- sol2-----------------//

function listProccesor(dataCommands){
    let result = []
    const obj = {
        add(str){
            result.push(str)
        },
        remove(text){result = result.filter(x => !x.includes(text))},
        print(){console.log(result)}
    };
    dataCommands.forEach(element => {
        const [commands, str] = element.split(' ')
      obj[commands](str)
    });
}

listProccesor(['add hello', 'add again', 'remove hello', 'add again', 'print'])