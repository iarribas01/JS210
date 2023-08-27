/*
trim leading and trailing whitespace, preserve internal space

'  abc  ' // abc
'ab c   ' // 'ab c'
'        ' // ''

- two separate methods
- remove trailing and remove leading whitespace

leading
  - iterate through each character
  - if whitespace, remove
  - otherwise, stop
    return: resulting string
    - use array because of built in methods such as pop and shift

trailing
  - iterate through each character from the end of the string
  - if whitespace, remove,
  - otherwise, stop
    return: resulting string
*/

function trim(string) {
  result = trimLead(string);
  result = trimTail(result);
  return result;
}

function trimLead(string) {
  result = string.split('')
  
  while (result[0] === ' ') {
    result.shift();
  }

  return result.join('');
}

function trimTail(string) {
  result = string.split('')
  
  while (result[result.length - 1] === ' ') {
    result.pop();
  }

  return result.join('');
}

console.log(`"${trim('  abc  ')}"`);
console.log(`"${trim('abc   ')}"`);
console.log(`"${trim(' ab c')}"`);
console.log(`"${trim(' a b  c')}"`);
console.log(`"${trim('      ')}"`);
console.log(`"${trim('')}"`);