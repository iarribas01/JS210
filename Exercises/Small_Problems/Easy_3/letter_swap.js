function swap(string) {
  return string.split(' ').map(function (word) {
    return swapFirstAndLastLetters(word);
  }).join(' ');
}

function swapFirstAndLastLetters(word) {
  let letters = word.split('');

  let temp = letters[0];
  letters[0] = letters[letters.length - 1];
  letters[letters.length - 1] = temp;

  return letters.join('');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"