function isPalindrome(string) {
  let left;
  let right;

  [left, right] = splitInHalf(string);

  for (let i = 0; i < left.length; i += 1) {
    if (left[i] !== right[right.length - i - 1]) {
      return false;
    }
  }

  return true;
}


function splitInHalf(string) {
  let left = string.slice(0, string.length / 2);
  let right;

  if (string.length % 2 === 0) {
    right = string.slice(string.length / 2, string.length);
  } else {
    right = string.slice((string.length / 2) + 1, string.length);
  }

  return [left, right];
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true