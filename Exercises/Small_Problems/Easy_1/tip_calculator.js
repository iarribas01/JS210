const rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let tipPercent = Number(rlSync.question('What is the tip percentage? '));

let tip = bill * (tipPercent / 100);
let total = tip + bill;

console.log();
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);