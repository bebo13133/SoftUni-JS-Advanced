function subSum(arr,start,end){
if(Array.isArray(arr)===false){
  return NaN
}
if(start < 0 ){

 start = 0 
}
if(end> arr.length-1){
    end = arr.length-1
}
return arr.reduce((a,b,i)=>{
if(i>= start && i<= end){
    a+=Number(b); 
}
return a
}, 0)
}

console.log(subSum([10, 20, 30, 40, 50, 60], -3, 300))
