function rand(min, max) {
  if (max < min) {
    [max, min] = [min, max]
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function test(exec) {
  results = {};
  
  for (let i = 0; i < 50; i += 1) {
    result = exec(6, 6);

    if (!results[result]) {
      results[result] = 1;
    } else {
      results[result] += 1;
    } 
  }

  return results;
}

console.log(test(rand));