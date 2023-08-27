function toLowerCase(str) {
  let newString = ''

  for (i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }
    newString += String.fromCharCode(charCode)
  }
  return newString;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));

