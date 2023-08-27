function pop(array) {
  let lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
}

let a = [1, 2, 3, 4];
console.log(a);
console.log(pop(a));
console.log(a);