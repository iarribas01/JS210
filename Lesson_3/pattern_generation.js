function generatePattern(nStars) {
  for(i = 1; i <= nStars; i ++) {
    let row = '';
    for(j = 1; j <= i; j++) {
      row += j;
    }

    let largestRowLength = String(nStars).length - 1

    for(j = i; j < nStars; j++) {
      row += '*';
    }


      
    console.log(row);
  }
}

generatePattern(12);