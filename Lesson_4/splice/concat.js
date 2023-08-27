function push(array, element) {
  array[array.length] = element;
  return array.length;
}

function concat(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    push(newArray, array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    push(newArray, array2[i]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]