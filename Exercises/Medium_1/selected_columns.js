// numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function getSelectedColumns(numbers, cols) {
  var result = [];
  /*
    i = 0, numbers.length = 3
      j = 0, length = 
  
      The problem occurs due to variable shadowing
      within the nested loop. The inner loop reassigns the value of length to the
      length of the second argument `cols`. When a for loop executes, this assignment
      does not happen every time the loop runs again.
  */
  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length2 = cols.length; j < length2; j += 1) {

      // create a new column if a column does not exist
      if (!result[j]) {
        result[j] = [];
      }

      // add value to end of column equal to cols[j]
      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]