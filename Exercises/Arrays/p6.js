function reverse(inputForReversal) {
  if (typeof inputForReversal === 'string') {
    let result = '';
    inputForReversal.split('').forEach(function(char){
      result = char + result;
    });
    return result;
  } else {
    let result = [];

    for (let i = inputForReversal.length - 1; i >= 0; i--) {
      result.push(inputForReversal[i]);
    }

    return result;
  }
}

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]