function multiplesOfThreeAndFive(start, target) {
  for (i = start; i <= target; i += 1) {
    let divisibleByFive = i % 5 === 0;
    let divisibleByThree = i % 3 === 0;

    if (divisibleByFive && divisibleByThree) {
      console.log(String(i) + '!');
    } else if (divisibleByThree || divisibleByFive) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive(-15, 15);
