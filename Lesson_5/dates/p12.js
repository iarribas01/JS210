let today = new Date();
let nextWeek = new Date (today.getTime());
nextWeek.setDate(nextWeek.getDate() + 7);

console.log(today);
console.log(nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());
console.log(today == nextWeek);