//close10.js

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
