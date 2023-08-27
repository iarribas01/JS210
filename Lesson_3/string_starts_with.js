function startsWith(string, searchString) {

  let index = 0;
  while (string[index] === searchString[index]) {
    index += 1;

    if (index >= searchString.length) {
      break;
    }
  }

  return index === searchString.length
}

let str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We')); // true
// console.log(startsWith(str, 'We put')); // true
// console.log(startsWith(str, '')); // true
// console.log(startsWith(str, 'put')); // false
// console.log(startsWith(str, ''));

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(longerString, str));
// console.log(startsWith(str, longerString)); // false