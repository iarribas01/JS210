function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100, false, false, false);      // 126.5

console.log(processOrder(100, false, ' ', false));

/*
  The limitation is that since we are using
  if statements and the boolean operator || to
  check whether or not an argument was provided,
  we can invoke the `processOrder` method by passing in
  falsey values.


*/