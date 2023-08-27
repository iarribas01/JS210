const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty space>]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty spaces>]
console.log(languages.length); // 3

languages.length = 1; 
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty space>, 'Python']
console.log(languages[1]);// undefined
console.log(languages.length); // 3

/*
  This happens because we are using an array
  and altering the `length` property of the array object.

  In JavaScript, adjusting the length of the array by changing
  the value of the `length` property has the potential
  to designate the empty spaces to a value of `undefined` but 
  shows up as an empty space.

  Adjusting the length by decreasing its length has
  the potential to remove elements.


*/