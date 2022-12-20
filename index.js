// Reverse the string

function revStr(str) {
  if (str.length <= 1) {
    return str;
  }
  else {
    return str.charAt(str.length - 1) + revStr(str.substring(0, str.length - 1));
  }
}
const revstr = revStr('12345')
console.log(revstr);

//-------------------------------------end-------------------------------------------------

//Converting numbers

    // const obj = {
    //         10: 'a',
    //         11: 'b',
    //         12: 'c',
    //         13: 'd',
    //         14: 'e',
    //         15: 'f'
    // };

    // let arr = '';
    // function convert(n, m) {
    //         let rmnd = n % m;
    //         const eql = Math.floor(n / m);
    //         const rmndToStr = rmnd > 9 ? obj[`${rmnd}`] : `${rmnd}`;
    //         if (eql > 0) {
    //                 convert(eql, m);
    //         }
    //         arr = arr + rmndToStr;
    //         return;
    // }

    // convert(2000, 10);
    // console.log(arr)

//---------------------------------------end---------------------------------------------

// Rotate the matrix

    // const myMatrix = [
    //         [1,2,3],
    //         [4,5,6],
    //         [7,8,9]
    //                 ];
    // console.log(myMatrix[0])
    // console.log(myMatrix[1])
    // console.log(myMatrix[2])
    // console.log('')

    // const rotate = matrix => {
    //   const arr = [];
    //   for (let row = 0; row < matrix.length; row++) {
    //     for (let column = row; column < matrix.length; column++) {
    //       let temp = matrix[row][column]
    //       matrix[row][column] = matrix[column][row]
    //       matrix[column][row] = temp
    //     }
    //   }
    //   for(let row = matrix.length-1; row >= 0; row--){
    //     arr.push(matrix[row])
    //   }
    //   return arr;
    // }
    // console.log(rotate(myMatrix));

//-----------------------------------------end------------------------------------------------

// Quadratic equation

    // let root1, root2;
    // let a = 5;
    // let b = 4;
    // let c = 4;
    // let disc = b * b - 4 * a * c;

    // if (disc > 0) {
    //     root1 = (-b + Math.sqrt(disc)) / (2 * a);
    //     root2 = (-b - Math.sqrt(disc)) / (2 * a);
    //     console.log(`Roots are ${root1} and ${root2}`);
    // }else if (disc == 0) {
    //     root1 = root2 = -b / (2 * a);
    //     console.log(`Roots are ${root1} and ${root2}`);
    // }else {
    //   let real = (-b / (2 * a)).toFixed(2);
    //   let imagine = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
    //   console.log(
    //   `Roots are ${real} + ${imagine}i and ${real} - ${imagine}i`
    //   );
    // }

//-------------------------------------end----------------------------------------