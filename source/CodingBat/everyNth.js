//everyNth.js

console.log(everyNth("Miracle",2));
console.log(everyNth("abcdefg",2));
console.log(everyNth("abcdefg",3));
console.log(everyNth("Chocolate",3));
console.log(everyNth("Chocolates",3));

function everyNth(str, n) {
  var res = "";
  for(var i = 0; i < str.length; i += n) res += str.charAt(i);
  return res;
}
