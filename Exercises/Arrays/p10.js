function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  
  let array1Copy = array1.slice();
  let array2Copy = array2.slice();
  for (let i = 0; i < array1Copy.length; i += 1) {
    let element = array1Copy[i];
    let index = array2Copy.indexOf(element)

    if (index === -1) return false;

    array2Copy.splice(index, 1);
  }
  
  return array2Copy.length === 0;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true

console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false

console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true

console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false

console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true