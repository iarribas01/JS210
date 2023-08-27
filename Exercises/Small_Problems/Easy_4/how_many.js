function countOccurrences(arr) {
  let count = {};

  arr.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });

  logCount(count);
}

function logCount(count) {
  for (key in count) {
    console.log(key, ' => ', count[key]);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2