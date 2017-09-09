/*
  Given 2 strings, a and b, return the number of the positions
  where they contain the same length 2 substring. So "xxcaazz"
  and "xxbaaz" yields 3, since the "xx", "aa", and "az"
  substrings appear in the same place in both strings.
*/
console.log(stringMatch("xxcaazz","xxbaaz"));  //3
console.log(stringMatch("abc","abc"));         //2
console.log(stringMatch("abc","axc"));         //0
console.log(stringMatch("hello","he"));        //1
console.log(stringMatch("he","hello"));        //1

function stringMatch(a,b) {
  var len = Math.min(a.length, b.length);
  var count = 0;
  for(var i = 0; i < len-1; ++i) {
    var aS = a.slice(i,i+2);
    var bS = b.slice(i,i+2);
    if(aS === bS)
      count++;
  }
  return count;
}
