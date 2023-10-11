# Data Types

## JavaScript has 8 Datatypes
 1. String 
 2. Number 
 3. Bigint 
 4. Boolean 
 5. Undefined 
 6. Null 
 7. Symbol 
 8. Object
## The Object Datatype 
The object data type can contain: 
1. An object 
2. An array 
3. A date
> **Note** A JavaScript variable can hold any type of data.

 >JavaScript Types are Dynamic

 JavaScript has dynamic types. This means that the same variable can be used to hold different data types: 
 Example 
 ```js  
 let x; // Now x is undefined
 x = 5; // Now x is a Number 
 x = "John"; // Now x is a String
```
## Javascript Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes: 
Example : 

```js
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';
```
   ## Javascript Number 

All JavaScript numbers are stored as decimal numbers (floating point). Numbers can be written with, or without decimals : 

 Example 
 
 ```js
 // With decimals: let x1 = 34.00;
// Without decimals: let x2 = 34;
```

  ## Javascript Bigint 
  JavaScript BigInt All JavaScript numbers are stored in a     64-bit floating-point format. JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

   Example
   ```js 
    let x = BigInt("123456789012345678901234567890");
   ```

  ## Javascript Boolean 

JavaScript Booleans Booleans can only have two values: true or false. 
Example 
```js
 let x = 5; 
 let y = 5; 
 let z = 6; 
 (x == y) // Returns true 
 (x == z) // Returns false
```
>Booleans are often used in conditional testing.

 ## Javascript Undefined 
 Undefined In JavaScript, a variable without a value, has the value undefined. The type is also undefined. 
 Example 
 ```js
let car; // Value is undefined, type is undefined
 ```
 
 ## Javascript Null 

null is a primitive value that represents the intentional absence of any object value or a variable that has no value.
You can declare a variable as null like this:
```js 
let myVar = null;
```
null is often used when you want to indicate that a variable or object property should be empty or undefined on purpose.

 ## Javascript Symbol

Symbol is a primitive data type introduced in ECMAScript 6 (ES6) that is used to create unique and immutable values. Symbols are often used as property keys in objects.
You can declare a Symbol like this:
```js 
const mySymbol = Symbol('mySymbolDescription');
```
The string argument passed to Symbol is optional and is used for debugging or description purposes. Two Symbol values created with the same description are not equal.

```js
const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
console.log(symbol1 === symbol2); //false
```

 ## JavaScript Objects 
 JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.

  Example 
  ```js
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  ```


 

 

- JavaScript Arrays JavaScript arrays are written with square brackets. Array items are separated by commas. The following code declares (creates) an array called cars, containing three items (car names): Example const cars = ["Saab", "Volvo", "BMW"];

