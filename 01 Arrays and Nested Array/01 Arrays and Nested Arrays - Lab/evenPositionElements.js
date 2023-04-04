function evenPosition(input) {
   let result=input.reduce((acc,el,i)=> {if(i%2 ===0) acc+=(`${el} `)
  return acc},[])
  console.log(result)
}evenPosition(['20', '30', '40', '50', '60'])

