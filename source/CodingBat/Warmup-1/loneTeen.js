// loneTeen.js

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
