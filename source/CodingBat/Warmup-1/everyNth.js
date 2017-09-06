//everyNth.js
/*
  Given a non-empty string and an int N, return the string
  made starting with char 0, and then every Nth char of
  the string. So if N is 3, use char 0, 3, 6, ... and so on.
  N is 1 or more.
*/
console.log(everyNth("Miracle",2));
console.log(everyNth("abcdefg",2));
console.log(everyNth("abcdefg",3));
console.log(everyNth("Chocolate",3));
console.log(everyNth("Chocolates",3));

function everyNth(str, n) {
  var res = "";
  for(var i = 0; i < str.length; i += n) res += str[i];
  return res;
}
