/*
  The slice function takes three arguments: an array, and two 
  integers representing a begin and an end index. The function 
  returns a new array containing the extracted elements starting 
  from begin up to but not including end. slice does not mutate 
  the original array.
*/

function slice(array, begin, end) {
  let result = [];
  
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;

  if (begin >= 0 && end >= 0) {
    for (let i = begin; i < end; i++) {
      result.push(array[i]); 
    }
  }
  return result;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// arr1;                                  // [1, 2, 3]

/* ============================================================= */
/*
  The splice function changes the contents of an array by deleting 
  existing elements and/or adding new elements. 
  
  Input:
    - array
    - start index
    - deleteCount, 
    - zero or more elements to be added. 

  return: The function returns a new array
  containing the deleted elements, or an empty array ([]) if no elements 
  are deleted. splice mutates the original array.

    - The function removes deleteCount number of elements from the array, 
    beginning at the start index. 
    - If any optional element arguments are provided, splice inserts them into 
    the array beginning at the start index. 

    Splice does three things:
      1. remove elements from start to start + deleteCount
      2. add elements (if given) in place of removed elements
      3. returns the deleted elements, but mutates the original array
  
CONSTRAINTS
  Input will always be:
  - start > 0
  - deleteCount > 0

  - if start > length of array, set equal to the length
  - if deleteCount is > length of array, set it equal to the length
  - if deleteCount > num elements from start to end of array, set deleteCount to difference
  - if no optional arguments provided, splice only removes elements from the array

EXAMPLES
  [1, 2, 3, 4, 5].splice(1, 2, 'six', 'seven') => returns [2, 3], original array = [1]
  
  [1] [2, 3] [4, 5]

  result = [2, 3]
  original array = [1, 'six', 'seven', 4, 5]

  1. use slice to extract result
  2. input whatever args is provided
  3. join the entire array
  4. return the deleted elements

  [1, 2, 3].splice(1, 0) = > returns [], original array = [1, 2, 3]




    - if start > length of array, set equal to the length
  - if deleteCount is > length of array, set it equal to the length
  - if deleteCount > num elements from start to end of array, set deleteCount to difference
  - if no optional arguments provided, splice only removes elements from the array
*/
function splice(array, start, deleteCount, ...args) {
  if (deleteCount > array.length) deleteCount = array.length;
  if (deleteCount > array.length - start) deleteCount = array.length - start;

  let deletedElements = slice(array, start, start + deleteCount);



  let right = slice(array, start + 1, array.length);
  array.length += args.length;

  console.log(`before elements added: ${array}`);

  // add elements into array
  let argsIndex = 0;
  for (let i = start; i < start + args.length - 1; i += 1) {
    array[i] = args[argsIndex];
    argsIndex += 1;
  }

  console.log(`after elements: ${array}`);

  // add remaining bits of original array
  for (let i = start + args.length; i < array.length; i += 1) {
    array[i] = right.shift();
  }

  console.log(`after remaining elements added: ${array}`);
  return deletedElements;
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]