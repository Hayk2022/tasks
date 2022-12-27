function threeDimensionArray(a, b) {
  let arr = [];
  for (let i = 0; i < a; i++) {
      for(let j = 0; j < b; j++) {
          arr[i] = [];
      }
  }
  for (let i = 0; i < a; i++) {
      for(let j = 0; j < b; j++) {
          arr[i][j] = j;    
      }
  }
  return arr;
}

const x = 3;
const y = 3;
const myMatrix = threeDimensionArray(x, y);
console.log(myMatrix);
 
console.log(myMatrix[0])
console.log(myMatrix[1])
console.log(myMatrix[2])
console.log('')

const rotate = matrix => {
  const arr = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let column = row; column < matrix.length; column++) {
      let temp = matrix[row][column]
      matrix[row][column] = matrix[column][row]
      matrix[column][row] = temp
    }
  }
    for(let row = matrix.length-1; row >= 0; row--){
      arr.push(matrix[row])
    }
      return arr;
}
console.log(rotate(myMatrix));
