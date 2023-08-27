function integerToString(integer) {
  let string = '';

  let placeholder = 10;
 while (integer > 0) {
    
    let digit = (integer % placeholder) / (placeholder / 10);
    integer -= integer % placeholder;
    
    string = (digitToChar(digit)) + string;
    placeholder *= 10;
  }

  return string || '0';
}

function digitToChar(n) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return DIGITS[n];
}

console.log(integerToString(4321));
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"