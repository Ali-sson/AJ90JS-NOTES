# JavaScript objects

 - JavaScript objects are a fundamental data type used to store and organize data in key-value pairs. 
 - Objects in JavaScript can be thought of as collections of properties, where each property has a name (key) and a value associated with it. 
 - Each key-value pair is called a property. 
 - The key of a property can be a string. 
 - The value of a property can be any value, e.g., a string, a number, an array, and even a function.

 ## Creating Objects

You can create objects in JavaScript using two methods: __object literals and the Object constructor.__

> The most commonly used one is to use the object literal notation.

The following example creates an empty object using the object literal notation:
```js
let empty = {};
```
To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object:
```js 
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

```
The person object has two properties firstName and lastName with the corresponding values 'John' and 'Doe'.

When an object has multiple properties, you use a comma (,) to separate them like the above example.