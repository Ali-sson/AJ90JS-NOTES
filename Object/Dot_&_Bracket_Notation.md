# Accessing properties
To access a property of an object, you use one of two notations: the dot notation and array-like notation.

1) ``The dot notation (.)``
The following illustrates how to use the dot notation to access a property of an object:
```js
objectName.propertyName
```

For example, to access the firstName property of the person object, you use the following expression:
```js
person.firstName
```
This example creates a person object and shows the first name and last name to the console:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person.firstName);
console.log(person.lastName);
```

2) Array-like notation ( [])
The following illustrates how to access the value of an object’s property via the array-like notation:
```js
objectName['propertyName']
```
For example:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person['firstName']);
console.log(person['lastName']);
```