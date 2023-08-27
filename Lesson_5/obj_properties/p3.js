function copyProperties(obj1, obj2) {
  for (property in obj1) {
    obj2[property] = obj1[property];
  }

  return Object.keys(obj1).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }