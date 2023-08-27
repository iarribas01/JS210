function sum(array) {
  let total = 0;
  for(i = 0; i<array.length; i++ ){
    total += array[i];
  }
  return total;
}

function average(array) {
  return (sum(array)) / array.length ;
}


let temperatures = [10, 15, 20, 11, 13];
console.log(average(temperatures));