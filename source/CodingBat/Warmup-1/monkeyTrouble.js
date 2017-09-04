//monkeyTrouble.js
/*
  We have two monkeys, a and b, and the parameters aSmile
  and bSmile indicate if each is smiling. We are in
  trouble if they are both smiling or if neither of them 
  is smiling. Return true if we are in trouble.
*/
console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
console.log(monkeyTrouble(false, true));

function monkeyTrouble(aSmile, bSmile) {
  if(aSmile === bSmile) return true;
  return false;
}
