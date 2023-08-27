function stringy(length) {
  string = '10'.repeat(length / 2);
  if (length % 2 === 1) {
    string += 1;
  }
  return string;
}

console.log(stringy(6) === "101010")
console.log(stringy(9) === "101010101")
console.log(stringy(4) === "1010")
console.log(stringy(7) === "1010101")