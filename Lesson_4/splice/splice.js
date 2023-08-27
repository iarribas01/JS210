function splice(array, start, numElements) {
  let left = slice(array, 0, start);
  let middle = slice(array, start, start + numElements);
  let right = slice(array, start + numElements, array.length);
  
  array.length = left.length;
  right.forEach((element) => push(array, element));

  return middle;
}

function slice(array, start, end) {
  let newArray = [];

  for (let i = start; i < end; i++) {
    newArray[newArray.length] = array[i];
  }

  return newArray;
}

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]