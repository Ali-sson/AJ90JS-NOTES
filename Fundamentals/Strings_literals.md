## String with Template literals.

Template literals, also known as template strings, are a feature in JavaScript introduced in ECMAScript 6 (ES6) that allow you to create strings with embedded expressions. They are enclosed within backticks (\`) rather than single or double quotes. Here's how you can use template literals to create strings:

1. **Basic Usage**:

   You can embed expressions within `${}` inside a template literal.

   ```javascript
   const name = 'John';
   const greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: Hello, John!
   ```

2. **Multi-line Strings**:

   Template literals make it easy to create multi-line strings without using escape characters like `\n`.

   ```javascript
   const multiLineString = `
   This is a
   multi-line
   string.
   `;
   console.log(multiLineString);
   ```

3. **Expression Evaluation**:

   You can include any valid JavaScript expression inside `${}`.

   ```javascript
   const a = 5;
   const b = 10;
   const result = `The sum of ${a} and ${b} is ${a + b}.`;
   console.log(result); // Output: The sum of 5 and 10 is 15.
   ```

4. **Tagged Templates**:

   You can also use tagged templates, which allow you to modify the output of template literals by defining a custom function (a "tag") before the template literal.

   ```javascript
   function customTag(strings, ...values) {
     return strings[0] + values.join(' and ');
   }

   const item1 = 'apple';
   const item2 = 'banana';
   const result = customTag`I have a ${item1} ${item2}.`;
   console.log(result); // Output: I have a apple and banana.
   ```

Template literals are a powerful and convenient way to work with strings in JavaScript, making it easier to create dynamic and complex string templates.