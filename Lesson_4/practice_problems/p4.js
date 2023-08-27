function join(array) {
  str = ''
  array.forEach((element) => str += String(element));
  return str;
}


console.log(join([1, 'a', 4]));
console.log(join(['a', 'b', 'c']));