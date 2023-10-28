 # Introduction to the JavaScript object methods
An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. Typically, you use methods to describe the object’s behaviors.

For example, the following adds the greet method to the person object:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.greet = function () {
    console.log('Hello!');
}

person.greet();

Output: Hello!

```
In this example:

First, use a function expression to define a function and assign it to the greet property of the person object.

Then, call the method greet() method.

Besides using a function expression, you can define a function and assign it to an object like this:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log('Hello, World!');
}

person.greet = greet;

person.greet();
```
In this example:

First, define the greet() function as a regular function.
Second, assign the function name to the greet property of the person object.
Third, call the greet() method.

## Object method shorthand
JavaScript allows you to define methods of an object using the object literal syntax as shown in the following example:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    }
};
```
ES6 provides you with the concise method syntax that allows you to define a method for an object:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};
person.greet();
```
> This syntax looks much cleaner and less verbose.

In JavaScript, objects can be thought of as dictionaries or maps, where each property (key) is associated with a value. While JavaScript objects aren't exactly the same as the `Set` and `Map` data structures introduced in ECMAScript 6 (ES6), you can use objects to achieve similar functionality.

1. **Set-like functionality using Objects**:

   A `Set` is a data structure that stores unique values. You can use an object to mimic the behavior of a set by using property keys to represent the unique values. Here's how you can create a simple set-like object:

   ```javascript
   const mySet = {};

   // Add values to the "set"
   mySet['value1'] = true;
   mySet['value2'] = true;

   // Check if a value is in the "set"
   const isValueInSet = mySet['value1']; // true
   const isValueInSet2 = mySet['value3']; // undefined (not in the set)
   ```

   To remove a value from the "set," you can use the `delete` operator:

   ```javascript
   delete mySet['value1'];
   ```

2. **Map-like functionality using Objects**:

   A `Map` is a data structure that allows you to associate values with keys. You can use an object to mimic the behavior of a map:

   ```javascript
   const myMap = {};

   // Add key-value pairs to the "map"
   myMap['key1'] = 'value1';
   myMap['key2'] = 'value2';

   // Retrieve values by their keys
   const value1 = myMap['key1']; // 'value1'

   // Check if a key exists in the "map"
   const hasKey = 'key2' in myMap; // true

   // Remove a key-value pair from the "map"
   delete myMap['key2'];
   ```

   However, one important difference is that objects have prototype chains, which can lead to unintentional key collisions. To avoid this, you can use `Object.create(null)` to create a "plain" object without a prototype:

   ```javascript
   const myMap = Object.create(null);

   myMap['key1'] = 'value1';
   myMap['key2'] = 'value2';
   ```

   This approach eliminates the possibility of key collisions with properties inherited from the object's prototype chain.

Keep in mind that ES6 introduced the `Set` and `Map` data structures, which are more suitable for managing collections of unique values and key-value pairs, respectively. If you need to work with sets and maps in a more structured way, it's recommended to use the built-in `Set` and `Map` objects.