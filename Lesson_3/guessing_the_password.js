const rlSync = require('readline-sync');
const PASSWORD = 'helloworld';

let attempts = 0;

do {
  let guess = rlSync.question('What is the password: ');
  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }
  attempts += 1;
} while (attempts < 3);

if (attempts === 3) {
  console.log('You have been denied access.');
} 