# Event listeners and how to respond to user interactions.

* The addEventListener() method attaches an event handler to the specified element.
* The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. 
* You can add many event handlers to one element. 
* You can add many event handlers of the same type to one element, i.e two "click" events. 
* You can add event listeners to any DOM object not only HTML elements. i.e the window object. 
*The addEventListener() method makes it easier to control how the event reacts to bubbling. 
* When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup. 
* You can easily remove an event listener by using the removeEventListener() method.
Syntax 
```js
element.addEventListener(event, function, useCapture); 
```
* The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
* The second parameter is the function we want to call when the event occurs. 
* The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional. 
>Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

### Example
Add an Event Handler to an Element 

Alert "Hello World!" when the user clicks on an element:
```js
 element.addEventListener("click", function(){
      alert("Hello World!"); });
```
### Example 

Add Many Event Handlers to the Same Element 

The addEventListener() method allows you to add many events to the same element, without overwriting existing events: 
```js
element.addEventListener("click", myFunction); 
element.addEventListener("click", mySecondFunction);
```


- You can add events of different types to the same element:

 Example

 ```js
  element.addEventListener("mouseover", myFunction);
  element.addEventListener("click", mySecondFunction); 
  element.addEventListener("mouseout", myThirdFunction);
```

- Passing Parameters When passing parameter values, use an "anonymous function" that calls the specified function with the parameters: Example
```js
 element.addEventListener("click", function(){
      myFunction(p1, p2); });
```
- You can also refer to an external "named" function:

 Example
 
  Alert "Hello World!" when the user clicks on an element: 
  ```js
  element.addEventListener("click", myFunction); 
  function myFunction() { alert ("Hello World!"); 
  }
  ```