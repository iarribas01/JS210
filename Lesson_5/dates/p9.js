let today = new Date();

console.log(today.getFullYear());
console.log(today.getYear());

let tomorrow = new Date();
today.setDate(31);
tomorrow.setDate(today.getDate() + 1);

console.log(`Today is ${today.getDate()}`);
console.log(`Tomorrow is ${tomorrow.getDate()}`);