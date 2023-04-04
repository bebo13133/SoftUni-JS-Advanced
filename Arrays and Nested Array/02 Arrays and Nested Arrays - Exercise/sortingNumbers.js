function sortingNumber(input) {
    input = input.sort((a, b) => a - b)
     let result=[]
   while (input.length > 0) {
     result.push(input.shift() , input.pop() );
   }
   return result
 }