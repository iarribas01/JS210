function twice(n) {
  return isDouble(n) ? n : n * 2;
}

function isDouble(n) {
  let str = String(n);
  let left = str.substring(0, str.length / 2);
  let right = str.substring(str.length / 2);

  return left === right;
}

console.log(twice(37)          === 74)
console.log(twice(44)          === 44)
console.log(twice(334433)      === 668866)
console.log(twice(444)         === 888)
console.log(twice(107)         === 214)
console.log(twice(103103)      === 103103)
console.log(twice(3333)        === 3333)
console.log(twice(7676)        === 7676)