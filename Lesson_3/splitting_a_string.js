function splitString(string, delimeter) {
  if (delimeter === undefined) {
    console.log('ERROR: No delimeter');
  } else {
    for (i = 0; i < string.length; i++) {
      if (string.charAt(i) === delimeter) {
        console.log();
      } else {
        process.stdout.write(string.charAt(i));
        if (delimeter.length === 0) console.log();
      }
    }
  }
  console.log();
}

// splitString('abc,123,hello world', ',');
// splitString('hello');
// splitString('hello', '');
// splitString('hello', ';');
splitString(';hello;', ';');