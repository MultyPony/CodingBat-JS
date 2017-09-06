//endUp.js
/*
  Given a string, return a new string where the last 3
  chars are now in upper case. If the string has less
  than 3 chars, uppercase whatever is there. Note that
  str.toUpperCase() returns the uppercase version of a string.
*/
console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
console.log(endUp("woo hoo"));
console.log(endUp("xyz12"));

function endUp(str) {
  return (str.length >= 3) ?
  (str.slice(0,str.length-3) +
  str.slice(str.length-3).toUpperCase()) :
  str.toUpperCase();
}
