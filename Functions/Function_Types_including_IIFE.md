JavaScript supports various types of functions, including Immediately Invoked Function Expressions (IIFE). Here's an overview of different types of functions in JavaScript:

1. **Named Function**:
   ```javascript
   function myFunction() {
       // Function code here
   }
   ```

2. **Function Expression**:
   ```javascript
   const myFunction = function() {
       // Function code here
   };
   ```

3. **Arrow Function** (ES6):
   ```javascript
   const myFunction = () => {
       // Function code here
   };
   ```

4. **IIFE (Immediately Invoked Function Expression)**:
   An IIFE is a function that is defined and executed immediately after its creation. It's often used to create a private scope.
   ```javascript
   (function() {
       // Function code here
   })();
   ```

5. **Function Constructor**:
   You can also create functions using the `Function` constructor, but it's generally not recommended due to potential security issues.
   ```javascript
   const myFunction = new Function('arg1', 'arg2', 'return arg1 + arg2');
   ```

6. **Generator Function**:
   A generator function uses the `function*` syntax and allows you to pause and resume its execution.
   ```javascript
   function* myGenerator() {
       yield 1;
       yield 2;
       yield 3;
   }
   ```

7. **Async Function** (ES8):
   An `async` function returns a promise and can use the `await` keyword to pause and resume execution.
   ```javascript
   async function myAsyncFunction() {
       // Async code using await
   }
   ```

8. **Recursive Function**:
   A recursive function is one that calls itself to solve a problem.
   ```javascript
   function factorial(n) {
       if (n === 0) return 1;
       return n * factorial(n - 1);
   }
   ```

9. **Callback Function**:
   A callback function is a function that is passed as an argument to another function and is executed when a specific event occurs.
    ```javascript
   function doSomething(callback) {
       // Code here
       callback();
   }

10. **Higher-Order Function**:
    A higher-order function is a function that takes one or more functions as arguments or returns a function.
     ```javascript
    function higherOrderFunction(fn) {
        return function() {
            // Code here
            fn();
        };
    }
    ``` 

These are some of the common types of functions in JavaScript. Each has its own use cases and benefits depending on the specific requirements of your code.




# JavaScript Immediately Invoked Function Expressions (IIFE)

 A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation. The following shows the syntax of defining an immediately invoked function expression:
 ```js
  (function(){
     //... 
     })();
```

The following expression is called an immediately invoked function expression (IIFE) because the function is created as an expression and executed immediately:
```js
 (function(a,b){ 
    return a + b; 
    })(10,20);

 ```