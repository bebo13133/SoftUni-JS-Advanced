function diagonalAttack(arr) {
    const matrix = [];
    let leftDiagonal = 0;
    let rightDiagonal = 0;
  
    for (let el of arr) {
      matrix.push(el.split(' ').map(Number));
    }
  
    for (let row = 0; row < matrix.length; row++) {
      leftDiagonal += matrix[row][row];
      rightDiagonal += matrix[row][matrix.length - 1 - row];
    }
  
    if (leftDiagonal === rightDiagonal) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (i !== j && i !== matrix.length - 1 - j) {
            matrix[i][j] = leftDiagonal;
          }
        }
      }
    }
    matrix.forEach((el) => console.log(el.join(' ')));
  }