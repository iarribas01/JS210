
/*
let myArray = {
  0: "apples",
  1: "bananas",
  2: "clementines",
  3: "dragonfruit",
  length: 4
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
*/

/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let uppercaseKeys = Object.keys(obj).map(
  function(key) {
    return key.toUpperCase();
  }
);

console.log(uppercaseKeys); */

/*
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj)
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
*/

/*
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


function copyObj(obj, keys = []) {
  let newObj = {};

  if (keys.length == 0) {
    keys = Object.keys(obj);
  }

  for (let property in obj) {
    if (keys.includes(property)){
      newObj[property] = obj[property];
    }
  }

  return newObj;
};
*/

function foo(bar) {
  console.log(bar());
}

foo(function() {
  return 'Welcome'});    // Should print 'Welcome'
foo(function() {
  return 3.1415});    // Should print 3.1415
foo(function() {
  return [1, 2, 3]});    // Should print [1, 2, 3]