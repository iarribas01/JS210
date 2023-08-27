const rlSync = require('readline-sync');
const METER_TO_FOOT_CONVERSION = 3.28084;
const FOOT_TO_METER_CONVERSION = 0.3048;

console.log('Do you want to use meters or feet?');

let isUsingMeters;
let input;
while (!input) {
  input = rlSync.question('(Enter m or f)');
  if (input[0] !== 'm' && input[0] !== 'f') {
    console.log('Invalid input. Try again.');
    input = undefined;
  } else if (input[0] === 'm') {
    isUsingMeters = true;
  } else {
    isUsingMeters = false;
  }
}

let length = rlSync.question('Enter the length of the room: \n');
let width = rlSync.question('Enter the width of the room: \n');
let area = length * width;

if (isUsingMeters) {
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * METER_TO_FOOT_CONVERSION ** 2).toFixed(2)} square feet).`)
} else {
  console.log(`The area of the room is ${area.toFixed(2)} square feet (${area * FOOT_TO_METER_CONVERSION ** 2})` )
}
