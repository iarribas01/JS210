function stringToInteger(string) {
  let number = 0;

  let placeholder = 1;
  for (let i = string.length - 1; i >= 0; i -= 1) {
    number += charToInteger(string[i]) * placeholder;
    placeholder *= 10;
  }

  return number;
}

function charToInteger(char) {
  switch(char) {
    case '0': return 0
    case '1': return 1
    case '2': return 2
    case '3': return 3
    case '4': return 4
    case '5': return 5
    case '6': return 6
    case '7': return 7
    case '8': return 8
    case '9': return 9
  }
}

console.log(typeof stringToInteger('4321'));      // 4321
console.log(typeof stringToInteger('570'));       // 570