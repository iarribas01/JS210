function fizzbuzz(){
  for ( i = 1; i <= 20; i += 1) {
    let output = ''
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    !output ? console.log(i) : console.log(output);
  }
}

fizzbuzz();