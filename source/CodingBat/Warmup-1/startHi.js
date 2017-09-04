// startHi.js
/*
  Given a string, return true if the string starts
  with "hi" and false otherwise.
*/
console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));
console.log(startHi("he"));
console.log(startHi("h"));
console.log(startHi(""));

function startHi(str) {
  return (str.length >= 2 &&
    str.substring(0,2) == "hi");
}
