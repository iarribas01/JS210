function wordCount(string) {
  let words = {};

  string.split(' ').forEach(function (word) {
    if (words[word] === undefined) {
      words[word] = 1;
    } else {
      words[word] += 1;
    }
  });

  return words;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }