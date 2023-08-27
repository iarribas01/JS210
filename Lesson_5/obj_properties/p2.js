function incrementProperty(object, property) {
  if (object.hasOwnProperty(property)) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }

  return object[property];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }