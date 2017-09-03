//nearHundred.js

console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));
console.log(nearHundred(110));

function nearHundred(n) {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
}
