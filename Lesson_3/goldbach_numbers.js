function checkGoldbach(expectedSum){
  if (expectedSum % 2 == 1 || expectedSum < 4) {
    console.log('null');
  } else {
    let pairs = []
    if (isPrime(expectedSum - 2)) {
      pairs.push([2, expectedSum - 2]);
    }

    for (i = 3; i <= expectedSum / 2; i += 2) {
      pairs.push([i, expectedSum - i]);
    }

    pairs.forEach(function(pair){
      if (isPrime(pair[0]) && isPrime(pair[1])) {
        console.log(pair[0], pair[1]);
      }
    });
  }
}

function isPrime(num) {
  if (num === 1 || num === 0) return false;

  for (i = 2; i < num; i += 1) {
    if (num % i == 0) return false;
  }
  return true;
}

// checkGoldbach(3);
checkGoldbach(4);
// checkGoldbach(12);

// checkGoldbach(12);
// checkGoldbach(100);