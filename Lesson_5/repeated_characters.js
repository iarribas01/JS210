function repeatedCharacters(string) {
  let charCount = {};

  string.toLowerCase().split('').forEach(function (char){
    if (!(char in charCount)) charCount[char] = 0;
    charCount[char] += 1
  });

  let result = {};

  for (char in charCount) {
    if (charCount[char] > 1) {
      result[char] = charCount[char];
    }
  }

  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }