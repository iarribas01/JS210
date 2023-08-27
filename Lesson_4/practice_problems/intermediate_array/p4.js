function matrixSums(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].reduce((accumulator, currentVal) => accumulator + currentVal, 0));
  }

  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]