function average(array) {
  let total = 0;
  for(i = 0; i<array.length; i++ ){
    total += array[i];
  }
  return ( total) / array.length ;
}

console.log(average([1, 2, 3]));
console.log(average([5, 100, 23]));
console.log(average([1, 1, 1]));