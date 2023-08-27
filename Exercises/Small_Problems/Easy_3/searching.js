const rlSync = require('readline-sync');

let arr = [];
arr[0] = rlSync.question(`Enter the 1st number: `);
arr[1] = rlSync.question(`Enter the 2nd  number: `);
arr[2] = rlSync.question(`Enter the 3rd number: `);
arr[3] = rlSync.question(`Enter the 4th number: `);
arr[4] = rlSync.question(`Enter the 5th number: `);

let sixth = rlSync.question("Enter the last number: ");

console.log();

if (arr.includes(sixth)) {
  console.log(`The number ${sixth} appears in ${arr}.`);
} else {
  console.log(`The number ${sixth} does not appear in ${arr}.`)
}
console.log();