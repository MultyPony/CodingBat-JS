//lastDigit.js
/*
  Given two non-negative int values, return true
  if they have the same last digit, such as with
  27 and 57. Note that the % "mod" operator
  computes remainders, so 17 % 10 is 7.
*/
console.log(lastDigit(7,17));
console.log(lastDigit(6,17));
console.log(lastDigit(3,113));
console.log(lastDigit(114,113));
console.log(lastDigit(10,0));
console.log(lastDigit(11,0));

function lastDigit(a, b) {
  return (a % 10) == (b % 10);
}
