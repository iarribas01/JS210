function sum(a, b, c) {
  return a + b + c;
}

function average(a, b, c) {
  return ( sum(a, b, c) ) / 3;
}

console.log(average(1, 2, 3));
console.log(average(5, 100, 23));
console.log(average(1, 1, 1));