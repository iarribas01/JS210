function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let result = {};

for (let i = 0; i < 50; i++) {
  let rand = randInt(0, 1);
  if (!result[rand]) {
    result[rand] = 1;
  } else {
    result[rand] += 1;
  }
}

console.log(result);

// let age = randInt(20, 200);
// console.log(`Teddy is ${age} years old!`);
