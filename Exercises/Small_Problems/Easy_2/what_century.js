function century(year) {
  result = String(Math.ceil(year / 100));
  let finalDigits = result.substr(result.length - 2);
  console.log(finalDigits[1])
  if (finalDigits === '11' ||
      finalDigits === '12' ||
      finalDigits === '13') {
        result += 'th';
      } else {
        switch (result.substr(result.length - 1)) {
          case '1':
            result += 'st';
            break;
          case '2':
            result += 'nd';
            break;
          case '3':
            result += 'rd';
            break;
          default:
            result += 'th';
        };
      }
  

  return result;
}

console.log(century(2000) ===  "20th")
console.log(century(2001) ===  "21st")
console.log(century(1965) ===  "20th")
console.log(century(256) ===   "3rd")
console.log(century(5) ===     "1st")
console.log(century(10103) === "102nd")
console.log(century(1052)===  "11th")
console.log(century(1127) ===  "12th")
console.log(century(11201)=== "113th")