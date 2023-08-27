function oddElementsOf(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i+=2) {
    result.push(arr[i]);
  }

  return result;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]