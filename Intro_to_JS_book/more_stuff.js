/* 
function allMatches(words, regex) {
  matchedWords = [];

  for(let word of words) {
    if (regex.test(word)){
      matchedWords.push(word);
    }
  }

  return matchedWords;
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']*/

/*
function isNotANumber(obj) {
  if ( typeof obj !== 'number' ) {
    return false;
  }

  if (obj.toString() !== 'NaN') {
    return false;
  }

  return true;
}

console.log(isNotANumber("Hello")); // false
console.log(isNotANumber(2)); // false
console.log(isNotANumber(NaN)); // true
*/