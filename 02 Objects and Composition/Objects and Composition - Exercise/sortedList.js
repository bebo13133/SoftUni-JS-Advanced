function createSortedList (){
    let nums=[]
    const  list={
        add: (num)=>{
            nums.push(num)
            nums.sort((a,b)=>a-b)
            
        },
        remove: (num)=>{
            if(nums[num]!==undefined){
                nums.splice(num,1)
                nums.sort((a,b)=>a-b)
            }
            
        },
        get: (num)=>{
            if(nums[num]!== undefined){
                return nums[num]
            }
          
        },
        get size(){
            return nums.length 
           } 
        // get size:() ,
    
    }
    return list
    }