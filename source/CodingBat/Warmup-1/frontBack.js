//frontBack.js
/*
  Given a string, return a new string where
  the first and last chars have been exchanged.
*/
console.log(frontBack("code"));
console.log(frontBack("a"));
console.log(frontBack("ab"));
console.log(frontBack("abc"));
console.log(frontBack(""));

function frontBack(str) {
  if(str.length < 2) return str;
  return str.charAt(str.length-1) + str.substring(1,str.length-1) + str.charAt(0);
}
