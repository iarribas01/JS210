function mirror(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log(mirror([1, 2, 3]));