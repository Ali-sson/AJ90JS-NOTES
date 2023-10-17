# JavaScript Function

<u> Introduction to JavaScript functions</u>

A JavaScript function is a block of code designed to perform a particular task.

 When developing an application, you often need to perform the same action in many places. For example, you may want to show a message whenever an error occurs. To avoid repeating the same code all over places, you can use a function to wrap that code and reuse it. JavaScript provides many built-in functions such as parseInt() and parseFloat(). In this tutorial, i learn how to develop custom functions.
## Declare a function
 To declare a function, you use the function keyword, followed by the function name, a list of parameters, and the function body as follows:

```js
  function functionName(parameters) {
     // function body // ...
      }
```
 
A function can accept zero, one, or multiple parameters. In the case of multiple parameters, you need to use a comma to separate two parameters.

The following declares a function say() that accepts no parameter:
```js
 function say() {

 } 
 ```
The following declares a function named square() that accepts one parameter:
```js
 function square(a) { 

 } 
 ```
 The following declares a function named add() that accepts two parameters: 
 ```js
 function add(a, b) { 

 } 
 ```
 Inside the function body, you can write the code to implement an action. For example, the following say() function simply shows a message to the console: 
 ```js
 function say(message) {
     console.log(message); 
     }
 ```
 
In the body of the say() function, we call the console.log() function to output a message to the console.


## Calling a function

 To use a function, you need to call it. Calling a function is also known as invoking a function. To call a function, you use its name followed by arguments enclosing in parentheses like this:
 ```js
  functionName(arguments); 
  ```
When calling a function, JavaScript executes the code inside the function body. For example, the following shows how to call the say() function:
```js
 say('Hello'); 
 ```
 In this example, we call the say() function and pass a literal string 'Hello' into it.



