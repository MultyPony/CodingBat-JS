//stringTimes.js
/*
  Given a string and a non-negative int n,
  return a larger string that is n copies
  of the original string.
*/
console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));
console.log(stringTimes("Hi", 0));
console.log(stringTimes("Hi", 5));

function stringTimes(str, n) {
  var res = "";
  for(var i = 0;i < n; ++i) res += str;
  return res;
}
