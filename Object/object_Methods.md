# Object methods and how to create or manipulate objects.


`` Object methods `` : are functions that are properties of an object. You can define methods within an object literal or in the constructor or class definition. Here's an example of defining methods:
```js
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b; // Shorthand method definition (ES6)
  },
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
```

## Modifying the value of a property
To change the value of a property, you use the assignment operator (=). For example:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.firstName = 'Jane';
console.log(person);

Output:
{ firstName: 'Jane', lastName: 'Doe' }
Code language: CSS (css)
```
In this example, we changed the value of the firstName property of the person object from 'John' to 'Jane'.

## Adding a new property to an object
Unlike objects in other programming languages such as Java and C#, you can add a property to an object after object creation.

The following statement adds the age property to the person object and assigns 25 to it:
```js
person.age = 25;
```
## Deleting a property of an object
To delete a property of an object, you use the delete operator:
```js
delete objectName.propertyName;
```
The following example removes the age property from the person object:
```js
delete person.age;
```

## Checking if a property exists
To check if a property exists in an object, you use the in operator:
```js
propertyName in objectName
```
The in operator returns true if the propertyName exists in the objectName.

The following example creates an employee object and uses the in operator to check if the ssn and employeeId properties exist in the object:
```js
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);
Code language: JavaScript (javascript)

Output:

false
true
```