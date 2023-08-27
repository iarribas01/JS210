function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
  The problem is that our function is trying to access
  the second to last element in an array of words using 
  a negative index. Because Arrays are objects, the `-2` is
  coerced to a string and returns the value of the object property `-2`
  which is `undefined`. In order to get the second to last element,
  we can use a function that does handle negative indexes
  the way we would like it to.

*/