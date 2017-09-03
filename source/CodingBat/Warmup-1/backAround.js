//backAround.js
// var str = "abc";

console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));
console.log(backAround("abc"));
console.log(backAround("read"));

function backAround(str) {
  var lastChar = str.charAt(str.length-1);
  return lastChar + str.substring(0) + lastChar;
}
