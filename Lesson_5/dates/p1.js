function dateSuffix(date) {
  date = String(date);

  let onesDigit = date[date.length - 1];
  let tensDigit = date[date.length - 2];

  if (onesDigit === '1' && tensDigit !== '1') {
    return date + 'st';
  } else if (onesDigit === '2' && tensDigit !== '1') {
    return date + 'nd';
  } else if (onesDigit === '3' && tensDigit !== '1') {
    return date + 'rd';
  } else {
    return date + 'th';
  }
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let numDay =  date.getDay();

  return daysOfWeek[numDay];
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let numMonth = date.getMonth();

  return months[numMonth];
}

function formattedDate(date) {
  return formattedDay(date) + ', ' + formattedMonth(date) + ' ' + date.getDate();
}

let today = new Date();

console.log(today);
console.log(`Today's day is ${formattedDate(today)}`);

