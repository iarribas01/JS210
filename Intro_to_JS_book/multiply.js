a = getNumber("Enter the first number: ");
b = getNumber("Enter the second number: ");

console.log(`The product of ${a} and ${b} is ${multiply(a, b)}.`);

function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}