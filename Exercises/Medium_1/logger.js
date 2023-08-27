function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
  This code logs the string "debugging" due to JavaScript's lexical scoping rules. 
  
  because variables declared with `const` are block-scoped, they
  are accessible anywhere within the block in which it is defined.
  Therefore, the variable `const` is accessible anywhere within the `debugIt`
  function, including the nested function `logger`.


*/