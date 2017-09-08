/*
  Given 2 strings, a and b, return the number of the positions
  where they contain the same length 2 substring. So "xxcaazz"
  and "xxbaaz" yields 3, since the "xx", "aa", and "az"
  substrings appear in the same place in both strings.
*/
console.log(stringMatch("xxcaazz","xxbaaz"));
console.log(stringMatch("abc","abc"));
console.log(stringMatch("abc","axc"));
console.log(stringMatch("hello","he"));
console.log(stringMatch("he","hello"));

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
