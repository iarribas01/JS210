function concat(array1, ...args) {
  let array2 = array1.slice();

  args.forEach(function (element){
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        array2.push(element[i]);
      }
    } else {
      array2.push(element);
    }
  });
  
  return array2;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]