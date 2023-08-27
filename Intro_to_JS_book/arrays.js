
/*
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

evenNumbers = myArray.filter(num => num % 2 == 0);
console.log(evenNumbers);
*/

/*
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(innerArray){
  innerArray.forEach(function(element) {
    if (element % 2 == 0) {
      console.log(element);
    }
  });
});
*/

/*
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let result = myArray.map(function(num){
  return (num % 2 === 0) ? 'even' : 'odd';
});

console.log(result);
*/


/*
function findIntegers(array) {
  return array.filter(element => Number.isInteger(element));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
*/

/*
function oddLengths(array) {
  let lengths = array.map(function (string) {
    return string.length;
  });

  let oddLengths = lengths.filter(function (length) {
    return length % 2 == 1
  });

  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/

/*
function sumOfSquares(array) {
  return array.reduce(function(accumulator, currentValue) {
    return Math.pow(currentValue, 2) + accumulator;
  });
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
*/


/*
function oddLengths(array){
  return array.reduce(function (accumulator, currentValue){
    if ( currentValue.length % 2 == 1 ) {
      accumulator.push(currentValue.length);
    }
    
    return accumulator;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/

/*
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(`Does numbers1 have the number 3: ${numbers1.includes(3)}`);
console.log(`Does numbers2 have the number 3: ${numbers2.includes(3)}`);
console.log(`Does numbers3 have the number 3: ${numbers3.includes(3)}`);
*/


let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

console.log(arr);