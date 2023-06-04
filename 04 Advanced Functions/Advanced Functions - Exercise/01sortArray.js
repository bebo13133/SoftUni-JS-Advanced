function sortArray (data, sorting){
    (sorting === "asc") ? data.sort((a,b)=> a-b):data.sort((a,b)=> b-a)
  return data
}
sortArray([14, 7, 17, 6, 8], 'asc')