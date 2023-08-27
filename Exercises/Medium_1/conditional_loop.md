The code will print 0 an infinite amount of times.
This is because the local variable `i` will always be
equal to 0. It enters the while loop since 0 is less than 10,
and since the if statement on line 3 will always evaluate
to true, the increment on line 6 will never execute.

```javascript
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
```