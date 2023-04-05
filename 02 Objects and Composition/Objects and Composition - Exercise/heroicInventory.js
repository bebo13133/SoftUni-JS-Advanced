function heroicIneventory(data){
    let result = data.reduce((acc, el)=>{
        const [name, level , items] = el.split(" / ")
        let obj= {name,level:Number(level),items: items? items.split(", "):[]}
      acc.push(obj);
      return acc;
    },[] )
    return (JSON.stringify(result))
    }