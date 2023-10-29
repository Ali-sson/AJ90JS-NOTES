
The four main principles of object-oriented programming (OOP) are:

1. ``Encapsulation``: Encapsulation is the process of wrapping data and code together into a single unit, called an object. This allows us to hide the implementation details of the object from the outside world, and only expose the interface that we want to make public.
2. ``Abstraction``: Abstraction is the process of hiding unnecessary details and exposing only the essential information. This allows us to focus on the high-level functionality of an object, without having to worry about the low-level implementation details.
Inheritance: Inheritance allows us to create new classes by extending existing classes. This allows us to reuse code and avoid rewriting common functionality.
3. ``Polymorphism``: Polymorphism is the ability of an object to take on different forms. This allows us to write code that is more flexible and adaptable.

JavaScript is a prototype-based language, which means that it does not have classes in the traditional sense. However, JavaScript does support all of the four principles of OOP.

1. ``Encapsulation`` in JavaScript can be achieved using object literals or closures. Object literals allow us to create objects with properties and methods. Closures allow us to create private variables and functions within an object.

2. ``Abstraction`` in JavaScript can be achieved by using interfaces. Interfaces allow us to define the public interface of an object, without specifying the implementation details.

3. ``Inheritance`` in JavaScript can be achieved using prototypal inheritance. Prototypal inheritance allows us to create new objects that inherit the properties and methods of existing objects.

4. ``Polymorphism`` in JavaScript can be achieved using function overloading and overriding. Function overloading allows us to define multiple functions with the same name, but with different parameter lists. Function overriding allows us to override the implementation of a method in a child class.

Here is an example of how to use the four principles of OOP in JavaScript:

```js
// Encapsulation
const person = {
  name: 'Alice',
  age: 25,

  // Private function
  _greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },

  // Public function
  greet() {
    this._greet();
  },
};
``` 
```js 
// Abstraction
interface Person {
  name: string;
  age: number;
  greet(): void;
}
```
```js 
// Inheritance
class Student implements Person {
  constructor(public name: string, public age: number, public school: string) {}

  greet() {
    console.log(`Hello, my name is ${this.name} and I am a student at ${this.school}.`);
  }
}
```

```js
// Polymorphism
const alice = new Student('Alice', 25, 'Stanford University');
alice.greet(); // Outputs: Hello, my name is Alice and I am a student at Stanford University.

const bob = new Person(); // Creates a new Person object with no properties or methods
bob.greet(); // Outputs: error: bob.greet is not a function
```

In this example, the person object encapsulates its data and implementation details. The Person interface abstracts away the implementation details of the person object and exposes only the essential information. The Student class inherits from the Person interface and adds its own properties and methods. The greet() function is polymorphic, meaning that it takes on different forms depending on the object it is called on.

