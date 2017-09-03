//missingChar.js

console.log(missingChar("kitten",1));
console.log(missingChar("kitten",0));
console.log(missingChar("kitten",4));
console.log(missingChar("Hi",0));

function missingChar(str, n) {
  return str.substring(0,n) + str.substring(n+1);
}
