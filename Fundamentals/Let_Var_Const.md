# Let, var, const.

* let: Use this for normal stuff, like changing values.
* var: Old way, can have issues, don't use it.
* const: Use this when you don't want a value to ever change.


Back when JavaScript was first created, **Var** was the only way to declare variables. The design of var is confusing and error-prone. So **let** was created in modern versions of JavaScript, a new keyword for creating variables that works somewhat differently to var, fixing its issues in the process.
# Const in JavaScript
 As well as variables, you can declare constants. These are like variables, except that:  
 you must initialize them when you declare them you can't assign them a new value after you've initialized them. For example, using let you can declare a variable without initializing it:
```js 
let count;
```
 If you try to do this using const you will see an error:
 ```js 
 const count;
 ```
 Similarly, with **let** you can initialize a variable, and then assign it a new value (this is also called reassigning the variable):
 ```js 
 let count = 1;
 count = 2; 
  ```
  If you try to do this using const you will see an error:
 ```js 
const count = 1;
count = 2;
  
```
  
# When to use const and when to use let
 If you can't do as much with const as you can with let, why would you prefer to use it rather than let? In fact const is very useful. If you use const to name a value, it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to. In this course, we adopt the following principle about when to use let and when to use const : 

>Use const when you can, and use let when you have to. This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.
