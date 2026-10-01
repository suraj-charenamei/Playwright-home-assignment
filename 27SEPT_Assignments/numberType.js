/*Create a JavaScript function that determines if a number is positive, negative,
or zero and returns a corresponding string indicating the type. */
//Create a function named (numberType) that takes a number as a parameter

function numberType(number) {
  if (number > 0) {
    return "Postive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Neutral";
  }
}

//Declare and initialize the variable
let number = -4;

//Call the function and print the result
console.log(numberType(number));
