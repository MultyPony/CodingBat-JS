//close10.js
/*
  Given 2 int values, return whichever value is nearest
  to the value 10, or return 0 in the event of a tie.
  Note that Math.abs(n) returns the absolute value of a number.
*/
console.log(close10(8,13));
console.log(close10(13,8));
console.log(close10(13,7));
console.log(close10(7,13));
console.log(close10(9,13));

function close10(a, b) {
  var diffA = Math.abs(10 - a);
  var diffB = Math.abs(10 - b);
  if(diffA == diffB) return 0;
  return (diffA < diffB) ? a : b;
}
