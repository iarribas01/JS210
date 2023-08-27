
/*
function evenOrOdd(num){
  if (!Number.isInteger(num)) {
    console.log("The value you entered is not a number.")
    return;
  }

  let remainder = num % 2;
  return remainder == 1 ? 'odd' : 'even';
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(6));
console.log(evenOrOdd(7));
console.log(evenOrOdd('berries and cream'));
*/


/*
function transform(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  }
  else {
    return string;
  }
}

console.log(transform("hello world"));
console.log(transform("goodbye"));
*/


function numberRange(num) {
  if ( num < 0 ) {
    console.log(`${num} is less than 0.`);
  }
  else if ( num < 50 ) {
    console.log(`${num} is between 0 and 50`);
  }
  else if ( num < 100 ) {
    console.log(`${num} is between 51 and 100`);
  }
  else {
    console.log(`${num} is greater than 100.`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);