const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

/*
  The bug is on line 9 because we are (let's assume) trying
  to access the property `a` of `myObject`. However, we do not
  surround `a` with quotes on line 9 to signify that the key name
  is `a`. Instead, the compiler will try to look for a local variable
  of the name `a` and resolve that as the key, however a local
  variable is not defined, so a ReferenceError is thrown.

*/