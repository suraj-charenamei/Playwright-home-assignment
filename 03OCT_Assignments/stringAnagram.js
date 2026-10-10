//Learn how to manipulate strings and use looping statements in a programming language to solve practical problems.

//Given a string s consisting of words and spaces, return the length of the last word in the string.

/*Example 1:
Input: s = "Hello World"
Output: 5 
Explanation: The last word is "World" with length 5.*/

const s = "Hello World";
const splittedVal = s.split(" "); // split the string by spaces
const lastIndex = splittedVal.length - 1; //last index value
const lastword = splittedVal[lastIndex]; //last word
console.log("last word is:", lastword);
const lastwordlength = lastword.length;
console.log("length of last word:", lastwordlength);

/* Example 2:
Input: s = " fly me to the moon "
Output: 4 
Explanation: The last word is "moon" with length 4.*/

const str1 = " fly me to the moon ";
const trimstr1 = str1.trim(); // trim string to remove spaces from first and last of the string
const splittedstr1 = trimstr1.split(" "); // split the string by spaces
const lastIndex1 = splittedstr1.length - 1; // last index value
const lastword1 = splittedstr1[lastIndex1]; // last word of a given string
console.log("last word is:", lastword1);
const lastwordlength1 = lastword1.length;
console.log("last word length is:", lastwordlength1);

/* Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false */

function isAnagram(str1, str2) {
  const s1 = str1.replace(/\s/g, "").toLowerCase(); //Remove spaces and convert all letters to the same case
  const s2 = str2.replace(/\s/g, "").toLowerCase(); //Remove spaces and convert all letters to the same case
  const sortedStr1 = s1.split("").sort().join(""); //Sort the characters
  const sortedStr2 = s2.split("").sort().join(""); //Sort the characters
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram("listen", "silent"));
