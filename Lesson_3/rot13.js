function rot13(text) {
  key = createRot13Key();

  return text.split('').map(function (char) {
    return key[char] || char;
  }).join('');
}

function createRot13Key() {
  const NUM_ROTATIONS = -1;
  let key = {};

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let rotatedAlphabet = alphabet.substring(NUM_ROTATIONS) + alphabet.substring(0, NUM_ROTATIONS);

  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    let rotatedLetter = rotatedAlphabet[i];

    key[letter] = rotatedLetter;
    key[letter.toUpperCase()] = rotatedLetter.toUpperCase();
  }

  return key;
}

// log true if functions work as intended
console.log(rot13('Teachers open the door, but you must enter by yourself.'))// === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')))// === 'Teachers open the door, but you must enter by yourself.');