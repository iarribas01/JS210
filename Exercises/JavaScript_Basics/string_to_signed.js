const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, 
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
}

function stringToInteger(string) {
  let number = 0;

  let placeholder = 1;
  for (let i = string.length - 1; i >= 0; i -= 1) {
    number += DIGITS[string[i]] * placeholder;
    placeholder *= 10;
  }

  return number;
}

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return stringToInteger(string.slice(1)) * -1;
  } else if (string[0] === '+') {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100