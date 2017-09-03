//endUp.js

console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
console.log(endUp("woo hoo"));
console.log(endUp("xyz12"));

function endUp(str) {
  return (str.length >= 3) ?
  (str.substring(0,str.length-3) +
  str.substring(str.length-3).toUpperCase()) :
  str.toUpperCase();
}
