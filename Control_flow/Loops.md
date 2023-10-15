# JavaScript for Loop.

The for loop statement creates a loop with three optional expressions. 
The following illustrates the syntax of the for loop statement:

> for (initializer; condition; iterator) {
    > // statements }

- Initializer : The for statement executes the initializer only once the loop starts. Typically, you declare and initialize a local loop variable in the initializer.
- Condition : The condition is a boolean expression that determines whether the for should execute the next iteration. The for statement evaluates the condition before each iteration. If the condition is true (or is not present), it executes the next iteration. Otherwise, it’ll end the loop. 
- Iterator : The for statement executes the iterator after each iteration.

JavaScript for loop examples

 Let’s take some examples of using the for loop statement. 
 - A simple JavaScript for loop example 
 
 The following example uses the for loop statement to show numbers from 1 to 4 to the console: 

 ```js
 for (let i = 1; i < 5; i++) { 
    console.log(i); } 

    Code language: JavaScript (javascript) Output: 1 2 3 4
```
 How it works. 
 - First, declare a variable counter and initialize it to 1. - Second, display the value of counter in the console if counter is less than 5. 
 - Third, increase the value of counter by one in each iteration of the loop.
> Summary Use the JavaScript for statement to create a loop that executes a block of code using various options.


# JavaScript while Loop

<u>Introduction to the JavaScript while loop statement</u>

 The JavaScript while statement creates a loop that executes a block as long as a condition evaluates to true. The following illustrates the syntax of the while statement:
 ```js
 while (expression) {
     // statement } 
 ```

The while statement evaluates the expression before each iteration of the loop. 
If the expression evaluates to true, the while statement executes the statement. Otherwise, the while loop exits. Because the while loop evaluates the expression before each iteration, it is known as a pretest loop. If the expression evaluates to false before the loop enters, the while loop will never execute. The following flowchart illustrates the while loop statement:

![flowchart](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-while.svg)


# JavaScript while loop example 

The following example uses the while statement to output the odd numbers between 1 and 10 to the console: 

```js
let count = 1;
 while (count < 10) {
     console.log(count); count +=2; }
       
     Code language: JavaScript (javascript) Output: 1 3 5 7 9 
```

 How the script works First,
- Declare and initialize the count variable to 1. 
- Second, execute the statement inside the loop if the count variable is less than 10. In each iteration, output the count to the console and increase the count by 2. 
- Third, after 5 iterations, the count is 11. Therefore, the condition count < 10 is false, the loop exits. 
>Summary Use a while loop statement to create a loop that executes a block as long as a condition evaluates to true.



# JavaScript do…while Loop 

 <U> Introduction to the JavaScript do…while statement </U>

 The do...while loop statement creates a loop that executes a block until a condition evaluates to false.
 
  The following statement illustrates the syntax of the do...while loop: 
  ```js
  do { 
    statement;
     } while(expression); 
  ```
   Unlike the while loop, the do-while loop always executes the statement at least once before evaluating the expression. Because the do...while loop evaluates expression after each iteration, it’s often referred to as a post-test loop. Inside the loop body, you need to make changes to some variables to ensure that the expression is false after some iterations. Otherwise, you’ll have an indefinite loop. 
   
  The following flowchart illustrates the do-while loop statement:

  ![Flowchart](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-do-while.svg)


 In practice, you often use the do...while statement when you want to execute the loop body at least once before checking the condition. JavaScript do while statement examples :

  Let’s take some examples of using the do...while statement. Simple JavaScript do while statement example The following example uses the do...while statement to output five numbers from 0 to 4 to the console: 
  ```js
  let count = 0; 
   do { console.log(count);
    count++; } while (count < 5) 
     Output: 0 1 2 3 4 
```
 In this example: First, declare and initialize the count variable to zero. Second, show the count and increase its value by one in each iteration until its value is greater or equal to 5.