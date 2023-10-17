# Parameters vs. Arguments

 The terms parameters and arguments are often used interchangeably. However, they are essentially different.  When declaring a function, you specify the parameters. However, when calling a function, you pass the arguments that are corresponding to the parameters.  For example, in the say() function, the message is the parameter and the 'Hello' string is an argument that corresponds to the message parameter.

 - Function parameters are listed inside the parentheses () in the function definition.

- Function arguments are the values received by the function when it is invoked.

- Inside the function, the arguments (the parameters) behave as local variables.


## Returning a value
To specify a return value for a function, you use the return statement followed by an expression or a value, like this: 
return expression; For example, the following add() function returns the sum of the two arguments: 

```js 
function add(a, b) { 
    return a + b;
     }
```

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":

Example
Calculate the product of two numbers, and return the result:
```js
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

```