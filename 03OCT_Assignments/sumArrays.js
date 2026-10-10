//Write a JavaScript program to find the total sum of all numbers present in an array.

let num = [56, 78, 90, 23, 90, 76, 43, 56]; // store an array of numbers in variable num
let sum = 0;

for (let i = 0; i <= num.length - 1; i++) {
  sum = sum + num[i];
}

console.log("Total sum of array numbers:", sum);
