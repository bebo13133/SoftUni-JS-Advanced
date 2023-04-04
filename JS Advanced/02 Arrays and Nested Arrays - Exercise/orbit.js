function orbit(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let rowStar = arr[2];
    let colStar = arr[3];
  
    let matrix = [];
  
    for (let i = 0; i < rows; i++) {
      matrix.push([]);
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        matrix[row][col] = Math.max(Math.abs(row - rowStar), Math.abs(col - colStar)) + 1;
      }
    }
  
    console.log(matrix.map((row) => row.join(' ')).join('\n'));
  }