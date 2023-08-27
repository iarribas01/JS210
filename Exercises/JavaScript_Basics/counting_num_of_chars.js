const rlSync = require('readline-sync');

let phrase = rlSync.question("Please enter a phrase: ");
let chars = phrase.replace(/[^A-Z]*/gi, '')
console.log(`There are ${chars.length} characters in "${phrase}".`);