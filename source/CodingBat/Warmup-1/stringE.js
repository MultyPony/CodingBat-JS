//stringE.js
/*
  Return true if the given string contains between
  1 and 3 'e' chars.
*/
console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));
console.log(stringE("Hll"));
console.log(stringE("e"));
console.log(stringE(""));

function stringE(str) {
  var count = 0;
  for(var pos = str.indexOf("e"); pos != -1; pos = str.indexOf("e",pos+1))
    count++;
  return count > 0 && count < 4;
}
