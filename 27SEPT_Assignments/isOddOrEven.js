/*Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` 
if the number is odd and `"Even"` if the number is even.*/

//Create a function named `isOddOrEven` that takes a number as a parameter

function isOddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Declare and initialize the variable number
let number = 4;

//Call the function and print the result
console.log(isOddOrEven(number));
