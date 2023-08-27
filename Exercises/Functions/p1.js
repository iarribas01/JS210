var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
This prints 'This is local' because the variable
was defined on line 1. someFunction was called and 
it reassigns the variable myVar to 'This is local'
so the value is pritned



*/