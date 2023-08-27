// function logOddNumbers(target) {
//   for(i = 1; i <= target; i += 2) {
//     console.log(i);
//   }
// }

// logOddNumbers(19);

function logOddNumbers(target) {
  for (i = 1; i <= target; i += 1) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
  }
}

logOddNumbers(19);