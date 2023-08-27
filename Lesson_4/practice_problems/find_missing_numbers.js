function missing(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let missingNumbers = [];

  for (let n = min; n < max; n++) {
    if (!arr.includes(n)) {
      missingNumbers.push(n);
    }
  }

  return missingNumbers;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []