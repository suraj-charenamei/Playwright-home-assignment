//function to reverse a given string
function reverseString(str) {
  const str1 = str.toLowerCase(); // Convert string to lowercase
  let characters = str1.split(""); // Split string into characters
  let reversedString = "";

  // Loop through the characters in reverse direction
  for (let i = str1.length - 1; i >= 0; i--) {
    reversedString = reversedString + characters[i];
  }
  console.log("Reversed string is:", reversedString); // print the reversed string
  return reversedString; // return the reversed string
}

// Function to check whether the string is a palindrome or not
function isPalindrome(str) {
  let reversed = reverseString(str);
  if (str.toLowerCase() === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log("Palindrome:", isPalindrome("madam"));
