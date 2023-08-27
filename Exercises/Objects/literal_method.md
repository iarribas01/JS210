You will get a `ReferenceError` on the last line
of code as the compiler tries to resolve `firstName` and `lastName` as
a *property* of the `person` object because we are omitting the
parenthesis.