# Map, Filter, Reduce Array Methods.

These array methods are powerful and commonly used for working with arrays in JavaScript. They provide a concise and efficient way to manipulate and transform arrays, making your code more readable and maintainable.

1. **`map()` Method**:
   - The `map()` method is used to create a new array by applying a function to each element of an existing array.
   - It doesn't modify the original array but returns a new array with the results of applying the function to each element.
   - The provided function is called once for each element in the array.

Example:

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled is now [2, 4, 6, 8]
```

2. **`reduce()` Method**:
   - The `reduce()` method is used to reduce an array to a single value. It applies a function against an accumulator and each element in the array to reduce it to a single value.
   - The accumulator is an initial value (or the result of the previous iteration), and the function is applied to each element in the array.
   - The result of each function call is used as the accumulator for the next function call.

Example:

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is now 10
```

3. **`filter()` Method**:
   - The `filter()` method is used to create a new array with all elements that pass a provided test implemented by a function.
   - It doesn't modify the original array but returns a new array containing the elements for which the test function returns `true`.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
// evens is now [2, 4]
```

