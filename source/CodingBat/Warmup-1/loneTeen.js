// loneTeen.js
/*
  We'll say that a number is "teen" if it is in
  the range 13..19 inclusive. Given 2 int values,
  return true if one or the other is teen, but not both.
*/
console.log(loneTeen(13,99));
console.log(loneTeen(21,19));
console.log(loneTeen(13,13));
console.log(loneTeen(14,20));
console.log(loneTeen(20,15));

function loneTeen(a, b) {
  var isTeenA = (a >= 13 && a <= 19);
  var isTeenB = (b >= 13 && b <= 19);
  if(isTeenA && isTeenB) return false;
  return isTeenA || isTeenB;
}
