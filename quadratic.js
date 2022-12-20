let root1, root2;
    let a = 5;
    let b = 4;
    let c = 4;
    let disc = b * b - 4 * a * c;

    if (disc > 0) {
        root1 = (-b + Math.sqrt(disc)) / (2 * a);
        root2 = (-b - Math.sqrt(disc)) / (2 * a);
        console.log(`Roots are ${root1} and ${root2}`);
    }else if (disc == 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`Roots are ${root1} and ${root2}`);
    }else {
      let real = (-b / (2 * a)).toFixed(2);
      let imagine = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
      console.log(
      `Roots are ${real} + ${imagine}i and ${real} - ${imagine}i`
      );
    }