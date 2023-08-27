// let age = prompt("What is your age? ");
// let retirementAge = prompt("At what age would you like to retire? ");
// let yearsUntilRetirement = retirementAge - age;

let date = Date();

console.log(`It's ${date.getFullYear()}. You will retire in ${date.getFullYear() + yearsUntilRetirement}.`);
console.log(`You only have ${yearsUntilRetirement} years of work to go!`);