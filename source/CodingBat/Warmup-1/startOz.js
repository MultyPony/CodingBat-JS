//startOz.js

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
