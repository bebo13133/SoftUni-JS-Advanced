function calories(arr){return arr.reduce((acc,el, i)=>{
    if(i%2 ===0) acc[el] = Number(arr[i+1])
    return acc},{});
}