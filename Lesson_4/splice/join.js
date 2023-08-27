function join(array, delimeter) {
  let result = '';

  for(let i = 0; i < array.length - 1; i++) {
    result += (String(array[i]) + delimeter);
  }

  result += array[array.length - 1];

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'