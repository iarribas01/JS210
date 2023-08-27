// function integerToString(integer) {
//   let string = '';

//   let placeholder = 10;
//  while (integer > 0) {
    
//     let digit = (integer % placeholder) / (placeholder / 10);
//     integer -= integer % placeholder;
    
//     string = (digitToChar(digit)) + string;
//     placeholder *= 10;
//   }

//   return string || '0';
// }

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else {
    return integerToString(number);
  }
}

// function signedIntegerToString(n) {
//   if (n < 0) {
//     return '-' + integerToString(Math.abs(n));
//   } else {
//     return integerToString(n);
//   }

// }

// function digitToChar(n) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   return DIGITS[n];
// }

console.log(signedIntegerToString(-0))// === "-0");
console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"