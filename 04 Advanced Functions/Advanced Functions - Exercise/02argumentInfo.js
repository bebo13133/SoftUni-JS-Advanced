function argumentInfo(){
    let obj= {}
let c = [...arguments].forEach(element=>{
    let type = typeof element
    console.log(`${type}: ${element}`)
    if(!obj[type]) obj[type] = 0;
        obj[type]++  
})
Object.keys(obj).sort((a,b)=> obj[b] - obj[a]).forEach(key=> console.log(`${key} = ${obj[key]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!');})