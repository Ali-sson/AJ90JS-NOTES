// const numbers = [1,2,3,4,5,6,7,8,9,10];

// let evenNumber=numbers.filter(function(even){

//     if(even % 2 == 0){
//         return true;
//     }
// })

// //  console.log(evenNumber)


// function flattenArray(arrays) {
//     // Your code here
//     return arrays.reduce((flat, current) => flat.concat(current), []);
// }

// const nestedArrays = [[1, 2], [3, 4, 5], [6, 7]];
// const flattened = flattenArray(nestedArrays);
// // console.log(flattened);

function addToEnd (arr, value){
    arr.unshift(value);
    return arr;
}

const newArray = [1,2,3,4,5];
const newValue = 6;
const Adding = addToEnd(newArray, newValue );
console.log (Adding)

// function remove(arr) {
//     arr.pop();
//     return arr;
// }

// const dtheArray =[1,2,3,4,5];
// const removing = remove(theArray);
// // console.log(removing)



function removeAndPrintLastNumber(arr) {
    const removedElement = arr.shift();
    console.log(removedElement);
    return arr;
}

const theArray = [1, 2, 3, 4, 5];
removeAndPrintLastNumber(theArray);

// // remove the last index and print the remaining number

// function removeAndPrintRemaining(arr, value) {
//     arr.pop(value);
//     return arr;
// }
// const theArray2 = [1, 2, 3, 4, 5];
// const remainingArray = removeAndPrintRemaining(theArray2);
// console.log(remainingArray)

function night (goodnight){
    return goodnight;
}


console.log(night)

