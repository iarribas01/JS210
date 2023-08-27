function logInBox(text, width) {
  let formattedText = '';
  if (text.length > width) {
    text = text.substring(0, width);
  }

  formattedText += ('+-' + '-'.repeat(width) + '-+\n');
  formattedText += ('| ' + ' '.repeat(width) + ' |\n');
  formattedText += ('| ' + text + ' |\n');
  formattedText += ('| ' + ' '.repeat(width) + ' |\n');
  formattedText += ('+-' + '-'.repeat(width) + '-+\n');

  console.log(formattedText);
}

logInBox('To boldly go where no one has gone before.', 15);
logInBox('');