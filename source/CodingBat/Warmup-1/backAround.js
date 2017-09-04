//backAround.js
/*
  Given a string, take the last char and return
  a new string with the last char added at the
  front and back, so "cat" yields "tcatt".
  The original string will be length 1 or more.
*/
console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));
console.log(backAround("abc"));
console.log(backAround("read"));

function backAround(str) {
  var lastChar = str.charAt(str.length-1);
  return lastChar + str.substring(0) + lastChar;
}
