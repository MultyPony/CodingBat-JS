/*
  Given a non-empty string and an int n,
  return a new string where the char at
  index n has been removed. The value of
  n will be a valid index of a char in
  the original string (i.e. n will be in
  the range 0..str.length()-1 inclusive).
*/
console.log(missingChar("kitten",1));
console.log(missingChar("kitten",0));
console.log(missingChar("kitten",4));
console.log(missingChar("Hi",0));

function missingChar(str, n) {
  var array = str.split("");
  array.splice(n,1);
  return array.join("");
}
