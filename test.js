//create a palindrome function that takes a string as an argument and returns true if the string is a palindrome and false if it is not.

function palindrome(str) {
  // Good luck!
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

console.log(palindrome("eye"));
