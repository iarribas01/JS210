function greetings(names, description) {
  let greeting = 'Hello, ';

  greeting += names.join(' ');
  greeting += '! Nice to have a '
  greeting += `${description.title} ${description.occupation} around.`

  console.log(greeting);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });