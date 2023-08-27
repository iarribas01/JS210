
let rlSync = require('readline-sync');
let age = parseInt(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`)
for ( i = 10; i <= 100; i += 10 ){
  console.log(`In ${i} years, you will be ${ age + i } years old.`);
}