function calcAverage(scores) {
  return scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / scores.length;
}

function getLetterGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 70) {
    return 'B'
  } else if (score >= 50) {
    return 'C'
  } else {
    return 'F'
  }
}

const rlSync = require('readline-sync');
let grades = [];

for(i = 1; i <= 3; i++) {
  grade = rlSync.question(`Enter score ${i}: `);
  grades.push(parseInt(grade, 10));
}

let average = calcAverage(grades);

console.log(`Based on the average of your ${grades.length} scores your letter grade is "${getLetterGrade(average)}"`);