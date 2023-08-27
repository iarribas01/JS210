function unshift(array, value) {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array.length;
}

let a = [1, 2, 3];
console.log(a);
console.log(unshift(a, 0));
console.log(a);