//countXX.js
/*
  Count the number of "xx" in the given string.
  We'll say that overlapping is allowed, so
  "xxx" contains 2 "xx".
*/
console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
console.log(countXX("abc"));
console.log(countXX(""));

function countXX(str) {
  var count = 0;
  for(var frInd = str.indexOf("xx",0); frInd != -1; frInd = str.indexOf("xx",frInd+1))
    count++;
  return count;
}
