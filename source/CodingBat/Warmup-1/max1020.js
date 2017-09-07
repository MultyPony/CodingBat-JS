//max1020.js
/*
  Given 2 positive int values, return the larger value
  that is in the range 10..20 inclusive, or return 0
  if neither is in that range.
*/
console.log(max1020(11,19)); //19
console.log(max1020(19,11)); //19
console.log(max1020(11,9));  //11
console.log(max1020(9,21));  //0
console.log(max1020(10,21)); //10

function max1020(a, b) {
  // var inRangeA = (a >= 10 && a <= 20);
  // var inRangeB = (b >= 10 && b <= 20);
  if(!inRange(a) && !inRange(b)) return 0;
  if(inRange(a) && inRange(b)) return Math.max(a,b);
  return (inRange(a) && !inRange(b)) ? a : b;
  // else if(inRangeA && !inRangeB) return a;
  // return b;
}
function inRange1020(x) {
  return (x >= 10 && x <= 20);
}
