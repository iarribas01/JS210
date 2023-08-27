function union(arr1, arr2) {
  let result = [];

  arr1.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  arr2.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]