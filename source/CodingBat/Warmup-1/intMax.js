//intMax.js

console.log(intMax(1,2,3));
console.log(intMax(1,3,2));
console.log(intMax(3,2,1));
console.log(intMax(9,3,3));
console.log(intMax(8,2,3));

function intMax(a,b,c) {
  var max = a;
  if(b > a) max = b;
  if(c > max) max = c;
  return max;
}
