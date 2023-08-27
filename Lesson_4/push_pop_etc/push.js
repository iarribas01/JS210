function push(array, element) {
  array[array.length] = element;
  return array.length;
}

let a = [1, 2 , 3];
console.log(a);
console.log(push(a, 4));
console.log(a);