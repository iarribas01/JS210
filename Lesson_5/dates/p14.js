function formatTime(date) {
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  
  return hours + ':' + minutes;
}

let today = new Date(); 
let twelveHoursInFuture = 12 * 60 * 60 * 1000;
today.setTime(today.getTime() + twelveHoursInFuture);

// today.setTime(today.getTime() + 5 * 60 * 1000);

console.log(formatTime(today));