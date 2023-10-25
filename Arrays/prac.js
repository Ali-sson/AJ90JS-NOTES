function addToEnd(arr, value) {
    arr.push(value);
    return arr;
}
const myArray = [1, 2, 3];
const newValue = 4;
const modifiedArray = addToEnd(myArray, newValue);
console.log(modifiedArray);