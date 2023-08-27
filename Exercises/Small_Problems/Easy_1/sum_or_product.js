// const rlSync = require('readline-sync');

// let target = Number.parseInt(rlSync.question('Please enter an integer greater than 0: '));
// let mode = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.');

// if (mode.startsWith('s')) {
//   let sum = 0;
//   for (i = 1; i <= target; i++) {
//     sum += i;
//   }
//   console.log(`The sum of the integers between 1 and ${target} is ${sum}`);
// } else if (mode.startsWith('p')) {
//   let sum = 1;
//   for (i = 1; i <= target; i++) {
//     sum *= i;
//   }
//   console.log(`The product of the integers between 1 and ${target} is ${sum}`);
// }

function computeSum(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function computeProduct(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(computeSum([1, 2, 3, 4]));
console.log(computeProduct([1, 2, 3, 4]));
