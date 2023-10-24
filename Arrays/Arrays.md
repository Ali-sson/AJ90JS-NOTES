# JavaScript Arrays
 An array is a special variable, which can hold more than one value.
 An array can hold many values under a single name, and you can access the values by referring to an index number.
 > Note: Array indexes start with 0.
[0] is the first element. [1] is the second element.

 Creating an Array Using an array literal is the easiest way to create a JavaScript Array. Syntax: 
 ```js
 const array_name = [item1, item2, ...];
 ```
Example
 ```js
  const cars = ["Saab", "Volvo", "BMW"];
 ```


 # Array Methods

 JavaScript provides a variety of built-in methods that can be used to manipulate arrays. These methods allow you to perform common operations on arrays, such as adding, removing, and modifying elements. Here are some of the most commonly used array methods in JavaScript:

1. `push()`: Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let arr = [1, 2, 3];
arr.push(4);
// arr is now [1, 2, 3, 4]
```

2. `pop()`: Removes and returns the last element of an array.

```javascript
let arr = [1, 2, 3, 4];
let poppedElement = arr.pop();
// arr is now [1, 2, 3]
// poppedElement is 4
```

3. `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let arr = [2, 3, 4];
arr.unshift(1);
// arr is now [1, 2, 3, 4]
```

4. `shift()`: Removes and returns the first element of an array.

```javascript
let arr = [1, 2, 3, 4];
let shiftedElement = arr.shift();
// arr is now [2, 3, 4]
// shiftedElement is 1
```

5. `concat()`: Combines two or more arrays and returns a new array.

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
// combined is [1, 2, 3, 4]
```

6. `slice()`: Creates a new array containing a copy of a portion of an existing array.

```javascript
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4);
// sliced is [2, 3, 4]
```

 7. `splice()`: Changes the contents of an array by removing, replacing, or adding elements.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b');
// arr is now [1, 'a', 'b', 4, 5]
```

8. `forEach()`: Calls a function for each element in an array.

```javascript
let arr = [1, 2, 3];
arr.forEach(function (element) {
  console.log(element);
});
// Logs: 1, 2, 3
```

9. `map()`: Creates a new array by applying a function to each element of an existing array.

```javascript
let arr = [1, 2, 3];
let mapped = arr.map(function (element) {
  return element * 2;
});
// mapped is [2, 4, 6]
```

10. `filter()`: Creates a new array with all elements that pass a test defined by a provided function.

```javascript
let arr = [1, 2, 3, 4, 5];
let filtered = arr.filter(function (element) {
  return element % 2 === 0;
});
// filtered is [2, 4]
```

These are just some of the commonly used array methods in JavaScript. There are many more array methods available, each serving a specific purpose, making JavaScript a versatile language for working with arrays.

