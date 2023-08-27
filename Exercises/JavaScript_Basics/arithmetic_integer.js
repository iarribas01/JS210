let rlSync = require('readline-sync');
num1 = rlSync.question("==> Enter a positive integer: ");
num2 = rlSync.question("==> Enter another positive integer: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);