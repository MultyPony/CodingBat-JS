//monkeyTrouble.js

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
console.log(monkeyTrouble(false, true));

function monkeyTrouble(aSmile, bSmile) {
  if(aSmile === bSmile) return true;
  return false;
}
