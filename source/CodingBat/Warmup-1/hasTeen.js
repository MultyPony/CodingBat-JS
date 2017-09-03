// hasTeen.js

console.log(hasTeen(13,20,10));
console.log(hasTeen(20,19,10));
console.log(hasTeen(20,10,13));
console.log(hasTeen(1,20,12));
console.log(hasTeen(19,20,12));

function hasTeen(a,b,c) {
  return (a >= 13 && a <= 19) ||
    (b >= 13 && b <= 19) ||
    (c >= 13 && c <= 19);
}
