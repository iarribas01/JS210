function shift(array) {
  let firstElement = array[0];

  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }

  array.length -= 1;

  return firstElement;
}

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined

// let a = [[1, 2, 3], 4, 5];
// console.log(a);
// console.log(shift(a));        // [1, 2, 3]
// console.log(a);

function unshift(array, ...args) {
  array.length += args.length;

  for(let i = array.length - 1; i >= args.length; i--) {
    array[i] = array[i-args.length]
  }

  for(let i = 0; i < args.length; i++) {
    array[i] = args[i];
  }

  return array.length;
}


console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]