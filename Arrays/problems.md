Exercise 1: Add Elements to an Array

Write a JavaScript function called addToEnd that takes an array and a value as input. The function should add the value to the end of the array using the push method. The function should then return the modified array.

```js
function addToEnd(arr, value) {
    arr.push(value);
    return arr;
}

const myArray = [1, 2, 3];
const newValue = 4;
const modifiedArray = addToEnd(myArray, newValue);
console.log(modifiedArray); // Output: [1, 2, 3, 4]
```

Exercise 2: Remove and print the last array using pop() method
```js
function removeAndPrintLastNumber(arr) {
    const removedElement = arr.pop();
    console.log(removedElement);
    return arr;
}

const theArray = [1, 2, 3, 4, 5];
removeAndPrintLastNumber(theArray);

// remove the last index and print the remaining number

function removeAndPrintRemaining(arr, value) {
    arr.pop(value);
    return arr;
}
const theArray2 = [1, 2, 3, 4, 5];
const remainingArray = removeAndPrintRemaining(theArray2);
console.log(remainingArray)
```