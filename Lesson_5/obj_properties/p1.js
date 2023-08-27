function objectHasProperty(object, propertyName) {
  return Object.keys(object).includes(propertyName);

  // return object.hasOwnProperty(propertyName);
}


let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true