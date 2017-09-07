//stringE.js
/*
  Return true if the given string contains between
  1 and 3 'e' chars.
*/
console.log(stringE("Hello"));   //true
console.log(stringE("Heelle"));  //true
console.log(stringE("Heelele")); //false
console.log(stringE("Hll"));     //false
console.log(stringE("e"));       //true
console.log(stringE(""));        //false

function stringE(str) {
  str = str.replace(/[^e]/g,'');
  return str.length >= 1 && str.length <= 3;
}
