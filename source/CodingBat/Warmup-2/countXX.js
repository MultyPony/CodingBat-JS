/*
  Count the number of "xx" in the given string.
  We'll say that overlapping is allowed, so
  "xxx" contains 2 "xx".
*/
console.log(countXX("abcxx"));  //1
console.log(countXX("xxx"));    //2
console.log(countXX("xxxx"));   //3
console.log(countXX("abc"));    //0
console.log(countXX(""));       //0

function countXX(str) {
  var count = 0;
  for(var frInd = str.indexOf("xx",0); frInd != -1; frInd = str.indexOf("xx",frInd+1))
    count++;
  return count;
}
