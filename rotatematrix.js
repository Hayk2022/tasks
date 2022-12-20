 const myMatrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
                    ];
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