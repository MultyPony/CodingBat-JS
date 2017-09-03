//max1020.js

console.log(max1020(11,19));
console.log(max1020(19,11));
console.log(max1020(11,9));
console.log(max1020(9,21));
console.log(max1020(10,21));

function max1020(a, b) {
  var inRangeA = (a >= 10 && a <= 20);
  var inRangeB = (b >= 10 && b <= 20);
  if(!inRangeA && !inRangeB) return 0;
  if(inRangeA && inRangeB) return Math.max(a,b);
  else if(inRangeA && !inRangeB) return a;
  return b;
}
