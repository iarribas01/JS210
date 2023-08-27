function triangle(sideLength) {
  for (let i = 1; i <= sideLength; i++) {
    let row = '';
    row += ' '.repeat(sideLength - i);
    row += '*'.repeat(i);
    console.log(row);
  }
}

triangle(5);
triangle(9);
/**
 
    * [4, 1]
   ** [3, 2]
  *** [2, 3]
 **** [1, 4]
*****




 */