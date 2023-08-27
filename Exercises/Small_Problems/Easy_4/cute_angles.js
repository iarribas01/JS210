const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(angle) {
  let degrees = Math.floor(angle);
  let remainder = angle - degrees;

  let minutes = remainder * MINUTES_PER_DEGREE;
  let seconds = (minutes - Math.floor(minutes)) * SECONDS_PER_MINUTE;

  return `${degrees}˚${Math.toFixed(Math.floor(minutes), 2)}'${Math.toFixed(Math.floor(seconds), 2)}"`
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"