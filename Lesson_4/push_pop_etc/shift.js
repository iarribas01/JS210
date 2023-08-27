function shift(array) {
  let removedElement = array[0];

  if (array.length === 0) return undefined;

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return removedElement;
}

a = [1, 2, 3, 4];
console.log(a);
console.log(shift(a));
console.log(a);

a = [];
console.log(a);
console.log(shift(a));
console.log(a);