let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 5 + (5 * 7) = 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 10 + (5 * 7) = 45

/*
  This output is because the  startingBalance is reassigned to different
  values before the function invocations. This causes the new value of the
  variable startingBalance to be used in the calculations rather than the value
  that one may expect, `1`, when the variable was declared on line 1.
*/

