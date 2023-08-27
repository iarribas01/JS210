function LogMultiples(number) {
  let start = number;
  let end = Math.floor(100 / number) * number

  for(i = start; i <= end; i += number) {
    if (i % 2 === 1) console.log(i);
  }
}

LogMultiples(17);
LogMultiples(21);

