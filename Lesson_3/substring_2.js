function substring(string, start, end) {
  if (start < 0 || Number.isNaN(start) || typeof start !== 'number') {
    start = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end === undefined) {
    end = string.length;
  }

  if (end < 0 || Number.isNaN(end) || typeof end !== 'number'){
    end = 0;
  }

  if (end > string.length) {
    end = string.length;
  }
  
  if (start === end && start !== 0) {
    end = string.length;
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  result = ''
  for(i = start; i < end; i++) {
    result += string[i];
  }

  return result;
}

let string = 'hello world';

console.log(`"${substring(string, 2, 4)}"`);    // "ll"
console.log(`"${substring(string, 4, 2)}"`);    // "ll"
console.log(`"${substring(string, 0, -1)}"`);   // ""
console.log(`"${substring(string, 2)}"`);       // "llo world"
console.log(`"${substring(string, 'a')}"`);     // "hello world"
console.log(`"${substring(string, 8, 20)}"`);   // "rld"