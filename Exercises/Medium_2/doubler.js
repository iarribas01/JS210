function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

function makeDoubler(caller) {
  return function (number) { 
    doubler(number, caller);
  }
}

const victorDoubler = makeDoubler('Victor');
console.log(victorDoubler(5));                             // returns 10
// logs:
// This function was called by Victor.