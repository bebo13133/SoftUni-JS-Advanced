function magicmatrices (input){
    let rowSum = 0
    let columSum = 0
    input.forEach(element => { 
        let row = element.join("")
       for(let i = 0 ; i<row.length;i++){
        rowSum += Number(row[i])
        columSum+=Number(row[0])
       }
    });
    rowSum == columSum ? console.log("true"): console.log("false")
    }