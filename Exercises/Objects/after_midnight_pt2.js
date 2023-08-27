const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MILLISECONDS_PER_MINUTE = 60000;

function afterMidnight(timeStr) {
  let date = new Date('2000-01-01T00:00:00');

  const timeComponents = timeStr.split(':').map((time) => parseInt(time, 10));
  const minutesAfterMidnight = timeComponents[0] * MINUTES_PER_HOUR + timeComponents[1];

  date.setTime(minutesAfterMidnight * MILLISECONDS_PER_MINUTE);
  return (date.getTime() / MILLISECONDS_PER_MINUTE);
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686