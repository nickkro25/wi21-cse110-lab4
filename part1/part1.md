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


