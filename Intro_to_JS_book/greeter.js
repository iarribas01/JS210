let rlSync = require('readline-sync');
let firstName = getFirstName();
let lastName = getLastName();

for (i = 0; i < 3; i++ ) {
  console.log(`Good Morning, ${firstName} ${lastName}.`);
}

function getLastName(){
  return rlSync.question("What is your last name? ");
}

function getFirstName() {
  return rlSync.question("What is your first name? ");
}