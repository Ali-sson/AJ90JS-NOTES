# JavaScript Callbacks

- JavaScript Callbacks
- A callback is a function passed as an argument to another function This technique allows a function to call another function 
- A callback function can run after another function has finished

## Sequence Control
Sometimes you would like to have better control over when to execute a function.

Suppose you want to do a calculation, and then display the result.

You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

Example
```js

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

```
The problem with the example above, is that you have to call two functions to display the result.

> Now it is time to bring in a callback.

Example
```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

```
In the example above, myDisplayer is a called a callback function.

It is passed to myCalculator() as an argument

### When to Use a Callback?
The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).


## CallBack Hell

Callback hell, also known as "Pyramid of Doom," is a term used to describe the situation in JavaScript where multiple nested callbacks make the code difficult to read and maintain. This typically occurs when dealing with asynchronous operations, such as nested callbacks within callbacks. This can lead to code that looks like a pyramid, making it hard to follow and debug.
```js
getData(function (data1) {
    getMoreData(data1, function (data2) {
        getMoreData(data2, function (data3) {
            // And so on...
            // Nested callbacks within callbacks
        });
    });
});
```