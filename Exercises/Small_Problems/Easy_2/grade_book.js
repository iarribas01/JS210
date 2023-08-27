function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3
  return getLetterGrade(average);
}

function getLetterGrade(n) {
  if (n >= 90) {
    return 'A';
  } else if (n >= 80) {
    return 'B';
  } else if (n >= 70) {
    return 'C';
  } else if (n >= 60) {
    return 'D';
  } else if (n >= 0) {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"