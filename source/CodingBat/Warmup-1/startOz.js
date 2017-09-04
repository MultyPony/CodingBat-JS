//startOz.js
/*
  Given a string, return a string made of the first 2
  chars (if present), however include first char only
  if it is 'o' and include the second only if it is 'z',
  so "ozymandias" yields "oz".
*/
console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));
console.log(startOz("oz"));
console.log(startOz("o"));

function startOz(str) {
  var res = "";
  if(str.length >= 1 && str.charAt(0) == 'o') res += "o";
  if(str.length >= 2 && str.charAt(1) == 'z') res += "z";
  return res;
}
