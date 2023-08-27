function sortDescending(arr) {
  arr = arr.slice();
  return arr.sort(compareNumbers).reverse();
}

function compareNumbers(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1
  } else {
    return 0;
  }
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]