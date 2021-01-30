1. i is printed with the value of prices.length-1. Vars are function wide and when declared in a loop, can be usable throughout the method.

2. the last discountedPrice calcualted by the for loop is printed. As stated above, vars declared in loops have function wide scope.

3. the last finalPrice calculated by the for loop is printed. It is declared within the same code block.

4. This method multiplies each price in the prices array by the discount (0.5) and stores them in the discounted array. Therefore, the method returns an array containing: 50, 100, and 150.

5. Error, no such variable, the scope of i is only in the for loop.

6. Error, no such variable, the scope of discountedPrice is only in the for loop. 

7. The last finalPrice calculated by the for loop is printed, as finalPrice has a function wide scope (not declared within a loop).

8. It will return an error, as the method is trying to print variables that are out of scope. However, if those issues are fixed, the method will return an array containing: 50, 100, and 150 for the same reasons as question 4.

9.  Error, no such variable, the scope of i is only in the for loop.

10. Error, the constant variable discountedPrice had been reassigned multiple times in the for loop 

11. Error, the constant variable finalPrice had been reassinged multiple times in the for loop.

12. It will not return anything, as multiple errors are thrown. However, if some issues are resolved, then assignign finalprice to each indece will result in the function returning an array containg 0, 0, and 0.

13

    a student.name;

    b student[Grad Year];

    c student.greeting();

    d  student[Favorite Teacher].name;

    e student.courseLoad[0];

14

    a '32' - when adding a string and a number with a plus sign, the number is converted to a string and is concatenated

    b 1  - subtraction is strictly a numerical operator, thus strings are converted to numbers

    c 3 - null is equal to 0

    d '3null' - again, adding a string and anything concatenates the answer to be a string.

    e 4 - true can be treated as a number, so 1, and since it is being added to a number, the answeer is a number

    f 0 - Both false and null can be treated as zeros, so adding them together results in 0

    g '3undefined' - adding anything to a string concatatenates the two together

    h NaN - due to subtractionm, undefined is treated as a number. However, its value is NaN, and non known, so the answer will be NaN

15

    a true, string '2' becomes a number 2

    b false, '2' is larger than '1', so comparing the strings '2' and '12', '2' would be bigger

    c true, it is only a regular equality check

    d false, this is a strict equality check and the values being compared are not the same type

    e false, true is equal to the number 1

    f true, Boolean(2) returns true because 2 is larger than 0. So both values are true and of boolean type

16 == is a regular equality check, and only looks at the values of variables, not their type. === is a strict equality check and requires both the values and types to match.

17 'How are you?' will be printed, as the first conditional is false (2 == true), but (2) is true because Boolean(2) is true because 2 > 0.

19. The result is [6,8,10]. The function modifyArray is called, with an array containing [1,2,3] and the callback function being defined as doSomething. Then for each element in the array, the callback function, doSomething is called with the array element and a callback function that multiplies by two and returns it. Therefore, the DoSomething functioin will add two to each array element and multiply it by 2. Thus, each element of the array will have 2 added to it, then multiplied by 2.

20.
