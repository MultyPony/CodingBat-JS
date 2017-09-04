// icyHot.js
/*
  Given two temperatures, return true if one
  is less than 0 and the other is greater than 100.
*/
console.log(icyHot(120,-1));
console.log(icyHot(-1,120));
console.log(icyHot(2,120));
console.log(icyHot(-1,100));
console.log(icyHot(-2,-2));
console.log(icyHot(-101,101));

function icyHot(temp1, temp2) {
  return (temp1 * temp2 < 0 &&
    (temp1 > 100 || temp2 > 100));
}
