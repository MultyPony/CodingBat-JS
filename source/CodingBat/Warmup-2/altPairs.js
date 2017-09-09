/*
  Given a string, return a string made of the chars
  at indexes 0,1, 4,5, 8,9 ... so "kittens" yields
  "kien".
*/
console.log(altPairs("kitten"));        //"kien"
console.log(altPairs("Chocolate"));     //"Chole"
console.log(altPairs("CodingHorror"));  //"Congrr"
console.log(altPairs("yak"));           //"ya"
console.log(altPairs("ya"));            //"ya"

function altPairs(str) {
  var res = "";
  for(var i = 0; i < str.length; ) {
    res += str[i];
    if(i % 2 != 0) i += 3;
    else i++;
  }
  return res;
}
