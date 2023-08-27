function firstNOf(arr, count) {
  let newArray = [];

  for (let i = 0; i < count; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]