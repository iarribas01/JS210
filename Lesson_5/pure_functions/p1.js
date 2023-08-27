const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

/*
  The side effects of the code snippet can be
  found on lines 6, 7, and 8.

  Line 6 calls a destructive method on the array
  argument that is passed in, mutating the object.

  Line 7 produces an output to the console.

  Line 8 accesses two variables outside of 
  its scope, `bar` and `baz`.


*/