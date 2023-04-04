function sprialMatrix(rowN, colN) {
    let counter = 1, startRow = 0, endRow = rowN-1, startCol = 0 , endCol = colN-1 
    let matrix = []

    for (let i = 0; i < rowN; i++) {
        matrix.push([])
    }
    // top
while(startRow <= endRow && startCol<=endCol){
    for(let i = startCol; i<= endCol;i++){
        matrix[startRow][i] = counter
        counter++
    }
    startRow++
    for(let i=startRow;i<= endRow;i++){
        matrix[i][endCol] = counter
        counter++ 
    }
    endCol--
    for(let i=endCol;i>= startCol;i--){
        matrix[endRow][i] = counter
        counter++ 
    }
    endRow--
    for(let i=endRow;i>= startRow;i--){
        matrix[i][startCol] = counter
        counter++ 
    }
    startCol++
}
  matrix.map(x=> console.log(x.join(" ")))
}